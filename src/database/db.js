const mongoose = require('mongoose');

const {DB_NAME, DB_USER, DB_PASSWORD} = process.env

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster2.mg5gx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("connect to database")
}).catch((e) => {
    console.log("Erro ao se conectar ao banco de dados: "+e)
});


module.exports = mongoose;