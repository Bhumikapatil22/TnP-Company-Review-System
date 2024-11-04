const User=require("../models/User");

exports.createUser=async(req,res)=>{
    try{
        const {name,email,password,role}=req.body;

        const user=new User({
            name,email,password,role
        })

        const savedUser=await user.save();

        res.status(201).json({message:"User created successfully"});
    }
    catch(error)
    {
        res.status(500).json({ message: 'Server error', error });
    }
}