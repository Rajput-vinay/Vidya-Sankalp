const express = require("express")
const router = express.Router();

const { auth, isInstructor } = require("../middleware/auth")
const {
    deleteAccount,
    updateProfile,
    getAllUserDetails,
    upadateDisplayPicture,
    getEnrolledCourses,
    instructorDashboard,
}=require("../controllers/Profile");

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************
// Delete User Account
router.delete("/deleteProfile",auth,deleteAccount);
router.put("/updateProfile", auth,updateProfile);
router.get("getUserDetails",auth,getAllUserDetails);

// Get Enrolled Courses
router.get("/getEnrolledCourses",auth,getEnrolledCourses);
router.get("/updateDisplayPicture",auth,getEnrolledCourses);
router.get("/instructorDashboard",auth,isInstructor,instructorDashboard);

module.exports = router