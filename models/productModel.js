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

module.exports.create = (product) => {
    let body = ''
    return new Promise((resolve, reject) => {
        product.on('data', (chunk) => {
        body += chunk.toString()
      })
      product.on('end', () => {
        //   utils.writeFile('./../data/test.json', body)
        let fileResult = utils.writeFile('./data/test.json', body)
        resolve(fileResult)
      })
      product.on('error', () => {
          reject({message: "something happend in your code."})
      })
    })
}
