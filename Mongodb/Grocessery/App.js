const express = require("express")

require("dotenv").config()

const connectdb = require("../Grocessery/Config/db") 

const app = express()

app.use(express.json())

connectdb()

app.get("/",(req,res)=>{
    res.send("home page")
    res.end
})


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server Runing : http://localhost:${PORT}`);
    
})