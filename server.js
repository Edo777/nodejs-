'use strict';

const http = require('http');
const {one, two, PORT} = require('./ports');
const [a,b] = [1,2];
const server = http.createServer( (req,res)=>{
    if(req.url ==='/'){
        res.setHeader('content-type','text/html');
        res.end(`
            <!doctype html>
            <body>
                <h1> ${one(__dirname)}</h1>
                <h1> ${two(__dirname)}</h1>
                <p>What a body =P</p>
            </body>
        `)
    }else{

    }
})
server.on('connection', (socket) => {
    console.log('SomeOne connectd : ', socket);
})
server.listen(PORT, () => console.log('Started our server'));
