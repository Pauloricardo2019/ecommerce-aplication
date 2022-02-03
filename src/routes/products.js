const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/productController/productController')


router.get('/products', ProductController.getProducts);

router.get('/products/:id', ProductController.getUserProducts);

router.get('/products/:product_id', ProductController.getProductById);

router.post('/products/:id', ProductController.createProduct);

router.delete('/products/:id/:product_id', ProductController.deleteProduct);

router.patch('/products/:id/:product_id', ProductController.updateProduct);


module.exports = router;