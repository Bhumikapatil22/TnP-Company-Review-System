const express=require("express");
const router=express.Router();

const {createUser}=require("../controllers/userController");
const {createCompany}=require("../controllers/companyController");
const {createReview}=require("../controllers/reviewController");

router.post("/user/create",createUser);
router.post("/company/create",createCompany);
router.post("/review/create",createReview);

module.exports=router;