const middlewares = {

    authenticate(req, res, next){
        
        const {authentication} = req.headers
        const id = req.params.id

        if(!authentication)
            res.status(400).send('No token')

        if(authentication !== id)
            return res.status(400).send('Not allowed')
        
        next()


    }

}

module.exports = middlewares;