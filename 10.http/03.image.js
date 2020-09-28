const http = require('http');
const fs = require('fs');

let sever = http.createServer((req,res) => {
    fs.readFile('media/Elvis.png', (error, image) => {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.end(image)
    } )
});

sever.listen(3000);