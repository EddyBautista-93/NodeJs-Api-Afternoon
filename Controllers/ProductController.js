const Product = require('../Models/ProductModel');
// @desc Gets All Products
// @route GET /api/products
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

// @desc Gets Single Products
// @route GET /api/product/:id
async function getProduct(req, res, id) {
    try { // use await on promise response 
        const product = await Product.findById(id)
        // Checks to see if product exist
        if(!product){
            res.writeHead(404, { 'Content-Type': 'application/json'})
            res.end(JSON.stringify({ message: 'Product Not Found'}))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json'})
            res.end(JSON.stringify(product))
            
        }
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProducts,
    getProduct
}