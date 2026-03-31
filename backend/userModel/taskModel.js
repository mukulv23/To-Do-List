import mongoose from "mongoose";
import taskSchema from "../userSchema/taskSchema.js";

const taskModel = mongoose.model("tasks", taskSchema);
export default taskModel;