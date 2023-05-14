//Buffer = Data Type
//Stream = Summetion of Buffer

const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/myfile.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadStream.on('data', (chunk) => {
//     ourWriteStream.write(chunk);
// });

ourReadStream.pipe(ourWriteStream);
