import express from 'express';
import dbConnect from '../config/database.js';
import feedbackRoute from '../routes/feedbackRoutes.js';

import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app=express();

dbConnect();

// Middleware for parsing JSON requests
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173', // React/Vite frontend URL
    credentials: true,
  })
);
// Mount feedback routes
app.use("/api/v1",feedbackRoute)//mounting

app.get("/",(req,res)=>{
    res.send("Company Feedback System");
})

const PORT=process.env.PORT||4000;

app.listen(PORT,()=>{
    console.log(`Server is running at port: ${PORT}`);
})

