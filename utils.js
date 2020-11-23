const fs = require('fs')

function writeFile (filename, content) {
    // const res = fs.writeFile('./data/test.json', JSON.stringify(content), (err, data) => {
    //     return data
    // })
    console.log(filename, content)
    fs.appendFileSync(filename, content)
}

module.exports = {writeFile}