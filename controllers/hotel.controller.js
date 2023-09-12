const Hotel = require("../model/hotel.model")

const getAllHotels = async (req,res) => {
    try{
        let hotels
        const hotelCategory = req.query.category
        if(hotelCategory){
            hotels = await Hotel.find({category:hotelCategory})
        }else{
            hotels = await Hotel.find({})
        }
        hotels?res.json(hotels):res.status(404).json({message:"No Data Found"})
    }
    catch(err){
        console.log(err)
    }
   
}

module.exports = getAllHotels