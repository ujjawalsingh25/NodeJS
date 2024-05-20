
// ___________  HTML METHODS  ____________________________________________

// HTTP GET -->> Get is to get some data from the Database, it requests when we serach something.

// HTTP POST  -->> When we want to Send and Mutate some data in the server. (Filled Forms, Or When Signed-In the 
//                     data such username & password are filled and click SignIN then it create a "POST request" 
//                     and those data will send using "POST"  )

// HTML PUT  -->>  Put is to put some data into server (Like Uploading Files OR Pictures)

// HTML PATCH  -->>  Patch request is to change some database entry (like changing names of profile i.e already exist)

// HTML DELETE  -->>  To delete
// __________________________________________________________________________________
// npm run serverHTML   -->> To run
// __________________________________________________________


const http = require("http");
const url = require("url");
const fs = require("fs");
const myServer = http.createServer((requestt, responsee) => {
    if(requestt.url === "/favicon.ico") return responsee.end();     // so that favicon will not be added in the log.txt
    const log = `${Date.now()} : ${requestt.method} - ${requestt.url} :- New Request Received\n`;

    const myURL = url.parse(requestt.url, true);        // true for getting -> Query Parameters
    fs.appendFile('logHtmlMethods.txt', log, (err, data) => {        // Not appendFileSync otherwise user need to 
                                                                // wait for request if threads were busy.
        switch(myURL.pathname){
            case '/':  
                if(requestt.method === 'GET')   responsee.end('HomePage');
                responsee.end("Responsed Hello")                    
                break;
            case '/about':  
                const username = myURL.query.q;     
                responsee.end(`In About Page, Hi ${username}`)
                break;
            case '/search':
                const search = myURL.query.search_query;
                responsee.end("You Searched : " +search);
            case '/signup':
                if(requestt.method === 'GET')   responsee.end('Signup Form');
                else if(requestt.method === "POST"){
                    //DB Query
                    responsee.end("Success");
                }
            default: 
                responsee.end("404 Not Found");
        }
    });          
});     

myServer.listen(3000, () => console.log("Server Started"));

// myServer.listen(3000);          // 3000  -->>  Port on which the server run (http://localhost:3000/)