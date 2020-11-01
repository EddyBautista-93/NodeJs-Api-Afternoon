const Product = require('../Models/ProductModel');

async function getProducts(req, res) {
    try { // use await on promise response 
        const products = await Product.findAll()
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(products))
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProducts
}