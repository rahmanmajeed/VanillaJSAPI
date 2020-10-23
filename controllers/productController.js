const model = require('./../models/productModel')


async function getAllProducts (req, res)  {
       try {
           const products = await model.findAll()
           return products
       } catch (error) {
           console.log(error)
       }
}

module.exports = { getAllProducts}