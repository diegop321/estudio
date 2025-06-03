// ruta.join([ruta1], [ruta2], [...])

// import path from 'path';
var path = require('path');

// // Joining 2 path-segments
// let path1 = path.join("users/admin/files", "index.html");
// console.log(path1)

// // Joining 3 path-segments
// let path2 = path.join("users", "geeks/website", "index.html");
// console.log(path2)

// // Joining with zero-length paths
// let path3 = path.join("users", "", "", "index.html");
// console.log(path3)



var x = path.join('Users', 'Refsnes', '..', 'demo_path.js');

var z =path.resolve()

console.log(x);
console.log(z);