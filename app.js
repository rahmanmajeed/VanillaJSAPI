const url = require("url");

const products = require('./controllers/productController')

const metData = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

module.exports.routes = (req, res) => {
  let route = url.parse(req.url).pathname;
  let method = req.method
                                                             
  res.writeHead(200, metData);

  switch (route) {
    case "/":
      if(method === "GET"){
        res.write("roots...");
        res.end();
      }
      
      break;
    case "/products":
       if(method === "GET"){
        products.getAllProducts().then(result => {
          res.end(JSON.stringify(result))       
         });
       }else if(method === "POST"){
         products.createProduct(req, res).then(result => {
           res.end(result)
         }).catch(err => {
           res.end(err)
         })
        
       }
       else{
         res.end('not found...')
       }
       
      break;
    case (/\/products\/([0-9]+)/).test(route) ? route : false:
      const id = req.url.split('/')[2]
      products.getProductById(id).then(result => {
        res.end(JSON.stringify(result))       
       });
      break;

    default:
      res.end(req.url)
      break;
  }
};
