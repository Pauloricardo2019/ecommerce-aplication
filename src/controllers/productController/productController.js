const Product = require('../../models/Product')

const ProductController = {

    async createProduct(req , res){
        const bodyData = req.body;
        const id = req.params.id

        try{

            const data = {username: id, ...bodyData}

            const newProduct = await Product.create(data);

            return res.status(200).send(newProduct);

        }catch(err){
            return res.status(400).send({error: err})
        }
    },

    async getUserProducts(req , res){

        const id = req.params.id

        try{

            const productsOfAnUser = await Product.find({ username: id})
            return res.status(200).send(productsOfAnUser)

        }catch(err){
            return res.status(400).send({error: err})
        }
    },

    async getProductById( req , res){

        const {product_id} = req.params

        try{
            const product = await Product.findById(product_id);
            return res.status(200).send(product);

        }catch(err){
            return res.status(400).send({error: err})
        }
    },

    async getProducts( req , res){

        try{
            const products = await Product.find();
            return res.status(200).send(products);
        }catch(err){
            return res.status(400).send({error: err})
        }
    },

    async updateProduct( req , res){

        const bodyData = req.body;
        const {product_id} = req.params

        try{
            const updateProduct = await Product.findByIdAndUpdate(product_id, bodyData, { new: true});

            return res.status(200).send(updateProduct);

        }catch(err){
            return res.status(400).send({error: err})
        }
    },

    async deleteProduct( req , res){

        const {product_id} = req.params
        try{

            const deleteProduct = await Product.findByIdAndDelete(product_id);
            return res.status(200).send(deleteProduct);

        }catch(err){
            return res.status(400).send({error: err})
        }
    },


}

module.exports = ProductController