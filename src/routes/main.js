const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController/userController')
const LoginController = require('../controllers/loginController/loginController')
const {authenticate} = require('../middlewares')


router.get('/', async (req , res) => {
    res.send('Deu certo')
});

router.post('/users', UserController.createUser);

router.get('/users', UserController.getUsers);

router.get('/users/:id', UserController.getUserById);

router.delete('/users/:id', UserController.deleleUsers);

router.post('/login', LoginController.createSession);


module.exports = router;