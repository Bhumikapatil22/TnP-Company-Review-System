const mongoose=require("mongoose");

const companySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    location:String,
    industry:String,
    createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
    },
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Review',
        required:true
    }]
    
})

module.exports=mongoose.model("Company",companySchema);