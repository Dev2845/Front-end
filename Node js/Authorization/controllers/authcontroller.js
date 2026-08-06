const user = require("../models/user")

const jwt = require("jsonwebtoken")

const bcrypt = require("bcryptjs");
const user = require("../models/user");
const user = require("../models/user");
const user = require("../models/user");

const register = async(req,res,)=>{ 
    try {
        const {email,name,password} = req.body;

        const hashpassword = await bcrypt.hash(password,11)

        const User = await user.create({
            name,
            email,
            password : hashpassword
        })

        res.status(201).json({
            message : "user register successfully",User
        })
    } catch (error) {
        res.status(500).json({
            message : error.message
        });
    }
}


const login = async (req,res)=>{
    try {
        const {email,password} = req.body 

        // email check
        const user = await user.findOne({email})

        if(!user){
             return res.status(404).json({
                message: "User Not Found"
            });
        }

        // password
        const match = await bcrypt.compare(password,user.password)

        if(!match){
            return res.status(404).json({
                message: "password does not match"
            });
        }

        // token syntax
        const token = jwt.sign(
            {id : user._id},
             "secretkey",
            {
                expiresIn : "1d"
            }
        )

        res.status(200).json({
            message:"login success",
            token
        })
        
    } catch (error) {
         res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    register,login
}