const express=require("express");
const router=express.Router();

const {createAdmin,createAlumni,createStudent,getAllUsers}=require("../controllers/userController");
const {createCompany,getAllCompanies}=require("../controllers/companyController");
const {createReview,getAllReviews}=require("../controllers/reviewController");
const {likeReviews}=require("../controllers/likeController");

//middleware
const {isAdmin,isAlumni}=require("../middleware/Middleware");

router.post("/admin/create",createAdmin);
router.post("/alumni/create",createAlumni);
router.post("/student/create",createStudent);
router.get("/user/get",getAllUsers);
router.post("/company/create",isAdmin,createCompany);
router.get("/company/get",getAllCompanies);
router.post("/review/create",isAlumni,createReview);
router.get("/review/get",getAllReviews);
router.post("/likes/like",likeReviews);

module.exports=router;