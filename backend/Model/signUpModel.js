import mongoose from "mongoose";
import signUpSchema from "../Schema/signUpSchema.js";

const signUpModel = mongoose.model("users",signUpSchema)

export default signUpModel;