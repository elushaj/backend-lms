import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./roots/auth.js"
import booksRoute from "./roots/books.js"
import usersRoute from "./roots/users.js"
import membersRoute from "./roots/members.js"
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected',()=>{console.log(" mongoDB Disconnected ")})

//middleware methods
app.use(cookieParser())
app.use(express.json())   


app.use("/api/auth",authRoute)
app.use("/api/books",booksRoute)
app.use("/api/users",usersRoute)
app.use("/api/members",membersRoute)

app.use((err,req,res,next)=>{
  const errorStatus = err.status|| 500
  const errorMessage = err.message||'Something went wrong'
return res.status(errorStatus).json({
  success:false,
  message:errorMessage,
  status:errorStatus,
  stack:err.stack
})
})
app.listen(8800, () => {
    connect()
  console.log("Connecting to server...");
});
