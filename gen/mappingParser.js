// Generated from mapping.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var mappingListener = require('./mappingListener').mappingListener;
var mappingVisitor = require('./mappingVisitor').mappingVisitor;

var grammarFileName = "mapping.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003Z\u017e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u0003\u0002\u0006\u0002`\n\u0002",
    "\r\u0002\u000e\u0002a\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003i\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0005\u0005n\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005u\n\u0005\u0003\u0006\u0005\u0006x\n\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006\u007f",
    "\n\u0006\u0003\u0007\u0005\u0007\u0082\n\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\b\u0005\b\u0088\n\b\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0005\t\u008e\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t",
    "\u0095\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u009c\n\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00a4\n\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00ab\n\t\u0003\n\u0003\n",
    "\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b",
    "\u00b4\n\u000b\f\u000b\u000e\u000b\u00b7\u000b\u000b\u0003\u000b\u0005",
    "\u000b\u00ba\n\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r",
    "\u0003\r\u0005\r\u00c2\n\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0007",
    "\u0012\u00d3\n\u0012\f\u0012\u000e\u0012\u00d6\u000b\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0005\u0012\u00db\n\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u00e2\n\u0013",
    "\f\u0013\u000e\u0013\u00e5\u000b\u0013\u0003\u0013\u0005\u0013\u00e8",
    "\n\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0005\u0014\u00f0\n\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003",
    "\u001a\u0003\u001b\u0005\u001b\u0102\n\u001b\u0003\u001b\u0003\u001b",
    "\u0005\u001b\u0106\n\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0005\u001b\u010d\n\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u0114\n\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005",
    "\u001b\u011c\n\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u012c\n",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 \u0003",
    " \u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005\"\u013b",
    "\n\"\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$\u0003$\u0005$\u0144\n",
    "$\u0003%\u0003%\u0005%\u0148\n%\u0003&\u0003&\u0005&\u014c\n&\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0005\'\u0159\n\'\u0003(\u0003(\u0003(\u0003(\u0003(\u0005",
    "(\u0160\n(\u0003)\u0003)\u0003)\u0003)\u0005)\u0166\n)\u0003*\u0003",
    "*\u0005*\u016a\n*\u0003+\u0003+\u0005+\u016e\n+\u0003,\u0003,\u0003",
    ",\u0003,\u0005,\u0174\n,\u0003-\u0003-\u0005-\u0178\n-\u0003.\u0003",
    ".\u0003/\u0003/\u0003/\u0002\u00020\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLN",
    "PRTVXZ\\\u0002\u0006\u0004\u0002VVXX\u0004\u0002\b\b\u0015\u0015\u0003",
    "\u0002\u0018 \u0003\u0002!T\u0002\u017f\u0002_\u0003\u0002\u0002\u0002",
    "\u0004h\u0003\u0002\u0002\u0002\u0006j\u0003\u0002\u0002\u0002\bm\u0003",
    "\u0002\u0002\u0002\nw\u0003\u0002\u0002\u0002\f\u0081\u0003\u0002\u0002",
    "\u0002\u000e\u0087\u0003\u0002\u0002\u0002\u0010\u00aa\u0003\u0002\u0002",
    "\u0002\u0012\u00ac\u0003\u0002\u0002\u0002\u0014\u00af\u0003\u0002\u0002",
    "\u0002\u0016\u00bd\u0003\u0002\u0002\u0002\u0018\u00c1\u0003\u0002\u0002",
    "\u0002\u001a\u00c3\u0003\u0002\u0002\u0002\u001c\u00c5\u0003\u0002\u0002",
    "\u0002\u001e\u00c7\u0003\u0002\u0002\u0002 \u00c9\u0003\u0002\u0002",
    "\u0002\"\u00da\u0003\u0002\u0002\u0002$\u00dc\u0003\u0002\u0002\u0002",
    "&\u00e9\u0003\u0002\u0002\u0002(\u00f1\u0003\u0002\u0002\u0002*\u00f6",
    "\u0003\u0002\u0002\u0002,\u00f8\u0003\u0002\u0002\u0002.\u00fa\u0003",
    "\u0002\u0002\u00020\u00fc\u0003\u0002\u0002\u00022\u00fe\u0003\u0002",
    "\u0002\u00024\u011b\u0003\u0002\u0002\u00026\u011d\u0003\u0002\u0002",
    "\u00028\u012b\u0003\u0002\u0002\u0002:\u012d\u0003\u0002\u0002\u0002",
    "<\u012f\u0003\u0002\u0002\u0002>\u0131\u0003\u0002\u0002\u0002@\u0133",
    "\u0003\u0002\u0002\u0002B\u013a\u0003\u0002\u0002\u0002D\u013c\u0003",
    "\u0002\u0002\u0002F\u0143\u0003\u0002\u0002\u0002H\u0147\u0003\u0002",
    "\u0002\u0002J\u014b\u0003\u0002\u0002\u0002L\u0158\u0003\u0002\u0002",
    "\u0002N\u015f\u0003\u0002\u0002\u0002P\u0165\u0003\u0002\u0002\u0002",
    "R\u0169\u0003\u0002\u0002\u0002T\u016d\u0003\u0002\u0002\u0002V\u0173",
    "\u0003\u0002\u0002\u0002X\u0177\u0003\u0002\u0002\u0002Z\u0179\u0003",
    "\u0002\u0002\u0002\\\u017b\u0003\u0002\u0002\u0002^`\u0005\u0004\u0003",
    "\u0002_^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002a_\u0003\u0002",
    "\u0002\u0002ab\u0003\u0002\u0002\u0002b\u0003\u0003\u0002\u0002\u0002",
    "ci\u0005\b\u0005\u0002di\u0005\n\u0006\u0002ei\u0005\f\u0007\u0002f",
    "i\u0005\u000e\b\u0002gi\u0005\u0010\t\u0002hc\u0003\u0002\u0002\u0002",
    "hd\u0003\u0002\u0002\u0002he\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002",
    "\u0002hg\u0003\u0002\u0002\u0002i\u0005\u0003\u0002\u0002\u0002jk\u0007",
    "\u0003\u0002\u0002k\u0007\u0003\u0002\u0002\u0002ln\u0005\u0006\u0004",
    "\u0002ml\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002no\u0003\u0002",
    "\u0002\u0002op\u0007\u0004\u0002\u0002pq\u0005*\u0016\u0002qr\u0007",
    "\u0005\u0002\u0002rt\u0005\u001e\u0010\u0002su\u0005\u0014\u000b\u0002",
    "ts\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002u\t\u0003\u0002",
    "\u0002\u0002vx\u0005\u0006\u0004\u0002wv\u0003\u0002\u0002\u0002wx\u0003",
    "\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002yz\u0007\u0006\u0002\u0002",
    "z{\u0005\u001a\u000e\u0002{|\u0007\u0005\u0002\u0002|~\u0005\u001c\u000f",
    "\u0002}\u007f\u0005 \u0011\u0002~}\u0003\u0002\u0002\u0002~\u007f\u0003",
    "\u0002\u0002\u0002\u007f\u000b\u0003\u0002\u0002\u0002\u0080\u0082\u0005",
    "\u0006\u0004\u0002\u0081\u0080\u0003\u0002\u0002\u0002\u0081\u0082\u0003",
    "\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0084\u0007",
    "\u0007\u0002\u0002\u0084\u0085\u0005*\u0016\u0002\u0085\r\u0003\u0002",
    "\u0002\u0002\u0086\u0088\u0005\u0006\u0004\u0002\u0087\u0086\u0003\u0002",
    "\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002",
    "\u0002\u0002\u0089\u008a\u0007\b\u0002\u0002\u008a\u008b\u0005*\u0016",
    "\u0002\u008b\u000f\u0003\u0002\u0002\u0002\u008c\u008e\u0005\u0006\u0004",
    "\u0002\u008d\u008c\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002",
    "\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0090\u0007\t\u0002",
    "\u0002\u0090\u0091\u0005*\u0016\u0002\u0091\u0092\u0005\u0014\u000b",
    "\u0002\u0092\u00ab\u0003\u0002\u0002\u0002\u0093\u0095\u0005\u0006\u0004",
    "\u0002\u0094\u0093\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002",
    "\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u0097\u0007\t\u0002",
    "\u0002\u0097\u0098\u0005*\u0016\u0002\u0098\u0099\u0005\u0012\n\u0002",
    "\u0099\u00ab\u0003\u0002\u0002\u0002\u009a\u009c\u0005\u0006\u0004\u0002",
    "\u009b\u009a\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002\u0002\u0002",
    "\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u009e\u0007\t\u0002\u0002",
    "\u009e\u009f\u0005*\u0016\u0002\u009f\u00a0\u0005\u0012\n\u0002\u00a0",
    "\u00a1\u0005\u0014\u000b\u0002\u00a1\u00ab\u0003\u0002\u0002\u0002\u00a2",
    "\u00a4\u0005\u0006\u0004\u0002\u00a3\u00a2\u0003\u0002\u0002\u0002\u00a3",
    "\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5",
    "\u00a6\u0007\t\u0002\u0002\u00a6\u00a7\u0005*\u0016\u0002\u00a7\u00a8",
    "\u0005\u0014\u000b\u0002\u00a8\u00a9\u0005\u0012\n\u0002\u00a9\u00ab",
    "\u0003\u0002\u0002\u0002\u00aa\u008d\u0003\u0002\u0002\u0002\u00aa\u0094",
    "\u0003\u0002\u0002\u0002\u00aa\u009b\u0003\u0002\u0002\u0002\u00aa\u00a3",
    "\u0003\u0002\u0002\u0002\u00ab\u0011\u0003\u0002\u0002\u0002\u00ac\u00ad",
    "\u0007\n\u0002\u0002\u00ad\u00ae\u00054\u001b\u0002\u00ae\u0013\u0003",
    "\u0002\u0002\u0002\u00af\u00b9\u0007\u000b\u0002\u0002\u00b0\u00b1\u0005",
    "\u0016\f\u0002\u00b1\u00b2\u0007\f\u0002\u0002\u00b2\u00b4\u0003\u0002",
    "\u0002\u0002\u00b3\u00b0\u0003\u0002\u0002\u0002\u00b4\u00b7\u0003\u0002",
    "\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002",
    "\u0002\u0002\u00b6\u00b8\u0003\u0002\u0002\u0002\u00b7\u00b5\u0003\u0002",
    "\u0002\u0002\u00b8\u00ba\u0005\u0016\f\u0002\u00b9\u00b5\u0003\u0002",
    "\u0002\u0002\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002",
    "\u0002\u0002\u00bb\u00bc\u0007\r\u0002\u0002\u00bc\u0015\u0003\u0002",
    "\u0002\u0002\u00bd\u00be\t\u0002\u0002\u0002\u00be\u0017\u0003\u0002",
    "\u0002\u0002\u00bf\u00c2\u0005&\u0014\u0002\u00c0\u00c2\u0005(\u0015",
    "\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c1\u00c0\u0003\u0002\u0002",
    "\u0002\u00c2\u0019\u0003\u0002\u0002\u0002\u00c3\u00c4\u0005&\u0014",
    "\u0002\u00c4\u001b\u0003\u0002\u0002\u0002\u00c5\u00c6\u0005\u0018\r",
    "\u0002\u00c6\u001d\u0003\u0002\u0002\u0002\u00c7\u00c8\u0005\u0018\r",
    "\u0002\u00c8\u001f\u0003\u0002\u0002\u0002\u00c9\u00ca\u0007U\u0002",
    "\u0002\u00ca\u00cb\u0007\u000e\u0002\u0002\u00cb\u00cc\u0005\"\u0012",
    "\u0002\u00cc!\u0003\u0002\u0002\u0002\u00cd\u00db\u0005$\u0013\u0002",
    "\u00ce\u00d4\u0007\u000f\u0002\u0002\u00cf\u00d0\u0005$\u0013\u0002",
    "\u00d0\u00d1\u0007\f\u0002\u0002\u00d1\u00d3\u0003\u0002\u0002\u0002",
    "\u00d2\u00cf\u0003\u0002\u0002\u0002\u00d3\u00d6\u0003\u0002\u0002\u0002",
    "\u00d4\u00d2\u0003\u0002\u0002\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002",
    "\u00d5\u00d7\u0003\u0002\u0002\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002",
    "\u00d7\u00d8\u0005$\u0013\u0002\u00d8\u00d9\u0007\r\u0002\u0002\u00d9",
    "\u00db\u0003\u0002\u0002\u0002\u00da\u00cd\u0003\u0002\u0002\u0002\u00da",
    "\u00ce\u0003\u0002\u0002\u0002\u00db#\u0003\u0002\u0002\u0002\u00dc",
    "\u00e7\u0005*\u0016\u0002\u00dd\u00e3\u0007\u0010\u0002\u0002\u00de",
    "\u00df\u0005\u0018\r\u0002\u00df\u00e0\u0007\u0010\u0002\u0002\u00e0",
    "\u00e2\u0003\u0002\u0002\u0002\u00e1\u00de\u0003\u0002\u0002\u0002\u00e2",
    "\u00e5\u0003\u0002\u0002\u0002\u00e3\u00e1\u0003\u0002\u0002\u0002\u00e3",
    "\u00e4\u0003\u0002\u0002\u0002\u00e4\u00e6\u0003\u0002\u0002\u0002\u00e5",
    "\u00e3\u0003\u0002\u0002\u0002\u00e6\u00e8\u0005\u0018\r\u0002\u00e7",
    "\u00dd\u0003\u0002\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002\u00e8",
    "%\u0003\u0002\u0002\u0002\u00e9\u00ea\u0007\u0011\u0002\u0002\u00ea",
    "\u00eb\u00052\u001a\u0002\u00eb\u00ec\u0007\u0012\u0002\u0002\u00ec",
    "\u00ef\u0005,\u0017\u0002\u00ed\u00ee\u0007\u0013\u0002\u0002\u00ee",
    "\u00f0\u00054\u001b\u0002\u00ef\u00ed\u0003\u0002\u0002\u0002\u00ef",
    "\u00f0\u0003\u0002\u0002\u0002\u00f0\'\u0003\u0002\u0002\u0002\u00f1",
    "\u00f2\u0007\u0014\u0002\u0002\u00f2\u00f3\u00050\u0019\u0002\u00f3",
    "\u00f4\u0007\u0012\u0002\u0002\u00f4\u00f5\u0005.\u0018\u0002\u00f5",
    ")\u0003\u0002\u0002\u0002\u00f6\u00f7\t\u0002\u0002\u0002\u00f7+\u0003",
    "\u0002\u0002\u0002\u00f8\u00f9\t\u0002\u0002\u0002\u00f9-\u0003\u0002",
    "\u0002\u0002\u00fa\u00fb\t\u0002\u0002\u0002\u00fb/\u0003\u0002\u0002",
    "\u0002\u00fc\u00fd\t\u0002\u0002\u0002\u00fd1\u0003\u0002\u0002\u0002",
    "\u00fe\u00ff\t\u0002\u0002\u0002\u00ff3\u0003\u0002\u0002\u0002\u0100",
    "\u0102\u00056\u001c\u0002\u0101\u0100\u0003\u0002\u0002\u0002\u0101",
    "\u0102\u0003\u0002\u0002\u0002\u0102\u0103\u0003\u0002\u0002\u0002\u0103",
    "\u011c\u00058\u001d\u0002\u0104\u0106\u00056\u001c\u0002\u0105\u0104",
    "\u0003\u0002\u0002\u0002\u0105\u0106\u0003\u0002\u0002\u0002\u0106\u0107",
    "\u0003\u0002\u0002\u0002\u0107\u0108\u00058\u001d\u0002\u0108\u0109",
    "\u0007\u0007\u0002\u0002\u0109\u010a\u0005@!\u0002\u010a\u011c\u0003",
    "\u0002\u0002\u0002\u010b\u010d\u00056\u001c\u0002\u010c\u010b\u0003",
    "\u0002\u0002\u0002\u010c\u010d\u0003\u0002\u0002\u0002\u010d\u010e\u0003",
    "\u0002\u0002\u0002\u010e\u010f\u00058\u001d\u0002\u010f\u0110\u0007",
    "\u0004\u0002\u0002\u0110\u0111\u0005D#\u0002\u0111\u011c\u0003\u0002",
    "\u0002\u0002\u0112\u0114\u00056\u001c\u0002\u0113\u0112\u0003\u0002",
    "\u0002\u0002\u0113\u0114\u0003\u0002\u0002\u0002\u0114\u0115\u0003\u0002",
    "\u0002\u0002\u0115\u0116\u00058\u001d\u0002\u0116\u0117\u0007\u0007",
    "\u0002\u0002\u0117\u0118\u0005@!\u0002\u0118\u0119\u0007\u0004\u0002",
    "\u0002\u0119\u011a\u0005D#\u0002\u011a\u011c\u0003\u0002\u0002\u0002",
    "\u011b\u0101\u0003\u0002\u0002\u0002\u011b\u0105\u0003\u0002\u0002\u0002",
    "\u011b\u010c\u0003\u0002\u0002\u0002\u011b\u0113\u0003\u0002\u0002\u0002",
    "\u011c5\u0003\u0002\u0002\u0002\u011d\u011e\t\u0003\u0002\u0002\u011e",
    "7\u0003\u0002\u0002\u0002\u011f\u0120\u0005:\u001e\u0002\u0120\u0121",
    "\u0007\u0016\u0002\u0002\u0121\u0122\u0005<\u001f\u0002\u0122\u0123",
    "\u0007\u0016\u0002\u0002\u0123\u0124\u0005> \u0002\u0124\u012c\u0003",
    "\u0002\u0002\u0002\u0125\u0126\u0005:\u001e\u0002\u0126\u0127\u0007",
    "\u0016\u0002\u0002\u0127\u0128\u0005<\u001f\u0002\u0128\u0129\u0007",
    "\u0016\u0002\u0002\u0129\u012a\u0005> \u0002\u012a\u012c\u0003\u0002",
    "\u0002\u0002\u012b\u011f\u0003\u0002\u0002\u0002\u012b\u0125\u0003\u0002",
    "\u0002\u0002\u012c9\u0003\u0002\u0002\u0002\u012d\u012e\u0005N(\u0002",
    "\u012e;\u0003\u0002\u0002\u0002\u012f\u0130\u0005N(\u0002\u0130=\u0003",
    "\u0002\u0002\u0002\u0131\u0132\u0005N(\u0002\u0132?\u0003\u0002\u0002",
    "\u0002\u0133\u0134\u0005B\"\u0002\u0134A\u0003\u0002\u0002\u0002\u0135",
    "\u013b\u0005H%\u0002\u0136\u0137\u0005H%\u0002\u0137\u0138\u0007\u0016",
    "\u0002\u0002\u0138\u0139\u0005B\"\u0002\u0139\u013b\u0003\u0002\u0002",
    "\u0002\u013a\u0135\u0003\u0002\u0002\u0002\u013a\u0136\u0003\u0002\u0002",
    "\u0002\u013bC\u0003\u0002\u0002\u0002\u013c\u013d\u0005F$\u0002\u013d",
    "E\u0003\u0002\u0002\u0002\u013e\u0144\u0005J&\u0002\u013f\u0140\u0005",
    "J&\u0002\u0140\u0141\u0007\u0016\u0002\u0002\u0141\u0142\u0005F$\u0002",
    "\u0142\u0144\u0003\u0002\u0002\u0002\u0143\u013e\u0003\u0002\u0002\u0002",
    "\u0143\u013f\u0003\u0002\u0002\u0002\u0144G\u0003\u0002\u0002\u0002",
    "\u0145\u0148\u0005L\'\u0002\u0146\u0148\u0005N(\u0002\u0147\u0145\u0003",
    "\u0002\u0002\u0002\u0147\u0146\u0003\u0002\u0002\u0002\u0148I\u0003",
    "\u0002\u0002\u0002\u0149\u014c\u0005L\'\u0002\u014a\u014c\u0005V,\u0002",
    "\u014b\u0149\u0003\u0002\u0002\u0002\u014b\u014a\u0003\u0002\u0002\u0002",
    "\u014cK\u0003\u0002\u0002\u0002\u014d\u0159\u0005T+\u0002\u014e\u014f",
    "\u0005T+\u0002\u014f\u0150\u0005P)\u0002\u0150\u0159\u0003\u0002\u0002",
    "\u0002\u0151\u0152\u0005P)\u0002\u0152\u0153\u0005T+\u0002\u0153\u0159",
    "\u0003\u0002\u0002\u0002\u0154\u0155\u0005P)\u0002\u0155\u0156\u0005",
    "T+\u0002\u0156\u0157\u0005P)\u0002\u0157\u0159\u0003\u0002\u0002\u0002",
    "\u0158\u014d\u0003\u0002\u0002\u0002\u0158\u014e\u0003\u0002\u0002\u0002",
    "\u0158\u0151\u0003\u0002\u0002\u0002\u0158\u0154\u0003\u0002\u0002\u0002",
    "\u0159M\u0003\u0002\u0002\u0002\u015a\u0160\u0007\u0017\u0002\u0002",
    "\u015b\u0160\u0005Z.\u0002\u015c\u015d\u0005Z.\u0002\u015d\u015e\u0005",
    "V,\u0002\u015e\u0160\u0003\u0002\u0002\u0002\u015f\u015a\u0003\u0002",
    "\u0002\u0002\u015f\u015b\u0003\u0002\u0002\u0002\u015f\u015c\u0003\u0002",
    "\u0002\u0002\u0160O\u0003\u0002\u0002\u0002\u0161\u0166\u0005R*\u0002",
    "\u0162\u0163\u0005R*\u0002\u0163\u0164\u0005P)\u0002\u0164\u0166\u0003",
    "\u0002\u0002\u0002\u0165\u0161\u0003\u0002\u0002\u0002\u0165\u0162\u0003",
    "\u0002\u0002\u0002\u0166Q\u0003\u0002\u0002\u0002\u0167\u016a\u0005",
    "X-\u0002\u0168\u016a\u0005T+\u0002\u0169\u0167\u0003\u0002\u0002\u0002",
    "\u0169\u0168\u0003\u0002\u0002\u0002\u016aS\u0003\u0002\u0002\u0002",
    "\u016b\u016e\u0005\\/\u0002\u016c\u016e\u0007\u0007\u0002\u0002\u016d",
    "\u016b\u0003\u0002\u0002\u0002\u016d\u016c\u0003\u0002\u0002\u0002\u016e",
    "U\u0003\u0002\u0002\u0002\u016f\u0174\u0005X-\u0002\u0170\u0171\u0005",
    "X-\u0002\u0171\u0172\u0005V,\u0002\u0172\u0174\u0003\u0002\u0002\u0002",
    "\u0173\u016f\u0003\u0002\u0002\u0002\u0173\u0170\u0003\u0002\u0002\u0002",
    "\u0174W\u0003\u0002\u0002\u0002\u0175\u0178\u0007\u0017\u0002\u0002",
    "\u0176\u0178\u0005Z.\u0002\u0177\u0175\u0003\u0002\u0002\u0002\u0177",
    "\u0176\u0003\u0002\u0002\u0002\u0178Y\u0003\u0002\u0002\u0002\u0179",
    "\u017a\t\u0004\u0002\u0002\u017a[\u0003\u0002\u0002\u0002\u017b\u017c",
    "\t\u0005\u0002\u0002\u017c]\u0003\u0002\u0002\u0002(ahmtw~\u0081\u0087",
    "\u008d\u0094\u009b\u00a3\u00aa\u00b5\u00b9\u00c1\u00d4\u00da\u00e3\u00e7",
    "\u00ef\u0101\u0105\u010c\u0113\u011b\u012b\u013a\u0143\u0147\u014b\u0158",
    "\u015f\u0165\u0169\u016d\u0173\u0177"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'!'", "'+'", "'=>'", "'*'", "'-'", "'^'", "'&'", 
                     "'version='", "'tags=['", "','", "']'", "'='", "'['", 
                     "'->'", "'$:'", "'/'", "'@'", "'#:'", "'~'", "'.'", 
                     "'0'", "'1'", "'2'", "'3'", "'4'", "'5'", "'6'", "'7'", 
                     "'8'", "'9'", "'A'", "'B'", "'C'", "'D'", "'E'", "'F'", 
                     "'G'", "'H'", "'I'", "'J'", "'K'", "'L'", "'M'", "'N'", 
                     "'O'", "'P'", "'Q'", "'R'", "'S'", "'T'", "'U'", "'V'", 
                     "'W'", "'X'", "'Y'", "'Z'", "'a'", "'b'", "'c'", "'d'", 
                     "'e'", "'f'", "'g'", "'h'", "'i'", "'j'", "'k'", "'l'", 
                     "'m'", "'n'", "'o'", "'p'", "'q'", "'r'", "'s'", "'t'", 
                     "'u'", "'v'", "'w'", "'x'", "'y'", "'z'", "'scope'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, "SCOPE", "INT", "CHAR", "ID", "SL_COMMENT", 
                      "WS" ];

var ruleNames =  [ "mapping_rules", "mapping_rule", "disabled_modifier", 
                   "add_presentation_rule", "replace_presentation_rule", 
                   "downline_presentation_rule", "online_presentation_rule", 
                   "set_rule", "set_version", "set_tags", "tags", "source_entity", 
                   "replaced", "replacer", "the_candidate", "scope_specification", 
                   "scope_set", "scope_set_element", "release_id", "mock_id", 
                   "presentation_name", "release_name", "mock_name", "bucket_name", 
                   "user_name", "valid_semver", "prefix", "version_core", 
                   "major", "minor", "patch", "preRelease", "dotSeparated_preRelease_identifiers", 
                   "build", "dotSeparated_build_identifiers", "preRelease_identifier", 
                   "build_identifier", "alphanumeric_identifier", "numeric_identifier", 
                   "identifier_characters", "identifier_character", "nonDigit", 
                   "digits", "digit", "positive_digit", "letter" ];

function mappingParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

mappingParser.prototype = Object.create(antlr4.Parser.prototype);
mappingParser.prototype.constructor = mappingParser;

Object.defineProperty(mappingParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

mappingParser.EOF = antlr4.Token.EOF;
mappingParser.T__0 = 1;
mappingParser.T__1 = 2;
mappingParser.T__2 = 3;
mappingParser.T__3 = 4;
mappingParser.T__4 = 5;
mappingParser.T__5 = 6;
mappingParser.T__6 = 7;
mappingParser.T__7 = 8;
mappingParser.T__8 = 9;
mappingParser.T__9 = 10;
mappingParser.T__10 = 11;
mappingParser.T__11 = 12;
mappingParser.T__12 = 13;
mappingParser.T__13 = 14;
mappingParser.T__14 = 15;
mappingParser.T__15 = 16;
mappingParser.T__16 = 17;
mappingParser.T__17 = 18;
mappingParser.T__18 = 19;
mappingParser.T__19 = 20;
mappingParser.T__20 = 21;
mappingParser.T__21 = 22;
mappingParser.T__22 = 23;
mappingParser.T__23 = 24;
mappingParser.T__24 = 25;
mappingParser.T__25 = 26;
mappingParser.T__26 = 27;
mappingParser.T__27 = 28;
mappingParser.T__28 = 29;
mappingParser.T__29 = 30;
mappingParser.T__30 = 31;
mappingParser.T__31 = 32;
mappingParser.T__32 = 33;
mappingParser.T__33 = 34;
mappingParser.T__34 = 35;
mappingParser.T__35 = 36;
mappingParser.T__36 = 37;
mappingParser.T__37 = 38;
mappingParser.T__38 = 39;
mappingParser.T__39 = 40;
mappingParser.T__40 = 41;
mappingParser.T__41 = 42;
mappingParser.T__42 = 43;
mappingParser.T__43 = 44;
mappingParser.T__44 = 45;
mappingParser.T__45 = 46;
mappingParser.T__46 = 47;
mappingParser.T__47 = 48;
mappingParser.T__48 = 49;
mappingParser.T__49 = 50;
mappingParser.T__50 = 51;
mappingParser.T__51 = 52;
mappingParser.T__52 = 53;
mappingParser.T__53 = 54;
mappingParser.T__54 = 55;
mappingParser.T__55 = 56;
mappingParser.T__56 = 57;
mappingParser.T__57 = 58;
mappingParser.T__58 = 59;
mappingParser.T__59 = 60;
mappingParser.T__60 = 61;
mappingParser.T__61 = 62;
mappingParser.T__62 = 63;
mappingParser.T__63 = 64;
mappingParser.T__64 = 65;
mappingParser.T__65 = 66;
mappingParser.T__66 = 67;
mappingParser.T__67 = 68;
mappingParser.T__68 = 69;
mappingParser.T__69 = 70;
mappingParser.T__70 = 71;
mappingParser.T__71 = 72;
mappingParser.T__72 = 73;
mappingParser.T__73 = 74;
mappingParser.T__74 = 75;
mappingParser.T__75 = 76;
mappingParser.T__76 = 77;
mappingParser.T__77 = 78;
mappingParser.T__78 = 79;
mappingParser.T__79 = 80;
mappingParser.T__80 = 81;
mappingParser.T__81 = 82;
mappingParser.SCOPE = 83;
mappingParser.INT = 84;
mappingParser.CHAR = 85;
mappingParser.ID = 86;
mappingParser.SL_COMMENT = 87;
mappingParser.WS = 88;

mappingParser.RULE_mapping_rules = 0;
mappingParser.RULE_mapping_rule = 1;
mappingParser.RULE_disabled_modifier = 2;
mappingParser.RULE_add_presentation_rule = 3;
mappingParser.RULE_replace_presentation_rule = 4;
mappingParser.RULE_downline_presentation_rule = 5;
mappingParser.RULE_online_presentation_rule = 6;
mappingParser.RULE_set_rule = 7;
mappingParser.RULE_set_version = 8;
mappingParser.RULE_set_tags = 9;
mappingParser.RULE_tags = 10;
mappingParser.RULE_source_entity = 11;
mappingParser.RULE_replaced = 12;
mappingParser.RULE_replacer = 13;
mappingParser.RULE_the_candidate = 14;
mappingParser.RULE_scope_specification = 15;
mappingParser.RULE_scope_set = 16;
mappingParser.RULE_scope_set_element = 17;
mappingParser.RULE_release_id = 18;
mappingParser.RULE_mock_id = 19;
mappingParser.RULE_presentation_name = 20;
mappingParser.RULE_release_name = 21;
mappingParser.RULE_mock_name = 22;
mappingParser.RULE_bucket_name = 23;
mappingParser.RULE_user_name = 24;
mappingParser.RULE_valid_semver = 25;
mappingParser.RULE_prefix = 26;
mappingParser.RULE_version_core = 27;
mappingParser.RULE_major = 28;
mappingParser.RULE_minor = 29;
mappingParser.RULE_patch = 30;
mappingParser.RULE_preRelease = 31;
mappingParser.RULE_dotSeparated_preRelease_identifiers = 32;
mappingParser.RULE_build = 33;
mappingParser.RULE_dotSeparated_build_identifiers = 34;
mappingParser.RULE_preRelease_identifier = 35;
mappingParser.RULE_build_identifier = 36;
mappingParser.RULE_alphanumeric_identifier = 37;
mappingParser.RULE_numeric_identifier = 38;
mappingParser.RULE_identifier_characters = 39;
mappingParser.RULE_identifier_character = 40;
mappingParser.RULE_nonDigit = 41;
mappingParser.RULE_digits = 42;
mappingParser.RULE_digit = 43;
mappingParser.RULE_positive_digit = 44;
mappingParser.RULE_letter = 45;

function Mapping_rulesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_mapping_rules;
    return this;
}

Mapping_rulesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Mapping_rulesContext.prototype.constructor = Mapping_rulesContext;

Mapping_rulesContext.prototype.mapping_rule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Mapping_ruleContext);
    } else {
        return this.getTypedRuleContext(Mapping_ruleContext,i);
    }
};

Mapping_rulesContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMapping_rules(this);
	}
};

Mapping_rulesContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMapping_rules(this);
	}
};

Mapping_rulesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitMapping_rules(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Mapping_rulesContext = Mapping_rulesContext;

mappingParser.prototype.mapping_rules = function() {

    var localctx = new Mapping_rulesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, mappingParser.RULE_mapping_rules);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 92;
            this.mapping_rule();
            this.state = 95; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mappingParser.T__0) | (1 << mappingParser.T__1) | (1 << mappingParser.T__3) | (1 << mappingParser.T__4) | (1 << mappingParser.T__5) | (1 << mappingParser.T__6))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Mapping_ruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_mapping_rule;
    return this;
}

Mapping_ruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Mapping_ruleContext.prototype.constructor = Mapping_ruleContext;

Mapping_ruleContext.prototype.add_presentation_rule = function() {
    return this.getTypedRuleContext(Add_presentation_ruleContext,0);
};

Mapping_ruleContext.prototype.replace_presentation_rule = function() {
    return this.getTypedRuleContext(Replace_presentation_ruleContext,0);
};

Mapping_ruleContext.prototype.downline_presentation_rule = function() {
    return this.getTypedRuleContext(Downline_presentation_ruleContext,0);
};

Mapping_ruleContext.prototype.online_presentation_rule = function() {
    return this.getTypedRuleContext(Online_presentation_ruleContext,0);
};

Mapping_ruleContext.prototype.set_rule = function() {
    return this.getTypedRuleContext(Set_ruleContext,0);
};

Mapping_ruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMapping_rule(this);
	}
};

Mapping_ruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMapping_rule(this);
	}
};

Mapping_ruleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitMapping_rule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Mapping_ruleContext = Mapping_ruleContext;

mappingParser.prototype.mapping_rule = function() {

    var localctx = new Mapping_ruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, mappingParser.RULE_mapping_rule);
    try {
        this.state = 102;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 97;
            this.add_presentation_rule();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 98;
            this.replace_presentation_rule();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 99;
            this.downline_presentation_rule();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 100;
            this.online_presentation_rule();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 101;
            this.set_rule();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Disabled_modifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_disabled_modifier;
    return this;
}

Disabled_modifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Disabled_modifierContext.prototype.constructor = Disabled_modifierContext;


Disabled_modifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterDisabled_modifier(this);
	}
};

Disabled_modifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitDisabled_modifier(this);
	}
};

Disabled_modifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitDisabled_modifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Disabled_modifierContext = Disabled_modifierContext;

mappingParser.prototype.disabled_modifier = function() {

    var localctx = new Disabled_modifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, mappingParser.RULE_disabled_modifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.match(mappingParser.T__0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Add_presentation_ruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_add_presentation_rule;
    return this;
}

Add_presentation_ruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Add_presentation_ruleContext.prototype.constructor = Add_presentation_ruleContext;

Add_presentation_ruleContext.prototype.presentation_name = function() {
    return this.getTypedRuleContext(Presentation_nameContext,0);
};

Add_presentation_ruleContext.prototype.the_candidate = function() {
    return this.getTypedRuleContext(The_candidateContext,0);
};

Add_presentation_ruleContext.prototype.disabled_modifier = function() {
    return this.getTypedRuleContext(Disabled_modifierContext,0);
};

Add_presentation_ruleContext.prototype.set_tags = function() {
    return this.getTypedRuleContext(Set_tagsContext,0);
};

Add_presentation_ruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterAdd_presentation_rule(this);
	}
};

Add_presentation_ruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitAdd_presentation_rule(this);
	}
};

Add_presentation_ruleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitAdd_presentation_rule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Add_presentation_ruleContext = Add_presentation_ruleContext;

mappingParser.prototype.add_presentation_rule = function() {

    var localctx = new Add_presentation_ruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, mappingParser.RULE_add_presentation_rule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__0) {
            this.state = 106;
            this.disabled_modifier();
        }

        this.state = 109;
        this.match(mappingParser.T__1);
        this.state = 110;
        this.presentation_name();
        this.state = 111;
        this.match(mappingParser.T__2);
        this.state = 112;
        this.the_candidate();
        this.state = 114;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__8) {
            this.state = 113;
            this.set_tags();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Replace_presentation_ruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_replace_presentation_rule;
    return this;
}

Replace_presentation_ruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Replace_presentation_ruleContext.prototype.constructor = Replace_presentation_ruleContext;

Replace_presentation_ruleContext.prototype.replaced = function() {
    return this.getTypedRuleContext(ReplacedContext,0);
};

Replace_presentation_ruleContext.prototype.replacer = function() {
    return this.getTypedRuleContext(ReplacerContext,0);
};

Replace_presentation_ruleContext.prototype.disabled_modifier = function() {
    return this.getTypedRuleContext(Disabled_modifierContext,0);
};

Replace_presentation_ruleContext.prototype.scope_specification = function() {
    return this.getTypedRuleContext(Scope_specificationContext,0);
};

Replace_presentation_ruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterReplace_presentation_rule(this);
	}
};

Replace_presentation_ruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitReplace_presentation_rule(this);
	}
};

Replace_presentation_ruleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitReplace_presentation_rule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Replace_presentation_ruleContext = Replace_presentation_ruleContext;

mappingParser.prototype.replace_presentation_rule = function() {

    var localctx = new Replace_presentation_ruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, mappingParser.RULE_replace_presentation_rule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__0) {
            this.state = 116;
            this.disabled_modifier();
        }

        this.state = 119;
        this.match(mappingParser.T__3);
        this.state = 120;
        this.replaced();
        this.state = 121;
        this.match(mappingParser.T__2);
        this.state = 122;
        this.replacer();
        this.state = 124;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.SCOPE) {
            this.state = 123;
            this.scope_specification();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Downline_presentation_ruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_downline_presentation_rule;
    return this;
}

Downline_presentation_ruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Downline_presentation_ruleContext.prototype.constructor = Downline_presentation_ruleContext;

Downline_presentation_ruleContext.prototype.presentation_name = function() {
    return this.getTypedRuleContext(Presentation_nameContext,0);
};

Downline_presentation_ruleContext.prototype.disabled_modifier = function() {
    return this.getTypedRuleContext(Disabled_modifierContext,0);
};

Downline_presentation_ruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterDownline_presentation_rule(this);
	}
};

Downline_presentation_ruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitDownline_presentation_rule(this);
	}
};

Downline_presentation_ruleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitDownline_presentation_rule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Downline_presentation_ruleContext = Downline_presentation_ruleContext;

mappingParser.prototype.downline_presentation_rule = function() {

    var localctx = new Downline_presentation_ruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, mappingParser.RULE_downline_presentation_rule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__0) {
            this.state = 126;
            this.disabled_modifier();
        }

        this.state = 129;
        this.match(mappingParser.T__4);
        this.state = 130;
        this.presentation_name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Online_presentation_ruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_online_presentation_rule;
    return this;
}

Online_presentation_ruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Online_presentation_ruleContext.prototype.constructor = Online_presentation_ruleContext;

Online_presentation_ruleContext.prototype.presentation_name = function() {
    return this.getTypedRuleContext(Presentation_nameContext,0);
};

Online_presentation_ruleContext.prototype.disabled_modifier = function() {
    return this.getTypedRuleContext(Disabled_modifierContext,0);
};

Online_presentation_ruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterOnline_presentation_rule(this);
	}
};

Online_presentation_ruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitOnline_presentation_rule(this);
	}
};

Online_presentation_ruleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitOnline_presentation_rule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Online_presentation_ruleContext = Online_presentation_ruleContext;

mappingParser.prototype.online_presentation_rule = function() {

    var localctx = new Online_presentation_ruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, mappingParser.RULE_online_presentation_rule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__0) {
            this.state = 132;
            this.disabled_modifier();
        }

        this.state = 135;
        this.match(mappingParser.T__5);
        this.state = 136;
        this.presentation_name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Set_ruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_set_rule;
    return this;
}

Set_ruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Set_ruleContext.prototype.constructor = Set_ruleContext;

Set_ruleContext.prototype.presentation_name = function() {
    return this.getTypedRuleContext(Presentation_nameContext,0);
};

Set_ruleContext.prototype.set_tags = function() {
    return this.getTypedRuleContext(Set_tagsContext,0);
};

Set_ruleContext.prototype.disabled_modifier = function() {
    return this.getTypedRuleContext(Disabled_modifierContext,0);
};

Set_ruleContext.prototype.set_version = function() {
    return this.getTypedRuleContext(Set_versionContext,0);
};

Set_ruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterSet_rule(this);
	}
};

Set_ruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitSet_rule(this);
	}
};

Set_ruleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitSet_rule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Set_ruleContext = Set_ruleContext;

mappingParser.prototype.set_rule = function() {

    var localctx = new Set_ruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, mappingParser.RULE_set_rule);
    var _la = 0; // Token type
    try {
        this.state = 168;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 139;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===mappingParser.T__0) {
                this.state = 138;
                this.disabled_modifier();
            }

            this.state = 141;
            this.match(mappingParser.T__6);
            this.state = 142;
            this.presentation_name();
            this.state = 143;
            this.set_tags();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 146;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===mappingParser.T__0) {
                this.state = 145;
                this.disabled_modifier();
            }

            this.state = 148;
            this.match(mappingParser.T__6);
            this.state = 149;
            this.presentation_name();
            this.state = 150;
            this.set_version();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 153;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===mappingParser.T__0) {
                this.state = 152;
                this.disabled_modifier();
            }

            this.state = 155;
            this.match(mappingParser.T__6);
            this.state = 156;
            this.presentation_name();
            this.state = 157;
            this.set_version();
            this.state = 158;
            this.set_tags();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 161;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===mappingParser.T__0) {
                this.state = 160;
                this.disabled_modifier();
            }

            this.state = 163;
            this.match(mappingParser.T__6);
            this.state = 164;
            this.presentation_name();
            this.state = 165;
            this.set_tags();
            this.state = 166;
            this.set_version();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Set_versionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_set_version;
    return this;
}

Set_versionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Set_versionContext.prototype.constructor = Set_versionContext;

Set_versionContext.prototype.valid_semver = function() {
    return this.getTypedRuleContext(Valid_semverContext,0);
};

Set_versionContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterSet_version(this);
	}
};

Set_versionContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitSet_version(this);
	}
};

Set_versionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitSet_version(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Set_versionContext = Set_versionContext;

mappingParser.prototype.set_version = function() {

    var localctx = new Set_versionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, mappingParser.RULE_set_version);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this.match(mappingParser.T__7);

        this.state = 171;
        this.valid_semver();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Set_tagsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_set_tags;
    return this;
}

Set_tagsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Set_tagsContext.prototype.constructor = Set_tagsContext;

Set_tagsContext.prototype.tags = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TagsContext);
    } else {
        return this.getTypedRuleContext(TagsContext,i);
    }
};

Set_tagsContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterSet_tags(this);
	}
};

Set_tagsContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitSet_tags(this);
	}
};

Set_tagsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitSet_tags(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Set_tagsContext = Set_tagsContext;

mappingParser.prototype.set_tags = function() {

    var localctx = new Set_tagsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, mappingParser.RULE_set_tags);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.match(mappingParser.T__8);
        this.state = 183;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.INT || _la===mappingParser.ID) {
            this.state = 179;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 174;
                    this.tags();
                    this.state = 175;
                    this.match(mappingParser.T__9); 
                }
                this.state = 181;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
            }

            this.state = 182;
            this.tags();
        }

        this.state = 185;
        this.match(mappingParser.T__10);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TagsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_tags;
    return this;
}

TagsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagsContext.prototype.constructor = TagsContext;

TagsContext.prototype.ID = function() {
    return this.getToken(mappingParser.ID, 0);
};

TagsContext.prototype.INT = function() {
    return this.getToken(mappingParser.INT, 0);
};

TagsContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterTags(this);
	}
};

TagsContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitTags(this);
	}
};

TagsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitTags(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.TagsContext = TagsContext;

mappingParser.prototype.tags = function() {

    var localctx = new TagsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, mappingParser.RULE_tags);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        _la = this._input.LA(1);
        if(!(_la===mappingParser.INT || _la===mappingParser.ID)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Source_entityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_source_entity;
    return this;
}

Source_entityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Source_entityContext.prototype.constructor = Source_entityContext;

Source_entityContext.prototype.release_id = function() {
    return this.getTypedRuleContext(Release_idContext,0);
};

Source_entityContext.prototype.mock_id = function() {
    return this.getTypedRuleContext(Mock_idContext,0);
};

Source_entityContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterSource_entity(this);
	}
};

Source_entityContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitSource_entity(this);
	}
};

Source_entityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitSource_entity(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Source_entityContext = Source_entityContext;

mappingParser.prototype.source_entity = function() {

    var localctx = new Source_entityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, mappingParser.RULE_source_entity);
    try {
        this.state = 191;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.T__14:
            this.enterOuterAlt(localctx, 1);
            this.state = 189;
            this.release_id();
            break;
        case mappingParser.T__17:
            this.enterOuterAlt(localctx, 2);
            this.state = 190;
            this.mock_id();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReplacedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_replaced;
    return this;
}

ReplacedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReplacedContext.prototype.constructor = ReplacedContext;

ReplacedContext.prototype.release_id = function() {
    return this.getTypedRuleContext(Release_idContext,0);
};

ReplacedContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterReplaced(this);
	}
};

ReplacedContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitReplaced(this);
	}
};

ReplacedContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitReplaced(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.ReplacedContext = ReplacedContext;

mappingParser.prototype.replaced = function() {

    var localctx = new ReplacedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, mappingParser.RULE_replaced);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this.release_id();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReplacerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_replacer;
    return this;
}

ReplacerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReplacerContext.prototype.constructor = ReplacerContext;

ReplacerContext.prototype.source_entity = function() {
    return this.getTypedRuleContext(Source_entityContext,0);
};

ReplacerContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterReplacer(this);
	}
};

ReplacerContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitReplacer(this);
	}
};

ReplacerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitReplacer(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.ReplacerContext = ReplacerContext;

mappingParser.prototype.replacer = function() {

    var localctx = new ReplacerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, mappingParser.RULE_replacer);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.source_entity();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function The_candidateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_the_candidate;
    return this;
}

The_candidateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
The_candidateContext.prototype.constructor = The_candidateContext;

The_candidateContext.prototype.source_entity = function() {
    return this.getTypedRuleContext(Source_entityContext,0);
};

The_candidateContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterThe_candidate(this);
	}
};

The_candidateContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitThe_candidate(this);
	}
};

The_candidateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitThe_candidate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.The_candidateContext = The_candidateContext;

mappingParser.prototype.the_candidate = function() {

    var localctx = new The_candidateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, mappingParser.RULE_the_candidate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.source_entity();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Scope_specificationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_scope_specification;
    return this;
}

Scope_specificationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Scope_specificationContext.prototype.constructor = Scope_specificationContext;

Scope_specificationContext.prototype.SCOPE = function() {
    return this.getToken(mappingParser.SCOPE, 0);
};

Scope_specificationContext.prototype.scope_set = function() {
    return this.getTypedRuleContext(Scope_setContext,0);
};

Scope_specificationContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterScope_specification(this);
	}
};

Scope_specificationContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitScope_specification(this);
	}
};

Scope_specificationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitScope_specification(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Scope_specificationContext = Scope_specificationContext;

mappingParser.prototype.scope_specification = function() {

    var localctx = new Scope_specificationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, mappingParser.RULE_scope_specification);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.match(mappingParser.SCOPE);
        this.state = 200;
        this.match(mappingParser.T__11);
        this.state = 201;
        this.scope_set();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Scope_setContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_scope_set;
    return this;
}

Scope_setContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Scope_setContext.prototype.constructor = Scope_setContext;

Scope_setContext.prototype.scope_set_element = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Scope_set_elementContext);
    } else {
        return this.getTypedRuleContext(Scope_set_elementContext,i);
    }
};

Scope_setContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterScope_set(this);
	}
};

Scope_setContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitScope_set(this);
	}
};

Scope_setContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitScope_set(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Scope_setContext = Scope_setContext;

mappingParser.prototype.scope_set = function() {

    var localctx = new Scope_setContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, mappingParser.RULE_scope_set);
    try {
        this.state = 216;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.INT:
        case mappingParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 203;
            this.scope_set_element();
            break;
        case mappingParser.T__12:
            this.enterOuterAlt(localctx, 2);
            this.state = 204;
            this.match(mappingParser.T__12);
            this.state = 210;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 205;
                    this.scope_set_element();
                    this.state = 206;
                    this.match(mappingParser.T__9); 
                }
                this.state = 212;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
            }

            this.state = 213;
            this.scope_set_element();
            this.state = 214;
            this.match(mappingParser.T__10);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Scope_set_elementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_scope_set_element;
    return this;
}

Scope_set_elementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Scope_set_elementContext.prototype.constructor = Scope_set_elementContext;

Scope_set_elementContext.prototype.presentation_name = function() {
    return this.getTypedRuleContext(Presentation_nameContext,0);
};

Scope_set_elementContext.prototype.source_entity = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Source_entityContext);
    } else {
        return this.getTypedRuleContext(Source_entityContext,i);
    }
};

Scope_set_elementContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterScope_set_element(this);
	}
};

Scope_set_elementContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitScope_set_element(this);
	}
};

Scope_set_elementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitScope_set_element(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Scope_set_elementContext = Scope_set_elementContext;

mappingParser.prototype.scope_set_element = function() {

    var localctx = new Scope_set_elementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, mappingParser.RULE_scope_set_element);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        this.presentation_name();
        this.state = 229;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__13) {
            this.state = 219;
            this.match(mappingParser.T__13);
            this.state = 225;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 220;
                    this.source_entity();
                    this.state = 221;
                    this.match(mappingParser.T__13); 
                }
                this.state = 227;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
            }

            this.state = 228;
            this.source_entity();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Release_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_release_id;
    return this;
}

Release_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Release_idContext.prototype.constructor = Release_idContext;

Release_idContext.prototype.user_name = function() {
    return this.getTypedRuleContext(User_nameContext,0);
};

Release_idContext.prototype.release_name = function() {
    return this.getTypedRuleContext(Release_nameContext,0);
};

Release_idContext.prototype.valid_semver = function() {
    return this.getTypedRuleContext(Valid_semverContext,0);
};

Release_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterRelease_id(this);
	}
};

Release_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitRelease_id(this);
	}
};

Release_idContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitRelease_id(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Release_idContext = Release_idContext;

mappingParser.prototype.release_id = function() {

    var localctx = new Release_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, mappingParser.RULE_release_id);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 231;
        this.match(mappingParser.T__14);
        this.state = 232;
        this.user_name();
        this.state = 233;
        this.match(mappingParser.T__15);
        this.state = 234;
        this.release_name();
        this.state = 237;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__16) {
            this.state = 235;
            this.match(mappingParser.T__16);
            this.state = 236;
            this.valid_semver();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Mock_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_mock_id;
    return this;
}

Mock_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Mock_idContext.prototype.constructor = Mock_idContext;

Mock_idContext.prototype.bucket_name = function() {
    return this.getTypedRuleContext(Bucket_nameContext,0);
};

Mock_idContext.prototype.mock_name = function() {
    return this.getTypedRuleContext(Mock_nameContext,0);
};

Mock_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMock_id(this);
	}
};

Mock_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMock_id(this);
	}
};

Mock_idContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitMock_id(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Mock_idContext = Mock_idContext;

mappingParser.prototype.mock_id = function() {

    var localctx = new Mock_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, mappingParser.RULE_mock_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 239;
        this.match(mappingParser.T__17);
        this.state = 240;
        this.bucket_name();
        this.state = 241;
        this.match(mappingParser.T__15);
        this.state = 242;
        this.mock_name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Presentation_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_presentation_name;
    return this;
}

Presentation_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Presentation_nameContext.prototype.constructor = Presentation_nameContext;

Presentation_nameContext.prototype.ID = function() {
    return this.getToken(mappingParser.ID, 0);
};

Presentation_nameContext.prototype.INT = function() {
    return this.getToken(mappingParser.INT, 0);
};

Presentation_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterPresentation_name(this);
	}
};

Presentation_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitPresentation_name(this);
	}
};

Presentation_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitPresentation_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Presentation_nameContext = Presentation_nameContext;

mappingParser.prototype.presentation_name = function() {

    var localctx = new Presentation_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, mappingParser.RULE_presentation_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
        _la = this._input.LA(1);
        if(!(_la===mappingParser.INT || _la===mappingParser.ID)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Release_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_release_name;
    return this;
}

Release_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Release_nameContext.prototype.constructor = Release_nameContext;

Release_nameContext.prototype.ID = function() {
    return this.getToken(mappingParser.ID, 0);
};

Release_nameContext.prototype.INT = function() {
    return this.getToken(mappingParser.INT, 0);
};

Release_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterRelease_name(this);
	}
};

Release_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitRelease_name(this);
	}
};

Release_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitRelease_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Release_nameContext = Release_nameContext;

mappingParser.prototype.release_name = function() {

    var localctx = new Release_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, mappingParser.RULE_release_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 246;
        _la = this._input.LA(1);
        if(!(_la===mappingParser.INT || _la===mappingParser.ID)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Mock_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_mock_name;
    return this;
}

Mock_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Mock_nameContext.prototype.constructor = Mock_nameContext;

Mock_nameContext.prototype.ID = function() {
    return this.getToken(mappingParser.ID, 0);
};

Mock_nameContext.prototype.INT = function() {
    return this.getToken(mappingParser.INT, 0);
};

Mock_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMock_name(this);
	}
};

Mock_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMock_name(this);
	}
};

Mock_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitMock_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Mock_nameContext = Mock_nameContext;

mappingParser.prototype.mock_name = function() {

    var localctx = new Mock_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, mappingParser.RULE_mock_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 248;
        _la = this._input.LA(1);
        if(!(_la===mappingParser.INT || _la===mappingParser.ID)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Bucket_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_bucket_name;
    return this;
}

Bucket_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Bucket_nameContext.prototype.constructor = Bucket_nameContext;

Bucket_nameContext.prototype.ID = function() {
    return this.getToken(mappingParser.ID, 0);
};

Bucket_nameContext.prototype.INT = function() {
    return this.getToken(mappingParser.INT, 0);
};

Bucket_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterBucket_name(this);
	}
};

Bucket_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitBucket_name(this);
	}
};

Bucket_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitBucket_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Bucket_nameContext = Bucket_nameContext;

mappingParser.prototype.bucket_name = function() {

    var localctx = new Bucket_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, mappingParser.RULE_bucket_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 250;
        _la = this._input.LA(1);
        if(!(_la===mappingParser.INT || _la===mappingParser.ID)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function User_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_user_name;
    return this;
}

User_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
User_nameContext.prototype.constructor = User_nameContext;

User_nameContext.prototype.ID = function() {
    return this.getToken(mappingParser.ID, 0);
};

User_nameContext.prototype.INT = function() {
    return this.getToken(mappingParser.INT, 0);
};

User_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterUser_name(this);
	}
};

User_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitUser_name(this);
	}
};

User_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitUser_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.User_nameContext = User_nameContext;

mappingParser.prototype.user_name = function() {

    var localctx = new User_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, mappingParser.RULE_user_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 252;
        _la = this._input.LA(1);
        if(!(_la===mappingParser.INT || _la===mappingParser.ID)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Valid_semverContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_valid_semver;
    return this;
}

Valid_semverContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Valid_semverContext.prototype.constructor = Valid_semverContext;

Valid_semverContext.prototype.version_core = function() {
    return this.getTypedRuleContext(Version_coreContext,0);
};

Valid_semverContext.prototype.prefix = function() {
    return this.getTypedRuleContext(PrefixContext,0);
};

Valid_semverContext.prototype.preRelease = function() {
    return this.getTypedRuleContext(PreReleaseContext,0);
};

Valid_semverContext.prototype.build = function() {
    return this.getTypedRuleContext(BuildContext,0);
};

Valid_semverContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterValid_semver(this);
	}
};

Valid_semverContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitValid_semver(this);
	}
};

Valid_semverContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitValid_semver(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Valid_semverContext = Valid_semverContext;

mappingParser.prototype.valid_semver = function() {

    var localctx = new Valid_semverContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, mappingParser.RULE_valid_semver);
    var _la = 0; // Token type
    try {
        this.state = 281;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 255;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===mappingParser.T__5 || _la===mappingParser.T__18) {
                this.state = 254;
                this.prefix();
            }

            this.state = 257;
            this.version_core();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 259;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===mappingParser.T__5 || _la===mappingParser.T__18) {
                this.state = 258;
                this.prefix();
            }

            this.state = 261;
            this.version_core();
            this.state = 262;
            this.match(mappingParser.T__4);
            this.state = 263;
            this.preRelease();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 266;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===mappingParser.T__5 || _la===mappingParser.T__18) {
                this.state = 265;
                this.prefix();
            }

            this.state = 268;
            this.version_core();
            this.state = 269;
            this.match(mappingParser.T__1);
            this.state = 270;
            this.build();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 273;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===mappingParser.T__5 || _la===mappingParser.T__18) {
                this.state = 272;
                this.prefix();
            }

            this.state = 275;
            this.version_core();
            this.state = 276;
            this.match(mappingParser.T__4);
            this.state = 277;
            this.preRelease();
            this.state = 278;
            this.match(mappingParser.T__1);
            this.state = 279;
            this.build();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrefixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_prefix;
    return this;
}

PrefixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrefixContext.prototype.constructor = PrefixContext;


PrefixContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterPrefix(this);
	}
};

PrefixContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitPrefix(this);
	}
};

PrefixContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitPrefix(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.PrefixContext = PrefixContext;

mappingParser.prototype.prefix = function() {

    var localctx = new PrefixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, mappingParser.RULE_prefix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        _la = this._input.LA(1);
        if(!(_la===mappingParser.T__5 || _la===mappingParser.T__18)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Version_coreContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_version_core;
    return this;
}

Version_coreContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Version_coreContext.prototype.constructor = Version_coreContext;

Version_coreContext.prototype.major = function() {
    return this.getTypedRuleContext(MajorContext,0);
};

Version_coreContext.prototype.minor = function() {
    return this.getTypedRuleContext(MinorContext,0);
};

Version_coreContext.prototype.patch = function() {
    return this.getTypedRuleContext(PatchContext,0);
};

Version_coreContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterVersion_core(this);
	}
};

Version_coreContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitVersion_core(this);
	}
};

Version_coreContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitVersion_core(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Version_coreContext = Version_coreContext;

mappingParser.prototype.version_core = function() {

    var localctx = new Version_coreContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, mappingParser.RULE_version_core);
    try {
        this.state = 297;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 285;
            this.major();
            this.state = 286;
            this.match(mappingParser.T__19);
            this.state = 287;
            this.minor();
            this.state = 288;
            this.match(mappingParser.T__19);
            this.state = 289;
            this.patch();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 291;
            this.major();
            this.state = 292;
            this.match(mappingParser.T__19);
            this.state = 293;
            this.minor();
            this.state = 294;
            this.match(mappingParser.T__19);
            this.state = 295;
            this.patch();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MajorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_major;
    return this;
}

MajorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MajorContext.prototype.constructor = MajorContext;

MajorContext.prototype.numeric_identifier = function() {
    return this.getTypedRuleContext(Numeric_identifierContext,0);
};

MajorContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMajor(this);
	}
};

MajorContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMajor(this);
	}
};

MajorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitMajor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.MajorContext = MajorContext;

mappingParser.prototype.major = function() {

    var localctx = new MajorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, mappingParser.RULE_major);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 299;
        this.numeric_identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MinorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_minor;
    return this;
}

MinorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MinorContext.prototype.constructor = MinorContext;

MinorContext.prototype.numeric_identifier = function() {
    return this.getTypedRuleContext(Numeric_identifierContext,0);
};

MinorContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMinor(this);
	}
};

MinorContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMinor(this);
	}
};

MinorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitMinor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.MinorContext = MinorContext;

mappingParser.prototype.minor = function() {

    var localctx = new MinorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, mappingParser.RULE_minor);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        this.numeric_identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PatchContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_patch;
    return this;
}

PatchContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PatchContext.prototype.constructor = PatchContext;

PatchContext.prototype.numeric_identifier = function() {
    return this.getTypedRuleContext(Numeric_identifierContext,0);
};

PatchContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterPatch(this);
	}
};

PatchContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitPatch(this);
	}
};

PatchContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitPatch(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.PatchContext = PatchContext;

mappingParser.prototype.patch = function() {

    var localctx = new PatchContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, mappingParser.RULE_patch);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 303;
        this.numeric_identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PreReleaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_preRelease;
    return this;
}

PreReleaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PreReleaseContext.prototype.constructor = PreReleaseContext;

PreReleaseContext.prototype.dotSeparated_preRelease_identifiers = function() {
    return this.getTypedRuleContext(DotSeparated_preRelease_identifiersContext,0);
};

PreReleaseContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterPreRelease(this);
	}
};

PreReleaseContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitPreRelease(this);
	}
};

PreReleaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitPreRelease(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.PreReleaseContext = PreReleaseContext;

mappingParser.prototype.preRelease = function() {

    var localctx = new PreReleaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, mappingParser.RULE_preRelease);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 305;
        this.dotSeparated_preRelease_identifiers();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DotSeparated_preRelease_identifiersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_dotSeparated_preRelease_identifiers;
    return this;
}

DotSeparated_preRelease_identifiersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DotSeparated_preRelease_identifiersContext.prototype.constructor = DotSeparated_preRelease_identifiersContext;

DotSeparated_preRelease_identifiersContext.prototype.preRelease_identifier = function() {
    return this.getTypedRuleContext(PreRelease_identifierContext,0);
};

DotSeparated_preRelease_identifiersContext.prototype.dotSeparated_preRelease_identifiers = function() {
    return this.getTypedRuleContext(DotSeparated_preRelease_identifiersContext,0);
};

DotSeparated_preRelease_identifiersContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterDotSeparated_preRelease_identifiers(this);
	}
};

DotSeparated_preRelease_identifiersContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitDotSeparated_preRelease_identifiers(this);
	}
};

DotSeparated_preRelease_identifiersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitDotSeparated_preRelease_identifiers(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.DotSeparated_preRelease_identifiersContext = DotSeparated_preRelease_identifiersContext;

mappingParser.prototype.dotSeparated_preRelease_identifiers = function() {

    var localctx = new DotSeparated_preRelease_identifiersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, mappingParser.RULE_dotSeparated_preRelease_identifiers);
    try {
        this.state = 312;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 307;
            this.preRelease_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 308;
            this.preRelease_identifier();
            this.state = 309;
            this.match(mappingParser.T__19);
            this.state = 310;
            this.dotSeparated_preRelease_identifiers();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BuildContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_build;
    return this;
}

BuildContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BuildContext.prototype.constructor = BuildContext;

BuildContext.prototype.dotSeparated_build_identifiers = function() {
    return this.getTypedRuleContext(DotSeparated_build_identifiersContext,0);
};

BuildContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterBuild(this);
	}
};

BuildContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitBuild(this);
	}
};

BuildContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitBuild(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.BuildContext = BuildContext;

mappingParser.prototype.build = function() {

    var localctx = new BuildContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, mappingParser.RULE_build);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 314;
        this.dotSeparated_build_identifiers();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DotSeparated_build_identifiersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_dotSeparated_build_identifiers;
    return this;
}

DotSeparated_build_identifiersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DotSeparated_build_identifiersContext.prototype.constructor = DotSeparated_build_identifiersContext;

DotSeparated_build_identifiersContext.prototype.build_identifier = function() {
    return this.getTypedRuleContext(Build_identifierContext,0);
};

DotSeparated_build_identifiersContext.prototype.dotSeparated_build_identifiers = function() {
    return this.getTypedRuleContext(DotSeparated_build_identifiersContext,0);
};

DotSeparated_build_identifiersContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterDotSeparated_build_identifiers(this);
	}
};

DotSeparated_build_identifiersContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitDotSeparated_build_identifiers(this);
	}
};

DotSeparated_build_identifiersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitDotSeparated_build_identifiers(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.DotSeparated_build_identifiersContext = DotSeparated_build_identifiersContext;

mappingParser.prototype.dotSeparated_build_identifiers = function() {

    var localctx = new DotSeparated_build_identifiersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, mappingParser.RULE_dotSeparated_build_identifiers);
    try {
        this.state = 321;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 316;
            this.build_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 317;
            this.build_identifier();
            this.state = 318;
            this.match(mappingParser.T__19);
            this.state = 319;
            this.dotSeparated_build_identifiers();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PreRelease_identifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_preRelease_identifier;
    return this;
}

PreRelease_identifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PreRelease_identifierContext.prototype.constructor = PreRelease_identifierContext;

PreRelease_identifierContext.prototype.alphanumeric_identifier = function() {
    return this.getTypedRuleContext(Alphanumeric_identifierContext,0);
};

PreRelease_identifierContext.prototype.numeric_identifier = function() {
    return this.getTypedRuleContext(Numeric_identifierContext,0);
};

PreRelease_identifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterPreRelease_identifier(this);
	}
};

PreRelease_identifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitPreRelease_identifier(this);
	}
};

PreRelease_identifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitPreRelease_identifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.PreRelease_identifierContext = PreRelease_identifierContext;

mappingParser.prototype.preRelease_identifier = function() {

    var localctx = new PreRelease_identifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, mappingParser.RULE_preRelease_identifier);
    try {
        this.state = 325;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 323;
            this.alphanumeric_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 324;
            this.numeric_identifier();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Build_identifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_build_identifier;
    return this;
}

Build_identifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Build_identifierContext.prototype.constructor = Build_identifierContext;

Build_identifierContext.prototype.alphanumeric_identifier = function() {
    return this.getTypedRuleContext(Alphanumeric_identifierContext,0);
};

Build_identifierContext.prototype.digits = function() {
    return this.getTypedRuleContext(DigitsContext,0);
};

Build_identifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterBuild_identifier(this);
	}
};

Build_identifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitBuild_identifier(this);
	}
};

Build_identifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitBuild_identifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Build_identifierContext = Build_identifierContext;

mappingParser.prototype.build_identifier = function() {

    var localctx = new Build_identifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, mappingParser.RULE_build_identifier);
    try {
        this.state = 329;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 327;
            this.alphanumeric_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 328;
            this.digits();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Alphanumeric_identifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_alphanumeric_identifier;
    return this;
}

Alphanumeric_identifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Alphanumeric_identifierContext.prototype.constructor = Alphanumeric_identifierContext;

Alphanumeric_identifierContext.prototype.nonDigit = function() {
    return this.getTypedRuleContext(NonDigitContext,0);
};

Alphanumeric_identifierContext.prototype.identifier_characters = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Identifier_charactersContext);
    } else {
        return this.getTypedRuleContext(Identifier_charactersContext,i);
    }
};

Alphanumeric_identifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterAlphanumeric_identifier(this);
	}
};

Alphanumeric_identifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitAlphanumeric_identifier(this);
	}
};

Alphanumeric_identifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitAlphanumeric_identifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Alphanumeric_identifierContext = Alphanumeric_identifierContext;

mappingParser.prototype.alphanumeric_identifier = function() {

    var localctx = new Alphanumeric_identifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, mappingParser.RULE_alphanumeric_identifier);
    try {
        this.state = 342;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 331;
            this.nonDigit();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 332;
            this.nonDigit();
            this.state = 333;
            this.identifier_characters();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 335;
            this.identifier_characters();
            this.state = 336;
            this.nonDigit();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 338;
            this.identifier_characters();
            this.state = 339;
            this.nonDigit();
            this.state = 340;
            this.identifier_characters();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Numeric_identifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_numeric_identifier;
    return this;
}

Numeric_identifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Numeric_identifierContext.prototype.constructor = Numeric_identifierContext;

Numeric_identifierContext.prototype.positive_digit = function() {
    return this.getTypedRuleContext(Positive_digitContext,0);
};

Numeric_identifierContext.prototype.digits = function() {
    return this.getTypedRuleContext(DigitsContext,0);
};

Numeric_identifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterNumeric_identifier(this);
	}
};

Numeric_identifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitNumeric_identifier(this);
	}
};

Numeric_identifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitNumeric_identifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Numeric_identifierContext = Numeric_identifierContext;

mappingParser.prototype.numeric_identifier = function() {

    var localctx = new Numeric_identifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, mappingParser.RULE_numeric_identifier);
    try {
        this.state = 349;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 344;
            this.match(mappingParser.T__20);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 345;
            this.positive_digit();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 346;
            this.positive_digit();
            this.state = 347;
            this.digits();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Identifier_charactersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_identifier_characters;
    return this;
}

Identifier_charactersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Identifier_charactersContext.prototype.constructor = Identifier_charactersContext;

Identifier_charactersContext.prototype.identifier_character = function() {
    return this.getTypedRuleContext(Identifier_characterContext,0);
};

Identifier_charactersContext.prototype.identifier_characters = function() {
    return this.getTypedRuleContext(Identifier_charactersContext,0);
};

Identifier_charactersContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterIdentifier_characters(this);
	}
};

Identifier_charactersContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitIdentifier_characters(this);
	}
};

Identifier_charactersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitIdentifier_characters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Identifier_charactersContext = Identifier_charactersContext;

mappingParser.prototype.identifier_characters = function() {

    var localctx = new Identifier_charactersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, mappingParser.RULE_identifier_characters);
    try {
        this.state = 355;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 351;
            this.identifier_character();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 352;
            this.identifier_character();
            this.state = 353;
            this.identifier_characters();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Identifier_characterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_identifier_character;
    return this;
}

Identifier_characterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Identifier_characterContext.prototype.constructor = Identifier_characterContext;

Identifier_characterContext.prototype.digit = function() {
    return this.getTypedRuleContext(DigitContext,0);
};

Identifier_characterContext.prototype.nonDigit = function() {
    return this.getTypedRuleContext(NonDigitContext,0);
};

Identifier_characterContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterIdentifier_character(this);
	}
};

Identifier_characterContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitIdentifier_character(this);
	}
};

Identifier_characterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitIdentifier_character(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Identifier_characterContext = Identifier_characterContext;

mappingParser.prototype.identifier_character = function() {

    var localctx = new Identifier_characterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, mappingParser.RULE_identifier_character);
    try {
        this.state = 359;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.T__20:
        case mappingParser.T__21:
        case mappingParser.T__22:
        case mappingParser.T__23:
        case mappingParser.T__24:
        case mappingParser.T__25:
        case mappingParser.T__26:
        case mappingParser.T__27:
        case mappingParser.T__28:
        case mappingParser.T__29:
            this.enterOuterAlt(localctx, 1);
            this.state = 357;
            this.digit();
            break;
        case mappingParser.T__4:
        case mappingParser.T__30:
        case mappingParser.T__31:
        case mappingParser.T__32:
        case mappingParser.T__33:
        case mappingParser.T__34:
        case mappingParser.T__35:
        case mappingParser.T__36:
        case mappingParser.T__37:
        case mappingParser.T__38:
        case mappingParser.T__39:
        case mappingParser.T__40:
        case mappingParser.T__41:
        case mappingParser.T__42:
        case mappingParser.T__43:
        case mappingParser.T__44:
        case mappingParser.T__45:
        case mappingParser.T__46:
        case mappingParser.T__47:
        case mappingParser.T__48:
        case mappingParser.T__49:
        case mappingParser.T__50:
        case mappingParser.T__51:
        case mappingParser.T__52:
        case mappingParser.T__53:
        case mappingParser.T__54:
        case mappingParser.T__55:
        case mappingParser.T__56:
        case mappingParser.T__57:
        case mappingParser.T__58:
        case mappingParser.T__59:
        case mappingParser.T__60:
        case mappingParser.T__61:
        case mappingParser.T__62:
        case mappingParser.T__63:
        case mappingParser.T__64:
        case mappingParser.T__65:
        case mappingParser.T__66:
        case mappingParser.T__67:
        case mappingParser.T__68:
        case mappingParser.T__69:
        case mappingParser.T__70:
        case mappingParser.T__71:
        case mappingParser.T__72:
        case mappingParser.T__73:
        case mappingParser.T__74:
        case mappingParser.T__75:
        case mappingParser.T__76:
        case mappingParser.T__77:
        case mappingParser.T__78:
        case mappingParser.T__79:
        case mappingParser.T__80:
        case mappingParser.T__81:
            this.enterOuterAlt(localctx, 2);
            this.state = 358;
            this.nonDigit();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NonDigitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_nonDigit;
    return this;
}

NonDigitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NonDigitContext.prototype.constructor = NonDigitContext;

NonDigitContext.prototype.letter = function() {
    return this.getTypedRuleContext(LetterContext,0);
};

NonDigitContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterNonDigit(this);
	}
};

NonDigitContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitNonDigit(this);
	}
};

NonDigitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitNonDigit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.NonDigitContext = NonDigitContext;

mappingParser.prototype.nonDigit = function() {

    var localctx = new NonDigitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, mappingParser.RULE_nonDigit);
    try {
        this.state = 363;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.T__30:
        case mappingParser.T__31:
        case mappingParser.T__32:
        case mappingParser.T__33:
        case mappingParser.T__34:
        case mappingParser.T__35:
        case mappingParser.T__36:
        case mappingParser.T__37:
        case mappingParser.T__38:
        case mappingParser.T__39:
        case mappingParser.T__40:
        case mappingParser.T__41:
        case mappingParser.T__42:
        case mappingParser.T__43:
        case mappingParser.T__44:
        case mappingParser.T__45:
        case mappingParser.T__46:
        case mappingParser.T__47:
        case mappingParser.T__48:
        case mappingParser.T__49:
        case mappingParser.T__50:
        case mappingParser.T__51:
        case mappingParser.T__52:
        case mappingParser.T__53:
        case mappingParser.T__54:
        case mappingParser.T__55:
        case mappingParser.T__56:
        case mappingParser.T__57:
        case mappingParser.T__58:
        case mappingParser.T__59:
        case mappingParser.T__60:
        case mappingParser.T__61:
        case mappingParser.T__62:
        case mappingParser.T__63:
        case mappingParser.T__64:
        case mappingParser.T__65:
        case mappingParser.T__66:
        case mappingParser.T__67:
        case mappingParser.T__68:
        case mappingParser.T__69:
        case mappingParser.T__70:
        case mappingParser.T__71:
        case mappingParser.T__72:
        case mappingParser.T__73:
        case mappingParser.T__74:
        case mappingParser.T__75:
        case mappingParser.T__76:
        case mappingParser.T__77:
        case mappingParser.T__78:
        case mappingParser.T__79:
        case mappingParser.T__80:
        case mappingParser.T__81:
            this.enterOuterAlt(localctx, 1);
            this.state = 361;
            this.letter();
            break;
        case mappingParser.T__4:
            this.enterOuterAlt(localctx, 2);
            this.state = 362;
            this.match(mappingParser.T__4);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DigitsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_digits;
    return this;
}

DigitsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DigitsContext.prototype.constructor = DigitsContext;

DigitsContext.prototype.digit = function() {
    return this.getTypedRuleContext(DigitContext,0);
};

DigitsContext.prototype.digits = function() {
    return this.getTypedRuleContext(DigitsContext,0);
};

DigitsContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterDigits(this);
	}
};

DigitsContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitDigits(this);
	}
};

DigitsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitDigits(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.DigitsContext = DigitsContext;

mappingParser.prototype.digits = function() {

    var localctx = new DigitsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, mappingParser.RULE_digits);
    try {
        this.state = 369;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 365;
            this.digit();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 366;
            this.digit();
            this.state = 367;
            this.digits();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DigitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_digit;
    return this;
}

DigitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DigitContext.prototype.constructor = DigitContext;

DigitContext.prototype.positive_digit = function() {
    return this.getTypedRuleContext(Positive_digitContext,0);
};

DigitContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterDigit(this);
	}
};

DigitContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitDigit(this);
	}
};

DigitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitDigit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.DigitContext = DigitContext;

mappingParser.prototype.digit = function() {

    var localctx = new DigitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, mappingParser.RULE_digit);
    try {
        this.state = 373;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.T__20:
            this.enterOuterAlt(localctx, 1);
            this.state = 371;
            this.match(mappingParser.T__20);
            break;
        case mappingParser.T__21:
        case mappingParser.T__22:
        case mappingParser.T__23:
        case mappingParser.T__24:
        case mappingParser.T__25:
        case mappingParser.T__26:
        case mappingParser.T__27:
        case mappingParser.T__28:
        case mappingParser.T__29:
            this.enterOuterAlt(localctx, 2);
            this.state = 372;
            this.positive_digit();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Positive_digitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_positive_digit;
    return this;
}

Positive_digitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Positive_digitContext.prototype.constructor = Positive_digitContext;


Positive_digitContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterPositive_digit(this);
	}
};

Positive_digitContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitPositive_digit(this);
	}
};

Positive_digitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitPositive_digit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Positive_digitContext = Positive_digitContext;

mappingParser.prototype.positive_digit = function() {

    var localctx = new Positive_digitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, mappingParser.RULE_positive_digit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 375;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mappingParser.T__21) | (1 << mappingParser.T__22) | (1 << mappingParser.T__23) | (1 << mappingParser.T__24) | (1 << mappingParser.T__25) | (1 << mappingParser.T__26) | (1 << mappingParser.T__27) | (1 << mappingParser.T__28) | (1 << mappingParser.T__29))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LetterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_letter;
    return this;
}

LetterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LetterContext.prototype.constructor = LetterContext;


LetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterLetter(this);
	}
};

LetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitLetter(this);
	}
};

LetterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitLetter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.LetterContext = LetterContext;

mappingParser.prototype.letter = function() {

    var localctx = new LetterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, mappingParser.RULE_letter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 377;
        _la = this._input.LA(1);
        if(!(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (mappingParser.T__30 - 31)) | (1 << (mappingParser.T__31 - 31)) | (1 << (mappingParser.T__32 - 31)) | (1 << (mappingParser.T__33 - 31)) | (1 << (mappingParser.T__34 - 31)) | (1 << (mappingParser.T__35 - 31)) | (1 << (mappingParser.T__36 - 31)) | (1 << (mappingParser.T__37 - 31)) | (1 << (mappingParser.T__38 - 31)) | (1 << (mappingParser.T__39 - 31)) | (1 << (mappingParser.T__40 - 31)) | (1 << (mappingParser.T__41 - 31)) | (1 << (mappingParser.T__42 - 31)) | (1 << (mappingParser.T__43 - 31)) | (1 << (mappingParser.T__44 - 31)) | (1 << (mappingParser.T__45 - 31)) | (1 << (mappingParser.T__46 - 31)) | (1 << (mappingParser.T__47 - 31)) | (1 << (mappingParser.T__48 - 31)) | (1 << (mappingParser.T__49 - 31)) | (1 << (mappingParser.T__50 - 31)) | (1 << (mappingParser.T__51 - 31)) | (1 << (mappingParser.T__52 - 31)) | (1 << (mappingParser.T__53 - 31)) | (1 << (mappingParser.T__54 - 31)) | (1 << (mappingParser.T__55 - 31)) | (1 << (mappingParser.T__56 - 31)) | (1 << (mappingParser.T__57 - 31)) | (1 << (mappingParser.T__58 - 31)) | (1 << (mappingParser.T__59 - 31)) | (1 << (mappingParser.T__60 - 31)) | (1 << (mappingParser.T__61 - 31)))) !== 0) || ((((_la - 63)) & ~0x1f) == 0 && ((1 << (_la - 63)) & ((1 << (mappingParser.T__62 - 63)) | (1 << (mappingParser.T__63 - 63)) | (1 << (mappingParser.T__64 - 63)) | (1 << (mappingParser.T__65 - 63)) | (1 << (mappingParser.T__66 - 63)) | (1 << (mappingParser.T__67 - 63)) | (1 << (mappingParser.T__68 - 63)) | (1 << (mappingParser.T__69 - 63)) | (1 << (mappingParser.T__70 - 63)) | (1 << (mappingParser.T__71 - 63)) | (1 << (mappingParser.T__72 - 63)) | (1 << (mappingParser.T__73 - 63)) | (1 << (mappingParser.T__74 - 63)) | (1 << (mappingParser.T__75 - 63)) | (1 << (mappingParser.T__76 - 63)) | (1 << (mappingParser.T__77 - 63)) | (1 << (mappingParser.T__78 - 63)) | (1 << (mappingParser.T__79 - 63)) | (1 << (mappingParser.T__80 - 63)) | (1 << (mappingParser.T__81 - 63)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.mappingParser = mappingParser;
