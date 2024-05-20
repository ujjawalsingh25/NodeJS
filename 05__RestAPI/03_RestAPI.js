
// SSR  -->> Server Side Rendering
// CSR  -->> Client Side Rendering

// The Server-Client work as Client send request to Server and to that request Server send response.
// Now the client can be a desktop or alexa so if response return html it will renders to html but not to alexa
// So Client should not be depended to Server
// ***********************
// Rest API use "SSR"(Server Side Rendering) that is it renders the html at the server itself and send
// the require response to the Client. Hence, "Fast AND Secure"
// It mainly send data in "JSON" and client used as require even if it is known the client use browser then must send in html.
// ***********************
// __________________________________________________________________________________________________________



const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs')
const app = express();

const PORT = 3000;

app.use(express.urlencoded({extended: false}));     // -->> Middleware
// The above Middleware takes the data from Client User and process the data to Object and "Response" to the body of html.

// ____________ 01 myyMiddleware  __________
 // Created my Middleware; next -> are for next middleware , here in this case the prev middleware will execute first
//   & for that prev Middleware "Next" -> is this(myyMiddleware1) and for this(myyMiddleware)
//  "Next" -> is (Middleware2) && if none Middleware further then the routes as we given no further Middleware.
// ______________________________________
// app.use((req, res, next) => {      
    //     console.log("In Middleware");
    //     // return res.json({mgs: "In Middleware"});    // -->> It "END Request" from Middleware only request back and donot reach Server.
    //     req.myUsername = "Ujjawal25";
    //     next();         // It send "Request" to the next Middleware if none then to the server.
    // });
    // app.use((req, res, next) => {
        //     console.log("In Middleware2", req.myUsername, "-> Taken from Middleware 1");
        //     next();
        // })
// ________________________________________________________________________________________________

// __________  02 Updat in fs ____________
const currTime =new Date(Date.now()).toLocaleString();
app.use((req, res, next) => {
    fs.appendFile('log.txt', 
    `\n${currTime} : ${req.ip} : ${req.method} : ${req.path}`, 
    (err, data) => {
        next();
    })
});



// ____  Routes ___  Header ____
app.get('/api/users', (req, res) => {
    console.log("In GetRoot , Taken from Middleware1 ->", req.myUsername);
    res.setHeader("X-myyHeader", "myyHeader Created");            // -->> ***** Header Created  ******* (Custom Header) 
    // Always add "X-" to Custom Header
    return res.json(users);
});
app.get('/users', (req, res) => {
    const html = `<ul>
                    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
                </ul>`;
    res.send(html);
});
// _______________________________________________________________________________________
// app.get('/api/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// });
// app.patch('/api/users/:id', (req, res) => {
//     // TODO : Edit user with Id
//     return res.json({status: "pending"});
// })
// app.delete('/api/users/:id', (req, res) => {
//     // TODO : Edit user with Id
//     return res.json({status: "pending"});
// })

// ______________  Apart from writting same Route (/api/users/:id) multiple time  ________________
app
    .route("api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if(!user)   return res.status(404).json({error: "User not found"});
        return res.json(user);
    })
    .put((req, res) => {
        // TODO : Edit user with Id
        return res.json({status: "pending"});
    })
    .delete((req, res) => {
        // TODO : Delete user with Id
        return res.json({status: "pending"});
    })
// __________________________________________________________________________________________________

app.post('/api/users', (req, res) => {
    // TODO : Create new user
    const body = req.body;
    console.log("Body Data: ", body); 

    if(!body || !body.first_name || !body.last_name || !body.email){
        return res.status(400).json({msg: "All fields are required"});
    }           // HTML STATUS CODE -->> Send CODE 400 if all fields are not filled.

    users.push({...body, id: users.length + 1});        // add Data to new Id (generated -> prev
    //                                                 (users.lenght it automatically increased by 1 as we pushed before))
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({status: "success", id: users.length});
    })
})

app.listen(PORT, () => console.log(`Server started at PORT :: (http://localhost:3000/) : ${PORT}`));
// (http://localhost:3000/) 