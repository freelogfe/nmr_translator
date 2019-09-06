const fs = require('fs');
const path = require('path');
const {getAllRules} = require('../lib');

const filePath = path.join(__dirname, '../sample_mapping.fnm');
const mappingText = fs.readFileSync(filePath, 'utf-8');
// console.log(mappingText);

const [err, result] = getAllRules(mappingText);
if (err) {
    console.error(err, 'Error');
    return;
}
fs.writeFileSync(path.join(__dirname, 'rules.json'), JSON.stringify(result));
console.log('');
