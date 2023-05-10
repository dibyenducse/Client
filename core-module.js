const path = require('path');
const os = require('os');
const fs = require('fs');

const myPath = '/Users/bloombrain/Client/people.js';

console.log(path.parse(myPath));

console.log(os.platform());

fs.writeFileSync('myfile.txt', 'hello');
