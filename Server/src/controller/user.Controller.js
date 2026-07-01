import User from "../model/auth.Model.js";
import bcrypt from "bcrypt";
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-hashed_password");
        if (users.length === 0) {
            return res.status(200).json({ message: "no users yet", users: [] });
        }
        return res.status(200).json({ message: "users found", users });
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
};
// task: update userifno (name, email)
// task: delete user
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        if (!id) {
            return res.status(400).json({ message: "user not selected" });
        }
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(400).json({ message: "error in deleting user" });
        }
        return res.status(200).json({ message: " deleted user" });
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
};

export const updateUserInfo = async (req, res) => {
    try {
        const id = req.user.id;
        const { name, email } = req.body;
        if (!id) {
            return res.status(400).json({ message: "user not selected" });
        }
        if (!name || !email) {
            return res.status(400).json({ message: "inout the new values" });
        }
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name, email },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(400).json({ message: "user not updated" });
        }
        return res.status(200).json({ message: "user updated", user: updatedUser });
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
};

export const updateUserRole = async (req, res) => {
    try {
        const id = req.params.id;
        const { role } = req.body;
        if (!id) {
            return res.status(400).json({ message: "user not selected" });
        }
        if (!role) {
            return res.status(400).json({ message: "inout the new role" });
        }
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { role },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(400).json({ message: "user role not updated" });
        }
        return res
            .status(200)
            .json({ message: "user role updated", user: updatedUser });
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
};

export const updatePassword = async (req, res) => {
    try {
        const id = req.user.id;
        // no one can change password expect the user who logged in and has token
        console.log(req.user);
        const { newPassword, confirmNewPassword } = req.body;
        if (!id) {
            return res.status(404).json({ message: "user not found" });
        }
        if (!newPassword || !confirmNewPassword) {
            return res
                .status(400)
                .json({
                    message: "please enter the new password and the confirmatrion",
                });
        }
        const passwordRegex =
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,150}$/;
        if (!passwordRegex.test(newPassword)) {
            return res.status(400).json({
                message:
                    "password must containe at least one uppercase and at least one lower case letters, sympols, at least one number, and the min charecter length is 8, and max is 150",
            });
        }
        if (newPassword !== confirmNewPassword) {
            return res.status(400).json({ message: "passwords dont match!" });
        }
        const existUser = await User.findOne({ _id: id });
        if (!existUser) {
            return res.status(404).json({ message: "user not found!" });
        }
        const isMatch = await bcrypt.compare(newPassword, existUser.hashed_password)
        if (isMatch) {
            return res.status(400).json({ message: "new password cant be the old password!" });
        }
        const hashed_password = await bcrypt.hash(newPassword, 10);
        const newUser = await User.findByIdAndUpdate(
            id,
            { hashed_password },
            { new: true }
        );
        return res
            .status(200)
            .json({ message: "user password updated" });
    } catch (error) {
        console.log(error);

        return res.status(500).json({ message: "internal server error" });
    }
};
