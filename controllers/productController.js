const model = require('./../models/productModel')


async function getAllProducts (req, res)  {
       try {
           const products = await model.findAll()
           return products
       } catch (error) {
           console.log(error)
       }
}

async function getProductById(id){
     try {
         const result = await model.findById(id)
         return result
     } catch (error) {
         return error
     }
}

async function createProduct(req, res){
    console.log(req)
}

module.exports = { getAllProducts, getProductById, createProduct}