const http = require('http');

const server = http
    .createServer(function (req, res) {
        if (req.url === '/') {
            res.write('<html><head><title>Form</title></head></html>');
            res.write(
                '<body><form method ="post" action="/process"><input name = "message" /> </form></body>'
            );
            res.end();
        } else if (req.url === '/process' && req.method === 'POST') {
            const body = [];
            req.on('data', (chunk) => {
                console.log(chunk.toString());
            });
            req.on('end', () => {
                console.log('Stream is finished');
                const parsedBody = Buffer.concat(body).toString;
                console.log(parsedBody);
            });
            res.write('Thank you for submitting');
            res.end();
        } else {
            res.write('Not Found');
            res.end();
        }
    })
    .listen(3000);
