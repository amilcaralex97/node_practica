const mongoose = require('mongoose');
const {Schema} = mongoose;
//preparando la conexion diciendole que valores puede tener 
const personaSchema = new Schema({
    nombre: String,
    edad : Number,
    apellidos:{
        paterno: String,
        materno: String
    },
    profesion: {
        type: String,
        default: 'Desarrolladores'
    }
});

mongoose.model('personas',personaSchema);