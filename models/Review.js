const mongoose=require("mongoose");

const reviewSchema=mongoose.Schema({
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required:true,
    },
    alumni:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    review:{
        type:String,
        required:true
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Like'
    }]
})

module.exports=mongoose.model("Review",reviewSchema);