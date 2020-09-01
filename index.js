const fs  = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`);
const  laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
    const pathName = url.parse(req.url, true).pathname;
    const query = url.parse(req.url, true).query;

    if(pathName === '/products' || pathName === '/') {
        res.writeHead(200, 'Content-type: text/html');
        res.end('This is the products page!');
    } 

    else if(pathName === '/laptops' && query.id < laptopData.length) {
        res.writeHead(200, 'Content-type: text/html');
        res.end(`This is the laptop page for laptop ${query.id}!`);
    }
    
    else {
        res.writeHead(404, 'Content-type: text/html');
        res.end('URL was not found on the server');
    }
});

server.listen(1337, '127.0.0.1', () => {
    console.log('Server is listening on port: 1337');
});