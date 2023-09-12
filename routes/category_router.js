const express = require("express")
const router = express.Router()

const getAllCategories = require("../controllers/allCategories.controller")


router.route("/")
.get(getAllCategories)

module.exports = router