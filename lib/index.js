const antlr4 = require('antlr4');
const {ConsoleErrorListener} = require('antlr4/error/ErrorListener');

const {MappingLexer} = require('../gen/MappingLexer');
const {MappingParser} = require('../gen/MappingParser');
const {Visitor} = require('./Visitor');
const RulesErrorListener = require('./RulesErrorListener');
const LogicVerifier = require('./LogicVerifier');
const decompileRule = require('./decompileRule');

/**
 *
 */
function compile(mappingText) {
    if (!mappingText.trim()) {
        return {
            errors: null,
            rules: [],
            errorObjects: null,
        };
    }
    const syntaxErrors = [];
    let errorObjects = [];
    ConsoleErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, col, msg, e) {
        syntaxErrors.push("line " + line + ":" + col + " " + msg);
        errorObjects.push({
            line, col, msg,
        });
    };
    const chars = new antlr4.InputStream(mappingText);
    const lexer = new MappingLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new MappingParser(tokens);

    const rulesErrorListener = new RulesErrorListener([]);
    parser.addErrorListener(rulesErrorListener);
    let gen;
    try {
        const tree = parser.mappingRules();
        gen = new Visitor();
        gen.visit(tree);
    } catch (e) {
        // console.log(e.message, 'EEEEEEEE');
        return {
            errors: [e.message],
            errorObjects: [{msg: e.message}],
        };
    }

    const rules = gen.getMappingRules();
    const logicErrors = new LogicVerifier(rules).getAllErrors();
    const errors = [...syntaxErrors, ...logicErrors];
    errorObjects = [
        ...errorObjects,
        ...logicErrors.map(i => ({
            msg: i,
        })),
    ];
    const mappingLines = mappingText.split('\n');
    errorObjects = errorObjects.map(i => {
        if (i.line) {
            i.lineText = mappingLines[i.line - 1];
        } else {
            i.line = -1;
            i.col = -1;
            i.lineText = '';
        }
        return i;
    });
    return {
        errors: errors.length === 0 ? null : errors,
        rules,
        errorObjects: errorObjects.length === 0 ? null : errorObjects,
    };
}

/**
 *
 * @param {Array<>} rules
 */
function decompile(rules) {
    if (!Array.isArray(rules)) {
        throw TypeError('Decompile rules, must be Array');
    }
    return rules.map((rule) => decompileRule(rule)).join('\n\n');
}


module.exports = {
    compile,
    decompile,
};
