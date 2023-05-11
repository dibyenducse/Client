const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello Proggramers');
        res.end();
    } else if (req.url === '/about') {
        res.write('This is about page');
        res.end();
    } else {
        res.write('Not Found');
        res.end();
    }
});

// server.on('connection', () => {
//     console.log('New Connection');
// });

server.listen(3000);

console.log('listening on port 3000');
