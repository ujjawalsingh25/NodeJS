// NodeJS Architecture -->>  https://youtu.be/y0aTs56DJWk?si=kygI6XfoCVvDGJqa

// ****** fs -->> FileSystem , "fs Module" is to intract with files


const { log } = require("console");
const fs = require("fs");       // fs -->> build in Module so do not needed './'

// _________  Write _________________________________________
// -------------->> Synchronous Call (Blocking Operatiom) ----------------
// Text added to text.txt -->> Synchronous Call
fs.writeFileSync('./text.txt', "Text Added 1");

// -------------->> Asynchronous Call (Non - Blocking Operatiom) ----------------
// Text added to text.txt -->> Asynchronous Call
// fs.writeFile('./text.txt', "Text Added 2", (err) => {});    

fs.appendFileSync("./text.txt", "\nAdded Text 3");
// ________________________________________________________________


// _____________  Read  __________________________________________________
//                     -->> Synchronous Call (Blocking Operatiom) ---------------- 
// Text read from text.txt  -->> Returns value
// const readData = fs.readFileSync('./text.txt', "utf-8");          //control+Space -->> to get options
// console.log(readData);

//                     -->> Asynchronous Call (Non - Blocking Operatiom) ----------------
// Text read from text.txt  -->>  ***** Expect a Call-Back Function that will returns error and result. ***
fs.readFile('./text.txt', "utf-8", (err, readData) => {
    if(err)     console.log("Error: ", err);
    else    console.log(readData);
});
// _____________________________________________________________________________________


// _____________  Copy / Delete / Stats __________________________________________________
// fs.cpSync("./text.txt", './copy.txt');      // -->> Copy
// fs.unlinkSync('./copy.txt');                   // -->> Delete
const statsText = fs.statSync('./text.txt');
console.log(statsText);
// _______________________________________________________________


// _____________  Make Directory ____________________________________
fs.mkdirSync("madeDir/newDir", {recursive: true});
// _______________________________________________________________