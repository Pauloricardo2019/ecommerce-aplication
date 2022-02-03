const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    username:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    address:{
        city:{
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
        cep: {
            type: String,
            required: true,
        }
    },
    payment:{
        card: {
            number:{
                type: String,
            },
            CVC:{
                type: String,
            }
        }
    }

});

const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;