const User = require('../../models/User');

const UserController = {

    async createUser(req ,res){
        const bodyData = req.body

        if(await User.findOne({email: bodyData.email}))
            return res.status(400).json({message: "Email já cadastrado"})

        try{
            const newUser = await User.create(bodyData);
            newUser.password = undefined;
            return res.status(201).json(newUser);

        }catch(err){
            return res.status(400).json(err);
        }
    },

    async getUsers(req , res){
        
        try{
            const users = await User.find();
            return res.status(200).json(users);

        }catch(err){
            return res.status(500).json(err)
        }
    },

    async getUserById(req , res){

        const id = req.params.id;

        try{
            const user = await User.findOne({_id:id})
            return res.status(200).json(user);

        }catch(err){
            return res.status(404).json(err)
        }
    },

    async deleleUsers(req, res){
        const id = req.params.id;

        try{
            await User.findByIdAndDelete({_id:id});

            return res.status(200).json({message: "Usuário deletado com sucesso"})

        }catch(err){
            return res.status(400).json(err)
        }
    }

}



module.exports = UserController;

