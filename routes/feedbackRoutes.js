const express=require("express");
const router=express.Router();

const {createUser,getAllUsers}=require("../controllers/userController");
const {createCompany,getAllCompanies}=require("../controllers/companyController");
const {createReview,getAllReviews}=require("../controllers/reviewController");

router.post("/user/create",createUser);
router.get("/user/get",getAllUsers);
router.post("/company/create",createCompany);
router.get("/company/get",getAllCompanies);
router.post("/review/create",createReview);
router.get("/review/get",getAllReviews);

module.exports=router;