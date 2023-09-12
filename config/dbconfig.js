const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL, {
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
    }
    catch(err){
        console.log(err)
    }
    
}

module.exports = connectDb
