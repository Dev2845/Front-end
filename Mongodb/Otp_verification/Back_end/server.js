const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv");
const { connect } = require("mongoose");
dotenv.config();

const app = express();

const connectDB = require("../Back_end/config/db");
connectDB();

app.use(cors());

app.use(express.json());
app.use("/api/auth",require("../Back_end/routes/authRouter"));

app.listen(process.env.PORT,()=>{
    console.log(`server running on http://localhost:5000`)
    
})
