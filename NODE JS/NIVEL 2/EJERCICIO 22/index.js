// Encadenar promesas que procesen datos.

new Promise(function(resolver, reject) {
n=3;
console.log("esto tiene n: ", n)
for(n;n<=5;n++){
    console.log("en cada iteracion: ", n)
}
console.log("con esto termina n: ", n)
   setTimeout(() => resolver( n), 1000); 

}).then (function(res){
    console.log(res);
    return res * 2;
}).then(function(re){
    console.log(re);
return re * 2
}).then(function(r){
    console.log(r);
   
})




