// Validar datos de un archivo antes de procesarlos.
const fs = require('fs');
const Joi = require('joi');

const esquema = Joi.object({
    nombre: Joi.string().min(3).max(30).required(),
});

const datos = {
    nombre : 'leer.json',
}

const { error, value} = esquema.validate(datos);

if (error) {
    console.error("error todo salio mal", error);
    // console.error(" segunda formaq de mostrar error", error.details);
 } else{
        console.log( " todo salio bien", value)
        fs.readFile('leer.json', function(error, data){
    if (error){
        console.error("error");
}else{
    const leer = JSON.parse(data);
    console.log("seeeeee",leer)
}

}); 
    }



