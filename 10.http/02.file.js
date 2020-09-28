const http = require('http');
const fs = require('fs');

let sever = http.createServer((req,res) => {
    fs.readFile('view/02.any.html', 'utf8', (error, html) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html)
    } )
});

sever.listen(3000);