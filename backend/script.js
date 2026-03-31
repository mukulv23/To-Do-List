import express, { urlencoded } from 'express'
import mongoose from 'mongoose';
import taskModel from './userModel/taskModel.js';
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/", async (req, res) => {
    const data = await taskModel.find();
    if (data) {
        console.log(data);
    }
    else {
        console.log("Error");
    }
    res.send("<h1>Sent</h1>")
})


app.post("/add-task", async (req, res) => {
    const data = req.body;
    await taskModel.create(data);
    res.send("working");
})

mongoose.connect("mongodb://localhost:27017/task").then(() => {
    console.log("Db connected");
    app.listen(4200, () => {
        console.log("Sever is running");
    })
})