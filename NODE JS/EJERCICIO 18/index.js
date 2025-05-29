const { exec } = require('child_process');
const sistemaOpeativo = require('os');

const sistemaOp = sistemaOpeativo.platform()
const url = "https://www.youtube.com/";
let cmdCommand;



if (sistemaOp === "win32") {
  cmdCommand = `start chrome  ${url}`;
} else {
  cmdCommand = `open -na 'Google Chrome' ${url}`;
}

exec(cmdCommand);