// Crear un logger que escriba en archivo usando stream

const fs = require('fs');            
const path = require('path');         

const ruta = path.join(__dirname, 'log.txt');  

const stream = fs.createWriteStream(ruta, { flags: 'a' });

function crear (mensaje) {   
  const linea = "buuuuuuuuuu ";
  stream.write(linea);                                     
  console.log('Registrado en log.txt:', mensaje);              
}

crear('se ejecuta todo correcto');

