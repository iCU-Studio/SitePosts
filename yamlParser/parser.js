const yaml = require('js-yaml');
const fs = require('fs');

var dirname = "posts";
var fileCount = 0;
var fileNames = [];

try {
    fs.readdirSync(dirname).forEach(name => {
        fileNames.push(name);
        fileCount++;
        console.log(name);
    })
        
    for (let i =0; i<fileCount; i++) {
        const config = yaml.loadAll(fs.readFileSync(dirname+'/'+fileNames[i], 'utf8'));
        const indentedJson = JSON.stringify(config, null, 4);
        console.log(indentedJson);
    }
   
} catch (e) {
    console.log(e);
}