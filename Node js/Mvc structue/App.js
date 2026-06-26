const express = require("express")
const userroute = require("./Routes/userroute")

const app = express();


app.get("/",(req,res)=>{
    res.send("home page")
    res.end()
})

app.get("/about",(req,res)=>{
    res.send("about page")
    res.end()
})

app.get("/catagory",(req,res)=>{
    res.send("catagory page")
    res.end()
})

app.use("/user",userroute)

app.listen(5000,()=>{
    console.log(`server Runing : http://localhost:5000`)
})