import mongoose from "mongoose";
import taskSchema from "../Schema/taskSchema.js";

const taskModel = mongoose.model("tasks", taskSchema);
export default taskModel;