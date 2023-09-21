const http = require('http');

function handler(req, res) {    
    res.end('Hello World\n');
}

const server = http.createServer((req, res) => {
    res.end('Hello World\n');
});

server.listen(4242, () => {
    console.log('Server is running...');
});
