const express = require('express');
const ProductController = require('./controllers/products');

const router = express.Router();
const productController = new ProductController();


/*
* An endpoint to search products based on product name, 
* product category, and seller name.
*/ 
router.get('/products', productController.searchProducts);

/*
* An endpoint to get the details of a product.
*/ 
router.get('/products/:productId', productController.getProduct);

/*
* An endpoint to update the name of the product
*/
router.put('/products/:productId', productController.updateProduct);

/*
* An endpoint to create a product
*/
router.post('/create-products', productController.createProduct);

/*
* An endpoint to delete a product
*/
router.delete('/products', productController.deleteProduct);


module.exports = router;