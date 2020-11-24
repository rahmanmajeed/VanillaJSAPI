const fs = require('fs')
const productData = require('./data/test.json')

function writeFile (filename, content) {
    // const res = fs.writeFile('./data/test.json', JSON.stringify(content), (err, data) => {
    //     return data
    // })
    console.log(filename, content, productData)
    return content
    // fs.appendFileSync(filename, content)
}

module.exports = {writeFile}