const fs = require('node:fs');

const content = 'hola este es es escritooooo ';

fs.writeFile('./test.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("file written successfully")
  }
}
);


