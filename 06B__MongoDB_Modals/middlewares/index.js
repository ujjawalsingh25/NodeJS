
// // __________  02 Updat in fs _______________________________
// const currTime =new Date(Date.now()).toLocaleString();
// app.use((req, res, next) => {
    //     fs.appendFile('log.txt', 
    //     `\n${currTime} : ${req.ip} : ${req.method} : ${req.path}`, 
    //     (err, data) => {
        //         next();
        //     })
        // });  //______________________________________________________ log written to txt file
        
        
const fs = require('fs')

const currTime =new Date(Date.now()).toLocaleString();
        
function logReqRes(filename) {
    return (req, res, next) => {
        fs.appendFile(
            filename,
            `\n${currTime} : ${req.ip} : ${req.method} : ${req.path}`, 
            (err, data) => {
                next();
            }
        )
    }
}

module.exports = {
    logReqRes,
}