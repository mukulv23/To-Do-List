import mongoose from "mongoose";

const dbUrl = "mongodb://localhost:27017/task";

const connection = ()=>{
    mongoose.connect("dbUrl").then(()=>{
        console.log("Db connected");
    })
}

export default connection;