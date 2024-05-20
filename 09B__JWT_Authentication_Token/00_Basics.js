
// https://youtu.be/kMErso06vHo?si=QCpZjZwaztkvoe9I  -->> Cookie -> Video 25 till last. 

// _________    JWT (JSON Web Token)  ______________
    // npm i jsonwebtoken
    // Takes the payload data and encode the data into Token which will be put in the User cookies
    // So even if server Restarts the token gives the same Payload

// _____________________________________________________________________________________________________
// _____________________________________________________________________________________________________
// state -->> When data is maintain on Key-Value Pair (car parking id and car details in Key-Value pair is State,  
//                    it maintains the details of the all car, which car came when , leaves at what time , & it is state)). 

//  __________________  Authentication  _______________

// Statefull  -->  Which maintains state or data of server side  _____________________
    // -->> In NodeJS "Client send request to server" in return "server return a unique id (uid called Session Unique ID) 
    //              and Server keep record of the uid" . Now when Client sent request it will send the uid as well
    //              Server then check if Client is authorized to user-access. & if true sends the respose of user-access.
    //   ***** The uid can be send through Cookies, Response, Header.
    // _________  Express Flow  ____________
    // Client sends the request to Server and we have a Middleware to checks the Cookie value / uid, if valid call Next(),
    // else rejects the request. And the Next will the server to get the response.
    // ________________________________________________________________________________

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
//   ________________________________________________________________________________________   

// _________________________________________________________________________________________________________________________
// _________________________________________________________________________________________________________________________


// ________________________  Cookie  ______________________
// Domain Specific  --> Cookies are domain specific (let say we login in to 2 sites fb and youtube and both generate 2 
//                      cookies and a total of 4 cookies in our browser so Since Cookie is Domain specific so fb cookie
//                        will send to fb only otherwise youtube will get access to those cookies)
// Cookie also make sub-cookies like if logedin to Gmail we also get logedin to youtube automatically.

// Limited to browser not mobile application. So in mobile apps we use Headers were tokens are send in JSON format
// We use method (Header) --> AUthorization and send [Bearear, token] in arr so arr[1] will be token and accordingly we verify the tokens.
