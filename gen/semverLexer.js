// Generated from semver.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0006\u001b\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0002\u0002\b\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0002\r\u0002\u0003\u0002\u0004\u0003\u00023;\u0004\u0002C\\c|\u0002",
    "\u0018\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0003\u000f\u0003\u0002\u0002\u0002\u0005\u0011\u0003\u0002\u0002",
    "\u0002\u0007\u0013\u0003\u0002\u0002\u0002\t\u0015\u0003\u0002\u0002",
    "\u0002\u000b\u0017\u0003\u0002\u0002\u0002\r\u0019\u0003\u0002\u0002",
    "\u0002\u000f\u0010\u0007/\u0002\u0002\u0010\u0004\u0003\u0002\u0002",
    "\u0002\u0011\u0012\u0007-\u0002\u0002\u0012\u0006\u0003\u0002\u0002",
    "\u0002\u0013\u0014\u00070\u0002\u0002\u0014\b\u0003\u0002\u0002\u0002",
    "\u0015\u0016\u00072\u0002\u0002\u0016\n\u0003\u0002\u0002\u0002\u0017",
    "\u0018\t\u0002\u0002\u0002\u0018\f\u0003\u0002\u0002\u0002\u0019\u001a",
    "\t\u0003\u0002\u0002\u001a\u000e\u0003\u0002\u0002\u0002\u0003\u0002",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function semverLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

semverLexer.prototype = Object.create(antlr4.Lexer.prototype);
semverLexer.prototype.constructor = semverLexer;

Object.defineProperty(semverLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

semverLexer.EOF = antlr4.Token.EOF;
semverLexer.T__0 = 1;
semverLexer.T__1 = 2;
semverLexer.T__2 = 3;
semverLexer.T__3 = 4;

semverLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

semverLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

semverLexer.prototype.literalNames = [ null, "'-'", "'+'", "'.'", "'0'" ];

semverLexer.prototype.symbolicNames = [  ];

semverLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "ONE2NINE", 
                                    "ALPHABET" ];

semverLexer.prototype.grammarFileName = "semver.g4";



exports.semverLexer = semverLexer;

