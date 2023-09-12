const express = require("express")
const router = express.Router()

const {signUpController, loginController} = require("../controllers/auth.controllers")


router.route("/register")
.post(signUpController)

router.route("/login")
.post(loginController)

module.exports = router
