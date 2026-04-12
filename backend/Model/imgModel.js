import mongoose from "mongoose";
import imgSchema from '../Schema/imgSchema.js'

const imgModel = mongoose.model("pfpimgs",imgSchema);

export default imgModel; 