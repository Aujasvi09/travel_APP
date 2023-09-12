const User = require("../model/user.model")
const CryptoJS = require("crypto-js")
const jwt = require('jsonwebtoken');

const signUpController = async (req,res) => {
    try{
        const userObject = {
        username: req.body.username,
        email: req.body.email,
        number: req.body.number,
        password: CryptoJS.AES.encrypt(req.body.password,process.env.PASSWORD_SECRET_KEY).toString()
        }
        const newUser = new User(userObject)
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    }
    catch(err){
        res.status(501).json({message:"Error in creating user"})
    }
}

const loginController = async (req,res) => {
    try{
        const user = await User.findOne({number: req.body.number})
        !user && res.status(401).json({ message: "Incorrect Mobile Number" });

        const decodedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);
        decodedPassword !== req.body.password && res.status(401).json({ message: "Incorrect Password"});

        const {password, ...rest} = user._doc
        const accesstoken = jwt.sign({id:user.username}, process.env.ACCESS_TOKEN)

        res.json({...rest, accesstoken})

    }
    catch(err){
        console.log(err)
    }
}

module.exports = {signUpController, loginController}