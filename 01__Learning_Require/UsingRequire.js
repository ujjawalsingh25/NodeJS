

// If we use without -->> "./" , then it will search the function the default files if NodeJS 
//                      and with "./" , it will look the file in the given directory


// const {add, subtract} = require('./mathToImport');
// console.log(add(5, 3));
// console.log(subtract(5, 3));

const mathh = require('./mathToImport');
console.log("Finctions in mathToImport : ", mathh)

// ______ OR  __________________________
console.log(mathh.myyAdd(5, 3));      
console.log(mathh.myySub(5, 3));      
// _____________________________________

console.log(mathh.multiply(5,3));