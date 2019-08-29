const antlr4 = require('antlr4');
const mappingLexer = require('../gen/mappingLexer').mappingLexer;
const mappingParser = require('../gen/mappingParser').mappingParser;
// const mappingListener = require('../gen/mappingListener').mappingListener;
const Visitor = require('./Visitor').Visitor;

/**
 *
 */
function getAllRules(mappingText) {
    // console.log(mappingText, 'mappingText');
    const chars = new antlr4.InputStream(mappingText);
    const lexer = new mappingLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new mappingParser(tokens);
    // parser.buildParseTrees = true;
    const tree = parser.mapping_rules();
    const gen = new Visitor();
    gen.visit(tree);

    return 'html text';
}

module.exports = {
    getAllRules,
};
