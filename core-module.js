const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
// const myPath = '/Users/bloombrain/Client/people.js';

// console.log(path.parse(myPath));

// console.log(os.platform());

// fs.writeFileSync('myfile.txt', 'hello');

const emitter = new EventEmitter();

//register a listener for bellRing event
emitter.on('bellRing', function (preod) {
    console.log(`we need to run ${preod}`);
});

//raise an event
setTimeout(() => {
    emitter.emit('bellRing', 'because our bell ring');
}, 2000);
