const express = require("express")

const router = express.Router()

const {getmoviebyId,getmovies,deletemovie,updatemovie,categoryFind,createmovie} = require("../Controllers/moviecontroller")

router.post("/",createmovie)

router.get("/search",categoryFind)
router.get("/",getmovies)


router.get("/:id",getmoviebyId)

router.put("/:id",updatemovie)

router.delete("/:id",deletemovie)


module.exports = router