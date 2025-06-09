// Crear una función asincrónica con async/await.

async function pato(){
    let n = 0;
 let interval = setInterval(()=>{
    n++;
    console.log(n);
    if (n > 10) {
        clearInterval(interval);
    }
 },100);
}

(async () =>{
    await pato();
    console.log("la suma de 1 + 7 es:", 1 +7)
}) ();
