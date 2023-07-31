var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('./sample_file.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('./sample_file.txt','utf-8'));
  
console.log("Your file has been   Decompressed.");
