
// ____________________  Middleware  _____________________
// The work flow of Client-Server Architecture is as such Client send "GET request" and Server have a 
// function(like Patch, Delete) and then send "Response" back to client. \
// **** Middleware are mainly work as a intermediate step (like checking Authentication, Check Malwares, etc)
//          and if ok then send request to the server and "Response" back to the client.
//          else if not ok back with error message to the client.


// -->> There cam be multiple Middleware.
// -->> Execute any Code
// -->> Make changes to the request and response object
// -->> End the Request-Response cycle
// -->> Call the next Middleware in the stack.

// ***** Always need to return  -->> Either need to END Request and back to Server OR NEXT for the server. Else a infinite loop.


app.use(express.urlencoded({extended: false}));     // -->> Middleware
// The above Middleware takes the data from Client User and process the data to Object and "Response" to the body of html.

// ____________ Created myyMiddleware  __________
// Created my Middleware; next -> are for next middleware , here in this case the prev middleware will execute first
//   & for that prev Middleware "Next" -> is this(myyMiddleware1) and for this(myyMiddleware)
//  "Next" -> is (Middleware2) && if none Middleware further then the routes as we given no further Middleware.
app.use((req, res, next) => {      
    console.log("In Middleware");
    // return res.json({mgs: "In Middleware"});    // -->> It "END Request" from Middleware only request back and donot reach Server.
    next();         // It send "Request" to the next Middleware if none then to the server.
});
app.use((req, res, next) => {
    console.log("In Middleware2");
    next();
})
// ______________________________________________________________________________________________________________