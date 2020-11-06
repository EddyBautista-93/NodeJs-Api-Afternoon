const http = require('http');
// destructuring products
const { getProducts, getProduct } = require('./Controllers/ProductController')


// create server variable 
const server = http.createServer((req, res) => {
    // set specific url 
    if (req.url === '/api/products' && req.method === 'GET') {
        // switch from html response to sending json information from the products.json
        getProducts(req, res);
    }else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET'){
        const id = req.url.split('/')[3]  // api/products/1  -- sing the split method and grabbing the id at the end of the url to pass into the get product method 
        getProduct(req, res, id)
    } else {
        // Incorrect url
        res.writeHead(404, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify({
            message: 'Route Not Found'
        }))
    }

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));