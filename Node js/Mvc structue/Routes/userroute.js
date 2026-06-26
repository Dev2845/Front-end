const express = require("express")
const {getuser} = require("../Controller/usercontroller");

const router = express.Router()


router.get("/user",getuser);

module.exports =  router