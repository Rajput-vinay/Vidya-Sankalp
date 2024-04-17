const express = require("express");
const router = express.Router();

// import the required controller and middlewars function
const {
    login,
    signup,
    sendotp,
    changePassword,
} = require("../controllers/Auth")

const {
    resetPasswordToken,
    resetPassword,
} = require("../controllers/ResetPassword");

const {auth} = require("../middleware/auth");
const { sign } = require("jsonwebtoken");

// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login

router.post("/login",login);
// Route for user signup
router.post("/signup",signup);
//  Route for sending OTP to the user's email
router.post("/sendotp",sendotp);
// Route for Changing the password
router.post("/changepassword" , auth,changePassword)

// ********************************************************************************************************
//                                      Reset Password
// ********************************************************************************************************

// Route for generating a reset password token

router.post("/reset-password-toke",resetPasswordToken);

// Route for resetting user's password after verification
router.post("/reset-password",resetPassword);

// export the router for use in the main application
module.exports = router