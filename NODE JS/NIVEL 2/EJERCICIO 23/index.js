// Leer múltiples archivos en paralelo.


const fs = require('fs/promises');

const archivos = ['./archivo1.txt', './archivo2.txt', './archivo3.txt'];

async function leerArchivos() {
  for (let nombre of archivos) {
    const todo = await fs.readFile(nombre, 'utf-8');
    console.log(todo);
  }
}

leerArchivos();

