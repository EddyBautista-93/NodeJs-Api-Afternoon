const http = require('http');
const { getProducts } = require('./Controllers/ProductController')


// create server variable 
const server = http.createServer((req, res) => {
    if (req.url === '/api/products' && req.method === 'GET') {
        // switch from html response to sending json information from the products.json
        getProducts(req, res);
    } else {
        // Incorrect url
        res.writeHead(404, {
            'Content-Type': 'application/json'C
        })
        res.end(JSON.stringify({
            message: 'Route Not Found'
        }))
    }

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));