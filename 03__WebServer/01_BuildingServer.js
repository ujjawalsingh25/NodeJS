
// const myServer = http.createServer((requestt, responsee) => {
//     console.log("New Request Received");
//     responsee.end("Responsed Hello")                // If change need to restart the server it will not change automatically
//     console.log(requestt);                      // All info of the user who request the server
// });     
// Here a server created and get "request" -->> And on getting "request", "response" a message.

// myServer.listen(3000);          // 3000  -->>  Port on which the server run (http://localhost:3000/)

// myServer.listen(3000, () => console.log("Server Started"));
// ____________________________________________________________________________________________________________

const http = require("http");
const fs = require("fs");
const myServer = http.createServer((requestt, responsee) => {
    // if(requestt.url === "/favicon.ico") return responsee.end();     // so that favicon will not be added in the log.txt
    const log = `${Date.now()} : ${requestt.url} New Request Received\n`;
    fs.appendFile('log.txt', log, (err, data) => {        // Not appendFileSync otherwise user need to 
                                                                // wait for request if threads were busy.
        switch(requestt.url){
            case '/':  
                responsee.end("Responsed Hello")                    
                break;
            case '/about':  
                responsee.end("In About Page")
                break;
            default: 
                responsee.end("404 Not Found");
        }
    });          
});     
// Here we created a server and takes the "request" from the user and give a message (Responsed Hello) in 'respose'
// but before we take the record of the user time of access in log and adding to file 'log.txt'
// At last if user navigate to what page get the response accordingly.

myServer.listen(3000, () => console.log("Server Started"));