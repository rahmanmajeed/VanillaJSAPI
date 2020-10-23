const url = require("url");

const products = require('./controllers/productController')

const metData = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

module.exports.routes = (req, res) => {
  let route = url.parse(req.url).pathname;
                                                             
  res.writeHead(200, metData);

  switch (route) {
    case "/":
      res.write("roots...");
      res.end();
      break;
    case "/products":
       products.getAllProducts().then(result => {
        res.end(JSON.stringify(result))       
       });
      
      break;

    default:
      break;
  }
};
