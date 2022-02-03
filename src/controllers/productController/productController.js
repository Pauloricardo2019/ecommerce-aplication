const Product = require('../../models/Product')

const ProductController = {

    async createProduct(req , res){
        const bodyData = req.body;
        const id = req.params.id

        try{

            const data = {username: id, ...bodyData}

            const newProduct = await Product.create(data)

            return res.status(200).send(newProduct)

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
        try{

        }catch(err){
            return res.status(400).send({error: err})
        }
    },

    async getProducts( req , res){
        try{

        }catch(err){
            return res.status(400).send({error: err})
        }
    },

    async updateProduct( req , res){
        try{

        }catch(err){
            return res.status(400).send({error: err})
        }
    },

    async deleteProduct( req , res){
        try{

        }catch(err){
            return res.status(400).send({error: err})
        }
    },


}

module.exports = ProductController