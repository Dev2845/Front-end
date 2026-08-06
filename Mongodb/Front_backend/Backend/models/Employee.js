const mongoose = require("mongoose")


const employeeschema =  new mongoose.Schema({
    name:String,
    email:String,
    salary:Number
})

module.exports = mongoose.model("employee",employeeschema)