const express = require("express")
const router = express.Router()

const getSingleHotel = require("../controllers/singleHotel.controller")

router.route("/:id")
.get(getSingleHotel)

module.exports = router