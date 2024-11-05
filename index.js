const express=require("express");
const dbConnect=require('./config/database');
const feedbackRoute=require("./routes/feedbackRoutes");

require("dotenv").config();

const app=express();

dbConnect();

// Middleware for parsing JSON requests
app.use(express.json());

// Mount feedback routes
app.use("/api/v1",feedbackRoute)//mounting

app.get("/",(req,res)=>{
    res.send("Company Feedback System");
})

const PORT=process.env.PORT||4000;

app.listen(PORT,()=>{
    console.log(`Server is running at port: ${PORT}`);
})

