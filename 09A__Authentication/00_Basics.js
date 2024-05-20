// npm init
// npm i express
// npm i mongoose
// npm i ejs
// npm i uuid       (Generates unique id that can be used as Session id)
// npm i shortid   (Package to create shortId)
// npm i nanoid        (Package that takes length as parameter and generates a unique character)
// npm i cookie-parser


// _________    JWT (JSON Web Token)  ______________
    // npm i jsonwebtoken
    // Takes the payload data and encode the data into Token which will be put in the User cookies
    // So even if server Restarts the token gives the same Payload
// _____________________________________________________________

// ______  ejs (Embedded JavaScript Templeting)  _______________
        // -->> npm i ejs       
        // -->> It is a ""View-Engines"" are used so that we do not need to write the whole html codes to render at server side.
        // --> Some more engines are  ejs, pug, handlebars
// _____________________________________________________________


// _____________________________________________________________________________________________________
// _____________________________________________________________________________________________________
// state -->> When data is maintain on Key-Value Pair (car parking id and car details in Key-Value pair is State,  
//                    it maintains the details of the all car, which car came when , leaves at what time , & it is state)). 

//  __________________  Authentication  ___________________

// Statefull  -->  Which maintains state or data of server side  _____________________
    // -->> In NodeJS "Client send request to server" in return "server return a unique id (uid called Session Unique ID) 
    //              and Server keep record of the uid" . Now when Client sent request it will send the uid as well
    //              Server then check if Client is authorized to user-access. & if true sends the respose of user-access.
    //   ***** The uid can be send through Cookies, Response, Header.
    // _________  Express Flow  ____________
    // Client sends the request to Server and we have a Middleware to checks the Cookie value / uid, if valid call Next(),
    // else rejects the request. And the Next will the server to get the response.
    // ____________________________________________________________________________

// Stateless  -->  Which has no state _____________________________________________
        // in Statefull If Server Restarts or if Server Loss all the users will loged out
        // Statefull uses Server memory which is already very less.
        // So we use Stateless Authentication.
  // *****  The state is apart from Key-Value Pair taken in Payload, or Token or Id for user will have the state.
    //   ________________________________________________________________________________________   
// ***********  However the token can be seen in ""Inspect ->> Application -->> Cookies (below a code)"" 
// and can change but if we change since we do not have "Secret KEY" the app creashes OR won't work  
// Also if in "jwt.io" the token changes and also given the "SECRET KEY" the new generated 
// token can also be valid and work as same*********
//So tokens are made differnt as if we just paste valid token without id-password we can login to any user account
//  So different validity checks are given (In Bacnks Sessions used to less time validity).

// _________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________


