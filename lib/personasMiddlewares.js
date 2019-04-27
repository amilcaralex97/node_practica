module.exports.datosLlenos=(req,res,next)=>{
    /* const nombre= req.body.nombre;
    const edad= req.body.edad;
    const apellidos= req.body.apellidos;
    const profesion= req.body.profesion; */
    const {nombre,edad,apellidos}=req.body
    
    if(!nombre)
        return res.send('Falta el nombre');// si falta alguna propiedaad manda falta el nombre
    if(!edad)
        return res.send('Falta la edad');
    if(!apellidos)
        return res.send('te faltan los apellidos'); 

    if(typeof(apellidos)!='object')
        return res.send('Apellidos debe de ser un objeto ');

    if(!apellidos.paterno)
        return res.send('Falta la apellido paterno'); 
    if(!apellidos.materno)
        return res.send('Falta la apellido materno');
    

    next();//ya acabo vete a la siguiente funcion
};

module.exports.tipoDato=(req,res,next)=>{
    const {nombre,edad,apellidos,profesion}=req.body
    let errores=[];
    if(typeof(nombre)!='string')
        errores.push({
            mensaje:'Nombre debe de ser texto'
        });
    if(typeof(edad)!='number')
        errores.push({
            mensaje:'Edad debe de ser número'
        });
    if(typeof(apellidos.paterno)!='string')
        errores.push({
            mensaje:'Apellido paterno debe de ser texto'
        });
    if(typeof(apellidos.materno)!='string')
        errores.push({
            mensaje:'Apellido materno debe de ser texto'
        });
    if(profesion&&typeof(profesion)!='string')
        errores.push({
            mensaje:'profesion debe de ser texto'
        });

    if(errores.length>0){
        return res.send(errores)
    }

    next();
};