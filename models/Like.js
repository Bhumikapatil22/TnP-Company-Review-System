const mongoose=require("mongoose");

const likeSchema=mongoose.Schema({
    review:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review",
        required:true
    },
    student:{
        type:mongoose.Scheema.Types.ObjectId,
        ref:"User",
        required:true
    }

})

module.exports=mongoose.model("Like",likeSchema);