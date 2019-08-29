// Generated from mapping.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0013x\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0005\u0011R\n\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0006\u0013[",
    "\n\u0013\r\u0013\u000e\u0013\\\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0007\u0014c\n\u0014\f\u0014\u000e\u0014f\u000b\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0007\u0015m\n\u0015",
    "\f\u0015\u000e\u0015p\u000b\u0015\u0003\u0016\u0006\u0016s\n\u0016\r",
    "\u0016\u000e\u0016t\u0003\u0016\u0003\u0016\u0002\u0002\u0017\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u0002\u001d\u0002\u001f",
    "\u0002!\u0002#\u000f%\u0010\'\u0011)\u0012+\u0013\u0003\u0002\u0007",
    "\u0003\u00022;\u0004\u0002C\\c|\u0004\u0002CHch\u0004\u0002//aa\u0005",
    "\u0002\u000b\f\u000f\u000f\"\"\u0002z\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002",
    "\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002",
    "\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0003",
    "-\u0003\u0002\u0002\u0002\u0005/\u0003\u0002\u0002\u0002\u00071\u0003",
    "\u0002\u0002\u0002\t4\u0003\u0002\u0002\u0002\u000b6\u0003\u0002\u0002",
    "\u0002\r8\u0003\u0002\u0002\u0002\u000f:\u0003\u0002\u0002\u0002\u0011",
    "<\u0003\u0002\u0002\u0002\u0013>\u0003\u0002\u0002\u0002\u0015A\u0003",
    "\u0002\u0002\u0002\u0017D\u0003\u0002\u0002\u0002\u0019F\u0003\u0002",
    "\u0002\u0002\u001bI\u0003\u0002\u0002\u0002\u001dK\u0003\u0002\u0002",
    "\u0002\u001fM\u0003\u0002\u0002\u0002!Q\u0003\u0002\u0002\u0002#S\u0003",
    "\u0002\u0002\u0002%Z\u0003\u0002\u0002\u0002\'^\u0003\u0002\u0002\u0002",
    ")g\u0003\u0002\u0002\u0002+r\u0003\u0002\u0002\u0002-.\u0007/\u0002",
    "\u0002.\u0004\u0003\u0002\u0002\u0002/0\u0007-\u0002\u00020\u0006\u0003",
    "\u0002\u0002\u000212\u0007/\u0002\u000223\u0007@\u0002\u00023\b\u0003",
    "\u0002\u0002\u000245\u0007,\u0002\u00025\n\u0003\u0002\u0002\u00026",
    "7\u0007?\u0002\u00027\f\u0003\u0002\u0002\u000289\u0007]\u0002\u0002",
    "9\u000e\u0003\u0002\u0002\u0002:;\u0007.\u0002\u0002;\u0010\u0003\u0002",
    "\u0002\u0002<=\u0007_\u0002\u0002=\u0012\u0003\u0002\u0002\u0002>?\u0007",
    "B\u0002\u0002?@\u0007<\u0002\u0002@\u0014\u0003\u0002\u0002\u0002AB",
    "\u0007&\u0002\u0002BC\u0007<\u0002\u0002C\u0016\u0003\u0002\u0002\u0002",
    "DE\u00071\u0002\u0002E\u0018\u0003\u0002\u0002\u0002FG\u0007%\u0002",
    "\u0002GH\u0007<\u0002\u0002H\u001a\u0003\u0002\u0002\u0002IJ\t\u0002",
    "\u0002\u0002J\u001c\u0003\u0002\u0002\u0002KL\t\u0003\u0002\u0002L\u001e",
    "\u0003\u0002\u0002\u0002MN\t\u0004\u0002\u0002N \u0003\u0002\u0002\u0002",
    "OR\u0005\u001b\u000e\u0002PR\u0005\u001f\u0010\u0002QO\u0003\u0002\u0002",
    "\u0002QP\u0003\u0002\u0002\u0002R\"\u0003\u0002\u0002\u0002ST\u0007",
    "u\u0002\u0002TU\u0007e\u0002\u0002UV\u0007q\u0002\u0002VW\u0007r\u0002",
    "\u0002WX\u0007g\u0002\u0002X$\u0003\u0002\u0002\u0002Y[\u0005\u001b",
    "\u000e\u0002ZY\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002\\",
    "Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]&\u0003\u0002\u0002",
    "\u0002^d\u0005\u001d\u000f\u0002_c\u0005\u001d\u000f\u0002`c\u0005%",
    "\u0013\u0002ac\t\u0005\u0002\u0002b_\u0003\u0002\u0002\u0002b`\u0003",
    "\u0002\u0002\u0002ba\u0003\u0002\u0002\u0002cf\u0003\u0002\u0002\u0002",
    "db\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002e(\u0003\u0002\u0002",
    "\u0002fd\u0003\u0002\u0002\u0002gh\u0005!\u0011\u0002hi\u0005!\u0011",
    "\u0002ij\u0005!\u0011\u0002jn\u0005!\u0011\u0002km\u0005!\u0011\u0002",
    "lk\u0003\u0002\u0002\u0002mp\u0003\u0002\u0002\u0002nl\u0003\u0002\u0002",
    "\u0002no\u0003\u0002\u0002\u0002o*\u0003\u0002\u0002\u0002pn\u0003\u0002",
    "\u0002\u0002qs\t\u0006\u0002\u0002rq\u0003\u0002\u0002\u0002st\u0003",
    "\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002",
    "uv\u0003\u0002\u0002\u0002vw\b\u0016\u0002\u0002w,\u0003\u0002\u0002",
    "\u0002\t\u0002Q\\bdnt\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function mappingLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

mappingLexer.prototype = Object.create(antlr4.Lexer.prototype);
mappingLexer.prototype.constructor = mappingLexer;

Object.defineProperty(mappingLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

mappingLexer.EOF = antlr4.Token.EOF;
mappingLexer.T__0 = 1;
mappingLexer.T__1 = 2;
mappingLexer.T__2 = 3;
mappingLexer.T__3 = 4;
mappingLexer.T__4 = 5;
mappingLexer.T__5 = 6;
mappingLexer.T__6 = 7;
mappingLexer.T__7 = 8;
mappingLexer.T__8 = 9;
mappingLexer.T__9 = 10;
mappingLexer.T__10 = 11;
mappingLexer.T__11 = 12;
mappingLexer.SCOPE = 13;
mappingLexer.INT = 14;
mappingLexer.ID = 15;
mappingLexer.SHA_ID_4MIN = 16;
mappingLexer.WS = 17;

mappingLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

mappingLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

mappingLexer.prototype.literalNames = [ null, "'-'", "'+'", "'->'", "'*'", 
                                        "'='", "'['", "','", "']'", "'@:'", 
                                        "'$:'", "'/'", "'#:'", "'scope'" ];

mappingLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, "SCOPE", "INT", "ID", "SHA_ID_4MIN", 
                                         "WS" ];

mappingLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                     "T__5", "T__6", "T__7", "T__8", "T__9", 
                                     "T__10", "T__11", "DIGIT", "ALPHABET", 
                                     "HEX_ALPHABET", "SHA_DIGIT", "SCOPE", 
                                     "INT", "ID", "SHA_ID_4MIN", "WS" ];

mappingLexer.prototype.grammarFileName = "mapping.g4";



exports.mappingLexer = mappingLexer;

