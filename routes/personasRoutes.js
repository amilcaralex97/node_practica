const mongoose = require('mongoose');
const personasMiddlewares= require ('../lib/personasMiddlewares')

const Persona = mongoose.model('personas');//trae el modelo de personas y lo asigna a una constante  debe de ser igual al modelo de Personas.js
//middleware se corre antes de hacer la peticion
module.exports=(app)=>{//trae app como parametro y la exporta como funcion
    app.get('/api/personas' ,
    async (req,res) => {//request y response//pregunta de entrevista donde va el async va antes de la funcion
        try{
            const response = await Persona.find();
            res.send(response);
        }
        catch{
            res.send(error.message)
        }
    });

    app.post(
        '/api/personas',
        personasMiddlewares.datosLlenos,
        personasMiddlewares.tipoDato,
        async (req,res)=>{
            //console.log(req.body)//postman afuerzas pide doble comillas
            try{
                const nuevaPersona = new Persona(req.body);//mongoose crea una nueva persona con estos datos
                const respuesta= await nuevaPersona.save();
                res.send(respuesta);
            }
            catch{
                res.send(error.message);
            }
            res.send('si pasa, aqui guarda')
        }
    );

    app.get('/api/personas/:id' ,async (req,res) => {//request y response//pregunta de entrevista donde va el async va antes de la funcion
        try{
            const response = await Persona.find({
                _id:req.params.id
            });
            res.send(response);
        }
        catch{
            res.send(error.message)
        }
    });

    app.get('/api/personas/nombre/:nombre' ,async (req,res) => {//request y response//pregunta de entrevista donde va el async va antes de la funcion
        try{
            const response = await Persona.find({
                nombre:req.params.nombre
            });
            res.send(response);
        }
        catch{
            res.send(error.message)
        }
    });

    app.put('/api/personas/:id',
    personasMiddlewares.datosLlenos,
    personasMiddlewares.tipoDato,
    async (req,res)=>{//post agregar o editar put solo editar
        //console.log(req.body)//postman afuerzas pide doble comillas
        try{
            const respuesta = await Persona.findOneAndUpdate(
                {_id: req.params.id},//id igual al de la ruta buscada _id por que es de la base de datos busqueda
                req.body,//trae todo el objeto 
                {new: true}//objeto ya actualizado
                ).exec();
            res.send(respuesta);
        }
        catch{
            res.send(error.message);
        }
    });

    app.delete('/api/personas/:id',async (req,res)=>{//post agregar o editar put solo editar
        //console.log(req.body)//postman afuerzas pide doble comillas
        try{
            const respuesta = await Persona.deleteOne({
                _id:req.params.id
            })
            res.send(respuesta);
        }
        catch{
            res.send(error.message);
        }
    });
};

//cuidar sintaxis , ip y password solo numeros
//mongoose conecta a bases de datos
