// Manejar errores en funciones asincrónicas.

async function nombre () {
    try{
        const resultado = await funcion();
        console.log("siiiii",resultado);
    }catch(error){
        console.error('error ', error.message)
    }
}

nombre()