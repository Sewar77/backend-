import User from "../model/auth.Model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: "please fill all fewilds!" });
        }
        //check name validate
        if (name.length < 3) {
            return res.status(400).json({
                message: "name should be more than 3 charr",
            });
        }
        //chaeck password
        const passwordRegex =
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,150}$/;
        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                message:
                    "password must containe at least one uppercase and at least one lower case letters, sympols, at least one number, and the min charecter length is 8, and max is 150",
            });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "passwords dont match" });
        }
        //chaeck email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "email should be valid email" });
        }
        //check if the email is already exit!
        const isExist = await User.findOne({ email });
        if (isExist) {
            return res.status(400).json({ message: "email already exist" });
        }
        const hashed_password = await bcrypt.hash(password, 10);
        await User.create({ name, email, hashed_password });
        return res.status(201).json({ message: "created account" });
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "Please inter email and password" });
        }
        const isExist = await User.findOne({ email });
        if (!isExist) {
            return res.status(404).json({ message: "You are not regsitserd!" });
        }
        // compare original password with the entered password
        const isMatch = await bcrypt.compare(password, isExist.hashed_password);
        if (!isMatch) {
            return res.status(400).json({ message: "Password is not correct" });
            // res.error.data.message
        }
        // generate tokens:
        const token = jwt.sign(
            {
                name: isExist.name,
                email: isExist.email,
                role: isExist.role,
                id: isExist._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.status(200).json({
            message: "Login successfully",
            user: {
                name: isExist.name,
                email: isExist.email,
                role: isExist.role,
                id: isExist._id,
            },
            token
        });
        //res.data.message/user/token
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
};
