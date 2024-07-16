
const express = require('express');
const fs = require('fs');
const zlib = require('zlib');
const status = require('express-status-monitor');

const app = express();
const PORT = 3001;

app.use(status());

// ___________________________  (3) ____________________________________________________________________
// Even we using Stream, the whole file first "ZIP" in memory and then stream So we still using memory
// So we proceed as
// Stream Read (Sample.txt) --> Zipper  --> fs Write Stream
//      -->> Here File Read and while reading get Ziped and Written so no use of memory.
fs.createReadStream('./textFile.txt')
.pipe(zlib.createGzip()
.pipe(fs.createWriteStream('./textFile.txt'))
) 
// ____________________________________________________________________________________________________


// ____________ (1)  It will read the file as first take in RAM then render so increase memory size  ____
// app.get("/", (req, res) => {
    //     fs.readFile("./textFile.txt", (err, data) => {
        //         res.end(data);
        //     });
        // });
// _________________________________________________________________________


// ________ (2)  So we Stream the data so that it doesn't lead to crash because of no memory ______________
app.get("/", (req, res) => {
    const stream = fs.createReadStream("./textFile.txt", "utf-8 ");     
    // -->> Now file create a stream and takes data to read in Chunks
    stream.on("data", (chunk) => res.write(chunk));
    stream.on("end", () => res.end()); 
});
// ____________________________________________________________________________________________________


app.listen(PORT, () => console.log(`Server started at PORT :: (http://localhost:${PORT}/) : `));
// (http://localhost:3001/) 