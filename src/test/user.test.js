const axios = require('axios');
const crypto = require('crypto');
const userController = require('../controllers/userController/userController')

const generate = function (){
    return crypto.randomBytes(20).toString('hex');
};

const request = (url,method,data) => {
    return axios({url, method, data, validateStatus:false});
};

test('Should get a post', async function() {
    //-Dado que:
    const user1 = await userController.createUser({username: generate(), email: generate(), password: generate()});
    const user2 = await userController.createUser({username: generate(), email: generate(), password: generate()});
    const user3 = await userController.createUser({username: generate(), email: generate(), password: generate()});
    //Quando acontecer alguma coisa:
    const response = await request('http://localhost:3000/users', 'get');
    expect(response.status).toBe(200);
    const users = await response.data;
    //Entao:
    expect(users).toHaveLength(3);
    await userController.deleteUsers(user1.id);
    await userController.deleteUsers(user2.id);
    await userController.deleteUsers(user3.id);

});
