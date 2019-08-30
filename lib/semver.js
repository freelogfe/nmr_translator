const antlr4 = require('antlr4');
const {semverLexer} = require('../gen/semverLexer');
const {semverParser} = require('../gen/semverParser');
// const mappingListener = require('../gen/mappingListener').mappingListener;
const {VisitorOfSemver} = require('./VisitorOfSemver');

/**
 *
 */
function getAllRules(mappingText) {
    // console.log(mappingText, 'mappingText');
    const chars = new antlr4.InputStream(mappingText);
    const lexer = new semverLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new semverParser(tokens);
    // parser.buildParseTrees = true;
    const tree = parser.valid_semver();
    const gen = new VisitorOfSemver();
    gen.visit(tree);

    return 'html text';
}

module.exports = {
    getAllRules,
};
