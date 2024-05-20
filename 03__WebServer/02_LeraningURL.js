
//            URL  -->> Uniform Resource Locator
// url -->> https://www.google.com/serach/path?userID=1&q=js+ques
//  https://    www.google.com       /serach/path          ?userID=1&q=js+ques    
// <-------->  <-------------->   <------------------->   <---------------------->
//  protocol         Domain        Path or NestedPath      Query Parameters

// Domain -> User friendly name of host IP Address

// ___________________________________________________
// npm i url  -->> Install URL Package Module the configure the url according to its property(domain, path, query Parameters)
// RUN -->> npm run serverURL
// _____________________________________________________________________

const http = require("http");
const url = require("url");
const fs = require("fs");
const myServer = http.createServer((requestt, responsee) => {
    if(requestt.url === "/favicon.ico") return responsee.end();     // so that favicon will not be added in the log.txt
    const log = `${Date.now()} : ${requestt.url} New Request Received\n`;

    const myURL = url.parse(requestt.url, true);        // true for getting -> Query Parameters
    console.log(myURL);

    fs.appendFile('logURL.txt', log, (err, data) => {        // Not appendFileSync otherwise user need to 
                                                                // wait for request if threads were busy.
        switch(myURL.pathname){
            case '/':  
                responsee.end("Responsed Hello")                    
                break;
            case '/about':  
                const username = myURL.query.q;     
                responsee.end(`In About Page, Hi ${username}`)
                break;
            case '/search':
                const search = myURL.query.search_query;
                responsee.end("You Searched : " +search);
            default: 
                responsee.end("404 Not Found");
        }
    });          
});     

myServer.listen(3000, () => console.log("Server Started"));

// myServer.listen(3000);          // 3000  -->>  Port on which the server run (http://localhost:3000/)
