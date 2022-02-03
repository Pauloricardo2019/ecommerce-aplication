const { urlencoded } = require('express');
const express = require('express');
const app = express();
const cors = require('cors')

require('dotenv').config();

//Configurações
app.use(express.json());
app.use(express.urlencoded({extended: true }));

//Rotas
app.use(('/auth'), require('./routes/main'));
app.use(('/auth/authenticate'), require('./routes/products'))
app.use(('/auth/authenticate'), require('./routes/cart'))



app.listen(3000, ()=> console.log("Server running"))








