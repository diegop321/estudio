const fs = require('node:fs');

// const content = 'holaaa este es es escrito ';

fs.readFile('./test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
