const User = require("../models/user");
const bcrypt = require("bcryptjs");
const transporter = require("../config/nodemailer");
const Jwt = require("jsonwebtoken");
const user = require("../models/user");

// create register data api

const register = async(req,res)=>{
    try {
        const { name, email, mobile, password } =req.body;

        // hashpassword


        const hashpassword = await bcrypt.hash(password,10);

        // otp generate
         const otp = Math.floor(100000 + Math.random() * 900000);

        //  Save user

        const user = await User.create({
            name,
            email,
            mobile,
            password:hashpassword,
            otp,
            otpExpire:Date.now() + 5 * 60 * 1000,

        });

        // send  email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject:"OTP Verification",
            text: `Your OTP is ${otp}`,
        });
        res.status(200).json({
            success:true,
            message:"OTP sent successfully",
        });

    } catch (error) {
        res.status(500).json({
            message:error.message,
        });
    }
}


//  otp verify

const VerifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }

  if (user.otp != otp) {
    return res.status(400).json({
      message: "Invalid OTP",
    });
  }

  user.isVerified = true;

  user.otp = null;

  await user.save();

  res.status(200).json({
    message: "OTP Verified",
  });
};


// login API

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(400).json({
      message: "Wrong Password",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.status(200).json({
    message: "login successfully",
    success: true,
    token,
  });
};

// forget Password
const forgotPassword = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }

  const otp = Math.floor(100000 + Math.random() * 900000);

  user.otp = otp;

  await user.save();

  await transporter.sendMail({
    from: process.env.EMAIL_USER,

    to: email,

    subject: "Forgot Password OTP",

    text: `OTP : ${otp}`,
  });

  res.status(200).json({
    message: "OTP Sent",
  });
};

const resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }

  if (String(user.otp) !== String(otp)) {
    return res.status(400).json({
      message: "Invalid OTP",
    });
  }
  console.log("Old Password :", user.password);

  const hashPassword = await bcrypt.hash(newPassword, 10);

  console.log("New Hash :", hashPassword);

  user.password = hashPassword;

  user.otp = null;

  await user.save();

  const updatedUser = await User.findOne({ email });

  console.log("Saved Password :", updatedUser.password);

  res.status(200).json({
    success: true,
    message: "Password Reset Success",
  });
};

module.exports = {
  register,
  VerifyOTP,
  login,
  forgotPassword,
  resetPassword,
};