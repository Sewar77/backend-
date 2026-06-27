import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            require: true,
        },
        hashed_password: {
            type: String,
            require: true,
            min: 8,
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },
    },
    {
        timestamp: true,
    }
);


const User = mongoose.model("User", userSchema)
export default User