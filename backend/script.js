import express from 'express'
import mongoose from 'mongoose';
import taskModel from './userModel/taskModel.js';
import cors from 'cors'
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

app.get("/", async (req, res) => {
    const data = await taskModel.find();
    res.send(data)
})

app.post("/add-task", async (req, res) => {
    const data = req.body;
    await taskModel.create(data);
    res.send("working")
})

app.delete("/delete-task/:id",async(req,res)=>{
    const id = req.params.id;
    await taskModel.findByIdAndDelete(id);
    res.send("deleted");
})

mongoose.connect("mongodb://localhost:27017/task").then(() => {
    console.log("Db connected");
    app.listen(4200, () => {
        console.log("Sever is running");
    })
})