const Category = require("../model/category.model")

const getAllCategories = async (req,res) => {
    try{
        const categories = await Category.find({})
        res.json(categories)
    }
    catch(err){
        res.status(400).json({message:"Could not find Categories"})
    }
   
}

module.exports = getAllCategories