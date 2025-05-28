const intervalo = setInterval(myCallback, 1, "Parameter 1", "Parameter 2","parametros 3");

function myCallback(a, b,c) {
  console.log(a,b,c);
}