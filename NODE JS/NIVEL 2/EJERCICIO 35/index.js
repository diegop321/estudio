// Emitir eventos cuando un archivo ha sido leído

const fs = require('fs');
const EventEmitter = require('events');

const evento = new EventEmitter();

evento.on('archivoLeido', (contenido) => {
  console.log('Contenido del archivo recibido por el evento:');
  console.log(contenido);
});

fs.readFile('archivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  evento.emit('archivoLeido', data);
});
