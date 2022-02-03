const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cartController/cartController');
const {authenticate} = require('../middlewares')

router.post('/carts/:id', authenticate,CartController.createCart);

router.get('/carts/:id', authenticate,CartController.getUserCart);

router.get('/carts/:id/:cart_id', authenticate,CartController.getCart);





module.exports = router;