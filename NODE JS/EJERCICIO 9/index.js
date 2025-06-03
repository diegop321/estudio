const listar= require("node:fs");

listar.readdir("../EJERCICIO 270", (error,archivos) => {
    if (error) {
        console.log("error: ", error)
    }
    console.log(archivos);
});


// const listar= require("node:fs");

// var archivos = listar.readdirSync("../EJERCICIO 6");
// console.log("1")
// console.log(archivos)
// console.log("2")
























//fs =  módulo File System.   módulo nativo de Node.js
// throw en JavaScript se usa para lanzar (tirar) un error
//fs.readdir(path, options, callback).readdir(path, options, callback)
//¿Qué es un callback?         Un callback es una función que se pasa como argumento a otra función, y se ejecuta después de que esa función termina su trabajo.


// readdir sync sincrona 	Antes de la siguiente línea.     El programa espera a que termine la lectura antes de seguir con la siguiente línea
//Síncrono significa que las tareas se ejecutan una después de la otra, en orden.

//readdir asincrona 	Cuando termina la lectura (después de otras líneas)
//Asíncrono es cuando una tarea comienza, pero no bloquea ni detiene la ejecución del resto del código
