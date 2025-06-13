// Escribir archivos binarios desde buffer.

const fs = require('fs');

const data = Buffer.from('texto a escribir en el archivo.', 'utf-8');


fs.writeFile('archivo.bin', data, (err) => {
    if (err) {
        console.error('Error al escribir el archivo:', err);
    } else {
        console.log('Archivo binario escrito correctamente.');
    }
});