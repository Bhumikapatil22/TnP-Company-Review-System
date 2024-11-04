const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT||4000;

app.use(express.json());

const feedbackRoute=require("./routes/feedbackRoutes");
app.use("/api/v1",feedbackRoute)//mounting

app.listen(PORT,()=>{
    console.log(`Server is running at port: ${PORT}`);
})

const dbConnect=require('./config/database');
dbConnect();

app.get("/",(req,res)=>{
    res.send("Company Feedback System");
})