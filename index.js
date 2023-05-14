const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    const myReadStream = fs.createReadStream(`${__dirname}/myfile.txt`, 'utf8');
    myReadStream.pipe(res);
});
server.listen(8000);

console.log('listening on port 3000');
