const express = require("express")

const cors = require("cors")

const dotenv = require("dotenv");
dotenv.config();

const employeeroutes = require("../Backend/Routes/employeeroutes")

const app = express();

const connectDB = require("../Backend/config/db")
connectDB();

// middleware
app.use(cors());

app.use(express.json());

app.use("/employees",employeeroutes)

app.listen(process.env.PORT,()=>{
    console.log(`server Runing : http://localhost:5000`)
})