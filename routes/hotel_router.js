const express = require("express")
const router = express.Router()

const getAllHotels = require("../controllers/hotel.controller")

router.route("/")
.get(getAllHotels)

module.exports = router