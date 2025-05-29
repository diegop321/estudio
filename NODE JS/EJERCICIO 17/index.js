const { argv } = require('node:process');

// print process.argv
argv.forEach((vale, index) => {
  console.log(`${index}: ${vale}`);
});