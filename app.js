const http = require('http')

const PORT = process.env.PORT || 5000
/**
 * create server
 * @return instance 
 */
const server = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', "application/json")
    res.write('Hello Vanilla')
    res.end()
})

server.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}...`)
})