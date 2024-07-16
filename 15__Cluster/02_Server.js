
const cluster = require('node:cluster');
const os = require('os');
const express = require('express');

const totalCPUs = os.cpus().length;
// console.log(totalCPUs);
// Now when we run this 02_Server.js then 8 servers will be started and if open server in different 
// browser window we access through different server can be seen through ${process.pid}.

if(cluster.isPrimary){
    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork();                 // 8 instance of the server will start
    }
} else {
    const app = express();
    const PORT = 3001;

    app.get("/", (req, res) => {
        return res.json({
            message: `Hello from Express Server ${process.pid}`
        });
    });


    app.listen(PORT, () => console.log(`Server started at PORT :: (http://localhost:${PORT}/) : `));
    // (http://localhost:3001/)     
}

