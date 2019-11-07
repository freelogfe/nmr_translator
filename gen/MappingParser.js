// Generated from Mapping.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MappingListener = require('./MappingListener').MappingListener;
var MappingVisitor = require('./MappingVisitor').MappingVisitor;

var grammarFileName = "Mapping.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003Z\u0178\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u0003\u0002\u0007\u0002j\n\u0002\f\u0002\u000e\u0002",
    "m\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003r\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004\u0080\n\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0005\u0006\u008c\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0094\n\u0007\u0003",
    "\b\u0007\b\u0097\n\b\f\b\u000e\b\u009a\u000b\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0005\t\u00a1\n\t\u0003\n\u0003\n\u0003\n\u0005\n",
    "\u00a6\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00ab\n\u000b",
    "\f\u000b\u000e\u000b\u00ae\u000b\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00b9\n\r",
    "\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0007\u0010\u00c3\n\u0010\f\u0010\u000e\u0010",
    "\u00c6\u000b\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u00cb",
    "\n\u0011\f\u0011\u000e\u0011\u00ce\u000b\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015",
    "\u0005\u0015\u00d8\n\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u00e7\n\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0007\u001b",
    "\u00ee\n\u001b\f\u001b\u000e\u001b\u00f1\u000b\u001b\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003",
    "\u001f\u0003 \u0005 \u00fc\n \u0003 \u0003 \u0005 \u0100\n \u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0005 \u0107\n \u0003 \u0003 \u0003 \u0003 \u0003",
    " \u0005 \u010e\n \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0005 \u0116",
    "\n \u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005\"\u0126\n\"\u0003#",
    "\u0003#\u0003$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0005\'\u0135\n\'\u0003(\u0003(\u0003)\u0003)\u0003",
    ")\u0003)\u0003)\u0005)\u013e\n)\u0003*\u0003*\u0005*\u0142\n*\u0003",
    "+\u0003+\u0005+\u0146\n+\u0003,\u0003,\u0003,\u0003,\u0003,\u0003,\u0003",
    ",\u0003,\u0003,\u0003,\u0003,\u0005,\u0153\n,\u0003-\u0003-\u0003-\u0003",
    "-\u0003-\u0005-\u015a\n-\u0003.\u0003.\u0003.\u0003.\u0005.\u0160\n",
    ".\u0003/\u0003/\u0005/\u0164\n/\u00030\u00030\u00050\u0168\n0\u0003",
    "1\u00031\u00031\u00031\u00051\u016e\n1\u00032\u00032\u00052\u0172\n",
    "2\u00033\u00033\u00034\u00034\u00034\u0003\u00e6\u00025\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdf\u0002\b\u0003\u0002\u0003\u0004",
    "\u0003\u0002\b\u000b\u0004\u0002\u0014\u0014WW\u0003\u0002\u0017\u0018",
    "\u0003\u0002\u001a\"\u0003\u0002#V\u0002\u016d\u0002k\u0003\u0002\u0002",
    "\u0002\u0004q\u0003\u0002\u0002\u0002\u0006\u007f\u0003\u0002\u0002",
    "\u0002\b\u0081\u0003\u0002\u0002\u0002\n\u008b\u0003\u0002\u0002\u0002",
    "\f\u0093\u0003\u0002\u0002\u0002\u000e\u0098\u0003\u0002\u0002\u0002",
    "\u0010\u00a0\u0003\u0002\u0002\u0002\u0012\u00a5\u0003\u0002\u0002\u0002",
    "\u0014\u00ac\u0003\u0002\u0002\u0002\u0016\u00b1\u0003\u0002\u0002\u0002",
    "\u0018\u00b3\u0003\u0002\u0002\u0002\u001a\u00ba\u0003\u0002\u0002\u0002",
    "\u001c\u00bc\u0003\u0002\u0002\u0002\u001e\u00be\u0003\u0002\u0002\u0002",
    " \u00c7\u0003\u0002\u0002\u0002\"\u00cf\u0003\u0002\u0002\u0002$\u00d1",
    "\u0003\u0002\u0002\u0002&\u00d3\u0003\u0002\u0002\u0002(\u00d7\u0003",
    "\u0002\u0002\u0002*\u00d9\u0003\u0002\u0002\u0002,\u00db\u0003\u0002",
    "\u0002\u0002.\u00de\u0003\u0002\u0002\u00020\u00e1\u0003\u0002\u0002",
    "\u00022\u00e8\u0003\u0002\u0002\u00024\u00ef\u0003\u0002\u0002\u0002",
    "6\u00f2\u0003\u0002\u0002\u00028\u00f4\u0003\u0002\u0002\u0002:\u00f6",
    "\u0003\u0002\u0002\u0002<\u00f8\u0003\u0002\u0002\u0002>\u0115\u0003",
    "\u0002\u0002\u0002@\u0117\u0003\u0002\u0002\u0002B\u0125\u0003\u0002",
    "\u0002\u0002D\u0127\u0003\u0002\u0002\u0002F\u0129\u0003\u0002\u0002",
    "\u0002H\u012b\u0003\u0002\u0002\u0002J\u012d\u0003\u0002\u0002\u0002",
    "L\u0134\u0003\u0002\u0002\u0002N\u0136\u0003\u0002\u0002\u0002P\u013d",
    "\u0003\u0002\u0002\u0002R\u0141\u0003\u0002\u0002\u0002T\u0145\u0003",
    "\u0002\u0002\u0002V\u0152\u0003\u0002\u0002\u0002X\u0159\u0003\u0002",
    "\u0002\u0002Z\u015f\u0003\u0002\u0002\u0002\\\u0163\u0003\u0002\u0002",
    "\u0002^\u0167\u0003\u0002\u0002\u0002`\u016d\u0003\u0002\u0002\u0002",
    "b\u0171\u0003\u0002\u0002\u0002d\u0173\u0003\u0002\u0002\u0002f\u0175",
    "\u0003\u0002\u0002\u0002hj\u0005\u0004\u0003\u0002ih\u0003\u0002\u0002",
    "\u0002jm\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002kl\u0003\u0002",
    "\u0002\u0002l\u0003\u0003\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002",
    "nr\u0005\u0006\u0004\u0002or\u0005\n\u0006\u0002pr\n\u0002\u0002\u0002",
    "qn\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002qp\u0003\u0002\u0002",
    "\u0002r\u0005\u0003\u0002\u0002\u0002st\u0007\u0003\u0002\u0002tu\u0005",
    "\b\u0005\u0002uv\u0007\u0005\u0002\u0002vw\u0005*\u0016\u0002wx\u0005",
    "\f\u0007\u0002x\u0080\u0003\u0002\u0002\u0002yz\u0007\u0003\u0002\u0002",
    "z{\u0005\b\u0005\u0002{|\u0007\u0005\u0002\u0002|}\u0005*\u0016\u0002",
    "}~\u0005\u0010\t\u0002~\u0080\u0003\u0002\u0002\u0002\u007fs\u0003\u0002",
    "\u0002\u0002\u007fy\u0003\u0002\u0002\u0002\u0080\u0007\u0003\u0002",
    "\u0002\u0002\u0081\u0082\u0005(\u0015\u0002\u0082\t\u0003\u0002\u0002",
    "\u0002\u0083\u0084\u0007\u0004\u0002\u0002\u0084\u0085\u0005*\u0016",
    "\u0002\u0085\u0086\u0005\f\u0007\u0002\u0086\u008c\u0003\u0002\u0002",
    "\u0002\u0087\u0088\u0007\u0004\u0002\u0002\u0088\u0089\u0005*\u0016",
    "\u0002\u0089\u008a\u0005\u0010\t\u0002\u008a\u008c\u0003\u0002\u0002",
    "\u0002\u008b\u0083\u0003\u0002\u0002\u0002\u008b\u0087\u0003\u0002\u0002",
    "\u0002\u008c\u000b\u0003\u0002\u0002\u0002\u008d\u008e\u0007\u0006\u0002",
    "\u0002\u008e\u0094\u0007\u0007\u0002\u0002\u008f\u0090\u0007\u0006\u0002",
    "\u0002\u0090\u0091\u0005\u000e\b\u0002\u0091\u0092\u0007\u0007\u0002",
    "\u0002\u0092\u0094\u0003\u0002\u0002\u0002\u0093\u008d\u0003\u0002\u0002",
    "\u0002\u0093\u008f\u0003\u0002\u0002\u0002\u0094\r\u0003\u0002\u0002",
    "\u0002\u0095\u0097\u0005\u0010\t\u0002\u0096\u0095\u0003\u0002\u0002",
    "\u0002\u0097\u009a\u0003\u0002\u0002\u0002\u0098\u0096\u0003\u0002\u0002",
    "\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u000f\u0003\u0002\u0002",
    "\u0002\u009a\u0098\u0003\u0002\u0002\u0002\u009b\u00a1\u0005\u0012\n",
    "\u0002\u009c\u00a1\u0005\u0018\r\u0002\u009d\u00a1\u0005$\u0013\u0002",
    "\u009e\u00a1\u0005&\u0014\u0002\u009f\u00a1\t\u0003\u0002\u0002\u00a0",
    "\u009b\u0003\u0002\u0002\u0002\u00a0\u009c\u0003\u0002\u0002\u0002\u00a0",
    "\u009d\u0003\u0002\u0002\u0002\u00a0\u009e\u0003\u0002\u0002\u0002\u00a0",
    "\u009f\u0003\u0002\u0002\u0002\u00a1\u0011\u0003\u0002\u0002\u0002\u00a2",
    "\u00a3\u0007\b\u0002\u0002\u00a3\u00a6\u0005\u0014\u000b\u0002\u00a4",
    "\u00a6\u0007\b\u0002\u0002\u00a5\u00a2\u0003\u0002\u0002\u0002\u00a5",
    "\u00a4\u0003\u0002\u0002\u0002\u00a6\u0013\u0003\u0002\u0002\u0002\u00a7",
    "\u00a8\u0005\u0016\f\u0002\u00a8\u00a9\u0007\f\u0002\u0002\u00a9\u00ab",
    "\u0003\u0002\u0002\u0002\u00aa\u00a7\u0003\u0002\u0002\u0002\u00ab\u00ae",
    "\u0003\u0002\u0002\u0002\u00ac\u00aa\u0003\u0002\u0002\u0002\u00ac\u00ad",
    "\u0003\u0002\u0002\u0002\u00ad\u00af\u0003\u0002\u0002\u0002\u00ae\u00ac",
    "\u0003\u0002\u0002\u0002\u00af\u00b0\u0005\u0016\f\u0002\u00b0\u0015",
    "\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007W\u0002\u0002\u00b2\u0017",
    "\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007\t\u0002\u0002\u00b4\u00b5",
    "\u0005\u001a\u000e\u0002\u00b5\u00b6\u0007\r\u0002\u0002\u00b6\u00b8",
    "\u0005\u001c\u000f\u0002\u00b7\u00b9\u0005\u001e\u0010\u0002\u00b8\u00b7",
    "\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9\u0019",
    "\u0003\u0002\u0002\u0002\u00ba\u00bb\u0005(\u0015\u0002\u00bb\u001b",
    "\u0003\u0002\u0002\u0002\u00bc\u00bd\u0005(\u0015\u0002\u00bd\u001d",
    "\u0003\u0002\u0002\u0002\u00be\u00bf\u0007\u000e\u0002\u0002\u00bf\u00c4",
    "\u0005 \u0011\u0002\u00c0\u00c1\u0007\f\u0002\u0002\u00c1\u00c3\u0005",
    " \u0011\u0002\u00c2\u00c0\u0003\u0002\u0002\u0002\u00c3\u00c6\u0003",
    "\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c4\u00c5\u0003",
    "\u0002\u0002\u0002\u00c5\u001f\u0003\u0002\u0002\u0002\u00c6\u00c4\u0003",
    "\u0002\u0002\u0002\u00c7\u00cc\u0005\"\u0012\u0002\u00c8\u00c9\u0007",
    "\u000f\u0002\u0002\u00c9\u00cb\u0005\"\u0012\u0002\u00ca\u00c8\u0003",
    "\u0002\u0002\u0002\u00cb\u00ce\u0003\u0002\u0002\u0002\u00cc\u00ca\u0003",
    "\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd!\u0003",
    "\u0002\u0002\u0002\u00ce\u00cc\u0003\u0002\u0002\u0002\u00cf\u00d0\u0005",
    "(\u0015\u0002\u00d0#\u0003\u0002\u0002\u0002\u00d1\u00d2\u0007\n\u0002",
    "\u0002\u00d2%\u0003\u0002\u0002\u0002\u00d3\u00d4\u0007\u000b\u0002",
    "\u0002\u00d4\'\u0003\u0002\u0002\u0002\u00d5\u00d8\u0005,\u0017\u0002",
    "\u00d6\u00d8\u0005.\u0018\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002",
    "\u00d7\u00d6\u0003\u0002\u0002\u0002\u00d8)\u0003\u0002\u0002\u0002",
    "\u00d9\u00da\u00054\u001b\u0002\u00da+\u0003\u0002\u0002\u0002\u00db",
    "\u00dc\u0007\u0010\u0002\u0002\u00dc\u00dd\u00050\u0019\u0002\u00dd",
    "-\u0003\u0002\u0002\u0002\u00de\u00df\u0007\u0011\u0002\u0002\u00df",
    "\u00e0\u00052\u001a\u0002\u00e0/\u0003\u0002\u0002\u0002\u00e1\u00e2",
    "\u0005<\u001f\u0002\u00e2\u00e3\u0007\u0012\u0002\u0002\u00e3\u00e6",
    "\u00056\u001c\u0002\u00e4\u00e5\u0007\u0013\u0002\u0002\u00e5\u00e7",
    "\u0005> \u0002\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e6\u00e4\u0003",
    "\u0002\u0002\u0002\u00e71\u0003\u0002\u0002\u0002\u00e8\u00e9\u0005",
    ":\u001e\u0002\u00e9\u00ea\u0007\u0012\u0002\u0002\u00ea\u00eb\u0005",
    "8\u001d\u0002\u00eb3\u0003\u0002\u0002\u0002\u00ec\u00ee\t\u0004\u0002",
    "\u0002\u00ed\u00ec\u0003\u0002\u0002\u0002\u00ee\u00f1\u0003\u0002\u0002",
    "\u0002\u00ef\u00ed\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002",
    "\u0002\u00f05\u0003\u0002\u0002\u0002\u00f1\u00ef\u0003\u0002\u0002",
    "\u0002\u00f2\u00f3\u0007W\u0002\u0002\u00f37\u0003\u0002\u0002\u0002",
    "\u00f4\u00f5\u0007W\u0002\u0002\u00f59\u0003\u0002\u0002\u0002\u00f6",
    "\u00f7\u0007W\u0002\u0002\u00f7;\u0003\u0002\u0002\u0002\u00f8\u00f9",
    "\u0007W\u0002\u0002\u00f9=\u0003\u0002\u0002\u0002\u00fa\u00fc\u0005",
    "@!\u0002\u00fb\u00fa\u0003\u0002\u0002\u0002\u00fb\u00fc\u0003\u0002",
    "\u0002\u0002\u00fc\u00fd\u0003\u0002\u0002\u0002\u00fd\u0116\u0005B",
    "\"\u0002\u00fe\u0100\u0005@!\u0002\u00ff\u00fe\u0003\u0002\u0002\u0002",
    "\u00ff\u0100\u0003\u0002\u0002\u0002\u0100\u0101\u0003\u0002\u0002\u0002",
    "\u0101\u0102\u0005B\"\u0002\u0102\u0103\u0007\u0015\u0002\u0002\u0103",
    "\u0104\u0005J&\u0002\u0104\u0116\u0003\u0002\u0002\u0002\u0105\u0107",
    "\u0005@!\u0002\u0106\u0105\u0003\u0002\u0002\u0002\u0106\u0107\u0003",
    "\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108\u0109\u0005",
    "B\"\u0002\u0109\u010a\u0007\u0016\u0002\u0002\u010a\u010b\u0005N(\u0002",
    "\u010b\u0116\u0003\u0002\u0002\u0002\u010c\u010e\u0005@!\u0002\u010d",
    "\u010c\u0003\u0002\u0002\u0002\u010d\u010e\u0003\u0002\u0002\u0002\u010e",
    "\u010f\u0003\u0002\u0002\u0002\u010f\u0110\u0005B\"\u0002\u0110\u0111",
    "\u0007\u0015\u0002\u0002\u0111\u0112\u0005J&\u0002\u0112\u0113\u0007",
    "\u0016\u0002\u0002\u0113\u0114\u0005N(\u0002\u0114\u0116\u0003\u0002",
    "\u0002\u0002\u0115\u00fb\u0003\u0002\u0002\u0002\u0115\u00ff\u0003\u0002",
    "\u0002\u0002\u0115\u0106\u0003\u0002\u0002\u0002\u0115\u010d\u0003\u0002",
    "\u0002\u0002\u0116?\u0003\u0002\u0002\u0002\u0117\u0118\t\u0005\u0002",
    "\u0002\u0118A\u0003\u0002\u0002\u0002\u0119\u011a\u0005D#\u0002\u011a",
    "\u011b\u0007\u0014\u0002\u0002\u011b\u011c\u0005F$\u0002\u011c\u011d",
    "\u0007\u0014\u0002\u0002\u011d\u011e\u0005H%\u0002\u011e\u0126\u0003",
    "\u0002\u0002\u0002\u011f\u0120\u0005D#\u0002\u0120\u0121\u0007\u0014",
    "\u0002\u0002\u0121\u0122\u0005F$\u0002\u0122\u0123\u0007\u0014\u0002",
    "\u0002\u0123\u0124\u0005H%\u0002\u0124\u0126\u0003\u0002\u0002\u0002",
    "\u0125\u0119\u0003\u0002\u0002\u0002\u0125\u011f\u0003\u0002\u0002\u0002",
    "\u0126C\u0003\u0002\u0002\u0002\u0127\u0128\u0005X-\u0002\u0128E\u0003",
    "\u0002\u0002\u0002\u0129\u012a\u0005X-\u0002\u012aG\u0003\u0002\u0002",
    "\u0002\u012b\u012c\u0005X-\u0002\u012cI\u0003\u0002\u0002\u0002\u012d",
    "\u012e\u0005L\'\u0002\u012eK\u0003\u0002\u0002\u0002\u012f\u0135\u0005",
    "R*\u0002\u0130\u0131\u0005R*\u0002\u0131\u0132\u0007\u0014\u0002\u0002",
    "\u0132\u0133\u0005L\'\u0002\u0133\u0135\u0003\u0002\u0002\u0002\u0134",
    "\u012f\u0003\u0002\u0002\u0002\u0134\u0130\u0003\u0002\u0002\u0002\u0135",
    "M\u0003\u0002\u0002\u0002\u0136\u0137\u0005P)\u0002\u0137O\u0003\u0002",
    "\u0002\u0002\u0138\u013e\u0005T+\u0002\u0139\u013a\u0005T+\u0002\u013a",
    "\u013b\u0007\u0014\u0002\u0002\u013b\u013c\u0005P)\u0002\u013c\u013e",
    "\u0003\u0002\u0002\u0002\u013d\u0138\u0003\u0002\u0002\u0002\u013d\u0139",
    "\u0003\u0002\u0002\u0002\u013eQ\u0003\u0002\u0002\u0002\u013f\u0142",
    "\u0005V,\u0002\u0140\u0142\u0005X-\u0002\u0141\u013f\u0003\u0002\u0002",
    "\u0002\u0141\u0140\u0003\u0002\u0002\u0002\u0142S\u0003\u0002\u0002",
    "\u0002\u0143\u0146\u0005V,\u0002\u0144\u0146\u0005`1\u0002\u0145\u0143",
    "\u0003\u0002\u0002\u0002\u0145\u0144\u0003\u0002\u0002\u0002\u0146U",
    "\u0003\u0002\u0002\u0002\u0147\u0153\u0005^0\u0002\u0148\u0149\u0005",
    "^0\u0002\u0149\u014a\u0005Z.\u0002\u014a\u0153\u0003\u0002\u0002\u0002",
    "\u014b\u014c\u0005Z.\u0002\u014c\u014d\u0005^0\u0002\u014d\u0153\u0003",
    "\u0002\u0002\u0002\u014e\u014f\u0005Z.\u0002\u014f\u0150\u0005^0\u0002",
    "\u0150\u0151\u0005Z.\u0002\u0151\u0153\u0003\u0002\u0002\u0002\u0152",
    "\u0147\u0003\u0002\u0002\u0002\u0152\u0148\u0003\u0002\u0002\u0002\u0152",
    "\u014b\u0003\u0002\u0002\u0002\u0152\u014e\u0003\u0002\u0002\u0002\u0153",
    "W\u0003\u0002\u0002\u0002\u0154\u015a\u0007\u0019\u0002\u0002\u0155",
    "\u015a\u0005d3\u0002\u0156\u0157\u0005d3\u0002\u0157\u0158\u0005`1\u0002",
    "\u0158\u015a\u0003\u0002\u0002\u0002\u0159\u0154\u0003\u0002\u0002\u0002",
    "\u0159\u0155\u0003\u0002\u0002\u0002\u0159\u0156\u0003\u0002\u0002\u0002",
    "\u015aY\u0003\u0002\u0002\u0002\u015b\u0160\u0005\\/\u0002\u015c\u015d",
    "\u0005\\/\u0002\u015d\u015e\u0005Z.\u0002\u015e\u0160\u0003\u0002\u0002",
    "\u0002\u015f\u015b\u0003\u0002\u0002\u0002\u015f\u015c\u0003\u0002\u0002",
    "\u0002\u0160[\u0003\u0002\u0002\u0002\u0161\u0164\u0005b2\u0002\u0162",
    "\u0164\u0005^0\u0002\u0163\u0161\u0003\u0002\u0002\u0002\u0163\u0162",
    "\u0003\u0002\u0002\u0002\u0164]\u0003\u0002\u0002\u0002\u0165\u0168",
    "\u0005f4\u0002\u0166\u0168\u0007\u0015\u0002\u0002\u0167\u0165\u0003",
    "\u0002\u0002\u0002\u0167\u0166\u0003\u0002\u0002\u0002\u0168_\u0003",
    "\u0002\u0002\u0002\u0169\u016e\u0005b2\u0002\u016a\u016b\u0005b2\u0002",
    "\u016b\u016c\u0005`1\u0002\u016c\u016e\u0003\u0002\u0002\u0002\u016d",
    "\u0169\u0003\u0002\u0002\u0002\u016d\u016a\u0003\u0002\u0002\u0002\u016e",
    "a\u0003\u0002\u0002\u0002\u016f\u0172\u0007\u0019\u0002\u0002\u0170",
    "\u0172\u0005d3\u0002\u0171\u016f\u0003\u0002\u0002\u0002\u0171\u0170",
    "\u0003\u0002\u0002\u0002\u0172c\u0003\u0002\u0002\u0002\u0173\u0174",
    "\t\u0006\u0002\u0002\u0174e\u0003\u0002\u0002\u0002\u0175\u0176\t\u0007",
    "\u0002\u0002\u0176g\u0003\u0002\u0002\u0002\"kq\u007f\u008b\u0093\u0098",
    "\u00a0\u00a5\u00ac\u00b8\u00c4\u00cc\u00d7\u00e6\u00ef\u00fb\u00ff\u0106",
    "\u010d\u0115\u0125\u0134\u013d\u0141\u0145\u0152\u0159\u015f\u0163\u0167",
    "\u016d\u0171"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'add'", "'alter'", "'as'", "'do'", "'end'", 
                     "'set_tags'", "'replace'", "'show'", "'hide'", "','", 
                     "'with'", "'under'", "'>'", "'$'", "'#'", "'/'", "'@'", 
                     "'.'", "'-'", "'+'", "'^'", "'~'", "'0'", "'1'", "'2'", 
                     "'3'", "'4'", "'5'", "'6'", "'7'", "'8'", "'9'", "'A'", 
                     "'B'", "'C'", "'D'", "'E'", "'F'", "'G'", "'H'", "'I'", 
                     "'J'", "'K'", "'L'", "'M'", "'N'", "'O'", "'P'", "'Q'", 
                     "'R'", "'S'", "'T'", "'U'", "'V'", "'W'", "'X'", "'Y'", 
                     "'Z'", "'a'", "'b'", "'c'", "'d'", "'e'", "'f'", "'g'", 
                     "'h'", "'i'", "'j'", "'k'", "'l'", "'m'", "'n'", "'o'", 
                     "'p'", "'q'", "'r'", "'s'", "'t'", "'u'", "'v'", "'w'", 
                     "'x'", "'y'", "'z'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "ID", "LINE_COMMENT", "BLOCK_COMMENT", 
                      "WS" ];

var ruleNames =  [ "mappingRules", "mappingRule", "addRule", "candidate", 
                   "alterRule", "codeBlock", "linesCode", "lineCode", "setTags", 
                   "tags", "tag", "replace", "target", "source", "under", 
                   "scope", "scopeNode", "show", "hide", "releaseOrMockName", 
                   "presentationName", "releaseName", "mockName", "release_id", 
                   "mock_id", "presentation_name", "release_name", "mock_name", 
                   "bucket_name", "user_name", "valid_semver", "prefix", 
                   "version_core", "major", "minor", "patch", "preRelease", 
                   "dotSeparated_preRelease_identifiers", "build", "dotSeparated_build_identifiers", 
                   "preRelease_identifier", "build_identifier", "alphanumeric_identifier", 
                   "numeric_identifier", "identifier_characters", "identifier_character", 
                   "nonDigit", "digits", "digit", "positive_digit", "letter" ];

function MappingParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

MappingParser.prototype = Object.create(antlr4.Parser.prototype);
MappingParser.prototype.constructor = MappingParser;

Object.defineProperty(MappingParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

MappingParser.EOF = antlr4.Token.EOF;
MappingParser.T__0 = 1;
MappingParser.T__1 = 2;
MappingParser.T__2 = 3;
MappingParser.T__3 = 4;
MappingParser.T__4 = 5;
MappingParser.T__5 = 6;
MappingParser.T__6 = 7;
MappingParser.T__7 = 8;
MappingParser.T__8 = 9;
MappingParser.T__9 = 10;
MappingParser.T__10 = 11;
MappingParser.T__11 = 12;
MappingParser.T__12 = 13;
MappingParser.T__13 = 14;
MappingParser.T__14 = 15;
MappingParser.T__15 = 16;
MappingParser.T__16 = 17;
MappingParser.T__17 = 18;
MappingParser.T__18 = 19;
MappingParser.T__19 = 20;
MappingParser.T__20 = 21;
MappingParser.T__21 = 22;
MappingParser.T__22 = 23;
MappingParser.T__23 = 24;
MappingParser.T__24 = 25;
MappingParser.T__25 = 26;
MappingParser.T__26 = 27;
MappingParser.T__27 = 28;
MappingParser.T__28 = 29;
MappingParser.T__29 = 30;
MappingParser.T__30 = 31;
MappingParser.T__31 = 32;
MappingParser.T__32 = 33;
MappingParser.T__33 = 34;
MappingParser.T__34 = 35;
MappingParser.T__35 = 36;
MappingParser.T__36 = 37;
MappingParser.T__37 = 38;
MappingParser.T__38 = 39;
MappingParser.T__39 = 40;
MappingParser.T__40 = 41;
MappingParser.T__41 = 42;
MappingParser.T__42 = 43;
MappingParser.T__43 = 44;
MappingParser.T__44 = 45;
MappingParser.T__45 = 46;
MappingParser.T__46 = 47;
MappingParser.T__47 = 48;
MappingParser.T__48 = 49;
MappingParser.T__49 = 50;
MappingParser.T__50 = 51;
MappingParser.T__51 = 52;
MappingParser.T__52 = 53;
MappingParser.T__53 = 54;
MappingParser.T__54 = 55;
MappingParser.T__55 = 56;
MappingParser.T__56 = 57;
MappingParser.T__57 = 58;
MappingParser.T__58 = 59;
MappingParser.T__59 = 60;
MappingParser.T__60 = 61;
MappingParser.T__61 = 62;
MappingParser.T__62 = 63;
MappingParser.T__63 = 64;
MappingParser.T__64 = 65;
MappingParser.T__65 = 66;
MappingParser.T__66 = 67;
MappingParser.T__67 = 68;
MappingParser.T__68 = 69;
MappingParser.T__69 = 70;
MappingParser.T__70 = 71;
MappingParser.T__71 = 72;
MappingParser.T__72 = 73;
MappingParser.T__73 = 74;
MappingParser.T__74 = 75;
MappingParser.T__75 = 76;
MappingParser.T__76 = 77;
MappingParser.T__77 = 78;
MappingParser.T__78 = 79;
MappingParser.T__79 = 80;
MappingParser.T__80 = 81;
MappingParser.T__81 = 82;
MappingParser.T__82 = 83;
MappingParser.T__83 = 84;
MappingParser.ID = 85;
MappingParser.LINE_COMMENT = 86;
MappingParser.BLOCK_COMMENT = 87;
MappingParser.WS = 88;

MappingParser.RULE_mappingRules = 0;
MappingParser.RULE_mappingRule = 1;
MappingParser.RULE_addRule = 2;
MappingParser.RULE_candidate = 3;
MappingParser.RULE_alterRule = 4;
MappingParser.RULE_codeBlock = 5;
MappingParser.RULE_linesCode = 6;
MappingParser.RULE_lineCode = 7;
MappingParser.RULE_setTags = 8;
MappingParser.RULE_tags = 9;
MappingParser.RULE_tag = 10;
MappingParser.RULE_replace = 11;
MappingParser.RULE_target = 12;
MappingParser.RULE_source = 13;
MappingParser.RULE_under = 14;
MappingParser.RULE_scope = 15;
MappingParser.RULE_scopeNode = 16;
MappingParser.RULE_show = 17;
MappingParser.RULE_hide = 18;
MappingParser.RULE_releaseOrMockName = 19;
MappingParser.RULE_presentationName = 20;
MappingParser.RULE_releaseName = 21;
MappingParser.RULE_mockName = 22;
MappingParser.RULE_release_id = 23;
MappingParser.RULE_mock_id = 24;
MappingParser.RULE_presentation_name = 25;
MappingParser.RULE_release_name = 26;
MappingParser.RULE_mock_name = 27;
MappingParser.RULE_bucket_name = 28;
MappingParser.RULE_user_name = 29;
MappingParser.RULE_valid_semver = 30;
MappingParser.RULE_prefix = 31;
MappingParser.RULE_version_core = 32;
MappingParser.RULE_major = 33;
MappingParser.RULE_minor = 34;
MappingParser.RULE_patch = 35;
MappingParser.RULE_preRelease = 36;
MappingParser.RULE_dotSeparated_preRelease_identifiers = 37;
MappingParser.RULE_build = 38;
MappingParser.RULE_dotSeparated_build_identifiers = 39;
MappingParser.RULE_preRelease_identifier = 40;
MappingParser.RULE_build_identifier = 41;
MappingParser.RULE_alphanumeric_identifier = 42;
MappingParser.RULE_numeric_identifier = 43;
MappingParser.RULE_identifier_characters = 44;
MappingParser.RULE_identifier_character = 45;
MappingParser.RULE_nonDigit = 46;
MappingParser.RULE_digits = 47;
MappingParser.RULE_digit = 48;
MappingParser.RULE_positive_digit = 49;
MappingParser.RULE_letter = 50;

function MappingRulesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_mappingRules;
    return this;
}

MappingRulesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MappingRulesContext.prototype.constructor = MappingRulesContext;

MappingRulesContext.prototype.mappingRule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MappingRuleContext);
    } else {
        return this.getTypedRuleContext(MappingRuleContext,i);
    }
};

MappingRulesContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterMappingRules(this);
	}
};

MappingRulesContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitMappingRules(this);
	}
};

MappingRulesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitMappingRules(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.MappingRulesContext = MappingRulesContext;

MappingParser.prototype.mappingRules = function() {

    var localctx = new MappingRulesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, MappingParser.RULE_mappingRules);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MappingParser.T__0) | (1 << MappingParser.T__1) | (1 << MappingParser.T__2) | (1 << MappingParser.T__3) | (1 << MappingParser.T__4) | (1 << MappingParser.T__5) | (1 << MappingParser.T__6) | (1 << MappingParser.T__7) | (1 << MappingParser.T__8) | (1 << MappingParser.T__9) | (1 << MappingParser.T__10) | (1 << MappingParser.T__11) | (1 << MappingParser.T__12) | (1 << MappingParser.T__13) | (1 << MappingParser.T__14) | (1 << MappingParser.T__15) | (1 << MappingParser.T__16) | (1 << MappingParser.T__17) | (1 << MappingParser.T__18) | (1 << MappingParser.T__19) | (1 << MappingParser.T__20) | (1 << MappingParser.T__21) | (1 << MappingParser.T__22) | (1 << MappingParser.T__23) | (1 << MappingParser.T__24) | (1 << MappingParser.T__25) | (1 << MappingParser.T__26) | (1 << MappingParser.T__27) | (1 << MappingParser.T__28) | (1 << MappingParser.T__29) | (1 << MappingParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (MappingParser.T__31 - 32)) | (1 << (MappingParser.T__32 - 32)) | (1 << (MappingParser.T__33 - 32)) | (1 << (MappingParser.T__34 - 32)) | (1 << (MappingParser.T__35 - 32)) | (1 << (MappingParser.T__36 - 32)) | (1 << (MappingParser.T__37 - 32)) | (1 << (MappingParser.T__38 - 32)) | (1 << (MappingParser.T__39 - 32)) | (1 << (MappingParser.T__40 - 32)) | (1 << (MappingParser.T__41 - 32)) | (1 << (MappingParser.T__42 - 32)) | (1 << (MappingParser.T__43 - 32)) | (1 << (MappingParser.T__44 - 32)) | (1 << (MappingParser.T__45 - 32)) | (1 << (MappingParser.T__46 - 32)) | (1 << (MappingParser.T__47 - 32)) | (1 << (MappingParser.T__48 - 32)) | (1 << (MappingParser.T__49 - 32)) | (1 << (MappingParser.T__50 - 32)) | (1 << (MappingParser.T__51 - 32)) | (1 << (MappingParser.T__52 - 32)) | (1 << (MappingParser.T__53 - 32)) | (1 << (MappingParser.T__54 - 32)) | (1 << (MappingParser.T__55 - 32)) | (1 << (MappingParser.T__56 - 32)) | (1 << (MappingParser.T__57 - 32)) | (1 << (MappingParser.T__58 - 32)) | (1 << (MappingParser.T__59 - 32)) | (1 << (MappingParser.T__60 - 32)) | (1 << (MappingParser.T__61 - 32)) | (1 << (MappingParser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (MappingParser.T__63 - 64)) | (1 << (MappingParser.T__64 - 64)) | (1 << (MappingParser.T__65 - 64)) | (1 << (MappingParser.T__66 - 64)) | (1 << (MappingParser.T__67 - 64)) | (1 << (MappingParser.T__68 - 64)) | (1 << (MappingParser.T__69 - 64)) | (1 << (MappingParser.T__70 - 64)) | (1 << (MappingParser.T__71 - 64)) | (1 << (MappingParser.T__72 - 64)) | (1 << (MappingParser.T__73 - 64)) | (1 << (MappingParser.T__74 - 64)) | (1 << (MappingParser.T__75 - 64)) | (1 << (MappingParser.T__76 - 64)) | (1 << (MappingParser.T__77 - 64)) | (1 << (MappingParser.T__78 - 64)) | (1 << (MappingParser.T__79 - 64)) | (1 << (MappingParser.T__80 - 64)) | (1 << (MappingParser.T__81 - 64)) | (1 << (MappingParser.T__82 - 64)) | (1 << (MappingParser.T__83 - 64)) | (1 << (MappingParser.ID - 64)) | (1 << (MappingParser.LINE_COMMENT - 64)) | (1 << (MappingParser.BLOCK_COMMENT - 64)) | (1 << (MappingParser.WS - 64)))) !== 0)) {
            this.state = 102;
            this.mappingRule();
            this.state = 107;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function MappingRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_mappingRule;
    return this;
}

MappingRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MappingRuleContext.prototype.constructor = MappingRuleContext;

MappingRuleContext.prototype.addRule = function() {
    return this.getTypedRuleContext(AddRuleContext,0);
};

MappingRuleContext.prototype.alterRule = function() {
    return this.getTypedRuleContext(AlterRuleContext,0);
};

MappingRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterMappingRule(this);
	}
};

MappingRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitMappingRule(this);
	}
};

MappingRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitMappingRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.MappingRuleContext = MappingRuleContext;

MappingParser.prototype.mappingRule = function() {

    var localctx = new MappingRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, MappingParser.RULE_mappingRule);
    var _la = 0; // Token type
    try {
        this.state = 111;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MappingParser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 108;
            this.addRule();
            break;
        case MappingParser.T__1:
            this.enterOuterAlt(localctx, 2);
            this.state = 109;
            this.alterRule();
            break;
        case MappingParser.T__2:
        case MappingParser.T__3:
        case MappingParser.T__4:
        case MappingParser.T__5:
        case MappingParser.T__6:
        case MappingParser.T__7:
        case MappingParser.T__8:
        case MappingParser.T__9:
        case MappingParser.T__10:
        case MappingParser.T__11:
        case MappingParser.T__12:
        case MappingParser.T__13:
        case MappingParser.T__14:
        case MappingParser.T__15:
        case MappingParser.T__16:
        case MappingParser.T__17:
        case MappingParser.T__18:
        case MappingParser.T__19:
        case MappingParser.T__20:
        case MappingParser.T__21:
        case MappingParser.T__22:
        case MappingParser.T__23:
        case MappingParser.T__24:
        case MappingParser.T__25:
        case MappingParser.T__26:
        case MappingParser.T__27:
        case MappingParser.T__28:
        case MappingParser.T__29:
        case MappingParser.T__30:
        case MappingParser.T__31:
        case MappingParser.T__32:
        case MappingParser.T__33:
        case MappingParser.T__34:
        case MappingParser.T__35:
        case MappingParser.T__36:
        case MappingParser.T__37:
        case MappingParser.T__38:
        case MappingParser.T__39:
        case MappingParser.T__40:
        case MappingParser.T__41:
        case MappingParser.T__42:
        case MappingParser.T__43:
        case MappingParser.T__44:
        case MappingParser.T__45:
        case MappingParser.T__46:
        case MappingParser.T__47:
        case MappingParser.T__48:
        case MappingParser.T__49:
        case MappingParser.T__50:
        case MappingParser.T__51:
        case MappingParser.T__52:
        case MappingParser.T__53:
        case MappingParser.T__54:
        case MappingParser.T__55:
        case MappingParser.T__56:
        case MappingParser.T__57:
        case MappingParser.T__58:
        case MappingParser.T__59:
        case MappingParser.T__60:
        case MappingParser.T__61:
        case MappingParser.T__62:
        case MappingParser.T__63:
        case MappingParser.T__64:
        case MappingParser.T__65:
        case MappingParser.T__66:
        case MappingParser.T__67:
        case MappingParser.T__68:
        case MappingParser.T__69:
        case MappingParser.T__70:
        case MappingParser.T__71:
        case MappingParser.T__72:
        case MappingParser.T__73:
        case MappingParser.T__74:
        case MappingParser.T__75:
        case MappingParser.T__76:
        case MappingParser.T__77:
        case MappingParser.T__78:
        case MappingParser.T__79:
        case MappingParser.T__80:
        case MappingParser.T__81:
        case MappingParser.T__82:
        case MappingParser.T__83:
        case MappingParser.ID:
        case MappingParser.LINE_COMMENT:
        case MappingParser.BLOCK_COMMENT:
        case MappingParser.WS:
            this.enterOuterAlt(localctx, 3);
            this.state = 110;
            _la = this._input.LA(1);
            if(_la<=0 || _la===MappingParser.T__0 || _la===MappingParser.T__1) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
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

function AddRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_addRule;
    return this;
}

AddRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddRuleContext.prototype.constructor = AddRuleContext;

AddRuleContext.prototype.candidate = function() {
    return this.getTypedRuleContext(CandidateContext,0);
};

AddRuleContext.prototype.presentationName = function() {
    return this.getTypedRuleContext(PresentationNameContext,0);
};

AddRuleContext.prototype.codeBlock = function() {
    return this.getTypedRuleContext(CodeBlockContext,0);
};

AddRuleContext.prototype.lineCode = function() {
    return this.getTypedRuleContext(LineCodeContext,0);
};

AddRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterAddRule(this);
	}
};

AddRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitAddRule(this);
	}
};

AddRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitAddRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.AddRuleContext = AddRuleContext;

MappingParser.prototype.addRule = function() {

    var localctx = new AddRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, MappingParser.RULE_addRule);
    try {
        this.state = 125;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 113;
            this.match(MappingParser.T__0);
            this.state = 114;
            this.candidate();
            this.state = 115;
            this.match(MappingParser.T__2);
            this.state = 116;
            this.presentationName();
            this.state = 117;
            this.codeBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 119;
            this.match(MappingParser.T__0);
            this.state = 120;
            this.candidate();
            this.state = 121;
            this.match(MappingParser.T__2);
            this.state = 122;
            this.presentationName();
            this.state = 123;
            this.lineCode();
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

function CandidateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_candidate;
    return this;
}

CandidateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CandidateContext.prototype.constructor = CandidateContext;

CandidateContext.prototype.releaseOrMockName = function() {
    return this.getTypedRuleContext(ReleaseOrMockNameContext,0);
};

CandidateContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterCandidate(this);
	}
};

CandidateContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitCandidate(this);
	}
};

CandidateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitCandidate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.CandidateContext = CandidateContext;

MappingParser.prototype.candidate = function() {

    var localctx = new CandidateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, MappingParser.RULE_candidate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.releaseOrMockName();
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

function AlterRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_alterRule;
    return this;
}

AlterRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AlterRuleContext.prototype.constructor = AlterRuleContext;

AlterRuleContext.prototype.presentationName = function() {
    return this.getTypedRuleContext(PresentationNameContext,0);
};

AlterRuleContext.prototype.codeBlock = function() {
    return this.getTypedRuleContext(CodeBlockContext,0);
};

AlterRuleContext.prototype.lineCode = function() {
    return this.getTypedRuleContext(LineCodeContext,0);
};

AlterRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterAlterRule(this);
	}
};

AlterRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitAlterRule(this);
	}
};

AlterRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitAlterRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.AlterRuleContext = AlterRuleContext;

MappingParser.prototype.alterRule = function() {

    var localctx = new AlterRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, MappingParser.RULE_alterRule);
    try {
        this.state = 137;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 129;
            this.match(MappingParser.T__1);
            this.state = 130;
            this.presentationName();
            this.state = 131;
            this.codeBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 133;
            this.match(MappingParser.T__1);
            this.state = 134;
            this.presentationName();
            this.state = 135;
            this.lineCode();
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

function CodeBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_codeBlock;
    return this;
}

CodeBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeBlockContext.prototype.constructor = CodeBlockContext;

CodeBlockContext.prototype.linesCode = function() {
    return this.getTypedRuleContext(LinesCodeContext,0);
};

CodeBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterCodeBlock(this);
	}
};

CodeBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitCodeBlock(this);
	}
};

CodeBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitCodeBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.CodeBlockContext = CodeBlockContext;

MappingParser.prototype.codeBlock = function() {

    var localctx = new CodeBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, MappingParser.RULE_codeBlock);
    try {
        this.state = 145;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 139;
            this.match(MappingParser.T__3);
            this.state = 140;
            this.match(MappingParser.T__4);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 141;
            this.match(MappingParser.T__3);
            this.state = 142;
            this.linesCode();
            this.state = 143;
            this.match(MappingParser.T__4);
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

function LinesCodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_linesCode;
    return this;
}

LinesCodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LinesCodeContext.prototype.constructor = LinesCodeContext;

LinesCodeContext.prototype.lineCode = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineCodeContext);
    } else {
        return this.getTypedRuleContext(LineCodeContext,i);
    }
};

LinesCodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterLinesCode(this);
	}
};

LinesCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitLinesCode(this);
	}
};

LinesCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitLinesCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.LinesCodeContext = LinesCodeContext;

MappingParser.prototype.linesCode = function() {

    var localctx = new LinesCodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, MappingParser.RULE_linesCode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MappingParser.T__5) | (1 << MappingParser.T__6) | (1 << MappingParser.T__7) | (1 << MappingParser.T__8))) !== 0)) {
            this.state = 147;
            this.lineCode();
            this.state = 152;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function LineCodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_lineCode;
    return this;
}

LineCodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LineCodeContext.prototype.constructor = LineCodeContext;

LineCodeContext.prototype.setTags = function() {
    return this.getTypedRuleContext(SetTagsContext,0);
};

LineCodeContext.prototype.replace = function() {
    return this.getTypedRuleContext(ReplaceContext,0);
};

LineCodeContext.prototype.show = function() {
    return this.getTypedRuleContext(ShowContext,0);
};

LineCodeContext.prototype.hide = function() {
    return this.getTypedRuleContext(HideContext,0);
};

LineCodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterLineCode(this);
	}
};

LineCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitLineCode(this);
	}
};

LineCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitLineCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.LineCodeContext = LineCodeContext;

MappingParser.prototype.lineCode = function() {

    var localctx = new LineCodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, MappingParser.RULE_lineCode);
    var _la = 0; // Token type
    try {
        this.state = 158;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 153;
            this.setTags();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 154;
            this.replace();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 155;
            this.show();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 156;
            this.hide();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 157;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MappingParser.T__5) | (1 << MappingParser.T__6) | (1 << MappingParser.T__7) | (1 << MappingParser.T__8))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
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

function SetTagsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_setTags;
    return this;
}

SetTagsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetTagsContext.prototype.constructor = SetTagsContext;

SetTagsContext.prototype.tags = function() {
    return this.getTypedRuleContext(TagsContext,0);
};

SetTagsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterSetTags(this);
	}
};

SetTagsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitSetTags(this);
	}
};

SetTagsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitSetTags(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.SetTagsContext = SetTagsContext;

MappingParser.prototype.setTags = function() {

    var localctx = new SetTagsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, MappingParser.RULE_setTags);
    try {
        this.state = 163;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 160;
            this.match(MappingParser.T__5);
            this.state = 161;
            this.tags();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 162;
            this.match(MappingParser.T__5);
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

function TagsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_tags;
    return this;
}

TagsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagsContext.prototype.constructor = TagsContext;

TagsContext.prototype.tag = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TagContext);
    } else {
        return this.getTypedRuleContext(TagContext,i);
    }
};

TagsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterTags(this);
	}
};

TagsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitTags(this);
	}
};

TagsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitTags(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.TagsContext = TagsContext;

MappingParser.prototype.tags = function() {

    var localctx = new TagsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, MappingParser.RULE_tags);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 165;
                this.tag();
                this.state = 166;
                this.match(MappingParser.T__9); 
            }
            this.state = 172;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

        this.state = 173;
        this.tag();
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

function TagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_tag;
    return this;
}

TagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagContext.prototype.constructor = TagContext;

TagContext.prototype.ID = function() {
    return this.getToken(MappingParser.ID, 0);
};

TagContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterTag(this);
	}
};

TagContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitTag(this);
	}
};

TagContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitTag(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.TagContext = TagContext;

MappingParser.prototype.tag = function() {

    var localctx = new TagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, MappingParser.RULE_tag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175;
        this.match(MappingParser.ID);
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

function ReplaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_replace;
    return this;
}

ReplaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReplaceContext.prototype.constructor = ReplaceContext;

ReplaceContext.prototype.target = function() {
    return this.getTypedRuleContext(TargetContext,0);
};

ReplaceContext.prototype.source = function() {
    return this.getTypedRuleContext(SourceContext,0);
};

ReplaceContext.prototype.under = function() {
    return this.getTypedRuleContext(UnderContext,0);
};

ReplaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterReplace(this);
	}
};

ReplaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitReplace(this);
	}
};

ReplaceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitReplace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.ReplaceContext = ReplaceContext;

MappingParser.prototype.replace = function() {

    var localctx = new ReplaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, MappingParser.RULE_replace);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        this.match(MappingParser.T__6);
        this.state = 178;
        this.target();
        this.state = 179;
        this.match(MappingParser.T__10);
        this.state = 180;
        this.source();
        this.state = 182;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        if(la_===1) {
            this.state = 181;
            this.under();

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

function TargetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_target;
    return this;
}

TargetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TargetContext.prototype.constructor = TargetContext;

TargetContext.prototype.releaseOrMockName = function() {
    return this.getTypedRuleContext(ReleaseOrMockNameContext,0);
};

TargetContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterTarget(this);
	}
};

TargetContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitTarget(this);
	}
};

TargetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitTarget(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.TargetContext = TargetContext;

MappingParser.prototype.target = function() {

    var localctx = new TargetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, MappingParser.RULE_target);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.releaseOrMockName();
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

function SourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_source;
    return this;
}

SourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceContext.prototype.constructor = SourceContext;

SourceContext.prototype.releaseOrMockName = function() {
    return this.getTypedRuleContext(ReleaseOrMockNameContext,0);
};

SourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterSource(this);
	}
};

SourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitSource(this);
	}
};

SourceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitSource(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.SourceContext = SourceContext;

MappingParser.prototype.source = function() {

    var localctx = new SourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, MappingParser.RULE_source);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.releaseOrMockName();
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

function UnderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_under;
    return this;
}

UnderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnderContext.prototype.constructor = UnderContext;

UnderContext.prototype.scope = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ScopeContext);
    } else {
        return this.getTypedRuleContext(ScopeContext,i);
    }
};

UnderContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterUnder(this);
	}
};

UnderContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitUnder(this);
	}
};

UnderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitUnder(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.UnderContext = UnderContext;

MappingParser.prototype.under = function() {

    var localctx = new UnderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, MappingParser.RULE_under);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        this.match(MappingParser.T__11);
        this.state = 189;
        this.scope();
        this.state = 194;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 190;
                this.match(MappingParser.T__9);
                this.state = 191;
                this.scope(); 
            }
            this.state = 196;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
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

function ScopeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_scope;
    return this;
}

ScopeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScopeContext.prototype.constructor = ScopeContext;

ScopeContext.prototype.scopeNode = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ScopeNodeContext);
    } else {
        return this.getTypedRuleContext(ScopeNodeContext,i);
    }
};

ScopeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterScope(this);
	}
};

ScopeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitScope(this);
	}
};

ScopeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitScope(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.ScopeContext = ScopeContext;

MappingParser.prototype.scope = function() {

    var localctx = new ScopeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, MappingParser.RULE_scope);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.scopeNode();
        this.state = 202;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 198;
                this.match(MappingParser.T__12);
                this.state = 199;
                this.scopeNode(); 
            }
            this.state = 204;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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

function ScopeNodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_scopeNode;
    return this;
}

ScopeNodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScopeNodeContext.prototype.constructor = ScopeNodeContext;

ScopeNodeContext.prototype.releaseOrMockName = function() {
    return this.getTypedRuleContext(ReleaseOrMockNameContext,0);
};

ScopeNodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterScopeNode(this);
	}
};

ScopeNodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitScopeNode(this);
	}
};

ScopeNodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitScopeNode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.ScopeNodeContext = ScopeNodeContext;

MappingParser.prototype.scopeNode = function() {

    var localctx = new ScopeNodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, MappingParser.RULE_scopeNode);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        this.releaseOrMockName();
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

function ShowContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_show;
    return this;
}

ShowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShowContext.prototype.constructor = ShowContext;


ShowContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterShow(this);
	}
};

ShowContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitShow(this);
	}
};

ShowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitShow(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.ShowContext = ShowContext;

MappingParser.prototype.show = function() {

    var localctx = new ShowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, MappingParser.RULE_show);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        this.match(MappingParser.T__7);
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

function HideContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_hide;
    return this;
}

HideContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HideContext.prototype.constructor = HideContext;


HideContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterHide(this);
	}
};

HideContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitHide(this);
	}
};

HideContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitHide(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.HideContext = HideContext;

MappingParser.prototype.hide = function() {

    var localctx = new HideContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, MappingParser.RULE_hide);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
        this.match(MappingParser.T__8);
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

function ReleaseOrMockNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_releaseOrMockName;
    return this;
}

ReleaseOrMockNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReleaseOrMockNameContext.prototype.constructor = ReleaseOrMockNameContext;

ReleaseOrMockNameContext.prototype.releaseName = function() {
    return this.getTypedRuleContext(ReleaseNameContext,0);
};

ReleaseOrMockNameContext.prototype.mockName = function() {
    return this.getTypedRuleContext(MockNameContext,0);
};

ReleaseOrMockNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterReleaseOrMockName(this);
	}
};

ReleaseOrMockNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitReleaseOrMockName(this);
	}
};

ReleaseOrMockNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitReleaseOrMockName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.ReleaseOrMockNameContext = ReleaseOrMockNameContext;

MappingParser.prototype.releaseOrMockName = function() {

    var localctx = new ReleaseOrMockNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, MappingParser.RULE_releaseOrMockName);
    try {
        this.state = 213;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MappingParser.T__13:
            this.enterOuterAlt(localctx, 1);
            this.state = 211;
            this.releaseName();
            break;
        case MappingParser.T__14:
            this.enterOuterAlt(localctx, 2);
            this.state = 212;
            this.mockName();
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

function PresentationNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_presentationName;
    return this;
}

PresentationNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PresentationNameContext.prototype.constructor = PresentationNameContext;

PresentationNameContext.prototype.presentation_name = function() {
    return this.getTypedRuleContext(Presentation_nameContext,0);
};

PresentationNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterPresentationName(this);
	}
};

PresentationNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitPresentationName(this);
	}
};

PresentationNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitPresentationName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.PresentationNameContext = PresentationNameContext;

MappingParser.prototype.presentationName = function() {

    var localctx = new PresentationNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, MappingParser.RULE_presentationName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 215;
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

function ReleaseNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_releaseName;
    return this;
}

ReleaseNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReleaseNameContext.prototype.constructor = ReleaseNameContext;

ReleaseNameContext.prototype.release_id = function() {
    return this.getTypedRuleContext(Release_idContext,0);
};

ReleaseNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterReleaseName(this);
	}
};

ReleaseNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitReleaseName(this);
	}
};

ReleaseNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitReleaseName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.ReleaseNameContext = ReleaseNameContext;

MappingParser.prototype.releaseName = function() {

    var localctx = new ReleaseNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, MappingParser.RULE_releaseName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 217;
        this.match(MappingParser.T__13);
        this.state = 218;
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

function MockNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_mockName;
    return this;
}

MockNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MockNameContext.prototype.constructor = MockNameContext;

MockNameContext.prototype.mock_id = function() {
    return this.getTypedRuleContext(Mock_idContext,0);
};

MockNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterMockName(this);
	}
};

MockNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitMockName(this);
	}
};

MockNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitMockName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.MockNameContext = MockNameContext;

MappingParser.prototype.mockName = function() {

    var localctx = new MockNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, MappingParser.RULE_mockName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 220;
        this.match(MappingParser.T__14);
        this.state = 221;
        this.mock_id();
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
    this.ruleIndex = MappingParser.RULE_release_id;
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
    if(listener instanceof MappingListener ) {
        listener.enterRelease_id(this);
	}
};

Release_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitRelease_id(this);
	}
};

Release_idContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitRelease_id(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Release_idContext = Release_idContext;

MappingParser.prototype.release_id = function() {

    var localctx = new Release_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, MappingParser.RULE_release_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 223;
        this.user_name();
        this.state = 224;
        this.match(MappingParser.T__15);
        this.state = 225;
        this.release_name();
        this.state = 228;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        if(la_===1+1) {
            this.state = 226;
            this.match(MappingParser.T__16);
            this.state = 227;
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
    this.ruleIndex = MappingParser.RULE_mock_id;
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
    if(listener instanceof MappingListener ) {
        listener.enterMock_id(this);
	}
};

Mock_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitMock_id(this);
	}
};

Mock_idContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitMock_id(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Mock_idContext = Mock_idContext;

MappingParser.prototype.mock_id = function() {

    var localctx = new Mock_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, MappingParser.RULE_mock_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 230;
        this.bucket_name();
        this.state = 231;
        this.match(MappingParser.T__15);
        this.state = 232;
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
    this.ruleIndex = MappingParser.RULE_presentation_name;
    return this;
}

Presentation_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Presentation_nameContext.prototype.constructor = Presentation_nameContext;

Presentation_nameContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MappingParser.ID);
    } else {
        return this.getToken(MappingParser.ID, i);
    }
};


Presentation_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterPresentation_name(this);
	}
};

Presentation_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitPresentation_name(this);
	}
};

Presentation_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitPresentation_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Presentation_nameContext = Presentation_nameContext;

MappingParser.prototype.presentation_name = function() {

    var localctx = new Presentation_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, MappingParser.RULE_presentation_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MappingParser.T__17 || _la===MappingParser.ID) {
            this.state = 234;
            _la = this._input.LA(1);
            if(!(_la===MappingParser.T__17 || _la===MappingParser.ID)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 239;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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
    this.ruleIndex = MappingParser.RULE_release_name;
    return this;
}

Release_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Release_nameContext.prototype.constructor = Release_nameContext;

Release_nameContext.prototype.ID = function() {
    return this.getToken(MappingParser.ID, 0);
};

Release_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterRelease_name(this);
	}
};

Release_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitRelease_name(this);
	}
};

Release_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitRelease_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Release_nameContext = Release_nameContext;

MappingParser.prototype.release_name = function() {

    var localctx = new Release_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, MappingParser.RULE_release_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.match(MappingParser.ID);
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
    this.ruleIndex = MappingParser.RULE_mock_name;
    return this;
}

Mock_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Mock_nameContext.prototype.constructor = Mock_nameContext;

Mock_nameContext.prototype.ID = function() {
    return this.getToken(MappingParser.ID, 0);
};

Mock_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterMock_name(this);
	}
};

Mock_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitMock_name(this);
	}
};

Mock_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitMock_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Mock_nameContext = Mock_nameContext;

MappingParser.prototype.mock_name = function() {

    var localctx = new Mock_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, MappingParser.RULE_mock_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 242;
        this.match(MappingParser.ID);
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
    this.ruleIndex = MappingParser.RULE_bucket_name;
    return this;
}

Bucket_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Bucket_nameContext.prototype.constructor = Bucket_nameContext;

Bucket_nameContext.prototype.ID = function() {
    return this.getToken(MappingParser.ID, 0);
};

Bucket_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterBucket_name(this);
	}
};

Bucket_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitBucket_name(this);
	}
};

Bucket_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitBucket_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Bucket_nameContext = Bucket_nameContext;

MappingParser.prototype.bucket_name = function() {

    var localctx = new Bucket_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, MappingParser.RULE_bucket_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
        this.match(MappingParser.ID);
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
    this.ruleIndex = MappingParser.RULE_user_name;
    return this;
}

User_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
User_nameContext.prototype.constructor = User_nameContext;

User_nameContext.prototype.ID = function() {
    return this.getToken(MappingParser.ID, 0);
};

User_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterUser_name(this);
	}
};

User_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitUser_name(this);
	}
};

User_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitUser_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.User_nameContext = User_nameContext;

MappingParser.prototype.user_name = function() {

    var localctx = new User_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, MappingParser.RULE_user_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 246;
        this.match(MappingParser.ID);
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
    this.ruleIndex = MappingParser.RULE_valid_semver;
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
    if(listener instanceof MappingListener ) {
        listener.enterValid_semver(this);
	}
};

Valid_semverContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitValid_semver(this);
	}
};

Valid_semverContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitValid_semver(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Valid_semverContext = Valid_semverContext;

MappingParser.prototype.valid_semver = function() {

    var localctx = new Valid_semverContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, MappingParser.RULE_valid_semver);
    var _la = 0; // Token type
    try {
        this.state = 275;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 249;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__20 || _la===MappingParser.T__21) {
                this.state = 248;
                this.prefix();
            }

            this.state = 251;
            this.version_core();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 253;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__20 || _la===MappingParser.T__21) {
                this.state = 252;
                this.prefix();
            }

            this.state = 255;
            this.version_core();
            this.state = 256;
            this.match(MappingParser.T__18);
            this.state = 257;
            this.preRelease();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 260;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__20 || _la===MappingParser.T__21) {
                this.state = 259;
                this.prefix();
            }

            this.state = 262;
            this.version_core();
            this.state = 263;
            this.match(MappingParser.T__19);
            this.state = 264;
            this.build();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 267;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__20 || _la===MappingParser.T__21) {
                this.state = 266;
                this.prefix();
            }

            this.state = 269;
            this.version_core();
            this.state = 270;
            this.match(MappingParser.T__18);
            this.state = 271;
            this.preRelease();
            this.state = 272;
            this.match(MappingParser.T__19);
            this.state = 273;
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
    this.ruleIndex = MappingParser.RULE_prefix;
    return this;
}

PrefixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrefixContext.prototype.constructor = PrefixContext;


PrefixContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterPrefix(this);
	}
};

PrefixContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitPrefix(this);
	}
};

PrefixContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitPrefix(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.PrefixContext = PrefixContext;

MappingParser.prototype.prefix = function() {

    var localctx = new PrefixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, MappingParser.RULE_prefix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 277;
        _la = this._input.LA(1);
        if(!(_la===MappingParser.T__20 || _la===MappingParser.T__21)) {
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
    this.ruleIndex = MappingParser.RULE_version_core;
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
    if(listener instanceof MappingListener ) {
        listener.enterVersion_core(this);
	}
};

Version_coreContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitVersion_core(this);
	}
};

Version_coreContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitVersion_core(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Version_coreContext = Version_coreContext;

MappingParser.prototype.version_core = function() {

    var localctx = new Version_coreContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, MappingParser.RULE_version_core);
    try {
        this.state = 291;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 279;
            this.major();
            this.state = 280;
            this.match(MappingParser.T__17);
            this.state = 281;
            this.minor();
            this.state = 282;
            this.match(MappingParser.T__17);
            this.state = 283;
            this.patch();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 285;
            this.major();
            this.state = 286;
            this.match(MappingParser.T__17);
            this.state = 287;
            this.minor();
            this.state = 288;
            this.match(MappingParser.T__17);
            this.state = 289;
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
    this.ruleIndex = MappingParser.RULE_major;
    return this;
}

MajorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MajorContext.prototype.constructor = MajorContext;

MajorContext.prototype.numeric_identifier = function() {
    return this.getTypedRuleContext(Numeric_identifierContext,0);
};

MajorContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterMajor(this);
	}
};

MajorContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitMajor(this);
	}
};

MajorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitMajor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.MajorContext = MajorContext;

MappingParser.prototype.major = function() {

    var localctx = new MajorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, MappingParser.RULE_major);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 293;
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
    this.ruleIndex = MappingParser.RULE_minor;
    return this;
}

MinorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MinorContext.prototype.constructor = MinorContext;

MinorContext.prototype.numeric_identifier = function() {
    return this.getTypedRuleContext(Numeric_identifierContext,0);
};

MinorContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterMinor(this);
	}
};

MinorContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitMinor(this);
	}
};

MinorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitMinor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.MinorContext = MinorContext;

MappingParser.prototype.minor = function() {

    var localctx = new MinorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, MappingParser.RULE_minor);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 295;
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
    this.ruleIndex = MappingParser.RULE_patch;
    return this;
}

PatchContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PatchContext.prototype.constructor = PatchContext;

PatchContext.prototype.numeric_identifier = function() {
    return this.getTypedRuleContext(Numeric_identifierContext,0);
};

PatchContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterPatch(this);
	}
};

PatchContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitPatch(this);
	}
};

PatchContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitPatch(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.PatchContext = PatchContext;

MappingParser.prototype.patch = function() {

    var localctx = new PatchContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, MappingParser.RULE_patch);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 297;
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
    this.ruleIndex = MappingParser.RULE_preRelease;
    return this;
}

PreReleaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PreReleaseContext.prototype.constructor = PreReleaseContext;

PreReleaseContext.prototype.dotSeparated_preRelease_identifiers = function() {
    return this.getTypedRuleContext(DotSeparated_preRelease_identifiersContext,0);
};

PreReleaseContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterPreRelease(this);
	}
};

PreReleaseContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitPreRelease(this);
	}
};

PreReleaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitPreRelease(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.PreReleaseContext = PreReleaseContext;

MappingParser.prototype.preRelease = function() {

    var localctx = new PreReleaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, MappingParser.RULE_preRelease);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 299;
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
    this.ruleIndex = MappingParser.RULE_dotSeparated_preRelease_identifiers;
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
    if(listener instanceof MappingListener ) {
        listener.enterDotSeparated_preRelease_identifiers(this);
	}
};

DotSeparated_preRelease_identifiersContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitDotSeparated_preRelease_identifiers(this);
	}
};

DotSeparated_preRelease_identifiersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitDotSeparated_preRelease_identifiers(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.DotSeparated_preRelease_identifiersContext = DotSeparated_preRelease_identifiersContext;

MappingParser.prototype.dotSeparated_preRelease_identifiers = function() {

    var localctx = new DotSeparated_preRelease_identifiersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, MappingParser.RULE_dotSeparated_preRelease_identifiers);
    try {
        this.state = 306;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 301;
            this.preRelease_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 302;
            this.preRelease_identifier();
            this.state = 303;
            this.match(MappingParser.T__17);
            this.state = 304;
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
    this.ruleIndex = MappingParser.RULE_build;
    return this;
}

BuildContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BuildContext.prototype.constructor = BuildContext;

BuildContext.prototype.dotSeparated_build_identifiers = function() {
    return this.getTypedRuleContext(DotSeparated_build_identifiersContext,0);
};

BuildContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterBuild(this);
	}
};

BuildContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitBuild(this);
	}
};

BuildContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitBuild(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.BuildContext = BuildContext;

MappingParser.prototype.build = function() {

    var localctx = new BuildContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, MappingParser.RULE_build);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
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
    this.ruleIndex = MappingParser.RULE_dotSeparated_build_identifiers;
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
    if(listener instanceof MappingListener ) {
        listener.enterDotSeparated_build_identifiers(this);
	}
};

DotSeparated_build_identifiersContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitDotSeparated_build_identifiers(this);
	}
};

DotSeparated_build_identifiersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitDotSeparated_build_identifiers(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.DotSeparated_build_identifiersContext = DotSeparated_build_identifiersContext;

MappingParser.prototype.dotSeparated_build_identifiers = function() {

    var localctx = new DotSeparated_build_identifiersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, MappingParser.RULE_dotSeparated_build_identifiers);
    try {
        this.state = 315;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 310;
            this.build_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 311;
            this.build_identifier();
            this.state = 312;
            this.match(MappingParser.T__17);
            this.state = 313;
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
    this.ruleIndex = MappingParser.RULE_preRelease_identifier;
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
    if(listener instanceof MappingListener ) {
        listener.enterPreRelease_identifier(this);
	}
};

PreRelease_identifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitPreRelease_identifier(this);
	}
};

PreRelease_identifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitPreRelease_identifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.PreRelease_identifierContext = PreRelease_identifierContext;

MappingParser.prototype.preRelease_identifier = function() {

    var localctx = new PreRelease_identifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, MappingParser.RULE_preRelease_identifier);
    try {
        this.state = 319;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 317;
            this.alphanumeric_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 318;
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
    this.ruleIndex = MappingParser.RULE_build_identifier;
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
    if(listener instanceof MappingListener ) {
        listener.enterBuild_identifier(this);
	}
};

Build_identifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitBuild_identifier(this);
	}
};

Build_identifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitBuild_identifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Build_identifierContext = Build_identifierContext;

MappingParser.prototype.build_identifier = function() {

    var localctx = new Build_identifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, MappingParser.RULE_build_identifier);
    try {
        this.state = 323;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 321;
            this.alphanumeric_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 322;
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
    this.ruleIndex = MappingParser.RULE_alphanumeric_identifier;
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
    if(listener instanceof MappingListener ) {
        listener.enterAlphanumeric_identifier(this);
	}
};

Alphanumeric_identifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitAlphanumeric_identifier(this);
	}
};

Alphanumeric_identifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitAlphanumeric_identifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Alphanumeric_identifierContext = Alphanumeric_identifierContext;

MappingParser.prototype.alphanumeric_identifier = function() {

    var localctx = new Alphanumeric_identifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, MappingParser.RULE_alphanumeric_identifier);
    try {
        this.state = 336;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 325;
            this.nonDigit();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 326;
            this.nonDigit();
            this.state = 327;
            this.identifier_characters();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 329;
            this.identifier_characters();
            this.state = 330;
            this.nonDigit();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 332;
            this.identifier_characters();
            this.state = 333;
            this.nonDigit();
            this.state = 334;
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
    this.ruleIndex = MappingParser.RULE_numeric_identifier;
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
    if(listener instanceof MappingListener ) {
        listener.enterNumeric_identifier(this);
	}
};

Numeric_identifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitNumeric_identifier(this);
	}
};

Numeric_identifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitNumeric_identifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Numeric_identifierContext = Numeric_identifierContext;

MappingParser.prototype.numeric_identifier = function() {

    var localctx = new Numeric_identifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, MappingParser.RULE_numeric_identifier);
    try {
        this.state = 343;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 338;
            this.match(MappingParser.T__22);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 339;
            this.positive_digit();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 340;
            this.positive_digit();
            this.state = 341;
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
    this.ruleIndex = MappingParser.RULE_identifier_characters;
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
    if(listener instanceof MappingListener ) {
        listener.enterIdentifier_characters(this);
	}
};

Identifier_charactersContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitIdentifier_characters(this);
	}
};

Identifier_charactersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitIdentifier_characters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Identifier_charactersContext = Identifier_charactersContext;

MappingParser.prototype.identifier_characters = function() {

    var localctx = new Identifier_charactersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, MappingParser.RULE_identifier_characters);
    try {
        this.state = 349;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 345;
            this.identifier_character();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 346;
            this.identifier_character();
            this.state = 347;
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
    this.ruleIndex = MappingParser.RULE_identifier_character;
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
    if(listener instanceof MappingListener ) {
        listener.enterIdentifier_character(this);
	}
};

Identifier_characterContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitIdentifier_character(this);
	}
};

Identifier_characterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitIdentifier_character(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Identifier_characterContext = Identifier_characterContext;

MappingParser.prototype.identifier_character = function() {

    var localctx = new Identifier_characterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, MappingParser.RULE_identifier_character);
    try {
        this.state = 353;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MappingParser.T__22:
        case MappingParser.T__23:
        case MappingParser.T__24:
        case MappingParser.T__25:
        case MappingParser.T__26:
        case MappingParser.T__27:
        case MappingParser.T__28:
        case MappingParser.T__29:
        case MappingParser.T__30:
        case MappingParser.T__31:
            this.enterOuterAlt(localctx, 1);
            this.state = 351;
            this.digit();
            break;
        case MappingParser.T__18:
        case MappingParser.T__32:
        case MappingParser.T__33:
        case MappingParser.T__34:
        case MappingParser.T__35:
        case MappingParser.T__36:
        case MappingParser.T__37:
        case MappingParser.T__38:
        case MappingParser.T__39:
        case MappingParser.T__40:
        case MappingParser.T__41:
        case MappingParser.T__42:
        case MappingParser.T__43:
        case MappingParser.T__44:
        case MappingParser.T__45:
        case MappingParser.T__46:
        case MappingParser.T__47:
        case MappingParser.T__48:
        case MappingParser.T__49:
        case MappingParser.T__50:
        case MappingParser.T__51:
        case MappingParser.T__52:
        case MappingParser.T__53:
        case MappingParser.T__54:
        case MappingParser.T__55:
        case MappingParser.T__56:
        case MappingParser.T__57:
        case MappingParser.T__58:
        case MappingParser.T__59:
        case MappingParser.T__60:
        case MappingParser.T__61:
        case MappingParser.T__62:
        case MappingParser.T__63:
        case MappingParser.T__64:
        case MappingParser.T__65:
        case MappingParser.T__66:
        case MappingParser.T__67:
        case MappingParser.T__68:
        case MappingParser.T__69:
        case MappingParser.T__70:
        case MappingParser.T__71:
        case MappingParser.T__72:
        case MappingParser.T__73:
        case MappingParser.T__74:
        case MappingParser.T__75:
        case MappingParser.T__76:
        case MappingParser.T__77:
        case MappingParser.T__78:
        case MappingParser.T__79:
        case MappingParser.T__80:
        case MappingParser.T__81:
        case MappingParser.T__82:
        case MappingParser.T__83:
            this.enterOuterAlt(localctx, 2);
            this.state = 352;
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
    this.ruleIndex = MappingParser.RULE_nonDigit;
    return this;
}

NonDigitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NonDigitContext.prototype.constructor = NonDigitContext;

NonDigitContext.prototype.letter = function() {
    return this.getTypedRuleContext(LetterContext,0);
};

NonDigitContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterNonDigit(this);
	}
};

NonDigitContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitNonDigit(this);
	}
};

NonDigitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitNonDigit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.NonDigitContext = NonDigitContext;

MappingParser.prototype.nonDigit = function() {

    var localctx = new NonDigitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, MappingParser.RULE_nonDigit);
    try {
        this.state = 357;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MappingParser.T__32:
        case MappingParser.T__33:
        case MappingParser.T__34:
        case MappingParser.T__35:
        case MappingParser.T__36:
        case MappingParser.T__37:
        case MappingParser.T__38:
        case MappingParser.T__39:
        case MappingParser.T__40:
        case MappingParser.T__41:
        case MappingParser.T__42:
        case MappingParser.T__43:
        case MappingParser.T__44:
        case MappingParser.T__45:
        case MappingParser.T__46:
        case MappingParser.T__47:
        case MappingParser.T__48:
        case MappingParser.T__49:
        case MappingParser.T__50:
        case MappingParser.T__51:
        case MappingParser.T__52:
        case MappingParser.T__53:
        case MappingParser.T__54:
        case MappingParser.T__55:
        case MappingParser.T__56:
        case MappingParser.T__57:
        case MappingParser.T__58:
        case MappingParser.T__59:
        case MappingParser.T__60:
        case MappingParser.T__61:
        case MappingParser.T__62:
        case MappingParser.T__63:
        case MappingParser.T__64:
        case MappingParser.T__65:
        case MappingParser.T__66:
        case MappingParser.T__67:
        case MappingParser.T__68:
        case MappingParser.T__69:
        case MappingParser.T__70:
        case MappingParser.T__71:
        case MappingParser.T__72:
        case MappingParser.T__73:
        case MappingParser.T__74:
        case MappingParser.T__75:
        case MappingParser.T__76:
        case MappingParser.T__77:
        case MappingParser.T__78:
        case MappingParser.T__79:
        case MappingParser.T__80:
        case MappingParser.T__81:
        case MappingParser.T__82:
        case MappingParser.T__83:
            this.enterOuterAlt(localctx, 1);
            this.state = 355;
            this.letter();
            break;
        case MappingParser.T__18:
            this.enterOuterAlt(localctx, 2);
            this.state = 356;
            this.match(MappingParser.T__18);
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
    this.ruleIndex = MappingParser.RULE_digits;
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
    if(listener instanceof MappingListener ) {
        listener.enterDigits(this);
	}
};

DigitsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitDigits(this);
	}
};

DigitsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitDigits(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.DigitsContext = DigitsContext;

MappingParser.prototype.digits = function() {

    var localctx = new DigitsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, MappingParser.RULE_digits);
    try {
        this.state = 363;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 359;
            this.digit();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 360;
            this.digit();
            this.state = 361;
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
    this.ruleIndex = MappingParser.RULE_digit;
    return this;
}

DigitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DigitContext.prototype.constructor = DigitContext;

DigitContext.prototype.positive_digit = function() {
    return this.getTypedRuleContext(Positive_digitContext,0);
};

DigitContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterDigit(this);
	}
};

DigitContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitDigit(this);
	}
};

DigitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitDigit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.DigitContext = DigitContext;

MappingParser.prototype.digit = function() {

    var localctx = new DigitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, MappingParser.RULE_digit);
    try {
        this.state = 367;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MappingParser.T__22:
            this.enterOuterAlt(localctx, 1);
            this.state = 365;
            this.match(MappingParser.T__22);
            break;
        case MappingParser.T__23:
        case MappingParser.T__24:
        case MappingParser.T__25:
        case MappingParser.T__26:
        case MappingParser.T__27:
        case MappingParser.T__28:
        case MappingParser.T__29:
        case MappingParser.T__30:
        case MappingParser.T__31:
            this.enterOuterAlt(localctx, 2);
            this.state = 366;
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
    this.ruleIndex = MappingParser.RULE_positive_digit;
    return this;
}

Positive_digitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Positive_digitContext.prototype.constructor = Positive_digitContext;


Positive_digitContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterPositive_digit(this);
	}
};

Positive_digitContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitPositive_digit(this);
	}
};

Positive_digitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitPositive_digit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Positive_digitContext = Positive_digitContext;

MappingParser.prototype.positive_digit = function() {

    var localctx = new Positive_digitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, MappingParser.RULE_positive_digit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 369;
        _la = this._input.LA(1);
        if(!(((((_la - 24)) & ~0x1f) == 0 && ((1 << (_la - 24)) & ((1 << (MappingParser.T__23 - 24)) | (1 << (MappingParser.T__24 - 24)) | (1 << (MappingParser.T__25 - 24)) | (1 << (MappingParser.T__26 - 24)) | (1 << (MappingParser.T__27 - 24)) | (1 << (MappingParser.T__28 - 24)) | (1 << (MappingParser.T__29 - 24)) | (1 << (MappingParser.T__30 - 24)) | (1 << (MappingParser.T__31 - 24)))) !== 0))) {
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
    this.ruleIndex = MappingParser.RULE_letter;
    return this;
}

LetterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LetterContext.prototype.constructor = LetterContext;


LetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterLetter(this);
	}
};

LetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitLetter(this);
	}
};

LetterContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitLetter(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.LetterContext = LetterContext;

MappingParser.prototype.letter = function() {

    var localctx = new LetterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, MappingParser.RULE_letter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 371;
        _la = this._input.LA(1);
        if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (MappingParser.T__32 - 33)) | (1 << (MappingParser.T__33 - 33)) | (1 << (MappingParser.T__34 - 33)) | (1 << (MappingParser.T__35 - 33)) | (1 << (MappingParser.T__36 - 33)) | (1 << (MappingParser.T__37 - 33)) | (1 << (MappingParser.T__38 - 33)) | (1 << (MappingParser.T__39 - 33)) | (1 << (MappingParser.T__40 - 33)) | (1 << (MappingParser.T__41 - 33)) | (1 << (MappingParser.T__42 - 33)) | (1 << (MappingParser.T__43 - 33)) | (1 << (MappingParser.T__44 - 33)) | (1 << (MappingParser.T__45 - 33)) | (1 << (MappingParser.T__46 - 33)) | (1 << (MappingParser.T__47 - 33)) | (1 << (MappingParser.T__48 - 33)) | (1 << (MappingParser.T__49 - 33)) | (1 << (MappingParser.T__50 - 33)) | (1 << (MappingParser.T__51 - 33)) | (1 << (MappingParser.T__52 - 33)) | (1 << (MappingParser.T__53 - 33)) | (1 << (MappingParser.T__54 - 33)) | (1 << (MappingParser.T__55 - 33)) | (1 << (MappingParser.T__56 - 33)) | (1 << (MappingParser.T__57 - 33)) | (1 << (MappingParser.T__58 - 33)) | (1 << (MappingParser.T__59 - 33)) | (1 << (MappingParser.T__60 - 33)) | (1 << (MappingParser.T__61 - 33)) | (1 << (MappingParser.T__62 - 33)) | (1 << (MappingParser.T__63 - 33)))) !== 0) || ((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & ((1 << (MappingParser.T__64 - 65)) | (1 << (MappingParser.T__65 - 65)) | (1 << (MappingParser.T__66 - 65)) | (1 << (MappingParser.T__67 - 65)) | (1 << (MappingParser.T__68 - 65)) | (1 << (MappingParser.T__69 - 65)) | (1 << (MappingParser.T__70 - 65)) | (1 << (MappingParser.T__71 - 65)) | (1 << (MappingParser.T__72 - 65)) | (1 << (MappingParser.T__73 - 65)) | (1 << (MappingParser.T__74 - 65)) | (1 << (MappingParser.T__75 - 65)) | (1 << (MappingParser.T__76 - 65)) | (1 << (MappingParser.T__77 - 65)) | (1 << (MappingParser.T__78 - 65)) | (1 << (MappingParser.T__79 - 65)) | (1 << (MappingParser.T__80 - 65)) | (1 << (MappingParser.T__81 - 65)) | (1 << (MappingParser.T__82 - 65)) | (1 << (MappingParser.T__83 - 65)))) !== 0))) {
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


exports.MappingParser = MappingParser;
