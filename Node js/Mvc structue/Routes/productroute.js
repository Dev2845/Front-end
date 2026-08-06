const express = require("express")
const {getproduct} = require("../Controller/productcontroller")
const route = express.Router()

route.get("/product",getproduct)

module.exports = route


