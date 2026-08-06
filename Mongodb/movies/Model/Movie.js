 const mongoose = require("mongoose")

 const movieschema = new mongoose.Schema({

    name : String,
    
    catagory : String,

    rating : Number

 })

 module.exports = mongoose.model("movie",movieschema)