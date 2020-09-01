const fs  = require('fs');
const http = require('http');

const json = fs.readFileSync(`${__dirname}/data/data.json`);
const  laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
    res.writeHead(200, 'Content-type: text/html');
    res.end('This is the response!');
});

server.listen(1337, '127.0.0.1', () => {
    console.log('Server is listening on port: 1337');
});