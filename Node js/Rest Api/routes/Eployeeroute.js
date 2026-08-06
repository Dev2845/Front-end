const express = require("express")
const route = express.Router()

const { getemlpoyee, addemployee,
    updatesemployee, deleteemployee } = require("../Controoller/Employee")

route.get("/employee", getemlpoyee)

route.post("/employee", addemployee)

route.delete("/employee/:id", deleteemployee)

route.put("/employee/:id", updatesemployee)

module.exports = route