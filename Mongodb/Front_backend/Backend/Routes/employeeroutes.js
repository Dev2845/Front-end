const express = require("express")

const route = express.Router()

const{createemployee,getall,deleteEmployee} = require("../controllers/Employeecontrollers")


//  post method

route.post("/",createemployee)

// get employees 


route.get("/",getall)

// delete employee
route.delete("/:id",deleteEmployee)

module.exports = route