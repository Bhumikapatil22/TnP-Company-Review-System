const mongoose=require("mongoose");

const companySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    location:String,
    industry:String,
    email:{
        type:String,
        required:true,
    },
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Review',
       
    }]
    
})

module.exports=mongoose.model("Company",companySchema);