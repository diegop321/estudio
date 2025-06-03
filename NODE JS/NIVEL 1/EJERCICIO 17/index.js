const { argv } = require('node:process');


argv.forEach((vale, index) => {
  console.log(`${index}: ${vale}`);
});