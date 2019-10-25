const antlr4 = require('antlr4');
const {MappingLexer} = require('../gen/MappingLexer');
const {MappingParser} = require('../gen/MappingParser');
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
    if (!mappingText.trim()) {
        return {
            errors: null,
            rules: [],
        };
    }
    // console.log(mappingText, 'mappingText');
    const syntaxErrors = [];
    const chars = new antlr4.InputStream(mappingText);
    const lexer = new MappingLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new MappingParser(tokens);

    // debugger;
    const rulesErrorListener = new RulesErrorListener(syntaxErrors);
    parser.addErrorListener(rulesErrorListener);
    // parser.buildParseTrees = true;
    const tree = parser.mapping_rules();
    const gen = new Visitor();
    try {
        gen.visit(tree);
    } catch (e) {
        return {
            errors: ['编译器抛错']
        };
    }

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
