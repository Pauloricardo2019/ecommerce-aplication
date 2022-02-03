const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true,
    },
    productDescription:{
        type: String,
        default: "Just a description",
    },
    productPrice:{
        type: Number,
        require: true,
    },
    productQuantity:{
        type: Number,
        required: true,
    },
    productImage:{
        type: String,
    },
    username:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
});


const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
