// Crear un flujo de lectura y escritura con fs.createReadStream.

const fs = require('fs');


const readStream = fs.createReadStream('aarchivo.txt');

const writeStream = fs.createWriteStream('aescribirArchivo.txt');

readStream.pipe(writeStream);            // pipe?

writeStream.on('finish', () => {
  console.log('El archivo ha sido copiado.');
});

writeStream.on('error', (error) => {
  console.error('Error durante la copia:', error);
});