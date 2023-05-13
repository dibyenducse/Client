// const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/myfile.txt`);

// ourReadStream.on('data', (chunk) => {
//     console.log(chunk.toString());
// });

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is resolved');
    }, 3000);
});

async function print() {
    console.log('Hi');
    let hel = await promise;
    console.log('hel');
}

print();
