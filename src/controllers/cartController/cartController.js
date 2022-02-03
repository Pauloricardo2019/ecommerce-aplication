const Cart = require('../../models/Cart');

const CartController = {

    async createCart( req , res ){
        const bodyData = req.body;
        const id = req.params.id;

        try{
            const createdCart = await Cart.create({...bodyData, username: id});
            return res.status(200).send(createdCart);

        }catch(err){
            return res.status(400).send({err})
        }
    },

    async getUserCart( req , res ){
        const id = req.params.id;


        try{
            const userCarts = await Cart.find({username: id}).populate('username').populate('products');
            
            return res.status(200).send(userCarts);

        }catch(err){
            return res.status(400).send({err})
        }

    },

    async getCart( req , res ){
        const {cart_id} = req.params;

        try{
            const cart = await Cart.findById(cart_id).populate('products');
            return res.status(200).send(cart)

        }catch(err){
            return res.status(400).send({err})
        }

    },

}

module.exports = CartController;