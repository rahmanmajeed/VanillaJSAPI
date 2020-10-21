const url = require("url");

const products = require('./data/products')

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
      break;
    case "/products":
      res.write(JSON.stringify(products));
      break;

    default:
      break;
  }
  res.end();
};
