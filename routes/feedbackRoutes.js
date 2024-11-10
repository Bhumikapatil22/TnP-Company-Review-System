import express from 'express';
const router=express.Router();

import * as userController from "../controllers/userController.js";
const {createAdmin,createAlumni,createStudent,getAllUsers}=userController;

import * as companyController from "../controllers/companyController.js";
const {createCompany,getAllCompanies}=companyController;

import * as reviewController from "../controllers/reviewController.js";
const {createReview,getAllReviews}=reviewController;

import * as likeController from "../controllers/likeController.js";
const {likeReviews}=likeController;

//middleware
import * as middleWares from "../middleware/Middleware.js";
const {isAdmin,isAlumni}=middleWares;

router.get("/user/get",getAllUsers);
router.get("/review/get",getAllReviews);
router.get("/company/get",getAllCompanies);

router.post("/admin/create",createAdmin);
router.post("/alumni/create",createAlumni);
router.post("/student/create",createStudent);
router.post("/company/create",isAdmin,createCompany);
router.post("/review/create",isAlumni,createReview);
router.post("/likes/like",likeReviews);

export default router;