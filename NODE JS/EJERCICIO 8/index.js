// const intervalo = setInterval(miFuncion, 5000, "SEGUNDO", 0);

// function miFuncion(a, b) {
//    b++;
//   console.log(a,b);
// }





// // repetir con el intervalo de 2 segundos
// let timerId = setInterval(() => alert('tick'), 2000);

// // // después de 5 segundos parar
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);




// la que hice
let a=0;
let nomVar = setInterval(() => { console.log("contador " + a ); a++}, 2000);

setTimeout(() => { clearInterval(nomVar);}, 9000);