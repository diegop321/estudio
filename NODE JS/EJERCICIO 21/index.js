// async function f() {
//   return console.log("dddd");
// }

// f();


let n = 1;

async function f() {
    let p = new Promise((resolve)=>{
    let x = setInterval(()=>{ console.log("contador " + n ); n++}, 1000)
    setInterval(()=> clearInterval(x), 3000)
    setTimeout(() => resolve(console.log("¡Hecho!")), 3100)
});
// let resultado = await p;
// console.log(resultado )
}
f()
