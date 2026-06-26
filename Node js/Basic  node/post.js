const express = require ("express")

const route =  express.Router()

route.post("/student",(req,res) => {
    const name = req.body.name
    const course = req.body.course 
    const city = req.body.city

    console.log("name :",name)
    console.log("course :",course)
    console.log("city :",city)

    res.send("student registered successfully")
})

module.exports = route