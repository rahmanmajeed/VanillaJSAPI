const http = require("http");
const app = require('./app')

const PORT = process.env.PORT || 5000;
/**
 * create server
 * @return instance 
 */
const server = http.createServer(app.routes).listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});

module.exports = server