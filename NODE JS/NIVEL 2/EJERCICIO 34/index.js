// Usar eventos (EventEmitter) personalizados.

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('saludar', (nombre) => {
  console.log(`¡Hola, ${nombre}!`);
});

myEmitter.emit('saludar', 'Juan');



