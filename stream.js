//Buffer = Data Type
//Stream = Summetion of Buffer

const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/myfile.txt`);

ourReadStream.on('data', (chunk) => {
    console.log(chunk.toString());
});
