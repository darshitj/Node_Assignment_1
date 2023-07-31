var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('./sample_file.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./sample_file.txt.gz'));

console.log("Your Sample File has benn  Compressed.");
