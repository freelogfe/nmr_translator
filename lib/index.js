const antlr4 = require('antlr4');
const {mappingLexer} = require('../gen/MappingLexer');
const {mappingParser} = require('../gen/MappingParser');
// const mappingListener = require('../gen/mappingListener').mappingListener;
const {Visitor} = require('./Visitor');
const RulesErrorListener = require('./RulesErrorListener');
const LogicVerifier = require('./LogicVerifier');
console.error = function () {

};

/**
 *
 */
function compile(mappingText) {
    // console.log(mappingText, 'mappingText');
    const syntaxErrors = [];
    const chars = new antlr4.InputStream(mappingText);
    const lexer = new mappingLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new mappingParser(tokens);

    const rulesErrorListener = new RulesErrorListener(syntaxErrors);
    parser.addErrorListener(rulesErrorListener);
    // parser.buildParseTrees = true;
    const tree = parser.mapping_rules();
    const gen = new Visitor();
    gen.visit(tree);
    // console.log(errors, 'errorserrors');
    const rules = gen.getMappingRules();
    const logicErrors = new LogicVerifier(rules).getAllErrors();
    const errors = [...syntaxErrors, ...logicErrors];
    return {
        errors: errors.length === 0 ? null : errors,
        rules,
    };
}

module.exports = {
    compile,
};
