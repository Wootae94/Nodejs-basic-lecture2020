const http = require('http');
const fs = require('fs');

let sever = http.createServer((req,res) => {
    fs.readFile('media/EmbraceableYou.mp3', (error, audio) => {
        res.writeHead(200, {'Content-Type': 'audio/mp3'});
        res.end(audio)
    } )
});

sever.listen(3000);