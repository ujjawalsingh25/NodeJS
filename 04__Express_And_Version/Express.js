
// ___________________________________________________________________________________________________________
// const http = require("http");                                                                              |
// const url = require("url");                                                                                |
// const fs = require("fs");                                                                                  |
//                                                                                                            |
// function myHandler(requestt, responsee){                                                                   |
//     if(requestt.url === "/favicon.ico") return responsee.end();  //favicon will not be added in log.txt    |
//     const log = `${Date.now()} : ${requestt.method} - ${requestt.url} :- New Request Received\n`;          |   
//                                                                                                            |
//     const myURL = url.parse(requestt.url, true);        // true for getting -> Query Parameters            |
//     fs.appendFile('log.txt', log, (err, data) => {        // Not appendFileSync otherwise user need to     |
//                                                                 // wait for request if threads were busy.  |
//         switch(myURL.pathname){                                                                            |
//             case '/':                                                                                      |
//                 if(requestt.method === 'GET')   responsee.end('HomePage');                                 |
//                 responsee.end("Responsed Hello")                                                           |
//                 break;                                                                                     |      
//             case '/about':                                                                                 |
//                 const username = myURL.query.q;                                                            |
//                 responsee.end(`In About Page, Hi ${username}`)                                             |
//                 break;                                                                                     |
//             case '/search':                                                                                |
//                 const search = myURL.query.search_query;                                                   |
//                 responsee.end("You Searched : " +search);                                                  |
//             case '/signup':                                                                                |
//                 if(requestt.method === 'GET')   responsee.end('Signup Form');                              |
//                 else if(requestt.method === "POST"){                                                       |
//                     //DB Query                                                                             |
//                     responsee.end("Success");                                                              |
//                 }                                                                                          |
//             default:                                                                                       |
//                 responsee.end("404 Not Found");                                                            |           
//         }                                                                                                  |
//     });                                                                                                    |
// }                                                                                                          |
// const myServer = http.createServer(myHandler);                                                             |
// myServer.listen(3000, () => console.log("Server Started"));                                                |
// // (http://localhost:3000/)                                                                                |
//                                                                                                            |
//                                                                                                            |
// ___________________________________________________________________________________________________________|

// --------------------------------------------------------------------------------------------
// _______  The above code handle easily with Express JS
// ___ As every Route need to handle with cases seperately 
// ___ Also need to handle the HTML Method (get, post, delete) seperately
// ___ Also need "URL Module" to parse or run URL having Query Parameters 
//              in order to configure the URL Parts(domain, path, Query Parameters)
// ......  So we Use Express .........................
//_______________________________________________________________________________________________

const http = require('http');
const url = require('url');
const express = require('express');

const app = express();

app.get('/' , (requestt, responsee) => {
    return responsee.send("Home Page");
});

app.get("/about" , (requestt, responsee) => {
    return responsee.send("About Page\n" + "Welcome" + requestt.query.q);
});


const myServer = http.createServer(app);
myServer.listen(3000, () => console.log("Serve Started at Port 3000"));
// (http://localhost:3000/) 
