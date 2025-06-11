// Crear un temporizador reutilizable con promesas.
// let a = 10;
// let nomVar = setInterval(() => {
//     a--;
//   console.log("contador " + a);
  
//   if (a == (0)) {
//      clearInterval(nomVar)
//   }
// }, 1000);




// new Promise(function(resolver, reject) {
// n=10;
// console.log("esto tiene n: ", n)
// for(n;n<=5;n--){
//     console.log("en cada iteracion: ", n)
// }
// console.log("con esto termina n: ", n)
//    setTimeout(() => resolver( n), 1000); 

// }).then (function(res){
//     console.log(res);
//     return res * 2;
// }).then(function(re){
//     console.log(re);
// return re * 2
// }).then(function(r){
//     console.log(r);
// })







new Promise(function(resolver, reject) {
let a = 10;
let nomVar = setInterval(() => {
    a--;
  console.log("contador " + a);
  
  if (a == (3)) {
     clearInterval(nomVar)
  }
},1000);  setTimeout(() => resolver( a), 10000); 
 

}).then (function(res){
    return res - 1;
}).then(function(re){
    console.log(re);
return re - 1
}).then(function(re){
    console.log(re);
return re - 1
})
.then(function(r){
    console.log(r);
   
})
