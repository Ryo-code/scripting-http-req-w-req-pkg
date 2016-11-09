'use strict';
const request = require('request');
const fs = require('fs');

console.log("Attempting to download the file...");
request.get('https://sytantris.github.io/http-examples/future.jpg') //Note 1
       .on('error', function (err) {      // Note 2
         throw err;
       })
       .on('response', function (response) {  // Note 3
         console.log('Response Status Code: ', response.statusCode);
         console.log("Successfully downloaded the file!");
       })
       .pipe(fs.createWriteStream('./future.jpg'));   // Note 4

// let wfs = fs.createWriteStream('./future.jpg')
// console.log(wfs);
