import mongoose from "mongoose";

const signUpSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String
})

export default signUpSchema;