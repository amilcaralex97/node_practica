const express = require('express');
const bodyParser = require('body-parser');//que se reflejen las respuestas sean formato json
const mongoose = require('mongoose');
const keys = require('./config/keys')
/* console.log(keys,'keys') */


const app = express();
app.use(bodyParser.json());

require('./models/Personas');//agarra modelo de personas

mongoose.connect(keys.MONGO_URL);
/*  mongodb+srv://amilcaralex97:12345@cluster0-owbxk.mongodb.net/g6-node?retryWrites=true*/

const pr = require('./routes/personasRoutes')(app);
//pr(app);
//console.log(pr)//es la funcion de module.exports



//nodemon guardas y vuelves a correr
app.listen(process.env.PORT||5000);//Si existe ambiente de produccion haz eso si no el puerto 5000
//end point, web services , api es lo mismo
//mongodb+srv://amilcaralex97:<password>@cluster0-owbxk.mongodb.net/test?retryWrites=true