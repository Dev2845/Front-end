const express = require("express")

const app = express();

require("./config/db")

app.use(express.json())

const movieroutes = require("./Routes/movieroutes")

app.use("/movies",movieroutes)

app.listen(5000,()=>{
    console.log(`server Runing : http://localhost:5000`)
})

