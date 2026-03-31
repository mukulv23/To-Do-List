import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    task:String,
    description:String
});

export default taskSchema;