// Generated from mapping.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var mappingListener = require('./mappingListener').mappingListener;
var mappingVisitor = require('./mappingVisitor').mappingVisitor;

var grammarFileName = "mapping.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003W\u0182\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u0003\u0002\u0006",
    "\u0002d\n\u0002\r\u0002\u000e\u0002e\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003m\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004t\n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005{\n\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0007",
    "\t\u008b\n\t\f\t\u000e\t\u008e\u000b\t\u0003\t\u0005\t\u0091\n\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0005\u000b\u0099",
    "\n\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u00aa\n\u0010\f\u0010\u000e",
    "\u0010\u00ad\u000b\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010",
    "\u00b2\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0007\u0011\u00b9\n\u0011\f\u0011\u000e\u0011\u00bc\u000b\u0011",
    "\u0003\u0011\u0005\u0011\u00bf\n\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00c7\n\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0003\u0017\u0007\u0017\u00d6\n\u0017\f\u0017\u000e\u0017\u00d9\u000b",
    "\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u00dd\n\u0017\f\u0017\u000e",
    "\u0017\u00e0\u000b\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u00e4\n",
    "\u0017\u0003\u0018\u0003\u0018\u0007\u0018\u00e8\n\u0018\f\u0018\u000e",
    "\u0018\u00eb\u000b\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u00ef\n",
    "\u0018\f\u0018\u000e\u0018\u00f2\u000b\u0018\u0003\u0018\u0003\u0018",
    "\u0005\u0018\u00f6\n\u0018\u0003\u0019\u0003\u0019\u0005\u0019\u00fa",
    "\n\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u00ff\n\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0005\u001d",
    "\u0106\n\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u010a\n\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u0111",
    "\n\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0005\u001d\u0118\n\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u0120\n\u001d\u0003\u001e",
    "\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0005\u001f\u0130\n\u001f\u0003 \u0003 \u0003!\u0003!\u0003",
    "\"\u0003\"\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$\u0003$\u0005$\u013f",
    "\n$\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003&\u0005&\u0148\n",
    "&\u0003\'\u0003\'\u0005\'\u014c\n\'\u0003(\u0003(\u0005(\u0150\n(\u0003",
    ")\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0003",
    ")\u0005)\u015d\n)\u0003*\u0003*\u0003*\u0003*\u0003*\u0005*\u0164\n",
    "*\u0003+\u0003+\u0003+\u0003+\u0005+\u016a\n+\u0003,\u0003,\u0005,\u016e",
    "\n,\u0003-\u0003-\u0005-\u0172\n-\u0003.\u0003.\u0003.\u0003.\u0005",
    ".\u0178\n.\u0003/\u0003/\u0005/\u017c\n/\u00030\u00030\u00031\u0003",
    "1\u00031\u0002\u00022\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`\u0002",
    "\u0005\u0003\u0002\u0014\u001c\u0003\u0002\u001dP\u0004\u0002\u0007",
    "\u0007QQ\u0002\u017f\u0002c\u0003\u0002\u0002\u0002\u0004l\u0003\u0002",
    "\u0002\u0002\u0006n\u0003\u0002\u0002\u0002\bu\u0003\u0002\u0002\u0002",
    "\n|\u0003\u0002\u0002\u0002\f\u007f\u0003\u0002\u0002\u0002\u000e\u0082",
    "\u0003\u0002\u0002\u0002\u0010\u0086\u0003\u0002\u0002\u0002\u0012\u0094",
    "\u0003\u0002\u0002\u0002\u0014\u0098\u0003\u0002\u0002\u0002\u0016\u009a",
    "\u0003\u0002\u0002\u0002\u0018\u009c\u0003\u0002\u0002\u0002\u001a\u009e",
    "\u0003\u0002\u0002\u0002\u001c\u00a0\u0003\u0002\u0002\u0002\u001e\u00b1",
    "\u0003\u0002\u0002\u0002 \u00b3\u0003\u0002\u0002\u0002\"\u00c0\u0003",
    "\u0002\u0002\u0002$\u00c8\u0003\u0002\u0002\u0002&\u00cd\u0003\u0002",
    "\u0002\u0002(\u00cf\u0003\u0002\u0002\u0002*\u00d1\u0003\u0002\u0002",
    "\u0002,\u00e3\u0003\u0002\u0002\u0002.\u00f5\u0003\u0002\u0002\u0002",
    "0\u00f9\u0003\u0002\u0002\u00022\u00fe\u0003\u0002\u0002\u00024\u0100",
    "\u0003\u0002\u0002\u00026\u0102\u0003\u0002\u0002\u00028\u011f\u0003",
    "\u0002\u0002\u0002:\u0121\u0003\u0002\u0002\u0002<\u012f\u0003\u0002",
    "\u0002\u0002>\u0131\u0003\u0002\u0002\u0002@\u0133\u0003\u0002\u0002",
    "\u0002B\u0135\u0003\u0002\u0002\u0002D\u0137\u0003\u0002\u0002\u0002",
    "F\u013e\u0003\u0002\u0002\u0002H\u0140\u0003\u0002\u0002\u0002J\u0147",
    "\u0003\u0002\u0002\u0002L\u014b\u0003\u0002\u0002\u0002N\u014f\u0003",
    "\u0002\u0002\u0002P\u015c\u0003\u0002\u0002\u0002R\u0163\u0003\u0002",
    "\u0002\u0002T\u0169\u0003\u0002\u0002\u0002V\u016d\u0003\u0002\u0002",
    "\u0002X\u0171\u0003\u0002\u0002\u0002Z\u0177\u0003\u0002\u0002\u0002",
    "\\\u017b\u0003\u0002\u0002\u0002^\u017d\u0003\u0002\u0002\u0002`\u017f",
    "\u0003\u0002\u0002\u0002bd\u0005\u0004\u0003\u0002cb\u0003\u0002\u0002",
    "\u0002de\u0003\u0002\u0002\u0002ec\u0003\u0002\u0002\u0002ef\u0003\u0002",
    "\u0002\u0002f\u0003\u0003\u0002\u0002\u0002gm\u0005\u0006\u0004\u0002",
    "hm\u0005\b\u0005\u0002im\u0005\n\u0006\u0002jm\u0005\f\u0007\u0002k",
    "m\u0005\u000e\b\u0002lg\u0003\u0002\u0002\u0002lh\u0003\u0002\u0002",
    "\u0002li\u0003\u0002\u0002\u0002lj\u0003\u0002\u0002\u0002lk\u0003\u0002",
    "\u0002\u0002m\u0005\u0003\u0002\u0002\u0002no\u0007\u0003\u0002\u0002",
    "op\u0005&\u0014\u0002pq\u0007\u0004\u0002\u0002qs\u0005\u001a\u000e",
    "\u0002rt\u0005\u0010\t\u0002sr\u0003\u0002\u0002\u0002st\u0003\u0002",
    "\u0002\u0002t\u0007\u0003\u0002\u0002\u0002uv\u0007\u0005\u0002\u0002",
    "vw\u0005\u0016\f\u0002wx\u0007\u0004\u0002\u0002xz\u0005\u0018\r\u0002",
    "y{\u0005\u001c\u000f\u0002zy\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002",
    "\u0002{\t\u0003\u0002\u0002\u0002|}\u0007\u0006\u0002\u0002}~\u0005",
    "&\u0014\u0002~\u000b\u0003\u0002\u0002\u0002\u007f\u0080\u0007\u0007",
    "\u0002\u0002\u0080\u0081\u0005&\u0014\u0002\u0081\r\u0003\u0002\u0002",
    "\u0002\u0082\u0083\u0007\b\u0002\u0002\u0083\u0084\u0005&\u0014\u0002",
    "\u0084\u0085\u0005\u0010\t\u0002\u0085\u000f\u0003\u0002\u0002\u0002",
    "\u0086\u0090\u0007\t\u0002\u0002\u0087\u0088\u0005\u0012\n\u0002\u0088",
    "\u0089\u0007\n\u0002\u0002\u0089\u008b\u0003\u0002\u0002\u0002\u008a",
    "\u0087\u0003\u0002\u0002\u0002\u008b\u008e\u0003\u0002\u0002\u0002\u008c",
    "\u008a\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d",
    "\u008f\u0003\u0002\u0002\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008f",
    "\u0091\u0005\u0012\n\u0002\u0090\u008c\u0003\u0002\u0002\u0002\u0090",
    "\u0091\u0003\u0002\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092",
    "\u0093\u0007\u000b\u0002\u0002\u0093\u0011\u0003\u0002\u0002\u0002\u0094",
    "\u0095\u0007V\u0002\u0002\u0095\u0013\u0003\u0002\u0002\u0002\u0096",
    "\u0099\u0005\"\u0012\u0002\u0097\u0099\u0005$\u0013\u0002\u0098\u0096",
    "\u0003\u0002\u0002\u0002\u0098\u0097\u0003\u0002\u0002\u0002\u0099\u0015",
    "\u0003\u0002\u0002\u0002\u009a\u009b\u0005\"\u0012\u0002\u009b\u0017",
    "\u0003\u0002\u0002\u0002\u009c\u009d\u0005\u0014\u000b\u0002\u009d\u0019",
    "\u0003\u0002\u0002\u0002\u009e\u009f\u0005\u0014\u000b\u0002\u009f\u001b",
    "\u0003\u0002\u0002\u0002\u00a0\u00a1\u0007T\u0002\u0002\u00a1\u00a2",
    "\u0007\f\u0002\u0002\u00a2\u00a3\u0005\u001e\u0010\u0002\u00a3\u001d",
    "\u0003\u0002\u0002\u0002\u00a4\u00b2\u0005 \u0011\u0002\u00a5\u00ab",
    "\u0007\r\u0002\u0002\u00a6\u00a7\u0005 \u0011\u0002\u00a7\u00a8\u0007",
    "\n\u0002\u0002\u00a8\u00aa\u0003\u0002\u0002\u0002\u00a9\u00a6\u0003",
    "\u0002\u0002\u0002\u00aa\u00ad\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003",
    "\u0002\u0002\u0002\u00ab\u00ac\u0003\u0002\u0002\u0002\u00ac\u00ae\u0003",
    "\u0002\u0002\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002\u00ae\u00af\u0005",
    " \u0011\u0002\u00af\u00b0\u0007\u000b\u0002\u0002\u00b0\u00b2\u0003",
    "\u0002\u0002\u0002\u00b1\u00a4\u0003\u0002\u0002\u0002\u00b1\u00a5\u0003",
    "\u0002\u0002\u0002\u00b2\u001f\u0003\u0002\u0002\u0002\u00b3\u00be\u0005",
    "&\u0014\u0002\u00b4\u00ba\u0007\u000e\u0002\u0002\u00b5\u00b6\u0005",
    "\u0014\u000b\u0002\u00b6\u00b7\u0007\u000e\u0002\u0002\u00b7\u00b9\u0003",
    "\u0002\u0002\u0002\u00b8\u00b5\u0003\u0002\u0002\u0002\u00b9\u00bc\u0003",
    "\u0002\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003",
    "\u0002\u0002\u0002\u00bb\u00bd\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003",
    "\u0002\u0002\u0002\u00bd\u00bf\u0005\u0014\u000b\u0002\u00be\u00b4\u0003",
    "\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002\u0002\u00bf!\u0003",
    "\u0002\u0002\u0002\u00c0\u00c1\u0007\u000f\u0002\u0002\u00c1\u00c2\u0005",
    ".\u0018\u0002\u00c2\u00c3\u0007\u0010\u0002\u0002\u00c3\u00c6\u0005",
    "(\u0015\u0002\u00c4\u00c5\u0007\u0011\u0002\u0002\u00c5\u00c7\u0005",
    "8\u001d\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003",
    "\u0002\u0002\u0002\u00c7#\u0003\u0002\u0002\u0002\u00c8\u00c9\u0007",
    "\u0012\u0002\u0002\u00c9\u00ca\u0005,\u0017\u0002\u00ca\u00cb\u0007",
    "\u0010\u0002\u0002\u00cb\u00cc\u0005*\u0016\u0002\u00cc%\u0003\u0002",
    "\u0002\u0002\u00cd\u00ce\u0007V\u0002\u0002\u00ce\'\u0003\u0002\u0002",
    "\u0002\u00cf\u00d0\u0007V\u0002\u0002\u00d0)\u0003\u0002\u0002\u0002",
    "\u00d1\u00d2\u0007V\u0002\u0002\u00d2+\u0003\u0002\u0002\u0002\u00d3",
    "\u00d7\u00052\u001a\u0002\u00d4\u00d6\u00052\u001a\u0002\u00d5\u00d4",
    "\u0003\u0002\u0002\u0002\u00d6\u00d9\u0003\u0002\u0002\u0002\u00d7\u00d5",
    "\u0003\u0002\u0002\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8\u00e4",
    "\u0003\u0002\u0002\u0002\u00d9\u00d7\u0003\u0002\u0002\u0002\u00da\u00de",
    "\u00052\u001a\u0002\u00db\u00dd\u00050\u0019\u0002\u00dc\u00db\u0003",
    "\u0002\u0002\u0002\u00dd\u00e0\u0003\u0002\u0002\u0002\u00de\u00dc\u0003",
    "\u0002\u0002\u0002\u00de\u00df\u0003\u0002\u0002\u0002\u00df\u00e1\u0003",
    "\u0002\u0002\u0002\u00e0\u00de\u0003\u0002\u0002\u0002\u00e1\u00e2\u0005",
    "2\u001a\u0002\u00e2\u00e4\u0003\u0002\u0002\u0002\u00e3\u00d3\u0003",
    "\u0002\u0002\u0002\u00e3\u00da\u0003\u0002\u0002\u0002\u00e4-\u0003",
    "\u0002\u0002\u0002\u00e5\u00e9\u00052\u001a\u0002\u00e6\u00e8\u0005",
    "2\u001a\u0002\u00e7\u00e6\u0003\u0002\u0002\u0002\u00e8\u00eb\u0003",
    "\u0002\u0002\u0002\u00e9\u00e7\u0003\u0002\u0002\u0002\u00e9\u00ea\u0003",
    "\u0002\u0002\u0002\u00ea\u00f6\u0003\u0002\u0002\u0002\u00eb\u00e9\u0003",
    "\u0002\u0002\u0002\u00ec\u00f0\u00052\u001a\u0002\u00ed\u00ef\u0005",
    "0\u0019\u0002\u00ee\u00ed\u0003\u0002\u0002\u0002\u00ef\u00f2\u0003",
    "\u0002\u0002\u0002\u00f0\u00ee\u0003\u0002\u0002\u0002\u00f0\u00f1\u0003",
    "\u0002\u0002\u0002\u00f1\u00f3\u0003\u0002\u0002\u0002\u00f2\u00f0\u0003",
    "\u0002\u0002\u0002\u00f3\u00f4\u00052\u001a\u0002\u00f4\u00f6\u0003",
    "\u0002\u0002\u0002\u00f5\u00e5\u0003\u0002\u0002\u0002\u00f5\u00ec\u0003",
    "\u0002\u0002\u0002\u00f6/\u0003\u0002\u0002\u0002\u00f7\u00fa\u0005",
    "2\u001a\u0002\u00f8\u00fa\u0007\u0006\u0002\u0002\u00f9\u00f7\u0003",
    "\u0002\u0002\u0002\u00f9\u00f8\u0003\u0002\u0002\u0002\u00fa1\u0003",
    "\u0002\u0002\u0002\u00fb\u00ff\u00054\u001b\u0002\u00fc\u00ff\u0005",
    "6\u001c\u0002\u00fd\u00ff\u0007\u0013\u0002\u0002\u00fe\u00fb\u0003",
    "\u0002\u0002\u0002\u00fe\u00fc\u0003\u0002\u0002\u0002\u00fe\u00fd\u0003",
    "\u0002\u0002\u0002\u00ff3\u0003\u0002\u0002\u0002\u0100\u0101\t\u0002",
    "\u0002\u0002\u01015\u0003\u0002\u0002\u0002\u0102\u0103\t\u0003\u0002",
    "\u0002\u01037\u0003\u0002\u0002\u0002\u0104\u0106\u0005:\u001e\u0002",
    "\u0105\u0104\u0003\u0002\u0002\u0002\u0105\u0106\u0003\u0002\u0002\u0002",
    "\u0106\u0107\u0003\u0002\u0002\u0002\u0107\u0120\u0005<\u001f\u0002",
    "\u0108\u010a\u0005:\u001e\u0002\u0109\u0108\u0003\u0002\u0002\u0002",
    "\u0109\u010a\u0003\u0002\u0002\u0002\u010a\u010b\u0003\u0002\u0002\u0002",
    "\u010b\u010c\u0005<\u001f\u0002\u010c\u010d\u0007\u0006\u0002\u0002",
    "\u010d\u010e\u0005D#\u0002\u010e\u0120\u0003\u0002\u0002\u0002\u010f",
    "\u0111\u0005:\u001e\u0002\u0110\u010f\u0003\u0002\u0002\u0002\u0110",
    "\u0111\u0003\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002\u0002\u0112",
    "\u0113\u0005<\u001f\u0002\u0113\u0114\u0007\u0003\u0002\u0002\u0114",
    "\u0115\u0005H%\u0002\u0115\u0120\u0003\u0002\u0002\u0002\u0116\u0118",
    "\u0005:\u001e\u0002\u0117\u0116\u0003\u0002\u0002\u0002\u0117\u0118",
    "\u0003\u0002\u0002\u0002\u0118\u0119\u0003\u0002\u0002\u0002\u0119\u011a",
    "\u0005<\u001f\u0002\u011a\u011b\u0007\u0006\u0002\u0002\u011b\u011c",
    "\u0005D#\u0002\u011c\u011d\u0007\u0003\u0002\u0002\u011d\u011e\u0005",
    "H%\u0002\u011e\u0120\u0003\u0002\u0002\u0002\u011f\u0105\u0003\u0002",
    "\u0002\u0002\u011f\u0109\u0003\u0002\u0002\u0002\u011f\u0110\u0003\u0002",
    "\u0002\u0002\u011f\u0117\u0003\u0002\u0002\u0002\u01209\u0003\u0002",
    "\u0002\u0002\u0121\u0122\t\u0004\u0002\u0002\u0122;\u0003\u0002\u0002",
    "\u0002\u0123\u0124\u0005> \u0002\u0124\u0125\u0007R\u0002\u0002\u0125",
    "\u0126\u0005@!\u0002\u0126\u0127\u0007R\u0002\u0002\u0127\u0128\u0005",
    "B\"\u0002\u0128\u0130\u0003\u0002\u0002\u0002\u0129\u012a\u0005> \u0002",
    "\u012a\u012b\u0007R\u0002\u0002\u012b\u012c\u0005@!\u0002\u012c\u012d",
    "\u0007R\u0002\u0002\u012d\u012e\u0005B\"\u0002\u012e\u0130\u0003\u0002",
    "\u0002\u0002\u012f\u0123\u0003\u0002\u0002\u0002\u012f\u0129\u0003\u0002",
    "\u0002\u0002\u0130=\u0003\u0002\u0002\u0002\u0131\u0132\u0005R*\u0002",
    "\u0132?\u0003\u0002\u0002\u0002\u0133\u0134\u0005R*\u0002\u0134A\u0003",
    "\u0002\u0002\u0002\u0135\u0136\u0005R*\u0002\u0136C\u0003\u0002\u0002",
    "\u0002\u0137\u0138\u0005F$\u0002\u0138E\u0003\u0002\u0002\u0002\u0139",
    "\u013f\u0005L\'\u0002\u013a\u013b\u0005L\'\u0002\u013b\u013c\u0007R",
    "\u0002\u0002\u013c\u013d\u0005F$\u0002\u013d\u013f\u0003\u0002\u0002",
    "\u0002\u013e\u0139\u0003\u0002\u0002\u0002\u013e\u013a\u0003\u0002\u0002",
    "\u0002\u013fG\u0003\u0002\u0002\u0002\u0140\u0141\u0005J&\u0002\u0141",
    "I\u0003\u0002\u0002\u0002\u0142\u0148\u0005N(\u0002\u0143\u0144\u0005",
    "N(\u0002\u0144\u0145\u0007R\u0002\u0002\u0145\u0146\u0005J&\u0002\u0146",
    "\u0148\u0003\u0002\u0002\u0002\u0147\u0142\u0003\u0002\u0002\u0002\u0147",
    "\u0143\u0003\u0002\u0002\u0002\u0148K\u0003\u0002\u0002\u0002\u0149",
    "\u014c\u0005P)\u0002\u014a\u014c\u0005R*\u0002\u014b\u0149\u0003\u0002",
    "\u0002\u0002\u014b\u014a\u0003\u0002\u0002\u0002\u014cM\u0003\u0002",
    "\u0002\u0002\u014d\u0150\u0005P)\u0002\u014e\u0150\u0005Z.\u0002\u014f",
    "\u014d\u0003\u0002\u0002\u0002\u014f\u014e\u0003\u0002\u0002\u0002\u0150",
    "O\u0003\u0002\u0002\u0002\u0151\u015d\u0005X-\u0002\u0152\u0153\u0005",
    "X-\u0002\u0153\u0154\u0005T+\u0002\u0154\u015d\u0003\u0002\u0002\u0002",
    "\u0155\u0156\u0005T+\u0002\u0156\u0157\u0005X-\u0002\u0157\u015d\u0003",
    "\u0002\u0002\u0002\u0158\u0159\u0005T+\u0002\u0159\u015a\u0005X-\u0002",
    "\u015a\u015b\u0005T+\u0002\u015b\u015d\u0003\u0002\u0002\u0002\u015c",
    "\u0151\u0003\u0002\u0002\u0002\u015c\u0152\u0003\u0002\u0002\u0002\u015c",
    "\u0155\u0003\u0002\u0002\u0002\u015c\u0158\u0003\u0002\u0002\u0002\u015d",
    "Q\u0003\u0002\u0002\u0002\u015e\u0164\u0007S\u0002\u0002\u015f\u0164",
    "\u0005^0\u0002\u0160\u0161\u0005^0\u0002\u0161\u0162\u0005Z.\u0002\u0162",
    "\u0164\u0003\u0002\u0002\u0002\u0163\u015e\u0003\u0002\u0002\u0002\u0163",
    "\u015f\u0003\u0002\u0002\u0002\u0163\u0160\u0003\u0002\u0002\u0002\u0164",
    "S\u0003\u0002\u0002\u0002\u0165\u016a\u0005V,\u0002\u0166\u0167\u0005",
    "V,\u0002\u0167\u0168\u0005T+\u0002\u0168\u016a\u0003\u0002\u0002\u0002",
    "\u0169\u0165\u0003\u0002\u0002\u0002\u0169\u0166\u0003\u0002\u0002\u0002",
    "\u016aU\u0003\u0002\u0002\u0002\u016b\u016e\u0005\\/\u0002\u016c\u016e",
    "\u0005X-\u0002\u016d\u016b\u0003\u0002\u0002\u0002\u016d\u016c\u0003",
    "\u0002\u0002\u0002\u016eW\u0003\u0002\u0002\u0002\u016f\u0172\u0005",
    "`1\u0002\u0170\u0172\u0007\u0006\u0002\u0002\u0171\u016f\u0003\u0002",
    "\u0002\u0002\u0171\u0170\u0003\u0002\u0002\u0002\u0172Y\u0003\u0002",
    "\u0002\u0002\u0173\u0178\u0005\\/\u0002\u0174\u0175\u0005\\/\u0002\u0175",
    "\u0176\u0005Z.\u0002\u0176\u0178\u0003\u0002\u0002\u0002\u0177\u0173",
    "\u0003\u0002\u0002\u0002\u0177\u0174\u0003\u0002\u0002\u0002\u0178[",
    "\u0003\u0002\u0002\u0002\u0179\u017c\u0007S\u0002\u0002\u017a\u017c",
    "\u0005^0\u0002\u017b\u0179\u0003\u0002\u0002\u0002\u017b\u017a\u0003",
    "\u0002\u0002\u0002\u017c]\u0003\u0002\u0002\u0002\u017d\u017e\t\u0002",
    "\u0002\u0002\u017e_\u0003\u0002\u0002\u0002\u017f\u0180\t\u0003\u0002",
    "\u0002\u0180a\u0003\u0002\u0002\u0002\'elsz\u008c\u0090\u0098\u00ab",
    "\u00b1\u00ba\u00be\u00c6\u00d7\u00de\u00e3\u00e9\u00f0\u00f5\u00f9\u00fe",
    "\u0105\u0109\u0110\u0117\u011f\u012f\u013e\u0147\u014b\u014f\u015c\u0163",
    "\u0169\u016d\u0171\u0177\u017b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'+'", "'=>'", "'*'", "'-'", "'^'", "'&'", "'tags=['", 
                     "','", "']'", "'='", "'['", "'->'", "'$:'", "'/'", 
                     "'@'", "'#:'", "'_'", "'1'", "'2'", "'3'", "'4'", "'5'", 
                     "'6'", "'7'", "'8'", "'9'", "'A'", "'B'", "'C'", "'D'", 
                     "'E'", "'F'", "'G'", "'H'", "'I'", "'J'", "'K'", "'L'", 
                     "'M'", "'N'", "'O'", "'P'", "'Q'", "'R'", "'S'", "'T'", 
                     "'U'", "'V'", "'W'", "'X'", "'Y'", "'Z'", "'a'", "'b'", 
                     "'c'", "'d'", "'e'", "'f'", "'g'", "'h'", "'i'", "'j'", 
                     "'k'", "'l'", "'m'", "'n'", "'o'", "'p'", "'q'", "'r'", 
                     "'s'", "'t'", "'u'", "'v'", "'w'", "'x'", "'y'", "'z'", 
                     "'~'", "'.'", "'0'", "'scope'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, "SCOPE", "INT", "ID", "WS" ];

var ruleNames =  [ "mapping_rules", "mapping_rule", "add_presentation_rule", 
                   "replace_presentation_rule", "downline_presentation_rule", 
                   "online_presentation_rule", "set_tags_rule", "set_tags", 
                   "tags", "source_entity", "replaced", "replacer", "the_candidate", 
                   "scope_specification", "scope_set", "scope_set_element", 
                   "release_id", "mock_id", "presentation_name", "release_name", 
                   "mock_name", "bucket_name", "user_name", "strike_char1234", 
                   "char1234", "digit1234", "letter1234", "valid_semver", 
                   "prefix", "version_core", "major", "minor", "patch", 
                   "preRelease", "dotSeparated_preRelease_identifiers", 
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
mappingParser.SCOPE = 82;
mappingParser.INT = 83;
mappingParser.ID = 84;
mappingParser.WS = 85;

mappingParser.RULE_mapping_rules = 0;
mappingParser.RULE_mapping_rule = 1;
mappingParser.RULE_add_presentation_rule = 2;
mappingParser.RULE_replace_presentation_rule = 3;
mappingParser.RULE_downline_presentation_rule = 4;
mappingParser.RULE_online_presentation_rule = 5;
mappingParser.RULE_set_tags_rule = 6;
mappingParser.RULE_set_tags = 7;
mappingParser.RULE_tags = 8;
mappingParser.RULE_source_entity = 9;
mappingParser.RULE_replaced = 10;
mappingParser.RULE_replacer = 11;
mappingParser.RULE_the_candidate = 12;
mappingParser.RULE_scope_specification = 13;
mappingParser.RULE_scope_set = 14;
mappingParser.RULE_scope_set_element = 15;
mappingParser.RULE_release_id = 16;
mappingParser.RULE_mock_id = 17;
mappingParser.RULE_presentation_name = 18;
mappingParser.RULE_release_name = 19;
mappingParser.RULE_mock_name = 20;
mappingParser.RULE_bucket_name = 21;
mappingParser.RULE_user_name = 22;
mappingParser.RULE_strike_char1234 = 23;
mappingParser.RULE_char1234 = 24;
mappingParser.RULE_digit1234 = 25;
mappingParser.RULE_letter1234 = 26;
mappingParser.RULE_valid_semver = 27;
mappingParser.RULE_prefix = 28;
mappingParser.RULE_version_core = 29;
mappingParser.RULE_major = 30;
mappingParser.RULE_minor = 31;
mappingParser.RULE_patch = 32;
mappingParser.RULE_preRelease = 33;
mappingParser.RULE_dotSeparated_preRelease_identifiers = 34;
mappingParser.RULE_build = 35;
mappingParser.RULE_dotSeparated_build_identifiers = 36;
mappingParser.RULE_preRelease_identifier = 37;
mappingParser.RULE_build_identifier = 38;
mappingParser.RULE_alphanumeric_identifier = 39;
mappingParser.RULE_numeric_identifier = 40;
mappingParser.RULE_identifier_characters = 41;
mappingParser.RULE_identifier_character = 42;
mappingParser.RULE_nonDigit = 43;
mappingParser.RULE_digits = 44;
mappingParser.RULE_digit = 45;
mappingParser.RULE_positive_digit = 46;
mappingParser.RULE_letter = 47;

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
        this.state = 97; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 96;
            this.mapping_rule();
            this.state = 99; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mappingParser.T__0) | (1 << mappingParser.T__2) | (1 << mappingParser.T__3) | (1 << mappingParser.T__4) | (1 << mappingParser.T__5))) !== 0));
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

Mapping_ruleContext.prototype.set_tags_rule = function() {
    return this.getTypedRuleContext(Set_tags_ruleContext,0);
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
        this.state = 106;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 101;
            this.add_presentation_rule();
            break;
        case mappingParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 102;
            this.replace_presentation_rule();
            break;
        case mappingParser.T__3:
            this.enterOuterAlt(localctx, 3);
            this.state = 103;
            this.downline_presentation_rule();
            break;
        case mappingParser.T__4:
            this.enterOuterAlt(localctx, 4);
            this.state = 104;
            this.online_presentation_rule();
            break;
        case mappingParser.T__5:
            this.enterOuterAlt(localctx, 5);
            this.state = 105;
            this.set_tags_rule();
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
    this.enterRule(localctx, 4, mappingParser.RULE_add_presentation_rule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.match(mappingParser.T__0);
        this.state = 109;
        this.presentation_name();
        this.state = 110;
        this.match(mappingParser.T__1);
        this.state = 111;
        this.the_candidate();
        this.state = 113;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__6) {
            this.state = 112;
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
    this.enterRule(localctx, 6, mappingParser.RULE_replace_presentation_rule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this.match(mappingParser.T__2);
        this.state = 116;
        this.replaced();
        this.state = 117;
        this.match(mappingParser.T__1);
        this.state = 118;
        this.replacer();
        this.state = 120;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.SCOPE) {
            this.state = 119;
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
    this.enterRule(localctx, 8, mappingParser.RULE_downline_presentation_rule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.match(mappingParser.T__3);
        this.state = 123;
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
    this.enterRule(localctx, 10, mappingParser.RULE_online_presentation_rule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.match(mappingParser.T__4);
        this.state = 126;
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

function Set_tags_ruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_set_tags_rule;
    return this;
}

Set_tags_ruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Set_tags_ruleContext.prototype.constructor = Set_tags_ruleContext;

Set_tags_ruleContext.prototype.presentation_name = function() {
    return this.getTypedRuleContext(Presentation_nameContext,0);
};

Set_tags_ruleContext.prototype.set_tags = function() {
    return this.getTypedRuleContext(Set_tagsContext,0);
};

Set_tags_ruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterSet_tags_rule(this);
	}
};

Set_tags_ruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitSet_tags_rule(this);
	}
};

Set_tags_ruleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitSet_tags_rule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Set_tags_ruleContext = Set_tags_ruleContext;

mappingParser.prototype.set_tags_rule = function() {

    var localctx = new Set_tags_ruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, mappingParser.RULE_set_tags_rule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.match(mappingParser.T__5);
        this.state = 129;
        this.presentation_name();
        this.state = 130;
        this.set_tags();
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
    this.enterRule(localctx, 14, mappingParser.RULE_set_tags);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.match(mappingParser.T__6);
        this.state = 142;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.ID) {
            this.state = 138;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 133;
                    this.tags();
                    this.state = 134;
                    this.match(mappingParser.T__7); 
                }
                this.state = 140;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
            }

            this.state = 141;
            this.tags();
        }

        this.state = 144;
        this.match(mappingParser.T__8);
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
    this.enterRule(localctx, 16, mappingParser.RULE_tags);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        this.match(mappingParser.ID);
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
    this.enterRule(localctx, 18, mappingParser.RULE_source_entity);
    try {
        this.state = 150;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.T__12:
            this.enterOuterAlt(localctx, 1);
            this.state = 148;
            this.release_id();
            break;
        case mappingParser.T__15:
            this.enterOuterAlt(localctx, 2);
            this.state = 149;
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
    this.enterRule(localctx, 20, mappingParser.RULE_replaced);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 152;
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
    this.enterRule(localctx, 22, mappingParser.RULE_replacer);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
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
    this.enterRule(localctx, 24, mappingParser.RULE_the_candidate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
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
    this.enterRule(localctx, 26, mappingParser.RULE_scope_specification);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.match(mappingParser.SCOPE);
        this.state = 159;
        this.match(mappingParser.T__9);
        this.state = 160;
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
    this.enterRule(localctx, 28, mappingParser.RULE_scope_set);
    try {
        this.state = 175;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 162;
            this.scope_set_element();
            break;
        case mappingParser.T__10:
            this.enterOuterAlt(localctx, 2);
            this.state = 163;
            this.match(mappingParser.T__10);
            this.state = 169;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 164;
                    this.scope_set_element();
                    this.state = 165;
                    this.match(mappingParser.T__7); 
                }
                this.state = 171;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
            }

            this.state = 172;
            this.scope_set_element();
            this.state = 173;
            this.match(mappingParser.T__8);
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
    this.enterRule(localctx, 30, mappingParser.RULE_scope_set_element);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        this.presentation_name();
        this.state = 188;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__11) {
            this.state = 178;
            this.match(mappingParser.T__11);
            this.state = 184;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 179;
                    this.source_entity();
                    this.state = 180;
                    this.match(mappingParser.T__11); 
                }
                this.state = 186;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
            }

            this.state = 187;
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
    this.enterRule(localctx, 32, mappingParser.RULE_release_id);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.match(mappingParser.T__12);
        this.state = 191;
        this.user_name();
        this.state = 192;
        this.match(mappingParser.T__13);
        this.state = 193;
        this.release_name();
        this.state = 196;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__14) {
            this.state = 194;
            this.match(mappingParser.T__14);
            this.state = 195;
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
    this.enterRule(localctx, 34, mappingParser.RULE_mock_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this.match(mappingParser.T__15);
        this.state = 199;
        this.bucket_name();
        this.state = 200;
        this.match(mappingParser.T__13);
        this.state = 201;
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
    this.enterRule(localctx, 36, mappingParser.RULE_presentation_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        this.match(mappingParser.ID);
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
    this.enterRule(localctx, 38, mappingParser.RULE_release_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        this.match(mappingParser.ID);
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
    this.enterRule(localctx, 40, mappingParser.RULE_mock_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        this.match(mappingParser.ID);
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

Bucket_nameContext.prototype.char1234 = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Char1234Context);
    } else {
        return this.getTypedRuleContext(Char1234Context,i);
    }
};

Bucket_nameContext.prototype.strike_char1234 = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Strike_char1234Context);
    } else {
        return this.getTypedRuleContext(Strike_char1234Context,i);
    }
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
    this.enterRule(localctx, 42, mappingParser.RULE_bucket_name);
    var _la = 0; // Token type
    try {
        this.state = 225;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 209;
            this.char1234();
            this.state = 213;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 17)) & ~0x1f) == 0 && ((1 << (_la - 17)) & ((1 << (mappingParser.T__16 - 17)) | (1 << (mappingParser.T__17 - 17)) | (1 << (mappingParser.T__18 - 17)) | (1 << (mappingParser.T__19 - 17)) | (1 << (mappingParser.T__20 - 17)) | (1 << (mappingParser.T__21 - 17)) | (1 << (mappingParser.T__22 - 17)) | (1 << (mappingParser.T__23 - 17)) | (1 << (mappingParser.T__24 - 17)) | (1 << (mappingParser.T__25 - 17)) | (1 << (mappingParser.T__26 - 17)) | (1 << (mappingParser.T__27 - 17)) | (1 << (mappingParser.T__28 - 17)) | (1 << (mappingParser.T__29 - 17)) | (1 << (mappingParser.T__30 - 17)) | (1 << (mappingParser.T__31 - 17)) | (1 << (mappingParser.T__32 - 17)) | (1 << (mappingParser.T__33 - 17)) | (1 << (mappingParser.T__34 - 17)) | (1 << (mappingParser.T__35 - 17)) | (1 << (mappingParser.T__36 - 17)) | (1 << (mappingParser.T__37 - 17)) | (1 << (mappingParser.T__38 - 17)) | (1 << (mappingParser.T__39 - 17)) | (1 << (mappingParser.T__40 - 17)) | (1 << (mappingParser.T__41 - 17)) | (1 << (mappingParser.T__42 - 17)) | (1 << (mappingParser.T__43 - 17)) | (1 << (mappingParser.T__44 - 17)) | (1 << (mappingParser.T__45 - 17)) | (1 << (mappingParser.T__46 - 17)) | (1 << (mappingParser.T__47 - 17)))) !== 0) || ((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (mappingParser.T__48 - 49)) | (1 << (mappingParser.T__49 - 49)) | (1 << (mappingParser.T__50 - 49)) | (1 << (mappingParser.T__51 - 49)) | (1 << (mappingParser.T__52 - 49)) | (1 << (mappingParser.T__53 - 49)) | (1 << (mappingParser.T__54 - 49)) | (1 << (mappingParser.T__55 - 49)) | (1 << (mappingParser.T__56 - 49)) | (1 << (mappingParser.T__57 - 49)) | (1 << (mappingParser.T__58 - 49)) | (1 << (mappingParser.T__59 - 49)) | (1 << (mappingParser.T__60 - 49)) | (1 << (mappingParser.T__61 - 49)) | (1 << (mappingParser.T__62 - 49)) | (1 << (mappingParser.T__63 - 49)) | (1 << (mappingParser.T__64 - 49)) | (1 << (mappingParser.T__65 - 49)) | (1 << (mappingParser.T__66 - 49)) | (1 << (mappingParser.T__67 - 49)) | (1 << (mappingParser.T__68 - 49)) | (1 << (mappingParser.T__69 - 49)) | (1 << (mappingParser.T__70 - 49)) | (1 << (mappingParser.T__71 - 49)) | (1 << (mappingParser.T__72 - 49)) | (1 << (mappingParser.T__73 - 49)) | (1 << (mappingParser.T__74 - 49)) | (1 << (mappingParser.T__75 - 49)) | (1 << (mappingParser.T__76 - 49)) | (1 << (mappingParser.T__77 - 49)))) !== 0)) {
                this.state = 210;
                this.char1234();
                this.state = 215;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 216;
            this.char1234();
            this.state = 220;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 217;
                    this.strike_char1234(); 
                }
                this.state = 222;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
            }

            this.state = 223;
            this.char1234();
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

User_nameContext.prototype.char1234 = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Char1234Context);
    } else {
        return this.getTypedRuleContext(Char1234Context,i);
    }
};

User_nameContext.prototype.strike_char1234 = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Strike_char1234Context);
    } else {
        return this.getTypedRuleContext(Strike_char1234Context,i);
    }
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
    this.enterRule(localctx, 44, mappingParser.RULE_user_name);
    var _la = 0; // Token type
    try {
        this.state = 243;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 227;
            this.char1234();
            this.state = 231;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 17)) & ~0x1f) == 0 && ((1 << (_la - 17)) & ((1 << (mappingParser.T__16 - 17)) | (1 << (mappingParser.T__17 - 17)) | (1 << (mappingParser.T__18 - 17)) | (1 << (mappingParser.T__19 - 17)) | (1 << (mappingParser.T__20 - 17)) | (1 << (mappingParser.T__21 - 17)) | (1 << (mappingParser.T__22 - 17)) | (1 << (mappingParser.T__23 - 17)) | (1 << (mappingParser.T__24 - 17)) | (1 << (mappingParser.T__25 - 17)) | (1 << (mappingParser.T__26 - 17)) | (1 << (mappingParser.T__27 - 17)) | (1 << (mappingParser.T__28 - 17)) | (1 << (mappingParser.T__29 - 17)) | (1 << (mappingParser.T__30 - 17)) | (1 << (mappingParser.T__31 - 17)) | (1 << (mappingParser.T__32 - 17)) | (1 << (mappingParser.T__33 - 17)) | (1 << (mappingParser.T__34 - 17)) | (1 << (mappingParser.T__35 - 17)) | (1 << (mappingParser.T__36 - 17)) | (1 << (mappingParser.T__37 - 17)) | (1 << (mappingParser.T__38 - 17)) | (1 << (mappingParser.T__39 - 17)) | (1 << (mappingParser.T__40 - 17)) | (1 << (mappingParser.T__41 - 17)) | (1 << (mappingParser.T__42 - 17)) | (1 << (mappingParser.T__43 - 17)) | (1 << (mappingParser.T__44 - 17)) | (1 << (mappingParser.T__45 - 17)) | (1 << (mappingParser.T__46 - 17)) | (1 << (mappingParser.T__47 - 17)))) !== 0) || ((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (mappingParser.T__48 - 49)) | (1 << (mappingParser.T__49 - 49)) | (1 << (mappingParser.T__50 - 49)) | (1 << (mappingParser.T__51 - 49)) | (1 << (mappingParser.T__52 - 49)) | (1 << (mappingParser.T__53 - 49)) | (1 << (mappingParser.T__54 - 49)) | (1 << (mappingParser.T__55 - 49)) | (1 << (mappingParser.T__56 - 49)) | (1 << (mappingParser.T__57 - 49)) | (1 << (mappingParser.T__58 - 49)) | (1 << (mappingParser.T__59 - 49)) | (1 << (mappingParser.T__60 - 49)) | (1 << (mappingParser.T__61 - 49)) | (1 << (mappingParser.T__62 - 49)) | (1 << (mappingParser.T__63 - 49)) | (1 << (mappingParser.T__64 - 49)) | (1 << (mappingParser.T__65 - 49)) | (1 << (mappingParser.T__66 - 49)) | (1 << (mappingParser.T__67 - 49)) | (1 << (mappingParser.T__68 - 49)) | (1 << (mappingParser.T__69 - 49)) | (1 << (mappingParser.T__70 - 49)) | (1 << (mappingParser.T__71 - 49)) | (1 << (mappingParser.T__72 - 49)) | (1 << (mappingParser.T__73 - 49)) | (1 << (mappingParser.T__74 - 49)) | (1 << (mappingParser.T__75 - 49)) | (1 << (mappingParser.T__76 - 49)) | (1 << (mappingParser.T__77 - 49)))) !== 0)) {
                this.state = 228;
                this.char1234();
                this.state = 233;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 234;
            this.char1234();
            this.state = 238;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 235;
                    this.strike_char1234(); 
                }
                this.state = 240;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
            }

            this.state = 241;
            this.char1234();
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

function Strike_char1234Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_strike_char1234;
    return this;
}

Strike_char1234Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Strike_char1234Context.prototype.constructor = Strike_char1234Context;

Strike_char1234Context.prototype.char1234 = function() {
    return this.getTypedRuleContext(Char1234Context,0);
};

Strike_char1234Context.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterStrike_char1234(this);
	}
};

Strike_char1234Context.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitStrike_char1234(this);
	}
};

Strike_char1234Context.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitStrike_char1234(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Strike_char1234Context = Strike_char1234Context;

mappingParser.prototype.strike_char1234 = function() {

    var localctx = new Strike_char1234Context(this, this._ctx, this.state);
    this.enterRule(localctx, 46, mappingParser.RULE_strike_char1234);
    try {
        this.state = 247;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.T__16:
        case mappingParser.T__17:
        case mappingParser.T__18:
        case mappingParser.T__19:
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
            this.enterOuterAlt(localctx, 1);
            this.state = 245;
            this.char1234();
            break;
        case mappingParser.T__3:
            this.enterOuterAlt(localctx, 2);
            this.state = 246;
            this.match(mappingParser.T__3);
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

function Char1234Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_char1234;
    return this;
}

Char1234Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Char1234Context.prototype.constructor = Char1234Context;

Char1234Context.prototype.digit1234 = function() {
    return this.getTypedRuleContext(Digit1234Context,0);
};

Char1234Context.prototype.letter1234 = function() {
    return this.getTypedRuleContext(Letter1234Context,0);
};

Char1234Context.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterChar1234(this);
	}
};

Char1234Context.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitChar1234(this);
	}
};

Char1234Context.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitChar1234(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Char1234Context = Char1234Context;

mappingParser.prototype.char1234 = function() {

    var localctx = new Char1234Context(this, this._ctx, this.state);
    this.enterRule(localctx, 48, mappingParser.RULE_char1234);
    try {
        this.state = 252;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.T__17:
        case mappingParser.T__18:
        case mappingParser.T__19:
        case mappingParser.T__20:
        case mappingParser.T__21:
        case mappingParser.T__22:
        case mappingParser.T__23:
        case mappingParser.T__24:
        case mappingParser.T__25:
            this.enterOuterAlt(localctx, 1);
            this.state = 249;
            this.digit1234();
            break;
        case mappingParser.T__26:
        case mappingParser.T__27:
        case mappingParser.T__28:
        case mappingParser.T__29:
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
            this.enterOuterAlt(localctx, 2);
            this.state = 250;
            this.letter1234();
            break;
        case mappingParser.T__16:
            this.enterOuterAlt(localctx, 3);
            this.state = 251;
            this.match(mappingParser.T__16);
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

function Digit1234Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_digit1234;
    return this;
}

Digit1234Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Digit1234Context.prototype.constructor = Digit1234Context;


Digit1234Context.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterDigit1234(this);
	}
};

Digit1234Context.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitDigit1234(this);
	}
};

Digit1234Context.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitDigit1234(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Digit1234Context = Digit1234Context;

mappingParser.prototype.digit1234 = function() {

    var localctx = new Digit1234Context(this, this._ctx, this.state);
    this.enterRule(localctx, 50, mappingParser.RULE_digit1234);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 254;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mappingParser.T__17) | (1 << mappingParser.T__18) | (1 << mappingParser.T__19) | (1 << mappingParser.T__20) | (1 << mappingParser.T__21) | (1 << mappingParser.T__22) | (1 << mappingParser.T__23) | (1 << mappingParser.T__24) | (1 << mappingParser.T__25))) !== 0))) {
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

function Letter1234Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_letter1234;
    return this;
}

Letter1234Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Letter1234Context.prototype.constructor = Letter1234Context;


Letter1234Context.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterLetter1234(this);
	}
};

Letter1234Context.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitLetter1234(this);
	}
};

Letter1234Context.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitLetter1234(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Letter1234Context = Letter1234Context;

mappingParser.prototype.letter1234 = function() {

    var localctx = new Letter1234Context(this, this._ctx, this.state);
    this.enterRule(localctx, 52, mappingParser.RULE_letter1234);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 256;
        _la = this._input.LA(1);
        if(!(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (mappingParser.T__26 - 27)) | (1 << (mappingParser.T__27 - 27)) | (1 << (mappingParser.T__28 - 27)) | (1 << (mappingParser.T__29 - 27)) | (1 << (mappingParser.T__30 - 27)) | (1 << (mappingParser.T__31 - 27)) | (1 << (mappingParser.T__32 - 27)) | (1 << (mappingParser.T__33 - 27)) | (1 << (mappingParser.T__34 - 27)) | (1 << (mappingParser.T__35 - 27)) | (1 << (mappingParser.T__36 - 27)) | (1 << (mappingParser.T__37 - 27)) | (1 << (mappingParser.T__38 - 27)) | (1 << (mappingParser.T__39 - 27)) | (1 << (mappingParser.T__40 - 27)) | (1 << (mappingParser.T__41 - 27)) | (1 << (mappingParser.T__42 - 27)) | (1 << (mappingParser.T__43 - 27)) | (1 << (mappingParser.T__44 - 27)) | (1 << (mappingParser.T__45 - 27)) | (1 << (mappingParser.T__46 - 27)) | (1 << (mappingParser.T__47 - 27)) | (1 << (mappingParser.T__48 - 27)) | (1 << (mappingParser.T__49 - 27)) | (1 << (mappingParser.T__50 - 27)) | (1 << (mappingParser.T__51 - 27)) | (1 << (mappingParser.T__52 - 27)) | (1 << (mappingParser.T__53 - 27)) | (1 << (mappingParser.T__54 - 27)) | (1 << (mappingParser.T__55 - 27)) | (1 << (mappingParser.T__56 - 27)) | (1 << (mappingParser.T__57 - 27)))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (mappingParser.T__58 - 59)) | (1 << (mappingParser.T__59 - 59)) | (1 << (mappingParser.T__60 - 59)) | (1 << (mappingParser.T__61 - 59)) | (1 << (mappingParser.T__62 - 59)) | (1 << (mappingParser.T__63 - 59)) | (1 << (mappingParser.T__64 - 59)) | (1 << (mappingParser.T__65 - 59)) | (1 << (mappingParser.T__66 - 59)) | (1 << (mappingParser.T__67 - 59)) | (1 << (mappingParser.T__68 - 59)) | (1 << (mappingParser.T__69 - 59)) | (1 << (mappingParser.T__70 - 59)) | (1 << (mappingParser.T__71 - 59)) | (1 << (mappingParser.T__72 - 59)) | (1 << (mappingParser.T__73 - 59)) | (1 << (mappingParser.T__74 - 59)) | (1 << (mappingParser.T__75 - 59)) | (1 << (mappingParser.T__76 - 59)) | (1 << (mappingParser.T__77 - 59)))) !== 0))) {
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
    this.enterRule(localctx, 54, mappingParser.RULE_valid_semver);
    var _la = 0; // Token type
    try {
        this.state = 285;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 259;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===mappingParser.T__4 || _la===mappingParser.T__78) {
                this.state = 258;
                this.prefix();
            }

            this.state = 261;
            this.version_core();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 263;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===mappingParser.T__4 || _la===mappingParser.T__78) {
                this.state = 262;
                this.prefix();
            }

            this.state = 265;
            this.version_core();
            this.state = 266;
            this.match(mappingParser.T__3);
            this.state = 267;
            this.preRelease();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 270;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===mappingParser.T__4 || _la===mappingParser.T__78) {
                this.state = 269;
                this.prefix();
            }

            this.state = 272;
            this.version_core();
            this.state = 273;
            this.match(mappingParser.T__0);
            this.state = 274;
            this.build();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 277;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===mappingParser.T__4 || _la===mappingParser.T__78) {
                this.state = 276;
                this.prefix();
            }

            this.state = 279;
            this.version_core();
            this.state = 280;
            this.match(mappingParser.T__3);
            this.state = 281;
            this.preRelease();
            this.state = 282;
            this.match(mappingParser.T__0);
            this.state = 283;
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
    this.enterRule(localctx, 56, mappingParser.RULE_prefix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 287;
        _la = this._input.LA(1);
        if(!(_la===mappingParser.T__4 || _la===mappingParser.T__78)) {
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
    this.enterRule(localctx, 58, mappingParser.RULE_version_core);
    try {
        this.state = 301;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 289;
            this.major();
            this.state = 290;
            this.match(mappingParser.T__79);
            this.state = 291;
            this.minor();
            this.state = 292;
            this.match(mappingParser.T__79);
            this.state = 293;
            this.patch();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 295;
            this.major();
            this.state = 296;
            this.match(mappingParser.T__79);
            this.state = 297;
            this.minor();
            this.state = 298;
            this.match(mappingParser.T__79);
            this.state = 299;
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
    this.enterRule(localctx, 60, mappingParser.RULE_major);
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
    this.enterRule(localctx, 62, mappingParser.RULE_minor);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 305;
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
    this.enterRule(localctx, 64, mappingParser.RULE_patch);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 307;
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
    this.enterRule(localctx, 66, mappingParser.RULE_preRelease);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 309;
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
    this.enterRule(localctx, 68, mappingParser.RULE_dotSeparated_preRelease_identifiers);
    try {
        this.state = 316;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 311;
            this.preRelease_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 312;
            this.preRelease_identifier();
            this.state = 313;
            this.match(mappingParser.T__79);
            this.state = 314;
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
    this.enterRule(localctx, 70, mappingParser.RULE_build);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 318;
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
    this.enterRule(localctx, 72, mappingParser.RULE_dotSeparated_build_identifiers);
    try {
        this.state = 325;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 320;
            this.build_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 321;
            this.build_identifier();
            this.state = 322;
            this.match(mappingParser.T__79);
            this.state = 323;
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
    this.enterRule(localctx, 74, mappingParser.RULE_preRelease_identifier);
    try {
        this.state = 329;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 327;
            this.alphanumeric_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 328;
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
    this.enterRule(localctx, 76, mappingParser.RULE_build_identifier);
    try {
        this.state = 333;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 331;
            this.alphanumeric_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 332;
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
    this.enterRule(localctx, 78, mappingParser.RULE_alphanumeric_identifier);
    try {
        this.state = 346;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 335;
            this.nonDigit();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 336;
            this.nonDigit();
            this.state = 337;
            this.identifier_characters();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 339;
            this.identifier_characters();
            this.state = 340;
            this.nonDigit();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 342;
            this.identifier_characters();
            this.state = 343;
            this.nonDigit();
            this.state = 344;
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
    this.enterRule(localctx, 80, mappingParser.RULE_numeric_identifier);
    try {
        this.state = 353;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 348;
            this.match(mappingParser.T__80);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 349;
            this.positive_digit();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 350;
            this.positive_digit();
            this.state = 351;
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
    this.enterRule(localctx, 82, mappingParser.RULE_identifier_characters);
    try {
        this.state = 359;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 355;
            this.identifier_character();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 356;
            this.identifier_character();
            this.state = 357;
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
    this.enterRule(localctx, 84, mappingParser.RULE_identifier_character);
    try {
        this.state = 363;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.T__17:
        case mappingParser.T__18:
        case mappingParser.T__19:
        case mappingParser.T__20:
        case mappingParser.T__21:
        case mappingParser.T__22:
        case mappingParser.T__23:
        case mappingParser.T__24:
        case mappingParser.T__25:
        case mappingParser.T__80:
            this.enterOuterAlt(localctx, 1);
            this.state = 361;
            this.digit();
            break;
        case mappingParser.T__3:
        case mappingParser.T__26:
        case mappingParser.T__27:
        case mappingParser.T__28:
        case mappingParser.T__29:
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
            this.enterOuterAlt(localctx, 2);
            this.state = 362;
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
    this.enterRule(localctx, 86, mappingParser.RULE_nonDigit);
    try {
        this.state = 367;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.T__26:
        case mappingParser.T__27:
        case mappingParser.T__28:
        case mappingParser.T__29:
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
            this.enterOuterAlt(localctx, 1);
            this.state = 365;
            this.letter();
            break;
        case mappingParser.T__3:
            this.enterOuterAlt(localctx, 2);
            this.state = 366;
            this.match(mappingParser.T__3);
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
    this.enterRule(localctx, 88, mappingParser.RULE_digits);
    try {
        this.state = 373;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 369;
            this.digit();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 370;
            this.digit();
            this.state = 371;
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
    this.enterRule(localctx, 90, mappingParser.RULE_digit);
    try {
        this.state = 377;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.T__80:
            this.enterOuterAlt(localctx, 1);
            this.state = 375;
            this.match(mappingParser.T__80);
            break;
        case mappingParser.T__17:
        case mappingParser.T__18:
        case mappingParser.T__19:
        case mappingParser.T__20:
        case mappingParser.T__21:
        case mappingParser.T__22:
        case mappingParser.T__23:
        case mappingParser.T__24:
        case mappingParser.T__25:
            this.enterOuterAlt(localctx, 2);
            this.state = 376;
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
    this.enterRule(localctx, 92, mappingParser.RULE_positive_digit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 379;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mappingParser.T__17) | (1 << mappingParser.T__18) | (1 << mappingParser.T__19) | (1 << mappingParser.T__20) | (1 << mappingParser.T__21) | (1 << mappingParser.T__22) | (1 << mappingParser.T__23) | (1 << mappingParser.T__24) | (1 << mappingParser.T__25))) !== 0))) {
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
    this.enterRule(localctx, 94, mappingParser.RULE_letter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 381;
        _la = this._input.LA(1);
        if(!(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (mappingParser.T__26 - 27)) | (1 << (mappingParser.T__27 - 27)) | (1 << (mappingParser.T__28 - 27)) | (1 << (mappingParser.T__29 - 27)) | (1 << (mappingParser.T__30 - 27)) | (1 << (mappingParser.T__31 - 27)) | (1 << (mappingParser.T__32 - 27)) | (1 << (mappingParser.T__33 - 27)) | (1 << (mappingParser.T__34 - 27)) | (1 << (mappingParser.T__35 - 27)) | (1 << (mappingParser.T__36 - 27)) | (1 << (mappingParser.T__37 - 27)) | (1 << (mappingParser.T__38 - 27)) | (1 << (mappingParser.T__39 - 27)) | (1 << (mappingParser.T__40 - 27)) | (1 << (mappingParser.T__41 - 27)) | (1 << (mappingParser.T__42 - 27)) | (1 << (mappingParser.T__43 - 27)) | (1 << (mappingParser.T__44 - 27)) | (1 << (mappingParser.T__45 - 27)) | (1 << (mappingParser.T__46 - 27)) | (1 << (mappingParser.T__47 - 27)) | (1 << (mappingParser.T__48 - 27)) | (1 << (mappingParser.T__49 - 27)) | (1 << (mappingParser.T__50 - 27)) | (1 << (mappingParser.T__51 - 27)) | (1 << (mappingParser.T__52 - 27)) | (1 << (mappingParser.T__53 - 27)) | (1 << (mappingParser.T__54 - 27)) | (1 << (mappingParser.T__55 - 27)) | (1 << (mappingParser.T__56 - 27)) | (1 << (mappingParser.T__57 - 27)))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (mappingParser.T__58 - 59)) | (1 << (mappingParser.T__59 - 59)) | (1 << (mappingParser.T__60 - 59)) | (1 << (mappingParser.T__61 - 59)) | (1 << (mappingParser.T__62 - 59)) | (1 << (mappingParser.T__63 - 59)) | (1 << (mappingParser.T__64 - 59)) | (1 << (mappingParser.T__65 - 59)) | (1 << (mappingParser.T__66 - 59)) | (1 << (mappingParser.T__67 - 59)) | (1 << (mappingParser.T__68 - 59)) | (1 << (mappingParser.T__69 - 59)) | (1 << (mappingParser.T__70 - 59)) | (1 << (mappingParser.T__71 - 59)) | (1 << (mappingParser.T__72 - 59)) | (1 << (mappingParser.T__73 - 59)) | (1 << (mappingParser.T__74 - 59)) | (1 << (mappingParser.T__75 - 59)) | (1 << (mappingParser.T__76 - 59)) | (1 << (mappingParser.T__77 - 59)))) !== 0))) {
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
