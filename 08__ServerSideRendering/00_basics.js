// npm init
// npm i express
// npm i mongoose
// npm i ejs

// Video lecture ->>> 22 time(20:00);

// ______  ejs (Embedded JavaScript Templeting)  _______________
        // -->> npm i ejs       
        // -->> It is a ""View-Engines"" are used so that we do not need to write the whole html codes to render at server side.
        // --> Some more engines are  ejs, pug, handlebars
// _________________________________________________________________


// ________________  shortid ___________________
    // -->> npm i shortid       (Package to create shortId)
// ________________  nanoid  ___________________
    // -->> npm i nanoid        (Package that takes length as parameter and generates a unique character)

// _______  URL Shortener  ______________________________________________________________________________________________
// Design a URL Shortener service that takes a valid URL and return a Shortened URL that redirects to the givem URL
//          -->>  Keep track of the total visit/clicks on the URL
// ---- Routes -------
    // POST/URL                     --> Generate a new short URL and return that shorterned URL (like example.com/random-id)
    // GET /:id                     --> Redirect the user to original URL 
    // GET/URL/analytics/:id        --> Return the clicks/visits for the provided short id
// __________________________________________________________________________________________________________________________