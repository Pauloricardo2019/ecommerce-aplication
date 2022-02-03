const bcrypt = require('bcryptjs/dist/bcrypt');
const User = require('../../models/User')

const LoginController = {

    async createSession(req ,res){

        const { email , password} = req.body

        const user = await User.findOne({email}).select('+password');

        if(!user)
            return res.status(404).send({error: "User not found"});
        
        if(!await bcrypt.compare(password, user.password))
            return res.status(404).send({error: "Invalid password"})
        
        user.password = undefined;

        res.send({user});

    }


}

module.exports = LoginController