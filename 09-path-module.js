const path= require('path');
//console.log(path.sep);

const filePath = path.join('/folder','subfolder','text.txt');
const base = path.basename(filePath);
//console.log(base);

const absolute = path.resolve(__dirname,'folder','subfolder','text.txt');
console.log(absolute);