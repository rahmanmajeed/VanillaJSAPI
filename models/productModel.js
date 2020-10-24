const data = require('./../data/products.json')

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

module.exports.createProduct = (product) => {
        
}