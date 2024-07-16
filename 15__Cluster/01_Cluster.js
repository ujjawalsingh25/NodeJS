
const { Message } = require('discord.js');
const express = require('express');

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
    return res.json({message: `Hello from Express Server ${process.pid}`});
});


app.listen(PORT, () => console.log(`Server started at PORT :: (http://localhost:${PORT}/) : `));
// (http://localhost:3001/) 