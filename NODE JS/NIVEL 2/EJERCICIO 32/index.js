// Leer un archivo línea por línea (con streams).

const fs = require('fs');
const readline = require('readline');

const filePath = 'archivo.txt';

const fileStream = fs.createReadStream(filePath);

const leerLinea = readline.createInterface({
    input: fileStream,                        //buscar que significa y para que sirve no lo tengo mu claro
    crlfDelay: 1000,                         //buscar que significa y para que sirve no lo tengo mu claro
});

leerLinea.on('line', (line) => {
    console.log('Línea: ' + line);
});

leerLinea.on('close', () => {                       //on? close?
    console.log('Archivo leído completamente.');
});

