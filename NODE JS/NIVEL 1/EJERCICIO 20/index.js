// Implementar una función que filtre una lista de usuarios por edad.


const lista = [
    {usuario:"pepe",    edad :18},
    {usuario:"juan",    edad :25},
    {usuario:"jhon",    edad :16},
    {usuario:"gibe",    edad :15},
     {usuario:"ju",    edad :18},
];
const filtrar = lista.find(o => o.edad===18);
if(filtrar){
    console.log(filtrar)}
    else{
    console.log("error")
}




function filtro(objeto) {
  return objeto.edad === 18
}

console.log(lista.filter(filtro));


