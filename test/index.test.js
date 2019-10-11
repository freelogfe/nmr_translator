const fs = require('fs');
const path = require('path');
const {compile} = require('../lib');

const filePath = path.join(__dirname, './sample_mapping.fnm');
const mappingText = fs.readFileSync(filePath, 'utf-8');
console.log(mappingText);

const {errors, rules} = compile(mappingText);
if (errors) {
    console.log(errors, 'Error');
    return;
}
fs.writeFileSync(path.join(__dirname, 'rules.json'), JSON.stringify(rules));
console.log(rules, 'result');

debugger;

console.log('')
