const data = require('./../data/products.json')
const testData = require('./../data/test.json')
const utils = require('./../utils')
const {v4 : uuidv4} = require('uuid')
const fs = require('fs')

module.exports.findAll = () => {
    return new Promise((resolve, reject) => {
        if(data){
        resolve(data)
        }else{
            reject(new Error('No data found'))
        }
    })
}

module.exports.findById = (id) => {
     const result = data.find((c) => c.id === id)
     return result
}

module.exports.create =  (product) => {
    let body = ''
    return new Promise((resolve, reject) => {
        product.on('data', (chunk) => {
        body += chunk.toString()
      })
      product.on('end', async () => {
        //   utils.writeFile('./../data/test.json', body)
        const {name, description, price} = JSON.parse(body)
        const product = {
           id: uuidv4(),
           name: name, description: description, price: price 
        }
        let fileResult =  await utils.writeFile('./data/test.json', JSON.stringify(product))
        console.log(fileResult)
        resolve(product)
      })
      product.on('error', () => {
          reject({message: "something happend in your code."})
      })
    })
}
