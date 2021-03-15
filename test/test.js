"use strict"

const path = require('path');
const fs = require("fs");
const antlr4 = require("antlr4");
const gen_dir = "../gen";
const MappingRuleToken = require(`${gen_dir}/MappingRuleToken`).MappingRuleToken;
const MappingRule = require(`${gen_dir}/MappingRule`).MappingRule;
const MappingRuleCustomVisitor = require("../MappingRuleCustomVisitor").MappingRuleCustomVisitor;
const MappingRuleErrorListener = require("../MappingRuleErrorListener").MappingRuleErrorListener;
const MappingRuleErrorLexerListener = require("../MappingRuleErrorLexerListener").MappingRuleErrorLexerListener;
const MappingRuleDecompiler = require("../MappingRuleDecompiler").MappingRuleDecompiler;

main();
//
// decompile();

function main() {
    let input = fs.readFileSync("./resources/zhaojn.sc", "utf-8");
    let chars = new antlr4.InputStream(input);

    let lexer = new MappingRuleToken(chars);
    lexer.removeErrorListeners();
    let lexerErrorListener = new MappingRuleErrorLexerListener();
    lexer.addErrorListener(lexerErrorListener);
    let stream = new antlr4.CommonTokenStream(lexer);
    let parser = new MappingRule(stream);
    parser.removeErrorListeners();
    let errorListener = new MappingRuleErrorListener();
    parser.addErrorListener(errorListener);
    // 关闭恢复机制
    // parser._errHandler = new antlr4.error.BailErrorStrategy();

    let tree = parser.mapping_rule_section();
    if (lexerErrorListener.errors.length !== 0) {
        let result = {
            errors: lexerErrorListener.errors,
            errorObjects: lexerErrorListener.errorObjects
        };
        console.log(JSON.stringify(result, null, 4));

        return;
    }

    let visitor = new MappingRuleCustomVisitor();
    visitor.visit(tree);
    visitor.verify();

    fs.writeFile("./resources/zhaojn.json", JSON.stringify(visitor.mappingRules, null, 4), (err) => {
        if (err) throw err;
    });

    let result = {
        rules: visitor.mappingRules,
        errors: [...errorListener.errors, ...visitor.errors],
        errorObjects: errorListener.errorObjects
    };

    console.log(JSON.stringify(result, null, 4));
}

function decompile() {
    let input = JSON.parse(fs.readFileSync("./resources/zhaojn.json"));
    let decompiler = new MappingRuleDecompiler();
    let result = decompiler.decompile(input);

    console.log(result);
}