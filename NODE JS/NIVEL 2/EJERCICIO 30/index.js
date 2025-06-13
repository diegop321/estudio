// Crear un temporizador reutilizable con promesas.


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
