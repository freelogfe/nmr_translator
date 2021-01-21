const fs = require('fs');
const path = require('path');
const {compile} = require('../lib');

const filePath = path.join(__dirname, './sample_mapping.fnm');
const mappingText = fs.readFileSync(filePath, 'utf-8');
// console.log(mappingText);

const {errors, rules, errorObjects} = compile(mappingText);
if (errors) {
    console.log(errors, 'Error');
}
if (errorObjects) {
    console.log(errorObjects, 'errorObjects');
}
// fs.writeFileSync(path.join(__dirname, 'rules.json'), JSON.stringify(rules));
console.log(JSON.stringify(rules), 'result');

debugger;

console.log('')
