const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController/userController')

router.get('/', async (req , res) => {
    res.send('Deu certo')
});

router.post('/users', UserController.createUser);

router.get('/users', UserController.getUsers);

router.get('/users/:id', UserController.getUserById);

router.post('/login', async (req , res) => {

});






module.exports = router;