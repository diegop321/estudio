// Leer archivos grandes con manejo de memoria eficiente.

const fs = require('fs');
const path = require('path');

const rutaArchivo = path.join(__dirname, 'archivo.txt');


const lecer = fs.createReadStream(rutaArchivo, { encoding: 'utf8' });

lecer.on('data', (chunk) => {
  console.log(' Chunk recibido:');
  console.log(chunk); 
});

lecer.on('end', () => {
  console.log(' Lectura completa');
});

lecer.on('error', (err) => {
  console.error('Error al leer el archivo:', err.message);
});
