// Generated from Mapping.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MappingListener = require('./MappingListener').MappingListener;
var MappingVisitor = require('./MappingVisitor').MappingVisitor;

var grammarFileName = "Mapping.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003]\u0185\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
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
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u0003\u0002\u0007\u0002n\n\u0002",
    "\f\u0002\u000e\u0002q\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003w\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u0085\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006\u0091\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u009f\n\b\u0003",
    "\t\u0007\t\u00a2\n\t\f\t\u000e\t\u00a5\u000b\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0005\n\u00ac\n\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0005\u000b\u00b1\n\u000b\u0003\f\u0003\f\u0003\f\u0007\f\u00b6\n\f",
    "\f\f\u000e\f\u00b9\u000b\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00c4\n",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u00ce\n\u0011\f\u0011\u000e",
    "\u0011\u00d1\u000b\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012",
    "\u00d6\n\u0012\f\u0012\u000e\u0012\u00d9\u000b\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0005\u0016\u00e3\n\u0016\u0003\u0017\u0003\u0017\u0003\u0018",
    "\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0005\u001b\u00f4\n\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0007\u001d\u00fb\n\u001d\f\u001d\u000e\u001d\u00fe",
    "\u000b\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 ",
    "\u0003 \u0003!\u0003!\u0003\"\u0005\"\u0109\n\"\u0003\"\u0003\"\u0005",
    "\"\u010d\n\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005\"\u0114\n",
    "\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005\"\u011b\n\"\u0003\"",
    "\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005\"\u0123\n\"\u0003#\u0003",
    "#\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0005$\u0133\n$\u0003%\u0003%\u0003&\u0003&\u0003\'",
    "\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003)\u0003)\u0003)\u0005)\u0142",
    "\n)\u0003*\u0003*\u0003+\u0003+\u0003+\u0003+\u0003+\u0005+\u014b\n",
    "+\u0003,\u0003,\u0005,\u014f\n,\u0003-\u0003-\u0005-\u0153\n-\u0003",
    ".\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003.\u0003",
    ".\u0005.\u0160\n.\u0003/\u0003/\u0003/\u0003/\u0003/\u0005/\u0167\n",
    "/\u00030\u00030\u00030\u00030\u00050\u016d\n0\u00031\u00031\u00051\u0171",
    "\n1\u00032\u00032\u00052\u0175\n2\u00033\u00033\u00033\u00033\u0005",
    "3\u017b\n3\u00034\u00034\u00054\u017f\n4\u00035\u00035\u00036\u0003",
    "6\u00036\u0003\u00f3\u00027\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ",
    "\\^`bdfhj\u0002\b\u0003\u0002\u0003\u0005\u0003\u0002\u000b\u000e\u0004",
    "\u0002\u0017\u0017ZZ\u0003\u0002\u001a\u001b\u0003\u0002\u001d%\u0003",
    "\u0002&Y\u0002\u0179\u0002o\u0003\u0002\u0002\u0002\u0004v\u0003\u0002",
    "\u0002\u0002\u0006\u0084\u0003\u0002\u0002\u0002\b\u0086\u0003\u0002",
    "\u0002\u0002\n\u0090\u0003\u0002\u0002\u0002\f\u0092\u0003\u0002\u0002",
    "\u0002\u000e\u009e\u0003\u0002\u0002\u0002\u0010\u00a3\u0003\u0002\u0002",
    "\u0002\u0012\u00ab\u0003\u0002\u0002\u0002\u0014\u00b0\u0003\u0002\u0002",
    "\u0002\u0016\u00b7\u0003\u0002\u0002\u0002\u0018\u00bc\u0003\u0002\u0002",
    "\u0002\u001a\u00be\u0003\u0002\u0002\u0002\u001c\u00c5\u0003\u0002\u0002",
    "\u0002\u001e\u00c7\u0003\u0002\u0002\u0002 \u00c9\u0003\u0002\u0002",
    "\u0002\"\u00d2\u0003\u0002\u0002\u0002$\u00da\u0003\u0002\u0002\u0002",
    "&\u00dc\u0003\u0002\u0002\u0002(\u00de\u0003\u0002\u0002\u0002*\u00e2",
    "\u0003\u0002\u0002\u0002,\u00e4\u0003\u0002\u0002\u0002.\u00e6\u0003",
    "\u0002\u0002\u00020\u00e8\u0003\u0002\u0002\u00022\u00eb\u0003\u0002",
    "\u0002\u00024\u00ee\u0003\u0002\u0002\u00026\u00f5\u0003\u0002\u0002",
    "\u00028\u00fc\u0003\u0002\u0002\u0002:\u00ff\u0003\u0002\u0002\u0002",
    "<\u0101\u0003\u0002\u0002\u0002>\u0103\u0003\u0002\u0002\u0002@\u0105",
    "\u0003\u0002\u0002\u0002B\u0122\u0003\u0002\u0002\u0002D\u0124\u0003",
    "\u0002\u0002\u0002F\u0132\u0003\u0002\u0002\u0002H\u0134\u0003\u0002",
    "\u0002\u0002J\u0136\u0003\u0002\u0002\u0002L\u0138\u0003\u0002\u0002",
    "\u0002N\u013a\u0003\u0002\u0002\u0002P\u0141\u0003\u0002\u0002\u0002",
    "R\u0143\u0003\u0002\u0002\u0002T\u014a\u0003\u0002\u0002\u0002V\u014e",
    "\u0003\u0002\u0002\u0002X\u0152\u0003\u0002\u0002\u0002Z\u015f\u0003",
    "\u0002\u0002\u0002\\\u0166\u0003\u0002\u0002\u0002^\u016c\u0003\u0002",
    "\u0002\u0002`\u0170\u0003\u0002\u0002\u0002b\u0174\u0003\u0002\u0002",
    "\u0002d\u017a\u0003\u0002\u0002\u0002f\u017e\u0003\u0002\u0002\u0002",
    "h\u0180\u0003\u0002\u0002\u0002j\u0182\u0003\u0002\u0002\u0002ln\u0005",
    "\u0004\u0003\u0002ml\u0003\u0002\u0002\u0002nq\u0003\u0002\u0002\u0002",
    "om\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002p\u0003\u0003\u0002",
    "\u0002\u0002qo\u0003\u0002\u0002\u0002rw\u0005\u0006\u0004\u0002sw\u0005",
    "\n\u0006\u0002tw\u0005\f\u0007\u0002uw\n\u0002\u0002\u0002vr\u0003\u0002",
    "\u0002\u0002vs\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002vu\u0003",
    "\u0002\u0002\u0002w\u0005\u0003\u0002\u0002\u0002xy\u0007\u0003\u0002",
    "\u0002yz\u0005\b\u0005\u0002z{\u0007\u0006\u0002\u0002{|\u0005,\u0017",
    "\u0002|}\u0005\u000e\b\u0002}\u0085\u0003\u0002\u0002\u0002~\u007f\u0007",
    "\u0003\u0002\u0002\u007f\u0080\u0005\b\u0005\u0002\u0080\u0081\u0007",
    "\u0006\u0002\u0002\u0081\u0082\u0005,\u0017\u0002\u0082\u0083\u0005",
    "\u0012\n\u0002\u0083\u0085\u0003\u0002\u0002\u0002\u0084x\u0003\u0002",
    "\u0002\u0002\u0084~\u0003\u0002\u0002\u0002\u0085\u0007\u0003\u0002",
    "\u0002\u0002\u0086\u0087\u0005*\u0016\u0002\u0087\t\u0003\u0002\u0002",
    "\u0002\u0088\u0089\u0007\u0004\u0002\u0002\u0089\u008a\u0005,\u0017",
    "\u0002\u008a\u008b\u0005\u000e\b\u0002\u008b\u0091\u0003\u0002\u0002",
    "\u0002\u008c\u008d\u0007\u0004\u0002\u0002\u008d\u008e\u0005,\u0017",
    "\u0002\u008e\u008f\u0005\u0012\n\u0002\u008f\u0091\u0003\u0002\u0002",
    "\u0002\u0090\u0088\u0003\u0002\u0002\u0002\u0090\u008c\u0003\u0002\u0002",
    "\u0002\u0091\u000b\u0003\u0002\u0002\u0002\u0092\u0093\u0007\u0007\u0002",
    "\u0002\u0093\u0094\u0007\b\u0002\u0002\u0094\u0095\u0007\t\u0002\u0002",
    "\u0095\u0096\u0005.\u0018\u0002\u0096\u0097\u0007\n\u0002\u0002\u0097",
    "\r\u0003\u0002\u0002\u0002\u0098\u0099\u0007\b\u0002\u0002\u0099\u009f",
    "\u0007\n\u0002\u0002\u009a\u009b\u0007\b\u0002\u0002\u009b\u009c\u0005",
    "\u0010\t\u0002\u009c\u009d\u0007\n\u0002\u0002\u009d\u009f\u0003\u0002",
    "\u0002\u0002\u009e\u0098\u0003\u0002\u0002\u0002\u009e\u009a\u0003\u0002",
    "\u0002\u0002\u009f\u000f\u0003\u0002\u0002\u0002\u00a0\u00a2\u0005\u0012",
    "\n\u0002\u00a1\u00a0\u0003\u0002\u0002\u0002\u00a2\u00a5\u0003\u0002",
    "\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002",
    "\u0002\u0002\u00a4\u0011\u0003\u0002\u0002\u0002\u00a5\u00a3\u0003\u0002",
    "\u0002\u0002\u00a6\u00ac\u0005\u0014\u000b\u0002\u00a7\u00ac\u0005\u001a",
    "\u000e\u0002\u00a8\u00ac\u0005&\u0014\u0002\u00a9\u00ac\u0005(\u0015",
    "\u0002\u00aa\u00ac\t\u0003\u0002\u0002\u00ab\u00a6\u0003\u0002\u0002",
    "\u0002\u00ab\u00a7\u0003\u0002\u0002\u0002\u00ab\u00a8\u0003\u0002\u0002",
    "\u0002\u00ab\u00a9\u0003\u0002\u0002\u0002\u00ab\u00aa\u0003\u0002\u0002",
    "\u0002\u00ac\u0013\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007\u000b\u0002",
    "\u0002\u00ae\u00b1\u0005\u0016\f\u0002\u00af\u00b1\u0007\u000b\u0002",
    "\u0002\u00b0\u00ad\u0003\u0002\u0002\u0002\u00b0\u00af\u0003\u0002\u0002",
    "\u0002\u00b1\u0015\u0003\u0002\u0002\u0002\u00b2\u00b3\u0005\u0018\r",
    "\u0002\u00b3\u00b4\u0007\u000f\u0002\u0002\u00b4\u00b6\u0003\u0002\u0002",
    "\u0002\u00b5\u00b2\u0003\u0002\u0002\u0002\u00b6\u00b9\u0003\u0002\u0002",
    "\u0002\u00b7\u00b5\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002",
    "\u0002\u00b8\u00ba\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002",
    "\u0002\u00ba\u00bb\u0005\u0018\r\u0002\u00bb\u0017\u0003\u0002\u0002",
    "\u0002\u00bc\u00bd\u0007Z\u0002\u0002\u00bd\u0019\u0003\u0002\u0002",
    "\u0002\u00be\u00bf\u0007\f\u0002\u0002\u00bf\u00c0\u0005\u001c\u000f",
    "\u0002\u00c0\u00c1\u0007\u0010\u0002\u0002\u00c1\u00c3\u0005\u001e\u0010",
    "\u0002\u00c2\u00c4\u0005 \u0011\u0002\u00c3\u00c2\u0003\u0002\u0002",
    "\u0002\u00c3\u00c4\u0003\u0002\u0002\u0002\u00c4\u001b\u0003\u0002\u0002",
    "\u0002\u00c5\u00c6\u0005*\u0016\u0002\u00c6\u001d\u0003\u0002\u0002",
    "\u0002\u00c7\u00c8\u0005*\u0016\u0002\u00c8\u001f\u0003\u0002\u0002",
    "\u0002\u00c9\u00ca\u0007\u0011\u0002\u0002\u00ca\u00cf\u0005\"\u0012",
    "\u0002\u00cb\u00cc\u0007\u000f\u0002\u0002\u00cc\u00ce\u0005\"\u0012",
    "\u0002\u00cd\u00cb\u0003\u0002\u0002\u0002\u00ce\u00d1\u0003\u0002\u0002",
    "\u0002\u00cf\u00cd\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002\u0002",
    "\u0002\u00d0!\u0003\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002\u0002",
    "\u0002\u00d2\u00d7\u0005$\u0013\u0002\u00d3\u00d4\u0007\u0012\u0002",
    "\u0002\u00d4\u00d6\u0005$\u0013\u0002\u00d5\u00d3\u0003\u0002\u0002",
    "\u0002\u00d6\u00d9\u0003\u0002\u0002\u0002\u00d7\u00d5\u0003\u0002\u0002",
    "\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8#\u0003\u0002\u0002",
    "\u0002\u00d9\u00d7\u0003\u0002\u0002\u0002\u00da\u00db\u0005*\u0016",
    "\u0002\u00db%\u0003\u0002\u0002\u0002\u00dc\u00dd\u0007\r\u0002\u0002",
    "\u00dd\'\u0003\u0002\u0002\u0002\u00de\u00df\u0007\u000e\u0002\u0002",
    "\u00df)\u0003\u0002\u0002\u0002\u00e0\u00e3\u00050\u0019\u0002\u00e1",
    "\u00e3\u00052\u001a\u0002\u00e2\u00e0\u0003\u0002\u0002\u0002\u00e2",
    "\u00e1\u0003\u0002\u0002\u0002\u00e3+\u0003\u0002\u0002\u0002\u00e4",
    "\u00e5\u00058\u001d\u0002\u00e5-\u0003\u0002\u0002\u0002\u00e6\u00e7",
    "\u00058\u001d\u0002\u00e7/\u0003\u0002\u0002\u0002\u00e8\u00e9\u0007",
    "\u0013\u0002\u0002\u00e9\u00ea\u00054\u001b\u0002\u00ea1\u0003\u0002",
    "\u0002\u0002\u00eb\u00ec\u0007\u0014\u0002\u0002\u00ec\u00ed\u00056",
    "\u001c\u0002\u00ed3\u0003\u0002\u0002\u0002\u00ee\u00ef\u0005@!\u0002",
    "\u00ef\u00f0\u0007\u0015\u0002\u0002\u00f0\u00f3\u0005:\u001e\u0002",
    "\u00f1\u00f2\u0007\u0016\u0002\u0002\u00f2\u00f4\u0005B\"\u0002\u00f3",
    "\u00f4\u0003\u0002\u0002\u0002\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f4",
    "5\u0003\u0002\u0002\u0002\u00f5\u00f6\u0005> \u0002\u00f6\u00f7\u0007",
    "\u0015\u0002\u0002\u00f7\u00f8\u0005<\u001f\u0002\u00f87\u0003\u0002",
    "\u0002\u0002\u00f9\u00fb\t\u0004\u0002\u0002\u00fa\u00f9\u0003\u0002",
    "\u0002\u0002\u00fb\u00fe\u0003\u0002\u0002\u0002\u00fc\u00fa\u0003\u0002",
    "\u0002\u0002\u00fc\u00fd\u0003\u0002\u0002\u0002\u00fd9\u0003\u0002",
    "\u0002\u0002\u00fe\u00fc\u0003\u0002\u0002\u0002\u00ff\u0100\u0007Z",
    "\u0002\u0002\u0100;\u0003\u0002\u0002\u0002\u0101\u0102\u0007Z\u0002",
    "\u0002\u0102=\u0003\u0002\u0002\u0002\u0103\u0104\u0007Z\u0002\u0002",
    "\u0104?\u0003\u0002\u0002\u0002\u0105\u0106\u0007Z\u0002\u0002\u0106",
    "A\u0003\u0002\u0002\u0002\u0107\u0109\u0005D#\u0002\u0108\u0107\u0003",
    "\u0002\u0002\u0002\u0108\u0109\u0003\u0002\u0002\u0002\u0109\u010a\u0003",
    "\u0002\u0002\u0002\u010a\u0123\u0005F$\u0002\u010b\u010d\u0005D#\u0002",
    "\u010c\u010b\u0003\u0002\u0002\u0002\u010c\u010d\u0003\u0002\u0002\u0002",
    "\u010d\u010e\u0003\u0002\u0002\u0002\u010e\u010f\u0005F$\u0002\u010f",
    "\u0110\u0007\u0018\u0002\u0002\u0110\u0111\u0005N(\u0002\u0111\u0123",
    "\u0003\u0002\u0002\u0002\u0112\u0114\u0005D#\u0002\u0113\u0112\u0003",
    "\u0002\u0002\u0002\u0113\u0114\u0003\u0002\u0002\u0002\u0114\u0115\u0003",
    "\u0002\u0002\u0002\u0115\u0116\u0005F$\u0002\u0116\u0117\u0007\u0019",
    "\u0002\u0002\u0117\u0118\u0005R*\u0002\u0118\u0123\u0003\u0002\u0002",
    "\u0002\u0119\u011b\u0005D#\u0002\u011a\u0119\u0003\u0002\u0002\u0002",
    "\u011a\u011b\u0003\u0002\u0002\u0002\u011b\u011c\u0003\u0002\u0002\u0002",
    "\u011c\u011d\u0005F$\u0002\u011d\u011e\u0007\u0018\u0002\u0002\u011e",
    "\u011f\u0005N(\u0002\u011f\u0120\u0007\u0019\u0002\u0002\u0120\u0121",
    "\u0005R*\u0002\u0121\u0123\u0003\u0002\u0002\u0002\u0122\u0108\u0003",
    "\u0002\u0002\u0002\u0122\u010c\u0003\u0002\u0002\u0002\u0122\u0113\u0003",
    "\u0002\u0002\u0002\u0122\u011a\u0003\u0002\u0002\u0002\u0123C\u0003",
    "\u0002\u0002\u0002\u0124\u0125\t\u0005\u0002\u0002\u0125E\u0003\u0002",
    "\u0002\u0002\u0126\u0127\u0005H%\u0002\u0127\u0128\u0007\u0017\u0002",
    "\u0002\u0128\u0129\u0005J&\u0002\u0129\u012a\u0007\u0017\u0002\u0002",
    "\u012a\u012b\u0005L\'\u0002\u012b\u0133\u0003\u0002\u0002\u0002\u012c",
    "\u012d\u0005H%\u0002\u012d\u012e\u0007\u0017\u0002\u0002\u012e\u012f",
    "\u0005J&\u0002\u012f\u0130\u0007\u0017\u0002\u0002\u0130\u0131\u0005",
    "L\'\u0002\u0131\u0133\u0003\u0002\u0002\u0002\u0132\u0126\u0003\u0002",
    "\u0002\u0002\u0132\u012c\u0003\u0002\u0002\u0002\u0133G\u0003\u0002",
    "\u0002\u0002\u0134\u0135\u0005\\/\u0002\u0135I\u0003\u0002\u0002\u0002",
    "\u0136\u0137\u0005\\/\u0002\u0137K\u0003\u0002\u0002\u0002\u0138\u0139",
    "\u0005\\/\u0002\u0139M\u0003\u0002\u0002\u0002\u013a\u013b\u0005P)\u0002",
    "\u013bO\u0003\u0002\u0002\u0002\u013c\u0142\u0005V,\u0002\u013d\u013e",
    "\u0005V,\u0002\u013e\u013f\u0007\u0017\u0002\u0002\u013f\u0140\u0005",
    "P)\u0002\u0140\u0142\u0003\u0002\u0002\u0002\u0141\u013c\u0003\u0002",
    "\u0002\u0002\u0141\u013d\u0003\u0002\u0002\u0002\u0142Q\u0003\u0002",
    "\u0002\u0002\u0143\u0144\u0005T+\u0002\u0144S\u0003\u0002\u0002\u0002",
    "\u0145\u014b\u0005X-\u0002\u0146\u0147\u0005X-\u0002\u0147\u0148\u0007",
    "\u0017\u0002\u0002\u0148\u0149\u0005T+\u0002\u0149\u014b\u0003\u0002",
    "\u0002\u0002\u014a\u0145\u0003\u0002\u0002\u0002\u014a\u0146\u0003\u0002",
    "\u0002\u0002\u014bU\u0003\u0002\u0002\u0002\u014c\u014f\u0005Z.\u0002",
    "\u014d\u014f\u0005\\/\u0002\u014e\u014c\u0003\u0002\u0002\u0002\u014e",
    "\u014d\u0003\u0002\u0002\u0002\u014fW\u0003\u0002\u0002\u0002\u0150",
    "\u0153\u0005Z.\u0002\u0151\u0153\u0005d3\u0002\u0152\u0150\u0003\u0002",
    "\u0002\u0002\u0152\u0151\u0003\u0002\u0002\u0002\u0153Y\u0003\u0002",
    "\u0002\u0002\u0154\u0160\u0005b2\u0002\u0155\u0156\u0005b2\u0002\u0156",
    "\u0157\u0005^0\u0002\u0157\u0160\u0003\u0002\u0002\u0002\u0158\u0159",
    "\u0005^0\u0002\u0159\u015a\u0005b2\u0002\u015a\u0160\u0003\u0002\u0002",
    "\u0002\u015b\u015c\u0005^0\u0002\u015c\u015d\u0005b2\u0002\u015d\u015e",
    "\u0005^0\u0002\u015e\u0160\u0003\u0002\u0002\u0002\u015f\u0154\u0003",
    "\u0002\u0002\u0002\u015f\u0155\u0003\u0002\u0002\u0002\u015f\u0158\u0003",
    "\u0002\u0002\u0002\u015f\u015b\u0003\u0002\u0002\u0002\u0160[\u0003",
    "\u0002\u0002\u0002\u0161\u0167\u0007\u001c\u0002\u0002\u0162\u0167\u0005",
    "h5\u0002\u0163\u0164\u0005h5\u0002\u0164\u0165\u0005d3\u0002\u0165\u0167",
    "\u0003\u0002\u0002\u0002\u0166\u0161\u0003\u0002\u0002\u0002\u0166\u0162",
    "\u0003\u0002\u0002\u0002\u0166\u0163\u0003\u0002\u0002\u0002\u0167]",
    "\u0003\u0002\u0002\u0002\u0168\u016d\u0005`1\u0002\u0169\u016a\u0005",
    "`1\u0002\u016a\u016b\u0005^0\u0002\u016b\u016d\u0003\u0002\u0002\u0002",
    "\u016c\u0168\u0003\u0002\u0002\u0002\u016c\u0169\u0003\u0002\u0002\u0002",
    "\u016d_\u0003\u0002\u0002\u0002\u016e\u0171\u0005f4\u0002\u016f\u0171",
    "\u0005b2\u0002\u0170\u016e\u0003\u0002\u0002\u0002\u0170\u016f\u0003",
    "\u0002\u0002\u0002\u0171a\u0003\u0002\u0002\u0002\u0172\u0175\u0005",
    "j6\u0002\u0173\u0175\u0007\u0018\u0002\u0002\u0174\u0172\u0003\u0002",
    "\u0002\u0002\u0174\u0173\u0003\u0002\u0002\u0002\u0175c\u0003\u0002",
    "\u0002\u0002\u0176\u017b\u0005f4\u0002\u0177\u0178\u0005f4\u0002\u0178",
    "\u0179\u0005d3\u0002\u0179\u017b\u0003\u0002\u0002\u0002\u017a\u0176",
    "\u0003\u0002\u0002\u0002\u017a\u0177\u0003\u0002\u0002\u0002\u017be",
    "\u0003\u0002\u0002\u0002\u017c\u017f\u0007\u001c\u0002\u0002\u017d\u017f",
    "\u0005h5\u0002\u017e\u017c\u0003\u0002\u0002\u0002\u017e\u017d\u0003",
    "\u0002\u0002\u0002\u017fg\u0003\u0002\u0002\u0002\u0180\u0181\t\u0006",
    "\u0002\u0002\u0181i\u0003\u0002\u0002\u0002\u0182\u0183\t\u0007\u0002",
    "\u0002\u0183k\u0003\u0002\u0002\u0002\"ov\u0084\u0090\u009e\u00a3\u00ab",
    "\u00b0\u00b7\u00c3\u00cf\u00d7\u00e2\u00f3\u00fc\u0108\u010c\u0113\u011a",
    "\u0122\u0132\u0141\u014a\u014e\u0152\u015f\u0166\u016c\u0170\u0174\u017a",
    "\u017e"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'add'", "'alter'", "'important'", "'as'", "'set'", 
                     "'do'", "'show_page_build'", "'end'", "'set_tags'", 
                     "'replace'", "'show'", "'hide'", "','", "'with'", "'under'", 
                     "'>'", "'$'", "'#'", "'/'", "'@'", "'.'", "'-'", "'+'", 
                     "'^'", "'~'", "'0'", "'1'", "'2'", "'3'", "'4'", "'5'", 
                     "'6'", "'7'", "'8'", "'9'", "'A'", "'B'", "'C'", "'D'", 
                     "'E'", "'F'", "'G'", "'H'", "'I'", "'J'", "'K'", "'L'", 
                     "'M'", "'N'", "'O'", "'P'", "'Q'", "'R'", "'S'", "'T'", 
                     "'U'", "'V'", "'W'", "'X'", "'Y'", "'Z'", "'a'", "'b'", 
                     "'c'", "'d'", "'e'", "'f'", "'g'", "'h'", "'i'", "'j'", 
                     "'k'", "'l'", "'m'", "'n'", "'o'", "'p'", "'q'", "'r'", 
                     "'s'", "'t'", "'u'", "'v'", "'w'", "'x'", "'y'", "'z'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, "ID", "LINE_COMMENT", 
                      "BLOCK_COMMENT", "WS" ];

var ruleNames =  [ "mappingRules", "mappingRule", "addRule", "candidate", 
                   "alterRule", "setRule", "codeBlock", "linesCode", "lineCode", 
                   "setTags", "tags", "tag", "replace", "target", "source", 
                   "under", "scope", "scopeNode", "show", "hide", "releaseOrMockName", 
                   "presentationName", "hostage", "releaseName", "mockName", 
                   "release_id", "mock_id", "presentation_name", "release_name", 
                   "mock_name", "bucket_name", "user_name", "valid_semver", 
                   "prefix", "version_core", "major", "minor", "patch", 
                   "preRelease", "dotSeparated_preRelease_identifiers", 
                   "build", "dotSeparated_build_identifiers", "preRelease_identifier", 
                   "build_identifier", "alphanumeric_identifier", "numeric_identifier", 
                   "identifier_characters", "identifier_character", "nonDigit", 
                   "digits", "digit", "positive_digit", "letter" ];

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
MappingParser.T__84 = 85;
MappingParser.T__85 = 86;
MappingParser.T__86 = 87;
MappingParser.ID = 88;
MappingParser.LINE_COMMENT = 89;
MappingParser.BLOCK_COMMENT = 90;
MappingParser.WS = 91;

MappingParser.RULE_mappingRules = 0;
MappingParser.RULE_mappingRule = 1;
MappingParser.RULE_addRule = 2;
MappingParser.RULE_candidate = 3;
MappingParser.RULE_alterRule = 4;
MappingParser.RULE_setRule = 5;
MappingParser.RULE_codeBlock = 6;
MappingParser.RULE_linesCode = 7;
MappingParser.RULE_lineCode = 8;
MappingParser.RULE_setTags = 9;
MappingParser.RULE_tags = 10;
MappingParser.RULE_tag = 11;
MappingParser.RULE_replace = 12;
MappingParser.RULE_target = 13;
MappingParser.RULE_source = 14;
MappingParser.RULE_under = 15;
MappingParser.RULE_scope = 16;
MappingParser.RULE_scopeNode = 17;
MappingParser.RULE_show = 18;
MappingParser.RULE_hide = 19;
MappingParser.RULE_releaseOrMockName = 20;
MappingParser.RULE_presentationName = 21;
MappingParser.RULE_hostage = 22;
MappingParser.RULE_releaseName = 23;
MappingParser.RULE_mockName = 24;
MappingParser.RULE_release_id = 25;
MappingParser.RULE_mock_id = 26;
MappingParser.RULE_presentation_name = 27;
MappingParser.RULE_release_name = 28;
MappingParser.RULE_mock_name = 29;
MappingParser.RULE_bucket_name = 30;
MappingParser.RULE_user_name = 31;
MappingParser.RULE_valid_semver = 32;
MappingParser.RULE_prefix = 33;
MappingParser.RULE_version_core = 34;
MappingParser.RULE_major = 35;
MappingParser.RULE_minor = 36;
MappingParser.RULE_patch = 37;
MappingParser.RULE_preRelease = 38;
MappingParser.RULE_dotSeparated_preRelease_identifiers = 39;
MappingParser.RULE_build = 40;
MappingParser.RULE_dotSeparated_build_identifiers = 41;
MappingParser.RULE_preRelease_identifier = 42;
MappingParser.RULE_build_identifier = 43;
MappingParser.RULE_alphanumeric_identifier = 44;
MappingParser.RULE_numeric_identifier = 45;
MappingParser.RULE_identifier_characters = 46;
MappingParser.RULE_identifier_character = 47;
MappingParser.RULE_nonDigit = 48;
MappingParser.RULE_digits = 49;
MappingParser.RULE_digit = 50;
MappingParser.RULE_positive_digit = 51;
MappingParser.RULE_letter = 52;

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
        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MappingParser.T__0) | (1 << MappingParser.T__1) | (1 << MappingParser.T__3) | (1 << MappingParser.T__4) | (1 << MappingParser.T__5) | (1 << MappingParser.T__6) | (1 << MappingParser.T__7) | (1 << MappingParser.T__8) | (1 << MappingParser.T__9) | (1 << MappingParser.T__10) | (1 << MappingParser.T__11) | (1 << MappingParser.T__12) | (1 << MappingParser.T__13) | (1 << MappingParser.T__14) | (1 << MappingParser.T__15) | (1 << MappingParser.T__16) | (1 << MappingParser.T__17) | (1 << MappingParser.T__18) | (1 << MappingParser.T__19) | (1 << MappingParser.T__20) | (1 << MappingParser.T__21) | (1 << MappingParser.T__22) | (1 << MappingParser.T__23) | (1 << MappingParser.T__24) | (1 << MappingParser.T__25) | (1 << MappingParser.T__26) | (1 << MappingParser.T__27) | (1 << MappingParser.T__28) | (1 << MappingParser.T__29) | (1 << MappingParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (MappingParser.T__31 - 32)) | (1 << (MappingParser.T__32 - 32)) | (1 << (MappingParser.T__33 - 32)) | (1 << (MappingParser.T__34 - 32)) | (1 << (MappingParser.T__35 - 32)) | (1 << (MappingParser.T__36 - 32)) | (1 << (MappingParser.T__37 - 32)) | (1 << (MappingParser.T__38 - 32)) | (1 << (MappingParser.T__39 - 32)) | (1 << (MappingParser.T__40 - 32)) | (1 << (MappingParser.T__41 - 32)) | (1 << (MappingParser.T__42 - 32)) | (1 << (MappingParser.T__43 - 32)) | (1 << (MappingParser.T__44 - 32)) | (1 << (MappingParser.T__45 - 32)) | (1 << (MappingParser.T__46 - 32)) | (1 << (MappingParser.T__47 - 32)) | (1 << (MappingParser.T__48 - 32)) | (1 << (MappingParser.T__49 - 32)) | (1 << (MappingParser.T__50 - 32)) | (1 << (MappingParser.T__51 - 32)) | (1 << (MappingParser.T__52 - 32)) | (1 << (MappingParser.T__53 - 32)) | (1 << (MappingParser.T__54 - 32)) | (1 << (MappingParser.T__55 - 32)) | (1 << (MappingParser.T__56 - 32)) | (1 << (MappingParser.T__57 - 32)) | (1 << (MappingParser.T__58 - 32)) | (1 << (MappingParser.T__59 - 32)) | (1 << (MappingParser.T__60 - 32)) | (1 << (MappingParser.T__61 - 32)) | (1 << (MappingParser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (MappingParser.T__63 - 64)) | (1 << (MappingParser.T__64 - 64)) | (1 << (MappingParser.T__65 - 64)) | (1 << (MappingParser.T__66 - 64)) | (1 << (MappingParser.T__67 - 64)) | (1 << (MappingParser.T__68 - 64)) | (1 << (MappingParser.T__69 - 64)) | (1 << (MappingParser.T__70 - 64)) | (1 << (MappingParser.T__71 - 64)) | (1 << (MappingParser.T__72 - 64)) | (1 << (MappingParser.T__73 - 64)) | (1 << (MappingParser.T__74 - 64)) | (1 << (MappingParser.T__75 - 64)) | (1 << (MappingParser.T__76 - 64)) | (1 << (MappingParser.T__77 - 64)) | (1 << (MappingParser.T__78 - 64)) | (1 << (MappingParser.T__79 - 64)) | (1 << (MappingParser.T__80 - 64)) | (1 << (MappingParser.T__81 - 64)) | (1 << (MappingParser.T__82 - 64)) | (1 << (MappingParser.T__83 - 64)) | (1 << (MappingParser.T__84 - 64)) | (1 << (MappingParser.T__85 - 64)) | (1 << (MappingParser.T__86 - 64)) | (1 << (MappingParser.ID - 64)) | (1 << (MappingParser.LINE_COMMENT - 64)) | (1 << (MappingParser.BLOCK_COMMENT - 64)) | (1 << (MappingParser.WS - 64)))) !== 0)) {
            this.state = 106;
            this.mappingRule();
            this.state = 111;
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

MappingRuleContext.prototype.setRule = function() {
    return this.getTypedRuleContext(SetRuleContext,0);
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
        this.state = 116;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 112;
            this.addRule();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 113;
            this.alterRule();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 114;
            this.setRule();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 115;
            _la = this._input.LA(1);
            if(_la<=0 || (((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MappingParser.T__0) | (1 << MappingParser.T__1) | (1 << MappingParser.T__2))) !== 0)) {
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
        this.state = 130;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 118;
            this.match(MappingParser.T__0);
            this.state = 119;
            this.candidate();
            this.state = 120;
            this.match(MappingParser.T__3);
            this.state = 121;
            this.presentationName();
            this.state = 122;
            this.codeBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 124;
            this.match(MappingParser.T__0);
            this.state = 125;
            this.candidate();
            this.state = 126;
            this.match(MappingParser.T__3);
            this.state = 127;
            this.presentationName();
            this.state = 128;
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
        this.state = 132;
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
        this.state = 142;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 134;
            this.match(MappingParser.T__1);
            this.state = 135;
            this.presentationName();
            this.state = 136;
            this.codeBlock();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 138;
            this.match(MappingParser.T__1);
            this.state = 139;
            this.presentationName();
            this.state = 140;
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

function SetRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_setRule;
    return this;
}

SetRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetRuleContext.prototype.constructor = SetRuleContext;

SetRuleContext.prototype.hostage = function() {
    return this.getTypedRuleContext(HostageContext,0);
};

SetRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterSetRule(this);
	}
};

SetRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitSetRule(this);
	}
};

SetRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitSetRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.SetRuleContext = SetRuleContext;

MappingParser.prototype.setRule = function() {

    var localctx = new SetRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, MappingParser.RULE_setRule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 144;
        this.match(MappingParser.T__4);
        this.state = 145;
        this.match(MappingParser.T__5);
        this.state = 146;
        this.match(MappingParser.T__6);
        this.state = 147;
        this.hostage();
        this.state = 148;
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
    this.enterRule(localctx, 12, MappingParser.RULE_codeBlock);
    try {
        this.state = 156;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 150;
            this.match(MappingParser.T__5);
            this.state = 151;
            this.match(MappingParser.T__7);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 152;
            this.match(MappingParser.T__5);
            this.state = 153;
            this.linesCode();
            this.state = 154;
            this.match(MappingParser.T__7);
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
    this.enterRule(localctx, 14, MappingParser.RULE_linesCode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MappingParser.T__8) | (1 << MappingParser.T__9) | (1 << MappingParser.T__10) | (1 << MappingParser.T__11))) !== 0)) {
            this.state = 158;
            this.lineCode();
            this.state = 163;
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
    this.enterRule(localctx, 16, MappingParser.RULE_lineCode);
    var _la = 0; // Token type
    try {
        this.state = 169;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 164;
            this.setTags();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 165;
            this.replace();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 166;
            this.show();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 167;
            this.hide();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 168;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MappingParser.T__8) | (1 << MappingParser.T__9) | (1 << MappingParser.T__10) | (1 << MappingParser.T__11))) !== 0))) {
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
    this.enterRule(localctx, 18, MappingParser.RULE_setTags);
    try {
        this.state = 174;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 171;
            this.match(MappingParser.T__8);
            this.state = 172;
            this.tags();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 173;
            this.match(MappingParser.T__8);
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
    this.enterRule(localctx, 20, MappingParser.RULE_tags);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 176;
                this.tag();
                this.state = 177;
                this.match(MappingParser.T__12); 
            }
            this.state = 183;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

        this.state = 184;
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
    this.enterRule(localctx, 22, MappingParser.RULE_tag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
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
    this.enterRule(localctx, 24, MappingParser.RULE_replace);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        this.match(MappingParser.T__9);
        this.state = 189;
        this.target();
        this.state = 190;
        this.match(MappingParser.T__13);
        this.state = 191;
        this.source();
        this.state = 193;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        if(la_===1) {
            this.state = 192;
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
    this.enterRule(localctx, 26, MappingParser.RULE_target);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
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
    this.enterRule(localctx, 28, MappingParser.RULE_source);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
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
    this.enterRule(localctx, 30, MappingParser.RULE_under);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.match(MappingParser.T__14);
        this.state = 200;
        this.scope();
        this.state = 205;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 201;
                this.match(MappingParser.T__12);
                this.state = 202;
                this.scope(); 
            }
            this.state = 207;
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
    this.enterRule(localctx, 32, MappingParser.RULE_scope);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.scopeNode();
        this.state = 213;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 209;
                this.match(MappingParser.T__15);
                this.state = 210;
                this.scopeNode(); 
            }
            this.state = 215;
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
    this.enterRule(localctx, 34, MappingParser.RULE_scopeNode);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
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
    this.enterRule(localctx, 36, MappingParser.RULE_show);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        this.match(MappingParser.T__10);
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
    this.enterRule(localctx, 38, MappingParser.RULE_hide);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 220;
        this.match(MappingParser.T__11);
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
    this.enterRule(localctx, 40, MappingParser.RULE_releaseOrMockName);
    try {
        this.state = 224;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MappingParser.T__16:
            this.enterOuterAlt(localctx, 1);
            this.state = 222;
            this.releaseName();
            break;
        case MappingParser.T__17:
            this.enterOuterAlt(localctx, 2);
            this.state = 223;
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
    this.enterRule(localctx, 42, MappingParser.RULE_presentationName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 226;
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

function HostageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_hostage;
    return this;
}

HostageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HostageContext.prototype.constructor = HostageContext;

HostageContext.prototype.presentation_name = function() {
    return this.getTypedRuleContext(Presentation_nameContext,0);
};

HostageContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterHostage(this);
	}
};

HostageContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitHostage(this);
	}
};

HostageContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitHostage(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.HostageContext = HostageContext;

MappingParser.prototype.hostage = function() {

    var localctx = new HostageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, MappingParser.RULE_hostage);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 228;
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
    this.enterRule(localctx, 46, MappingParser.RULE_releaseName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 230;
        this.match(MappingParser.T__16);
        this.state = 231;
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
    this.enterRule(localctx, 48, MappingParser.RULE_mockName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 233;
        this.match(MappingParser.T__17);
        this.state = 234;
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
    this.enterRule(localctx, 50, MappingParser.RULE_release_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        this.user_name();
        this.state = 237;
        this.match(MappingParser.T__18);
        this.state = 238;
        this.release_name();
        this.state = 241;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        if(la_===1+1) {
            this.state = 239;
            this.match(MappingParser.T__19);
            this.state = 240;
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
    this.enterRule(localctx, 52, MappingParser.RULE_mock_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this.bucket_name();
        this.state = 244;
        this.match(MappingParser.T__18);
        this.state = 245;
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
    this.enterRule(localctx, 54, MappingParser.RULE_presentation_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 250;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MappingParser.T__20 || _la===MappingParser.ID) {
            this.state = 247;
            _la = this._input.LA(1);
            if(!(_la===MappingParser.T__20 || _la===MappingParser.ID)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 252;
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
    this.enterRule(localctx, 56, MappingParser.RULE_release_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
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
    this.enterRule(localctx, 58, MappingParser.RULE_mock_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
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
    this.enterRule(localctx, 60, MappingParser.RULE_bucket_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 257;
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
    this.enterRule(localctx, 62, MappingParser.RULE_user_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 259;
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
    this.enterRule(localctx, 64, MappingParser.RULE_valid_semver);
    var _la = 0; // Token type
    try {
        this.state = 288;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 262;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__23 || _la===MappingParser.T__24) {
                this.state = 261;
                this.prefix();
            }

            this.state = 264;
            this.version_core();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 266;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__23 || _la===MappingParser.T__24) {
                this.state = 265;
                this.prefix();
            }

            this.state = 268;
            this.version_core();
            this.state = 269;
            this.match(MappingParser.T__21);
            this.state = 270;
            this.preRelease();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 273;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__23 || _la===MappingParser.T__24) {
                this.state = 272;
                this.prefix();
            }

            this.state = 275;
            this.version_core();
            this.state = 276;
            this.match(MappingParser.T__22);
            this.state = 277;
            this.build();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 280;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__23 || _la===MappingParser.T__24) {
                this.state = 279;
                this.prefix();
            }

            this.state = 282;
            this.version_core();
            this.state = 283;
            this.match(MappingParser.T__21);
            this.state = 284;
            this.preRelease();
            this.state = 285;
            this.match(MappingParser.T__22);
            this.state = 286;
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
    this.enterRule(localctx, 66, MappingParser.RULE_prefix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 290;
        _la = this._input.LA(1);
        if(!(_la===MappingParser.T__23 || _la===MappingParser.T__24)) {
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
    this.enterRule(localctx, 68, MappingParser.RULE_version_core);
    try {
        this.state = 304;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 292;
            this.major();
            this.state = 293;
            this.match(MappingParser.T__20);
            this.state = 294;
            this.minor();
            this.state = 295;
            this.match(MappingParser.T__20);
            this.state = 296;
            this.patch();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 298;
            this.major();
            this.state = 299;
            this.match(MappingParser.T__20);
            this.state = 300;
            this.minor();
            this.state = 301;
            this.match(MappingParser.T__20);
            this.state = 302;
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
    this.enterRule(localctx, 70, MappingParser.RULE_major);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 306;
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
    this.enterRule(localctx, 72, MappingParser.RULE_minor);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
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
    this.enterRule(localctx, 74, MappingParser.RULE_patch);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 310;
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
    this.enterRule(localctx, 76, MappingParser.RULE_preRelease);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 312;
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
    this.enterRule(localctx, 78, MappingParser.RULE_dotSeparated_preRelease_identifiers);
    try {
        this.state = 319;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 314;
            this.preRelease_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 315;
            this.preRelease_identifier();
            this.state = 316;
            this.match(MappingParser.T__20);
            this.state = 317;
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
    this.enterRule(localctx, 80, MappingParser.RULE_build);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 321;
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
    this.enterRule(localctx, 82, MappingParser.RULE_dotSeparated_build_identifiers);
    try {
        this.state = 328;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 323;
            this.build_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 324;
            this.build_identifier();
            this.state = 325;
            this.match(MappingParser.T__20);
            this.state = 326;
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
    this.enterRule(localctx, 84, MappingParser.RULE_preRelease_identifier);
    try {
        this.state = 332;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 330;
            this.alphanumeric_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 331;
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
    this.enterRule(localctx, 86, MappingParser.RULE_build_identifier);
    try {
        this.state = 336;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 334;
            this.alphanumeric_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 335;
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
    this.enterRule(localctx, 88, MappingParser.RULE_alphanumeric_identifier);
    try {
        this.state = 349;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 338;
            this.nonDigit();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 339;
            this.nonDigit();
            this.state = 340;
            this.identifier_characters();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 342;
            this.identifier_characters();
            this.state = 343;
            this.nonDigit();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 345;
            this.identifier_characters();
            this.state = 346;
            this.nonDigit();
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
    this.enterRule(localctx, 90, MappingParser.RULE_numeric_identifier);
    try {
        this.state = 356;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 351;
            this.match(MappingParser.T__25);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 352;
            this.positive_digit();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 353;
            this.positive_digit();
            this.state = 354;
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
    this.enterRule(localctx, 92, MappingParser.RULE_identifier_characters);
    try {
        this.state = 362;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 358;
            this.identifier_character();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 359;
            this.identifier_character();
            this.state = 360;
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
    this.enterRule(localctx, 94, MappingParser.RULE_identifier_character);
    try {
        this.state = 366;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
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
            this.enterOuterAlt(localctx, 1);
            this.state = 364;
            this.digit();
            break;
        case MappingParser.T__21:
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
        case MappingParser.T__84:
        case MappingParser.T__85:
        case MappingParser.T__86:
            this.enterOuterAlt(localctx, 2);
            this.state = 365;
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
    this.enterRule(localctx, 96, MappingParser.RULE_nonDigit);
    try {
        this.state = 370;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
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
        case MappingParser.T__84:
        case MappingParser.T__85:
        case MappingParser.T__86:
            this.enterOuterAlt(localctx, 1);
            this.state = 368;
            this.letter();
            break;
        case MappingParser.T__21:
            this.enterOuterAlt(localctx, 2);
            this.state = 369;
            this.match(MappingParser.T__21);
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
    this.enterRule(localctx, 98, MappingParser.RULE_digits);
    try {
        this.state = 376;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 372;
            this.digit();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 373;
            this.digit();
            this.state = 374;
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
    this.enterRule(localctx, 100, MappingParser.RULE_digit);
    try {
        this.state = 380;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MappingParser.T__25:
            this.enterOuterAlt(localctx, 1);
            this.state = 378;
            this.match(MappingParser.T__25);
            break;
        case MappingParser.T__26:
        case MappingParser.T__27:
        case MappingParser.T__28:
        case MappingParser.T__29:
        case MappingParser.T__30:
        case MappingParser.T__31:
        case MappingParser.T__32:
        case MappingParser.T__33:
        case MappingParser.T__34:
            this.enterOuterAlt(localctx, 2);
            this.state = 379;
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
    this.enterRule(localctx, 102, MappingParser.RULE_positive_digit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 382;
        _la = this._input.LA(1);
        if(!(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (MappingParser.T__26 - 27)) | (1 << (MappingParser.T__27 - 27)) | (1 << (MappingParser.T__28 - 27)) | (1 << (MappingParser.T__29 - 27)) | (1 << (MappingParser.T__30 - 27)) | (1 << (MappingParser.T__31 - 27)) | (1 << (MappingParser.T__32 - 27)) | (1 << (MappingParser.T__33 - 27)) | (1 << (MappingParser.T__34 - 27)))) !== 0))) {
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
    this.enterRule(localctx, 104, MappingParser.RULE_letter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 384;
        _la = this._input.LA(1);
        if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (MappingParser.T__35 - 36)) | (1 << (MappingParser.T__36 - 36)) | (1 << (MappingParser.T__37 - 36)) | (1 << (MappingParser.T__38 - 36)) | (1 << (MappingParser.T__39 - 36)) | (1 << (MappingParser.T__40 - 36)) | (1 << (MappingParser.T__41 - 36)) | (1 << (MappingParser.T__42 - 36)) | (1 << (MappingParser.T__43 - 36)) | (1 << (MappingParser.T__44 - 36)) | (1 << (MappingParser.T__45 - 36)) | (1 << (MappingParser.T__46 - 36)) | (1 << (MappingParser.T__47 - 36)) | (1 << (MappingParser.T__48 - 36)) | (1 << (MappingParser.T__49 - 36)) | (1 << (MappingParser.T__50 - 36)) | (1 << (MappingParser.T__51 - 36)) | (1 << (MappingParser.T__52 - 36)) | (1 << (MappingParser.T__53 - 36)) | (1 << (MappingParser.T__54 - 36)) | (1 << (MappingParser.T__55 - 36)) | (1 << (MappingParser.T__56 - 36)) | (1 << (MappingParser.T__57 - 36)) | (1 << (MappingParser.T__58 - 36)) | (1 << (MappingParser.T__59 - 36)) | (1 << (MappingParser.T__60 - 36)) | (1 << (MappingParser.T__61 - 36)) | (1 << (MappingParser.T__62 - 36)) | (1 << (MappingParser.T__63 - 36)) | (1 << (MappingParser.T__64 - 36)) | (1 << (MappingParser.T__65 - 36)) | (1 << (MappingParser.T__66 - 36)))) !== 0) || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (MappingParser.T__67 - 68)) | (1 << (MappingParser.T__68 - 68)) | (1 << (MappingParser.T__69 - 68)) | (1 << (MappingParser.T__70 - 68)) | (1 << (MappingParser.T__71 - 68)) | (1 << (MappingParser.T__72 - 68)) | (1 << (MappingParser.T__73 - 68)) | (1 << (MappingParser.T__74 - 68)) | (1 << (MappingParser.T__75 - 68)) | (1 << (MappingParser.T__76 - 68)) | (1 << (MappingParser.T__77 - 68)) | (1 << (MappingParser.T__78 - 68)) | (1 << (MappingParser.T__79 - 68)) | (1 << (MappingParser.T__80 - 68)) | (1 << (MappingParser.T__81 - 68)) | (1 << (MappingParser.T__82 - 68)) | (1 << (MappingParser.T__83 - 68)) | (1 << (MappingParser.T__84 - 68)) | (1 << (MappingParser.T__85 - 68)) | (1 << (MappingParser.T__86 - 68)))) !== 0))) {
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
