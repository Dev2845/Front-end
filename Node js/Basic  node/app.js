const express = require("express")

const student = require("./post")

const app = express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log("middleware called");
    next();
    
})

app.get("/",(req,res)=>{
    console.log("url :",req.url,"method :",req.method)
    console.log("home page")
    res.send("Home page")
})

app.use("/",student)

app.listen(5000,()=>{
    console.log(`server runing : http://localhost:5000`)
})
