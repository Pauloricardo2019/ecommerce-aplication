const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/productController/productController')
const {authenticate} = require('../middlewares')

router.get('/products', ProductController.getProducts);

router.get('/:id/products', ProductController.getUserProducts);

router.get('/products/:product_id', ProductController.getProductById);

router.post('/products/:id', authenticate, ProductController.createProduct);

router.delete('/products/:id/:product_id', authenticate,ProductController.deleteProduct);

router.patch('/products/:id/:product_id', authenticate,ProductController.updateProduct);


module.exports = router;