const fs = require('fs');

fs.readFile('dato.json', 'utf8', (err, data) => {
  if (err) return console.error('Error al leer:', err);

  const minimizar = JSON.stringify(JSON.parse(data));
  fs.writeFile('datos.json', minimizar, (err) => {
    if (err) return console.error('error al guardar:', err);
    console.log(' JSON minimizado y guardado');
  });
});
