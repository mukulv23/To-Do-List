import express from 'express'
import mongoose from 'mongoose';
import taskModel from './userModel/taskModel.js';
import cors from 'cors'
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.get("/", async (req, res) => {
    try {
        const data = await taskModel.find();
        console.log(data)
        res.json(data)
    }
    catch (err) {
        console.log(err);
        res.status(505).json(err);
    }
})

app.get("/get-task/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await taskModel.findById(id);
        console.log(data);
        res.json(data);
    }
    catch (err) {
        console.log(err);
        res.status(505).json(err);
    }
})

app.post("/add-task", async (req, res) => {
    try {
        const data = req.body;
        const newTask = await taskModel.create(data);
        console.log(newTask)
        res.json(newTask)
    }
    catch (err) {
        console.log(err);
        res.status(505).json(err);
    }
})

app.delete("/delete-task/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await taskModel.findByIdAndDelete(id);
        console.log(deleted)
        res.json(deleted);
    }
    catch (err) {
        console.log(err);
        res.status(505).json(err);
    }
})

app.put("/update-task/:id", async (req, res) => {
    try {
        const data = req.body;
        const id = req.params.id;
        const updated = await taskModel.findByIdAndUpdate(id,data);
        console.log(updated);
        res.json(updated);
    }
    catch (err) {
        console.log(err);
        res.status(505).json(err);
    }
})

mongoose.connect("mongodb://localhost:27017/task").then(() => {
    console.log("Db connected");
    app.listen(4200, () => {
        console.log("Sever is running");
    })
})