const http = require("http");
const app = require('./app')

const PORT = process.env.PORT || 5000;
/**
 * create server
 * @return instance 
 */
const server = http.createServer((req, res)=>{
      app.routes(req, res);
     
}).listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});

server.on('error', function(err)  {
  console.error.bind(console,err)
})

module.exports = server