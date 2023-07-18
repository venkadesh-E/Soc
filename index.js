import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"
import AuthRoute from "./Routes/AuthRoute.js"
import UserRoute from "./Routes/UserRoute.js"
import PostsRoute from "./Routes/PostsRoute.js"
import UploadRoute from "./Routes/UploadRoute.js"
const app = express();


app.use(express.static("public"))
app.use("/images",express.static("images"))


// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

dotenv.config();


const connect = () => {
    mongoose.connect(process.env.MON).then(() => {
        console.log("connected mongo")
    }).catch((err) => {
        throw err
    })
}
  

app.use("/auth", AuthRoute)
app.use("/user", UserRoute) 
app.use("/post", PostsRoute) 
app.use("/upload",UploadRoute)



    app.listen(process.env.PORT, () => {
        connect()
        console.log("connected")
    })