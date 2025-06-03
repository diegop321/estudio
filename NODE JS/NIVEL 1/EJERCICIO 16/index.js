const fs = require("fs");
const csv = require("csv");

const crearArchivo = fs.createWriteStream("file.csv");

const data = [
  { name: "John", age: 25, city: "New York" },
  { name: "Jane", age: 24, city: "San Francisco" },
  { name: "Jim", age: 30, city: "Chicago" },
];

csv.stringify(data, {
    header: true,
    columns: {
      name: "name",
      age: "age",
      city: "city",
    },
  })
  .pipe(crearArchivo);



//   > npm init -y
// > npm install csv