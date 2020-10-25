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

 function createProduct(req, res){
    let body = ''
    return new Promise((resolve, reject) => {
        req.on('data', (chunk) => {
        body += chunk.toString()
      })
      req.on('end', () => {
          resolve(body)
      })
      req.on('error', () => {
          reject({message: "something happend in your code."})
      })
    })
    
}

module.exports = { getAllProducts, getProductById, createProduct}