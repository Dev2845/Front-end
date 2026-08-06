const express = require("express")
const employeeroute = require("./routes/Eployeeroute")
const app = express()

app.use(express.json())


app.use("/",employeeroute)

app.listen(5000,()=>{
    console.log("server running : http://localhost:5000");
    
})