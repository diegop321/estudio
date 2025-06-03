const fs = require("fs");
const csv = require("csv");


const a =fs.createWriteStream("archivio.csv");

const data = [
  { name: "John", age: 25, city: "New York" },
  { name: "diego", age: 24, city: "San Francisco" },
  { name: "fernando", age: 30, city: "Chicago" },
];

csv.stringify(data, {
    header: true,
    columns: {
      name: "name",
      age: "age",
      city: "city",
    },
  })
  .pipe(a);



//   > npm init -y
// > npm install csv