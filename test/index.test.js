const fs = require('fs');
const path = require('path');
const {getAllRules} = require('../lib');

const filePath = path.join(__dirname, '../sample_mapping.fnm');
const mappingText = fs.readFileSync(filePath, 'utf-8');
// console.log(mappingText);

console.log(getAllRules(mappingText), '##########');
