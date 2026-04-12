import express from 'express'
import mongoose from 'mongoose';
import taskModel from './Model/taskModel.js';
import cors from 'cors'
import signUpModel from './Model/signUpModel.js';
import jwt from 'jsonwebtoken'
import ck from 'cookie-parser'
import multer from 'multer';
import imgModel from './Model/imgModel.js'
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(ck())
app.use('/upload', express.static('upload'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const uploadImg = multer({ storage });

app.post("/upload", uploadImg.single('pfp'), async (req, res) => {
    try {
        if (!req.file) {
            console.log("No file received");
            return res.status(400).json({ message: "No file uploaded" });
        }

        console.log("File:", req.file);

        const image = req.file.path;

        const savedImage = await imgModel.create({ image });

        console.log("Saved:", savedImage);

        res.json({
            message: "Upload successful",
            data: savedImage
        });

    } catch (err) {
        console.error("ERROR:", err);
        res.status(500).json({ error: err.message });
    }
});

// APIs for Lists

app.get("/", verifyToken, async (req, res) => {
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

function verifyToken(req, res, next) {
    const token = req.cookies['token'];
    jwt.verify(token, "todo", (err, decoded) => {
        if (err) {
            console.log("error occured");
        }
        else {
            console.log("Passed ", decoded);
            next();
        }
    })
}

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
        const updated = await taskModel.findByIdAndUpdate(id, data);
        console.log(updated);
        res.json(updated);
    }
    catch (err) {
        console.log(err);
        res.status(505).json(err);
    }
})


// APIs for Auth

app.post("/signup", async (req, res) => {
    try {
        const data = req.body;
        const user = await signUpModel.create(data);
        if (user) {
            jwt.sign({ id: user._id }, "todo", { expiresIn: "7d" }, (err, token) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: "Token error"
                    });
                }
                res.cookie("token", token, {
                    httpOnly: true,
                    secure: false, // true in production (https)
                    sameSite: "lax"
                }).json({
                    success: true,
                    message: "User Found",
                    user
                });
            })
        }
        console.log("Added ", data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "User not added",
            err
        });
    }
})

app.post("/login", async (req, res) => {
    try {
        const data = req.body;
        const email = data.email;
        const password = data.password;
        const user = await signUpModel.findOne({ email });
        if (user && user.password === password) {
            console.log(user);
            jwt.sign({ id: user._id }, "todo", { expiresIn: "7d" }, (err, token) => {
                res.cookie("token", token, {
                    httpOnly: true,
                    secure: false,
                    sameSite: "lax"
                }).json({
                    message: "User Found",
                    success: true,
                    user
                })
            })
        }
        else {
            res.json({
                success: false,
                message: "User Not Found"
            })
        }

    }
    catch (err) {
        console.log(err);
    }
})

mongoose.connect("mongodb://localhost:27017/task").then(() => {
    console.log("Db connected");
    app.listen(4200, () => {
        console.log("Sever is running");
    })
})