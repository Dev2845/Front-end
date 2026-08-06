const express = require("express")
const router = express.Router();

const {login,register,resetPassword,forgotPassword,VerifyOTP} = require("../controllers/authController");

router.post(
   "/register",
   register
);

router.post(
   "/verify-otp",
   VerifyOTP
);

router.post(
   "/login",
   login
);

router.post(
   "/forgot-password",
   forgotPassword
);

router.post(
   "/reset-password",
   resetPassword
);


module.exports = router;