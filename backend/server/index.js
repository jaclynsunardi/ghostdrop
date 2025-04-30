const express = require('express');
const http = require('http');
const cors = require('cors');
const {Server} = require('socket.io');

const app = express();
const server = http.createServer(app);

app.use(cors());

app.get('/', (req, res) => {
    res.json({message: "hello World"});
});

app.listen(3000); 
