const Company=require("../models/Company");

exports.createCompany=async(req,res)=>{
    try{
       const {name,location,industry,createdBy}=req.body;

       const company=new Company({
        name,location,industry,createdBy
       })

       const savedCompany= await company.save();

       res.status(201).json({message:"company created successfully"});
    }
    catch(error)
    {
        res.status(500).json({message:"Error while creating company"});
   
    }
}

exports.getAllCompanies=async (req,res)=>{
    try{
       const companies= await Company.find().populate("reviews").exec();
       res.json({
        companies
       })
    }
    catch(error)
    {
        return res.status(400).json({
            error:"error while fetching post",
        })
    }
}