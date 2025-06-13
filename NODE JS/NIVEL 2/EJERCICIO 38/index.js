// Comprimir archivos con zlib

const zlib = require('zlib');
const fs = require('fs');

const archivo = fs.createReadStream('archivo.txt');
const archivoComprimido = fs.createWriteStream('archivo.txt.gz');

archivo.pipe(zlib.createGzip()).pipe(archivoComprimido);
