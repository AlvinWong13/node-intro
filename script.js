// console.log('Hello from script.js');
let cullenites = require('./cullenites.js');

let age = 29;
if (age > 29) {
  console.log('you are an old man');
}

function birthday() {
  age++;
  return age;
}

// console.log(`Happy birthday to you! You are ${birthday()}`);
// console.log(`Happy birthday to you! You are ${birthday()}`);
// console.log(`Happy birthday to you! You are ${birthday()}`);

// Load cullenites.js file

for (let student of cullenites) {
  console.log(`Welcome to node week, ${student}`);
}

// //jquery does not work in node
// $(document.readyState() => {
//   $(body).append('<h1>Hello World</h1>!')
// })

// let fs = require('fs');
// // Read the contents of the file into memory.
// fs.readFile('example_log.txt', function (err, logData) {
// // If an error occurred, throwing it will
//   // display the exception and kill our app.
//   if (err) throw err;
// // logData is a Buffer, convert to string.
//   let text = logData.toString();
// let results = {};
// // Break up the file into lines.
//   let lines = text.split('\n');
// lines.forEach(function (line) {
//   let parts = line.split(' ');
//   let letter = parts[1];
//   let count = parseInt(parts[2]);
//   if (!results[letter]) {
//     results[letter] = 0;
//   }
//   results[letter] += parseInt(count);
// });
// console.log(results);
