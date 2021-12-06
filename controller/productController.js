const db = require('../models')



const Product = db.products;

const addProduct = async (req,res) =>{
   
    const {image,title,price,description,published}=req.body
    try{
        const product = await Product.create(
            {image,title,price,description,published}
        );
        return res.status(200).json(product)
    }
catch(e){
        return res.status(200).json({"mesage":e})
    
}
}



const GetProduct = async (req,res) => {
    try{
        const product = await Product. findAll();
        return res.status(200).json(product)
    }catch(e){
        console.log(e)
        return res.status(500).send(e)
    }
}

module.exports = { addProduct,
    GetProduct
 }