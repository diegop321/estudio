// Subdividir un archivo en partes usando streams.

const fs = require('fs');
const path = require('path');

const archivo = path.join(__dirname, 'archivo.txt');
const tamañoArchivoNueco = 1024 * 1024;
let parte = 1, peso = 0;
let escribir = fs.createWriteStream(`parte${parte}.txt`);

fs.createReadStream(archivo).on('data', pedazo => {
  if (peso + pedazo.length > tamañoArchivoNueco) {
    escribir.end();
    parte++;
    peso = 0;
    escribir = fs.createWriteStream(`parte${parte}.txt`);
  }
  escribir.write(pedazo);
  peso += pedazo.length;
}).on('end', () => escribir.end());




// const fs = require('fs');
// const path = require('path');

// const archivo = path.join(__dirname, 'archivo.txt');
// const stream = fs.createWriteStream(archivo);

// const linea = 'Esta es una línea de prueba para generar un archivo grande.\n';

// let lineas = 100000; 

// for (let i = 0; i < lineas; i++) {
//   stream.write(linea);
// }

// stream.end(() => {
//   console.log('archivo grande generado');
// });


