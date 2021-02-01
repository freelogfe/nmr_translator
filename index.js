"use strict"

const path = require('path');
const fs = require("fs");
const antlr4 = require("antlr4");
const gen_dir = "./gen";
const MappingRuleToken = require(`${gen_dir}/MappingRuleToken`).MappingRuleToken;
const MappingRule = require(`${gen_dir}/MappingRule`).MappingRule;
const MappingRuleCustomVisitor = require("./MappingRuleCustomVisitor").MappingRuleCustomVisitor;
const MappingRuleErrorListener = require("./MappingRuleErrorListener").MappingRuleErrorListener;
const MappingRuleDecompiler = require("./MappingRuleDecompiler").MappingRuleDecompiler;

exports.compile = function (content) {
    let chars = new antlr4.InputStream(content);

    let lexer = new MappingRuleToken(chars);
    let stream = new antlr4.CommonTokenStream(lexer);
    let parser = new MappingRule(stream);
    let errorListener = new MappingRuleErrorListener();
    parser.addErrorListener(errorListener);
    // 关闭恢复机制
    // parser._errHandler = new antlr4.error.BailErrorStrategy();

    let tree = parser.mapping_rule_section();

    let visitor = new MappingRuleCustomVisitor();
    visitor.visit(tree);
    visitor.verify();

    return {
        rules: visitor.mappingRules,
        errors: [...errorListener.errors, ...visitor.errors],
        errorObjects: [...errorListener.errorObjects, ...visitor.errors.map(error => {
            return {
                line: -1,
                charPositionInLine: -1,
                offendingSymbol: "",
                msg: error
            };
        })]
    };
}

exports.decompile = function (result) {
    let decompiler = new MappingRuleDecompiler();
    return decompiler.decompile(result);
}