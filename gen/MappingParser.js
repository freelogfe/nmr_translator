// Generated from Mapping.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MappingListener = require('./MappingListener').MappingListener;
var MappingVisitor = require('./MappingVisitor').MappingVisitor;

var grammarFileName = "Mapping.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003_\u0199\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
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
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u00049\t9\u0004",
    ":\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004?\t?\u0003\u0002\u0007",
    "\u0002\u0080\n\u0002\f\u0002\u000e\u0002\u0083\u000b\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u008a\n",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0005",
    "\t\u009e\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n",
    "\u00a6\n\n\u0003\u000b\u0007\u000b\u00a9\n\u000b\f\u000b\u000e\u000b",
    "\u00ac\u000b\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0005\f\u00b7\n\f\u0003\r\u0003\r\u0003\r\u0005\r",
    "\u00bc\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00c1\n\u000e",
    "\f\u000e\u000e\u000e\u00c4\u000b\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u00cf\n\u0010\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013",
    "\u00d9\n\u0013\f\u0013\u000e\u0013\u00dc\u000b\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0007\u0014\u00e1\n\u0014\f\u0014\u000e\u0014\u00e4",
    "\u000b\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0005\u0016",
    "\u00ea\n\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0005\u001f\u0104\n\u001f\u0003 \u0003 \u0003 \u0003",
    "!\u0003!\u0003\"\u0003\"\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0005$\u0114\n$\u0003%\u0003%\u0003%\u0003%\u0003&\u0003&\u0003\'",
    "\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003+\u0005+\u0125",
    "\n+\u0003+\u0003+\u0005+\u0129\n+\u0003+\u0003+\u0003+\u0003+\u0003",
    "+\u0005+\u0130\n+\u0003+\u0003+\u0003+\u0003+\u0003+\u0005+\u0137\n",
    "+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0005+\u013f\n+\u0003,\u0003",
    ",\u0003-\u0003-\u0003-\u0003-\u0003-\u0003-\u0003.\u0003.\u0003/\u0003",
    "/\u00030\u00030\u00031\u00031\u00032\u00032\u00032\u00032\u00032\u0005",
    "2\u0156\n2\u00033\u00033\u00034\u00034\u00034\u00034\u00034\u00054\u015f",
    "\n4\u00035\u00035\u00055\u0163\n5\u00036\u00036\u00056\u0167\n6\u0003",
    "7\u00037\u00037\u00037\u00037\u00037\u00037\u00037\u00037\u00037\u0003",
    "7\u00057\u0174\n7\u00038\u00038\u00038\u00038\u00038\u00058\u017b\n",
    "8\u00039\u00039\u00039\u00039\u00059\u0181\n9\u0003:\u0003:\u0005:\u0185",
    "\n:\u0003;\u0003;\u0005;\u0189\n;\u0003<\u0003<\u0003<\u0003<\u0005",
    "<\u018f\n<\u0003=\u0003=\u0005=\u0193\n=\u0003>\u0003>\u0003?\u0003",
    "?\u0003?\u0003\u0113\u0002@\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ",
    "\\^`bdfhjlnprtvxz|\u0002\u0007\u0003\u0002\u0003\u0005\u0003\u0002\t",
    "\u0010\u0003\u0002\u001b\u001c\u0003\u0002\u001f\'\u0003\u0002([\u0002",
    "\u0186\u0002\u0081\u0003\u0002\u0002\u0002\u0004\u0089\u0003\u0002\u0002",
    "\u0002\u0006\u008b\u0003\u0002\u0002\u0002\b\u008d\u0003\u0002\u0002",
    "\u0002\n\u0093\u0003\u0002\u0002\u0002\f\u0095\u0003\u0002\u0002\u0002",
    "\u000e\u0099\u0003\u0002\u0002\u0002\u0010\u009d\u0003\u0002\u0002\u0002",
    "\u0012\u00a5\u0003\u0002\u0002\u0002\u0014\u00aa\u0003\u0002\u0002\u0002",
    "\u0016\u00b6\u0003\u0002\u0002\u0002\u0018\u00bb\u0003\u0002\u0002\u0002",
    "\u001a\u00c2\u0003\u0002\u0002\u0002\u001c\u00c7\u0003\u0002\u0002\u0002",
    "\u001e\u00c9\u0003\u0002\u0002\u0002 \u00d0\u0003\u0002\u0002\u0002",
    "\"\u00d2\u0003\u0002\u0002\u0002$\u00d4\u0003\u0002\u0002\u0002&\u00dd",
    "\u0003\u0002\u0002\u0002(\u00e5\u0003\u0002\u0002\u0002*\u00e9\u0003",
    "\u0002\u0002\u0002,\u00eb\u0003\u0002\u0002\u0002.\u00ee\u0003\u0002",
    "\u0002\u00020\u00f1\u0003\u0002\u0002\u00022\u00f3\u0003\u0002\u0002",
    "\u00024\u00f5\u0003\u0002\u0002\u00026\u00f8\u0003\u0002\u0002\u0002",
    "8\u00fa\u0003\u0002\u0002\u0002:\u00fd\u0003\u0002\u0002\u0002<\u00ff",
    "\u0003\u0002\u0002\u0002>\u0105\u0003\u0002\u0002\u0002@\u0108\u0003",
    "\u0002\u0002\u0002B\u010a\u0003\u0002\u0002\u0002D\u010c\u0003\u0002",
    "\u0002\u0002F\u010e\u0003\u0002\u0002\u0002H\u0115\u0003\u0002\u0002",
    "\u0002J\u0119\u0003\u0002\u0002\u0002L\u011b\u0003\u0002\u0002\u0002",
    "N\u011d\u0003\u0002\u0002\u0002P\u011f\u0003\u0002\u0002\u0002R\u0121",
    "\u0003\u0002\u0002\u0002T\u013e\u0003\u0002\u0002\u0002V\u0140\u0003",
    "\u0002\u0002\u0002X\u0142\u0003\u0002\u0002\u0002Z\u0148\u0003\u0002",
    "\u0002\u0002\\\u014a\u0003\u0002\u0002\u0002^\u014c\u0003\u0002\u0002",
    "\u0002`\u014e\u0003\u0002\u0002\u0002b\u0155\u0003\u0002\u0002\u0002",
    "d\u0157\u0003\u0002\u0002\u0002f\u015e\u0003\u0002\u0002\u0002h\u0162",
    "\u0003\u0002\u0002\u0002j\u0166\u0003\u0002\u0002\u0002l\u0173\u0003",
    "\u0002\u0002\u0002n\u017a\u0003\u0002\u0002\u0002p\u0180\u0003\u0002",
    "\u0002\u0002r\u0184\u0003\u0002\u0002\u0002t\u0188\u0003\u0002\u0002",
    "\u0002v\u018e\u0003\u0002\u0002\u0002x\u0192\u0003\u0002\u0002\u0002",
    "z\u0194\u0003\u0002\u0002\u0002|\u0196\u0003\u0002\u0002\u0002~\u0080",
    "\u0005\u0004\u0003\u0002\u007f~\u0003\u0002\u0002\u0002\u0080\u0083",
    "\u0003\u0002\u0002\u0002\u0081\u007f\u0003\u0002\u0002\u0002\u0081\u0082",
    "\u0003\u0002\u0002\u0002\u0082\u0003\u0003\u0002\u0002\u0002\u0083\u0081",
    "\u0003\u0002\u0002\u0002\u0084\u008a\u0005\b\u0005\u0002\u0085\u008a",
    "\u0005\f\u0007\u0002\u0086\u0087\u0007\u0003\u0002\u0002\u0087\u008a",
    "\u0005\u0006\u0004\u0002\u0088\u008a\n\u0002\u0002\u0002\u0089\u0084",
    "\u0003\u0002\u0002\u0002\u0089\u0085\u0003\u0002\u0002\u0002\u0089\u0086",
    "\u0003\u0002\u0002\u0002\u0089\u0088\u0003\u0002\u0002\u0002\u008a\u0005",
    "\u0003\u0002\u0002\u0002\u008b\u008c\u0005J&\u0002\u008c\u0007\u0003",
    "\u0002\u0002\u0002\u008d\u008e\u0007\u0004\u0002\u0002\u008e\u008f\u0005",
    "\n\u0006\u0002\u008f\u0090\u0007\u0006\u0002\u0002\u0090\u0091\u0005",
    "\u000e\b\u0002\u0091\u0092\u0005\u0010\t\u0002\u0092\t\u0003\u0002\u0002",
    "\u0002\u0093\u0094\u0005*\u0016\u0002\u0094\u000b\u0003\u0002\u0002",
    "\u0002\u0095\u0096\u0007\u0005\u0002\u0002\u0096\u0097\u0005\u000e\b",
    "\u0002\u0097\u0098\u0005\u0010\t\u0002\u0098\r\u0003\u0002\u0002\u0002",
    "\u0099\u009a\u0005J&\u0002\u009a\u000f\u0003\u0002\u0002\u0002\u009b",
    "\u009e\u0005\u0012\n\u0002\u009c\u009e\u0005\u0016\f\u0002\u009d\u009b",
    "\u0003\u0002\u0002\u0002\u009d\u009c\u0003\u0002\u0002\u0002\u009e\u0011",
    "\u0003\u0002\u0002\u0002\u009f\u00a0\u0007\u0007\u0002\u0002\u00a0\u00a6",
    "\u0007\b\u0002\u0002\u00a1\u00a2\u0007\u0007\u0002\u0002\u00a2\u00a3",
    "\u0005\u0014\u000b\u0002\u00a3\u00a4\u0007\b\u0002\u0002\u00a4\u00a6",
    "\u0003\u0002\u0002\u0002\u00a5\u009f\u0003\u0002\u0002\u0002\u00a5\u00a1",
    "\u0003\u0002\u0002\u0002\u00a6\u0013\u0003\u0002\u0002\u0002\u00a7\u00a9",
    "\u0005\u0016\f\u0002\u00a8\u00a7\u0003\u0002\u0002\u0002\u00a9\u00ac",
    "\u0003\u0002\u0002\u0002\u00aa\u00a8\u0003\u0002\u0002\u0002\u00aa\u00ab",
    "\u0003\u0002\u0002\u0002\u00ab\u0015\u0003\u0002\u0002\u0002\u00ac\u00aa",
    "\u0003\u0002\u0002\u0002\u00ad\u00b7\u0005\u0018\r\u0002\u00ae\u00b7",
    "\u0005\u001e\u0010\u0002\u00af\u00b7\u00050\u0019\u0002\u00b0\u00b7",
    "\u00052\u001a\u0002\u00b1\u00b7\u00054\u001b\u0002\u00b2\u00b7\u0005",
    "8\u001d\u0002\u00b3\u00b7\u0005<\u001f\u0002\u00b4\u00b7\u0005> \u0002",
    "\u00b5\u00b7\t\u0003\u0002\u0002\u00b6\u00ad\u0003\u0002\u0002\u0002",
    "\u00b6\u00ae\u0003\u0002\u0002\u0002\u00b6\u00af\u0003\u0002\u0002\u0002",
    "\u00b6\u00b0\u0003\u0002\u0002\u0002\u00b6\u00b1\u0003\u0002\u0002\u0002",
    "\u00b6\u00b2\u0003\u0002\u0002\u0002\u00b6\u00b3\u0003\u0002\u0002\u0002",
    "\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b6\u00b5\u0003\u0002\u0002\u0002",
    "\u00b7\u0017\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007\t\u0002\u0002",
    "\u00b9\u00bc\u0005\u001a\u000e\u0002\u00ba\u00bc\u0007\t\u0002\u0002",
    "\u00bb\u00b8\u0003\u0002\u0002\u0002\u00bb\u00ba\u0003\u0002\u0002\u0002",
    "\u00bc\u0019\u0003\u0002\u0002\u0002\u00bd\u00be\u0005\u001c\u000f\u0002",
    "\u00be\u00bf\u0007\u0011\u0002\u0002\u00bf\u00c1\u0003\u0002\u0002\u0002",
    "\u00c0\u00bd\u0003\u0002\u0002\u0002\u00c1\u00c4\u0003\u0002\u0002\u0002",
    "\u00c2\u00c0\u0003\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002",
    "\u00c3\u00c5\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002",
    "\u00c5\u00c6\u0005\u001c\u000f\u0002\u00c6\u001b\u0003\u0002\u0002\u0002",
    "\u00c7\u00c8\u0007_\u0002\u0002\u00c8\u001d\u0003\u0002\u0002\u0002",
    "\u00c9\u00ca\u0007\n\u0002\u0002\u00ca\u00cb\u0005 \u0011\u0002\u00cb",
    "\u00cc\u0007\u0012\u0002\u0002\u00cc\u00ce\u0005\"\u0012\u0002\u00cd",
    "\u00cf\u0005$\u0013\u0002\u00ce\u00cd\u0003\u0002\u0002\u0002\u00ce",
    "\u00cf\u0003\u0002\u0002\u0002\u00cf\u001f\u0003\u0002\u0002\u0002\u00d0",
    "\u00d1\u0005*\u0016\u0002\u00d1!\u0003\u0002\u0002\u0002\u00d2\u00d3",
    "\u0005*\u0016\u0002\u00d3#\u0003\u0002\u0002\u0002\u00d4\u00d5\u0007",
    "\u0013\u0002\u0002\u00d5\u00da\u0005&\u0014\u0002\u00d6\u00d7\u0007",
    "\u0011\u0002\u0002\u00d7\u00d9\u0005&\u0014\u0002\u00d8\u00d6\u0003",
    "\u0002\u0002\u0002\u00d9\u00dc\u0003\u0002\u0002\u0002\u00da\u00d8\u0003",
    "\u0002\u0002\u0002\u00da\u00db\u0003\u0002\u0002\u0002\u00db%\u0003",
    "\u0002\u0002\u0002\u00dc\u00da\u0003\u0002\u0002\u0002\u00dd\u00e2\u0005",
    "(\u0015\u0002\u00de\u00df\u0007\u0014\u0002\u0002\u00df\u00e1\u0005",
    "(\u0015\u0002\u00e0\u00de\u0003\u0002\u0002\u0002\u00e1\u00e4\u0003",
    "\u0002\u0002\u0002\u00e2\u00e0\u0003\u0002\u0002\u0002\u00e2\u00e3\u0003",
    "\u0002\u0002\u0002\u00e3\'\u0003\u0002\u0002\u0002\u00e4\u00e2\u0003",
    "\u0002\u0002\u0002\u00e5\u00e6\u0005*\u0016\u0002\u00e6)\u0003\u0002",
    "\u0002\u0002\u00e7\u00ea\u0005,\u0017\u0002\u00e8\u00ea\u0005.\u0018",
    "\u0002\u00e9\u00e7\u0003\u0002\u0002\u0002\u00e9\u00e8\u0003\u0002\u0002",
    "\u0002\u00ea+\u0003\u0002\u0002\u0002\u00eb\u00ec\u0007\u0015\u0002",
    "\u0002\u00ec\u00ed\u0005F$\u0002\u00ed-\u0003\u0002\u0002\u0002\u00ee",
    "\u00ef\u0007\u0016\u0002\u0002\u00ef\u00f0\u0005H%\u0002\u00f0/\u0003",
    "\u0002\u0002\u0002\u00f1\u00f2\u0007\u000b\u0002\u0002\u00f21\u0003",
    "\u0002\u0002\u0002\u00f3\u00f4\u0007\f\u0002\u0002\u00f43\u0003\u0002",
    "\u0002\u0002\u00f5\u00f6\u0007\r\u0002\u0002\u00f6\u00f7\u00056\u001c",
    "\u0002\u00f75\u0003\u0002\u0002\u0002\u00f8\u00f9\u0007_\u0002\u0002",
    "\u00f97\u0003\u0002\u0002\u0002\u00fa\u00fb\u0007\u000e\u0002\u0002",
    "\u00fb\u00fc\u0005:\u001e\u0002\u00fc9\u0003\u0002\u0002\u0002\u00fd",
    "\u00fe\u0007_\u0002\u0002\u00fe;\u0003\u0002\u0002\u0002\u00ff\u0100",
    "\u0007\u000f\u0002\u0002\u0100\u0101\u0005@!\u0002\u0101\u0103\u0005",
    "B\"\u0002\u0102\u0104\u0005D#\u0002\u0103\u0102\u0003\u0002\u0002\u0002",
    "\u0103\u0104\u0003\u0002\u0002\u0002\u0104=\u0003\u0002\u0002\u0002",
    "\u0105\u0106\u0007\u0010\u0002\u0002\u0106\u0107\u0005@!\u0002\u0107",
    "?\u0003\u0002\u0002\u0002\u0108\u0109\u0007_\u0002\u0002\u0109A\u0003",
    "\u0002\u0002\u0002\u010a\u010b\u0007_\u0002\u0002\u010bC\u0003\u0002",
    "\u0002\u0002\u010c\u010d\u0007_\u0002\u0002\u010dE\u0003\u0002\u0002",
    "\u0002\u010e\u010f\u0005R*\u0002\u010f\u0110\u0007\u0017\u0002\u0002",
    "\u0110\u0113\u0005L\'\u0002\u0111\u0112\u0007\u0018\u0002\u0002\u0112",
    "\u0114\u0005T+\u0002\u0113\u0114\u0003\u0002\u0002\u0002\u0113\u0111",
    "\u0003\u0002\u0002\u0002\u0114G\u0003\u0002\u0002\u0002\u0115\u0116",
    "\u0005P)\u0002\u0116\u0117\u0007\u0017\u0002\u0002\u0117\u0118\u0005",
    "P)\u0002\u0118I\u0003\u0002\u0002\u0002\u0119\u011a\u0007_\u0002\u0002",
    "\u011aK\u0003\u0002\u0002\u0002\u011b\u011c\u0007_\u0002\u0002\u011c",
    "M\u0003\u0002\u0002\u0002\u011d\u011e\u0007_\u0002\u0002\u011eO\u0003",
    "\u0002\u0002\u0002\u011f\u0120\u0007_\u0002\u0002\u0120Q\u0003\u0002",
    "\u0002\u0002\u0121\u0122\u0007_\u0002\u0002\u0122S\u0003\u0002\u0002",
    "\u0002\u0123\u0125\u0005V,\u0002\u0124\u0123\u0003\u0002\u0002\u0002",
    "\u0124\u0125\u0003\u0002\u0002\u0002\u0125\u0126\u0003\u0002\u0002\u0002",
    "\u0126\u013f\u0005X-\u0002\u0127\u0129\u0005V,\u0002\u0128\u0127\u0003",
    "\u0002\u0002\u0002\u0128\u0129\u0003\u0002\u0002\u0002\u0129\u012a\u0003",
    "\u0002\u0002\u0002\u012a\u012b\u0005X-\u0002\u012b\u012c\u0007\u0019",
    "\u0002\u0002\u012c\u012d\u0005`1\u0002\u012d\u013f\u0003\u0002\u0002",
    "\u0002\u012e\u0130\u0005V,\u0002\u012f\u012e\u0003\u0002\u0002\u0002",
    "\u012f\u0130\u0003\u0002\u0002\u0002\u0130\u0131\u0003\u0002\u0002\u0002",
    "\u0131\u0132\u0005X-\u0002\u0132\u0133\u0007\u001a\u0002\u0002\u0133",
    "\u0134\u0005d3\u0002\u0134\u013f\u0003\u0002\u0002\u0002\u0135\u0137",
    "\u0005V,\u0002\u0136\u0135\u0003\u0002\u0002\u0002\u0136\u0137\u0003",
    "\u0002\u0002\u0002\u0137\u0138\u0003\u0002\u0002\u0002\u0138\u0139\u0005",
    "X-\u0002\u0139\u013a\u0007\u0019\u0002\u0002\u013a\u013b\u0005`1\u0002",
    "\u013b\u013c\u0007\u001a\u0002\u0002\u013c\u013d\u0005d3\u0002\u013d",
    "\u013f\u0003\u0002\u0002\u0002\u013e\u0124\u0003\u0002\u0002\u0002\u013e",
    "\u0128\u0003\u0002\u0002\u0002\u013e\u012f\u0003\u0002\u0002\u0002\u013e",
    "\u0136\u0003\u0002\u0002\u0002\u013fU\u0003\u0002\u0002\u0002\u0140",
    "\u0141\t\u0004\u0002\u0002\u0141W\u0003\u0002\u0002\u0002\u0142\u0143",
    "\u0005Z.\u0002\u0143\u0144\u0007\u001d\u0002\u0002\u0144\u0145\u0005",
    "\\/\u0002\u0145\u0146\u0007\u001d\u0002\u0002\u0146\u0147\u0005^0\u0002",
    "\u0147Y\u0003\u0002\u0002\u0002\u0148\u0149\u0005n8\u0002\u0149[\u0003",
    "\u0002\u0002\u0002\u014a\u014b\u0005n8\u0002\u014b]\u0003\u0002\u0002",
    "\u0002\u014c\u014d\u0005n8\u0002\u014d_\u0003\u0002\u0002\u0002\u014e",
    "\u014f\u0005b2\u0002\u014fa\u0003\u0002\u0002\u0002\u0150\u0156\u0005",
    "h5\u0002\u0151\u0152\u0005h5\u0002\u0152\u0153\u0007\u001d\u0002\u0002",
    "\u0153\u0154\u0005b2\u0002\u0154\u0156\u0003\u0002\u0002\u0002\u0155",
    "\u0150\u0003\u0002\u0002\u0002\u0155\u0151\u0003\u0002\u0002\u0002\u0156",
    "c\u0003\u0002\u0002\u0002\u0157\u0158\u0005f4\u0002\u0158e\u0003\u0002",
    "\u0002\u0002\u0159\u015f\u0005j6\u0002\u015a\u015b\u0005j6\u0002\u015b",
    "\u015c\u0007\u001d\u0002\u0002\u015c\u015d\u0005f4\u0002\u015d\u015f",
    "\u0003\u0002\u0002\u0002\u015e\u0159\u0003\u0002\u0002\u0002\u015e\u015a",
    "\u0003\u0002\u0002\u0002\u015fg\u0003\u0002\u0002\u0002\u0160\u0163",
    "\u0005l7\u0002\u0161\u0163\u0005n8\u0002\u0162\u0160\u0003\u0002\u0002",
    "\u0002\u0162\u0161\u0003\u0002\u0002\u0002\u0163i\u0003\u0002\u0002",
    "\u0002\u0164\u0167\u0005l7\u0002\u0165\u0167\u0005v<\u0002\u0166\u0164",
    "\u0003\u0002\u0002\u0002\u0166\u0165\u0003\u0002\u0002\u0002\u0167k",
    "\u0003\u0002\u0002\u0002\u0168\u0174\u0005t;\u0002\u0169\u016a\u0005",
    "t;\u0002\u016a\u016b\u0005p9\u0002\u016b\u0174\u0003\u0002\u0002\u0002",
    "\u016c\u016d\u0005p9\u0002\u016d\u016e\u0005t;\u0002\u016e\u0174\u0003",
    "\u0002\u0002\u0002\u016f\u0170\u0005p9\u0002\u0170\u0171\u0005t;\u0002",
    "\u0171\u0172\u0005p9\u0002\u0172\u0174\u0003\u0002\u0002\u0002\u0173",
    "\u0168\u0003\u0002\u0002\u0002\u0173\u0169\u0003\u0002\u0002\u0002\u0173",
    "\u016c\u0003\u0002\u0002\u0002\u0173\u016f\u0003\u0002\u0002\u0002\u0174",
    "m\u0003\u0002\u0002\u0002\u0175\u017b\u0007\u001e\u0002\u0002\u0176",
    "\u017b\u0005z>\u0002\u0177\u0178\u0005z>\u0002\u0178\u0179\u0005v<\u0002",
    "\u0179\u017b\u0003\u0002\u0002\u0002\u017a\u0175\u0003\u0002\u0002\u0002",
    "\u017a\u0176\u0003\u0002\u0002\u0002\u017a\u0177\u0003\u0002\u0002\u0002",
    "\u017bo\u0003\u0002\u0002\u0002\u017c\u0181\u0005r:\u0002\u017d\u017e",
    "\u0005r:\u0002\u017e\u017f\u0005p9\u0002\u017f\u0181\u0003\u0002\u0002",
    "\u0002\u0180\u017c\u0003\u0002\u0002\u0002\u0180\u017d\u0003\u0002\u0002",
    "\u0002\u0181q\u0003\u0002\u0002\u0002\u0182\u0185\u0005x=\u0002\u0183",
    "\u0185\u0005t;\u0002\u0184\u0182\u0003\u0002\u0002\u0002\u0184\u0183",
    "\u0003\u0002\u0002\u0002\u0185s\u0003\u0002\u0002\u0002\u0186\u0189",
    "\u0005|?\u0002\u0187\u0189\u0007\u0019\u0002\u0002\u0188\u0186\u0003",
    "\u0002\u0002\u0002\u0188\u0187\u0003\u0002\u0002\u0002\u0189u\u0003",
    "\u0002\u0002\u0002\u018a\u018f\u0005x=\u0002\u018b\u018c\u0005x=\u0002",
    "\u018c\u018d\u0005v<\u0002\u018d\u018f\u0003\u0002\u0002\u0002\u018e",
    "\u018a\u0003\u0002\u0002\u0002\u018e\u018b\u0003\u0002\u0002\u0002\u018f",
    "w\u0003\u0002\u0002\u0002\u0190\u0193\u0007\u001e\u0002\u0002\u0191",
    "\u0193\u0005z>\u0002\u0192\u0190\u0003\u0002\u0002\u0002\u0192\u0191",
    "\u0003\u0002\u0002\u0002\u0193y\u0003\u0002\u0002\u0002\u0194\u0195",
    "\t\u0005\u0002\u0002\u0195{\u0003\u0002\u0002\u0002\u0196\u0197\t\u0006",
    "\u0002\u0002\u0197}\u0003\u0002\u0002\u0002 \u0081\u0089\u009d\u00a5",
    "\u00aa\u00b6\u00bb\u00c2\u00ce\u00da\u00e2\u00e9\u0103\u0113\u0124\u0128",
    "\u012f\u0136\u013e\u0155\u015e\u0162\u0166\u0173\u017a\u0180\u0184\u0188",
    "\u018e\u0192"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'activate_theme'", "'add'", "'alter'", "'as'", 
                     "'do'", "'end'", "'set_labels'", "'replace'", "'show'", 
                     "'hide'", "'set_title'", "'set_cover'", "'add_attr'", 
                     "'delete_attr'", "','", "'with'", "'under'", "'>'", 
                     "'$'", "'#'", "'/'", "'@'", "'-'", "'+'", "'^'", "'~'", 
                     "'.'", "'0'", "'1'", "'2'", "'3'", "'4'", "'5'", "'6'", 
                     "'7'", "'8'", "'9'", "'A'", "'B'", "'C'", "'D'", "'E'", 
                     "'F'", "'G'", "'H'", "'I'", "'J'", "'K'", "'L'", "'M'", 
                     "'N'", "'O'", "'P'", "'Q'", "'R'", "'S'", "'T'", "'U'", 
                     "'V'", "'W'", "'X'", "'Y'", "'Z'", "'a'", "'b'", "'c'", 
                     "'d'", "'e'", "'f'", "'g'", "'h'", "'i'", "'j'", "'k'", 
                     "'l'", "'m'", "'n'", "'o'", "'p'", "'q'", "'r'", "'s'", 
                     "'t'", "'u'", "'v'", "'w'", "'x'", "'y'", "'z'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      "LINE_COMMENT", "BLOCK_COMMENT", "WS", "ID" ];

var ruleNames =  [ "mappingRules", "mappingRule", "hostage", "addRule", 
                   "candidate", "alterRule", "exhibitName", "actions", "codeBlock", 
                   "linesCode", "lineCode", "setLabels", "labels", "label", 
                   "replace", "target", "source", "under", "scope", "scopeNode", 
                   "resourceOrObjectName", "resourceName", "objectName", 
                   "show", "hide", "setTitle", "title", "setCover", "cover", 
                   "addAttr", "deleteAttr", "key", "value", "description", 
                   "resource_id", "object_id", "exhibit_name", "resource_name", 
                   "object_name", "bucket_name", "user_name", "valid_semver", 
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
MappingParser.T__87 = 88;
MappingParser.T__88 = 89;
MappingParser.LINE_COMMENT = 90;
MappingParser.BLOCK_COMMENT = 91;
MappingParser.WS = 92;
MappingParser.ID = 93;

MappingParser.RULE_mappingRules = 0;
MappingParser.RULE_mappingRule = 1;
MappingParser.RULE_hostage = 2;
MappingParser.RULE_addRule = 3;
MappingParser.RULE_candidate = 4;
MappingParser.RULE_alterRule = 5;
MappingParser.RULE_exhibitName = 6;
MappingParser.RULE_actions = 7;
MappingParser.RULE_codeBlock = 8;
MappingParser.RULE_linesCode = 9;
MappingParser.RULE_lineCode = 10;
MappingParser.RULE_setLabels = 11;
MappingParser.RULE_labels = 12;
MappingParser.RULE_label = 13;
MappingParser.RULE_replace = 14;
MappingParser.RULE_target = 15;
MappingParser.RULE_source = 16;
MappingParser.RULE_under = 17;
MappingParser.RULE_scope = 18;
MappingParser.RULE_scopeNode = 19;
MappingParser.RULE_resourceOrObjectName = 20;
MappingParser.RULE_resourceName = 21;
MappingParser.RULE_objectName = 22;
MappingParser.RULE_show = 23;
MappingParser.RULE_hide = 24;
MappingParser.RULE_setTitle = 25;
MappingParser.RULE_title = 26;
MappingParser.RULE_setCover = 27;
MappingParser.RULE_cover = 28;
MappingParser.RULE_addAttr = 29;
MappingParser.RULE_deleteAttr = 30;
MappingParser.RULE_key = 31;
MappingParser.RULE_value = 32;
MappingParser.RULE_description = 33;
MappingParser.RULE_resource_id = 34;
MappingParser.RULE_object_id = 35;
MappingParser.RULE_exhibit_name = 36;
MappingParser.RULE_resource_name = 37;
MappingParser.RULE_object_name = 38;
MappingParser.RULE_bucket_name = 39;
MappingParser.RULE_user_name = 40;
MappingParser.RULE_valid_semver = 41;
MappingParser.RULE_prefix = 42;
MappingParser.RULE_version_core = 43;
MappingParser.RULE_major = 44;
MappingParser.RULE_minor = 45;
MappingParser.RULE_patch = 46;
MappingParser.RULE_preRelease = 47;
MappingParser.RULE_dotSeparated_preRelease_identifiers = 48;
MappingParser.RULE_build = 49;
MappingParser.RULE_dotSeparated_build_identifiers = 50;
MappingParser.RULE_preRelease_identifier = 51;
MappingParser.RULE_build_identifier = 52;
MappingParser.RULE_alphanumeric_identifier = 53;
MappingParser.RULE_numeric_identifier = 54;
MappingParser.RULE_identifier_characters = 55;
MappingParser.RULE_identifier_character = 56;
MappingParser.RULE_nonDigit = 57;
MappingParser.RULE_digits = 58;
MappingParser.RULE_digit = 59;
MappingParser.RULE_positive_digit = 60;
MappingParser.RULE_letter = 61;


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
        this.state = 127;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MappingParser.T__0) | (1 << MappingParser.T__1) | (1 << MappingParser.T__2) | (1 << MappingParser.T__3) | (1 << MappingParser.T__4) | (1 << MappingParser.T__5) | (1 << MappingParser.T__6) | (1 << MappingParser.T__7) | (1 << MappingParser.T__8) | (1 << MappingParser.T__9) | (1 << MappingParser.T__10) | (1 << MappingParser.T__11) | (1 << MappingParser.T__12) | (1 << MappingParser.T__13) | (1 << MappingParser.T__14) | (1 << MappingParser.T__15) | (1 << MappingParser.T__16) | (1 << MappingParser.T__17) | (1 << MappingParser.T__18) | (1 << MappingParser.T__19) | (1 << MappingParser.T__20) | (1 << MappingParser.T__21) | (1 << MappingParser.T__22) | (1 << MappingParser.T__23) | (1 << MappingParser.T__24) | (1 << MappingParser.T__25) | (1 << MappingParser.T__26) | (1 << MappingParser.T__27) | (1 << MappingParser.T__28) | (1 << MappingParser.T__29) | (1 << MappingParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (MappingParser.T__31 - 32)) | (1 << (MappingParser.T__32 - 32)) | (1 << (MappingParser.T__33 - 32)) | (1 << (MappingParser.T__34 - 32)) | (1 << (MappingParser.T__35 - 32)) | (1 << (MappingParser.T__36 - 32)) | (1 << (MappingParser.T__37 - 32)) | (1 << (MappingParser.T__38 - 32)) | (1 << (MappingParser.T__39 - 32)) | (1 << (MappingParser.T__40 - 32)) | (1 << (MappingParser.T__41 - 32)) | (1 << (MappingParser.T__42 - 32)) | (1 << (MappingParser.T__43 - 32)) | (1 << (MappingParser.T__44 - 32)) | (1 << (MappingParser.T__45 - 32)) | (1 << (MappingParser.T__46 - 32)) | (1 << (MappingParser.T__47 - 32)) | (1 << (MappingParser.T__48 - 32)) | (1 << (MappingParser.T__49 - 32)) | (1 << (MappingParser.T__50 - 32)) | (1 << (MappingParser.T__51 - 32)) | (1 << (MappingParser.T__52 - 32)) | (1 << (MappingParser.T__53 - 32)) | (1 << (MappingParser.T__54 - 32)) | (1 << (MappingParser.T__55 - 32)) | (1 << (MappingParser.T__56 - 32)) | (1 << (MappingParser.T__57 - 32)) | (1 << (MappingParser.T__58 - 32)) | (1 << (MappingParser.T__59 - 32)) | (1 << (MappingParser.T__60 - 32)) | (1 << (MappingParser.T__61 - 32)) | (1 << (MappingParser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (MappingParser.T__63 - 64)) | (1 << (MappingParser.T__64 - 64)) | (1 << (MappingParser.T__65 - 64)) | (1 << (MappingParser.T__66 - 64)) | (1 << (MappingParser.T__67 - 64)) | (1 << (MappingParser.T__68 - 64)) | (1 << (MappingParser.T__69 - 64)) | (1 << (MappingParser.T__70 - 64)) | (1 << (MappingParser.T__71 - 64)) | (1 << (MappingParser.T__72 - 64)) | (1 << (MappingParser.T__73 - 64)) | (1 << (MappingParser.T__74 - 64)) | (1 << (MappingParser.T__75 - 64)) | (1 << (MappingParser.T__76 - 64)) | (1 << (MappingParser.T__77 - 64)) | (1 << (MappingParser.T__78 - 64)) | (1 << (MappingParser.T__79 - 64)) | (1 << (MappingParser.T__80 - 64)) | (1 << (MappingParser.T__81 - 64)) | (1 << (MappingParser.T__82 - 64)) | (1 << (MappingParser.T__83 - 64)) | (1 << (MappingParser.T__84 - 64)) | (1 << (MappingParser.T__85 - 64)) | (1 << (MappingParser.T__86 - 64)) | (1 << (MappingParser.T__87 - 64)) | (1 << (MappingParser.T__88 - 64)) | (1 << (MappingParser.LINE_COMMENT - 64)) | (1 << (MappingParser.BLOCK_COMMENT - 64)) | (1 << (MappingParser.WS - 64)) | (1 << (MappingParser.ID - 64)))) !== 0)) {
            this.state = 124;
            this.mappingRule();
            this.state = 129;
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

MappingRuleContext.prototype.hostage = function() {
    return this.getTypedRuleContext(HostageContext,0);
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
        this.state = 135;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MappingParser.T__1:
            this.enterOuterAlt(localctx, 1);
            this.state = 130;
            this.addRule();
            break;
        case MappingParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 131;
            this.alterRule();
            break;
        case MappingParser.T__0:
            this.enterOuterAlt(localctx, 3);
            this.state = 132;
            this.match(MappingParser.T__0);
            this.state = 133;
            this.hostage();
            break;
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
        case MappingParser.T__84:
        case MappingParser.T__85:
        case MappingParser.T__86:
        case MappingParser.T__87:
        case MappingParser.T__88:
        case MappingParser.LINE_COMMENT:
        case MappingParser.BLOCK_COMMENT:
        case MappingParser.WS:
        case MappingParser.ID:
            this.enterOuterAlt(localctx, 4);
            this.state = 134;
            _la = this._input.LA(1);
            if(_la<=0 || (((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MappingParser.T__0) | (1 << MappingParser.T__1) | (1 << MappingParser.T__2))) !== 0)) {
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

HostageContext.prototype.exhibit_name = function() {
    return this.getTypedRuleContext(Exhibit_nameContext,0);
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
    this.enterRule(localctx, 4, MappingParser.RULE_hostage);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.exhibit_name();
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

AddRuleContext.prototype.exhibitName = function() {
    return this.getTypedRuleContext(ExhibitNameContext,0);
};

AddRuleContext.prototype.actions = function() {
    return this.getTypedRuleContext(ActionsContext,0);
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
    this.enterRule(localctx, 6, MappingParser.RULE_addRule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        this.match(MappingParser.T__1);
        this.state = 140;
        this.candidate();
        this.state = 141;
        this.match(MappingParser.T__3);
        this.state = 142;
        this.exhibitName();
        this.state = 143;
        this.actions();
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

CandidateContext.prototype.resourceOrObjectName = function() {
    return this.getTypedRuleContext(ResourceOrObjectNameContext,0);
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
    this.enterRule(localctx, 8, MappingParser.RULE_candidate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        this.resourceOrObjectName();
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

AlterRuleContext.prototype.exhibitName = function() {
    return this.getTypedRuleContext(ExhibitNameContext,0);
};

AlterRuleContext.prototype.actions = function() {
    return this.getTypedRuleContext(ActionsContext,0);
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
    this.enterRule(localctx, 10, MappingParser.RULE_alterRule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.match(MappingParser.T__2);
        this.state = 148;
        this.exhibitName();
        this.state = 149;
        this.actions();
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


function ExhibitNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_exhibitName;
    return this;
}

ExhibitNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExhibitNameContext.prototype.constructor = ExhibitNameContext;

ExhibitNameContext.prototype.exhibit_name = function() {
    return this.getTypedRuleContext(Exhibit_nameContext,0);
};

ExhibitNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterExhibitName(this);
	}
};

ExhibitNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitExhibitName(this);
	}
};

ExhibitNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitExhibitName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.ExhibitNameContext = ExhibitNameContext;

MappingParser.prototype.exhibitName = function() {

    var localctx = new ExhibitNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, MappingParser.RULE_exhibitName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.exhibit_name();
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


function ActionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_actions;
    return this;
}

ActionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActionsContext.prototype.constructor = ActionsContext;

ActionsContext.prototype.codeBlock = function() {
    return this.getTypedRuleContext(CodeBlockContext,0);
};

ActionsContext.prototype.lineCode = function() {
    return this.getTypedRuleContext(LineCodeContext,0);
};

ActionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterActions(this);
	}
};

ActionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitActions(this);
	}
};

ActionsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitActions(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.ActionsContext = ActionsContext;

MappingParser.prototype.actions = function() {

    var localctx = new ActionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, MappingParser.RULE_actions);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MappingParser.T__4:
            this.state = 153;
            this.codeBlock();
            break;
        case MappingParser.T__6:
        case MappingParser.T__7:
        case MappingParser.T__8:
        case MappingParser.T__9:
        case MappingParser.T__10:
        case MappingParser.T__11:
        case MappingParser.T__12:
        case MappingParser.T__13:
            this.state = 154;
            this.lineCode();
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
    this.enterRule(localctx, 16, MappingParser.RULE_codeBlock);
    try {
        this.state = 163;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 157;
            this.match(MappingParser.T__4);
            this.state = 158;
            this.match(MappingParser.T__5);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 159;
            this.match(MappingParser.T__4);
            this.state = 160;
            this.linesCode();
            this.state = 161;
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
    this.enterRule(localctx, 18, MappingParser.RULE_linesCode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MappingParser.T__6) | (1 << MappingParser.T__7) | (1 << MappingParser.T__8) | (1 << MappingParser.T__9) | (1 << MappingParser.T__10) | (1 << MappingParser.T__11) | (1 << MappingParser.T__12) | (1 << MappingParser.T__13))) !== 0)) {
            this.state = 165;
            this.lineCode();
            this.state = 170;
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

LineCodeContext.prototype.setLabels = function() {
    return this.getTypedRuleContext(SetLabelsContext,0);
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

LineCodeContext.prototype.setTitle = function() {
    return this.getTypedRuleContext(SetTitleContext,0);
};

LineCodeContext.prototype.setCover = function() {
    return this.getTypedRuleContext(SetCoverContext,0);
};

LineCodeContext.prototype.addAttr = function() {
    return this.getTypedRuleContext(AddAttrContext,0);
};

LineCodeContext.prototype.deleteAttr = function() {
    return this.getTypedRuleContext(DeleteAttrContext,0);
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
    this.enterRule(localctx, 20, MappingParser.RULE_lineCode);
    var _la = 0; // Token type
    try {
        this.state = 180;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 171;
            this.setLabels();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 172;
            this.replace();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 173;
            this.show();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 174;
            this.hide();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 175;
            this.setTitle();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 176;
            this.setCover();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 177;
            this.addAttr();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 178;
            this.deleteAttr();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 179;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MappingParser.T__6) | (1 << MappingParser.T__7) | (1 << MappingParser.T__8) | (1 << MappingParser.T__9) | (1 << MappingParser.T__10) | (1 << MappingParser.T__11) | (1 << MappingParser.T__12) | (1 << MappingParser.T__13))) !== 0))) {
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


function SetLabelsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_setLabels;
    return this;
}

SetLabelsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetLabelsContext.prototype.constructor = SetLabelsContext;

SetLabelsContext.prototype.labels = function() {
    return this.getTypedRuleContext(LabelsContext,0);
};

SetLabelsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterSetLabels(this);
	}
};

SetLabelsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitSetLabels(this);
	}
};

SetLabelsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitSetLabels(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.SetLabelsContext = SetLabelsContext;

MappingParser.prototype.setLabels = function() {

    var localctx = new SetLabelsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, MappingParser.RULE_setLabels);
    try {
        this.state = 185;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 182;
            this.match(MappingParser.T__6);
            this.state = 183;
            this.labels();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 184;
            this.match(MappingParser.T__6);
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


function LabelsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_labels;
    return this;
}

LabelsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelsContext.prototype.constructor = LabelsContext;

LabelsContext.prototype.label = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LabelContext);
    } else {
        return this.getTypedRuleContext(LabelContext,i);
    }
};

LabelsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterLabels(this);
	}
};

LabelsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitLabels(this);
	}
};

LabelsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitLabels(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.LabelsContext = LabelsContext;

MappingParser.prototype.labels = function() {

    var localctx = new LabelsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, MappingParser.RULE_labels);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 187;
                this.label();
                this.state = 188;
                this.match(MappingParser.T__14); 
            }
            this.state = 194;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

        this.state = 195;
        this.label();
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


function LabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_label;
    return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;

LabelContext.prototype.ID = function() {
    return this.getToken(MappingParser.ID, 0);
};

LabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterLabel(this);
	}
};

LabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitLabel(this);
	}
};

LabelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitLabel(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.LabelContext = LabelContext;

MappingParser.prototype.label = function() {

    var localctx = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, MappingParser.RULE_label);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
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
    this.enterRule(localctx, 28, MappingParser.RULE_replace);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.match(MappingParser.T__7);
        this.state = 200;
        this.target();
        this.state = 201;
        this.match(MappingParser.T__15);
        this.state = 202;
        this.source();
        this.state = 204;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        if(la_===1) {
            this.state = 203;
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

TargetContext.prototype.resourceOrObjectName = function() {
    return this.getTypedRuleContext(ResourceOrObjectNameContext,0);
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
    this.enterRule(localctx, 30, MappingParser.RULE_target);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        this.resourceOrObjectName();
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

SourceContext.prototype.resourceOrObjectName = function() {
    return this.getTypedRuleContext(ResourceOrObjectNameContext,0);
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
    this.enterRule(localctx, 32, MappingParser.RULE_source);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.resourceOrObjectName();
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
    this.enterRule(localctx, 34, MappingParser.RULE_under);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.match(MappingParser.T__16);
        this.state = 211;
        this.scope();
        this.state = 216;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 212;
                this.match(MappingParser.T__14);
                this.state = 213;
                this.scope(); 
            }
            this.state = 218;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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
    this.enterRule(localctx, 36, MappingParser.RULE_scope);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 219;
        this.scopeNode();
        this.state = 224;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 220;
                this.match(MappingParser.T__17);
                this.state = 221;
                this.scopeNode(); 
            }
            this.state = 226;
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

ScopeNodeContext.prototype.resourceOrObjectName = function() {
    return this.getTypedRuleContext(ResourceOrObjectNameContext,0);
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
    this.enterRule(localctx, 38, MappingParser.RULE_scopeNode);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
        this.resourceOrObjectName();
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


function ResourceOrObjectNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_resourceOrObjectName;
    return this;
}

ResourceOrObjectNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ResourceOrObjectNameContext.prototype.constructor = ResourceOrObjectNameContext;

ResourceOrObjectNameContext.prototype.resourceName = function() {
    return this.getTypedRuleContext(ResourceNameContext,0);
};

ResourceOrObjectNameContext.prototype.objectName = function() {
    return this.getTypedRuleContext(ObjectNameContext,0);
};

ResourceOrObjectNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterResourceOrObjectName(this);
	}
};

ResourceOrObjectNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitResourceOrObjectName(this);
	}
};

ResourceOrObjectNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitResourceOrObjectName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.ResourceOrObjectNameContext = ResourceOrObjectNameContext;

MappingParser.prototype.resourceOrObjectName = function() {

    var localctx = new ResourceOrObjectNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, MappingParser.RULE_resourceOrObjectName);
    try {
        this.state = 231;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MappingParser.T__18:
            this.enterOuterAlt(localctx, 1);
            this.state = 229;
            this.resourceName();
            break;
        case MappingParser.T__19:
            this.enterOuterAlt(localctx, 2);
            this.state = 230;
            this.objectName();
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


function ResourceNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_resourceName;
    return this;
}

ResourceNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ResourceNameContext.prototype.constructor = ResourceNameContext;

ResourceNameContext.prototype.resource_id = function() {
    return this.getTypedRuleContext(Resource_idContext,0);
};

ResourceNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterResourceName(this);
	}
};

ResourceNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitResourceName(this);
	}
};

ResourceNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitResourceName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.ResourceNameContext = ResourceNameContext;

MappingParser.prototype.resourceName = function() {

    var localctx = new ResourceNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, MappingParser.RULE_resourceName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 233;
        this.match(MappingParser.T__18);
        this.state = 234;
        this.resource_id();
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


function ObjectNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_objectName;
    return this;
}

ObjectNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectNameContext.prototype.constructor = ObjectNameContext;

ObjectNameContext.prototype.object_id = function() {
    return this.getTypedRuleContext(Object_idContext,0);
};

ObjectNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterObjectName(this);
	}
};

ObjectNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitObjectName(this);
	}
};

ObjectNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitObjectName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.ObjectNameContext = ObjectNameContext;

MappingParser.prototype.objectName = function() {

    var localctx = new ObjectNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, MappingParser.RULE_objectName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        this.match(MappingParser.T__19);
        this.state = 237;
        this.object_id();
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
    this.enterRule(localctx, 46, MappingParser.RULE_show);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 239;
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
    this.enterRule(localctx, 48, MappingParser.RULE_hide);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 241;
        this.match(MappingParser.T__9);
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


function SetTitleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_setTitle;
    return this;
}

SetTitleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetTitleContext.prototype.constructor = SetTitleContext;

SetTitleContext.prototype.title = function() {
    return this.getTypedRuleContext(TitleContext,0);
};

SetTitleContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterSetTitle(this);
	}
};

SetTitleContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitSetTitle(this);
	}
};

SetTitleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitSetTitle(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.SetTitleContext = SetTitleContext;

MappingParser.prototype.setTitle = function() {

    var localctx = new SetTitleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, MappingParser.RULE_setTitle);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this.match(MappingParser.T__10);
        this.state = 244;
        this.title();
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


function TitleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_title;
    return this;
}

TitleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TitleContext.prototype.constructor = TitleContext;

TitleContext.prototype.ID = function() {
    return this.getToken(MappingParser.ID, 0);
};

TitleContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterTitle(this);
	}
};

TitleContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitTitle(this);
	}
};

TitleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitTitle(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.TitleContext = TitleContext;

MappingParser.prototype.title = function() {

    var localctx = new TitleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, MappingParser.RULE_title);
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


function SetCoverContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_setCover;
    return this;
}

SetCoverContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetCoverContext.prototype.constructor = SetCoverContext;

SetCoverContext.prototype.cover = function() {
    return this.getTypedRuleContext(CoverContext,0);
};

SetCoverContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterSetCover(this);
	}
};

SetCoverContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitSetCover(this);
	}
};

SetCoverContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitSetCover(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.SetCoverContext = SetCoverContext;

MappingParser.prototype.setCover = function() {

    var localctx = new SetCoverContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, MappingParser.RULE_setCover);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 248;
        this.match(MappingParser.T__11);
        this.state = 249;
        this.cover();
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


function CoverContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_cover;
    return this;
}

CoverContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CoverContext.prototype.constructor = CoverContext;

CoverContext.prototype.ID = function() {
    return this.getToken(MappingParser.ID, 0);
};

CoverContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterCover(this);
	}
};

CoverContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitCover(this);
	}
};

CoverContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitCover(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.CoverContext = CoverContext;

MappingParser.prototype.cover = function() {

    var localctx = new CoverContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, MappingParser.RULE_cover);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 251;
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


function AddAttrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_addAttr;
    return this;
}

AddAttrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddAttrContext.prototype.constructor = AddAttrContext;

AddAttrContext.prototype.key = function() {
    return this.getTypedRuleContext(KeyContext,0);
};

AddAttrContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

AddAttrContext.prototype.description = function() {
    return this.getTypedRuleContext(DescriptionContext,0);
};

AddAttrContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterAddAttr(this);
	}
};

AddAttrContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitAddAttr(this);
	}
};

AddAttrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitAddAttr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.AddAttrContext = AddAttrContext;

MappingParser.prototype.addAttr = function() {

    var localctx = new AddAttrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, MappingParser.RULE_addAttr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.match(MappingParser.T__12);
        this.state = 254;
        this.key();
        this.state = 255;
        this.value();
        this.state = 257;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        if(la_===1) {
            this.state = 256;
            this.description();

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


function DeleteAttrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_deleteAttr;
    return this;
}

DeleteAttrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeleteAttrContext.prototype.constructor = DeleteAttrContext;

DeleteAttrContext.prototype.key = function() {
    return this.getTypedRuleContext(KeyContext,0);
};

DeleteAttrContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterDeleteAttr(this);
	}
};

DeleteAttrContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitDeleteAttr(this);
	}
};

DeleteAttrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitDeleteAttr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.DeleteAttrContext = DeleteAttrContext;

MappingParser.prototype.deleteAttr = function() {

    var localctx = new DeleteAttrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, MappingParser.RULE_deleteAttr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 259;
        this.match(MappingParser.T__13);
        this.state = 260;
        this.key();
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


function KeyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_key;
    return this;
}

KeyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeyContext.prototype.constructor = KeyContext;

KeyContext.prototype.ID = function() {
    return this.getToken(MappingParser.ID, 0);
};

KeyContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterKey(this);
	}
};

KeyContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitKey(this);
	}
};

KeyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitKey(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.KeyContext = KeyContext;

MappingParser.prototype.key = function() {

    var localctx = new KeyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, MappingParser.RULE_key);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 262;
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


function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.ID = function() {
    return this.getToken(MappingParser.ID, 0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.ValueContext = ValueContext;

MappingParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, MappingParser.RULE_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 264;
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


function DescriptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_description;
    return this;
}

DescriptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DescriptionContext.prototype.constructor = DescriptionContext;

DescriptionContext.prototype.ID = function() {
    return this.getToken(MappingParser.ID, 0);
};

DescriptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterDescription(this);
	}
};

DescriptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitDescription(this);
	}
};

DescriptionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitDescription(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.DescriptionContext = DescriptionContext;

MappingParser.prototype.description = function() {

    var localctx = new DescriptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, MappingParser.RULE_description);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 266;
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


function Resource_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_resource_id;
    return this;
}

Resource_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Resource_idContext.prototype.constructor = Resource_idContext;

Resource_idContext.prototype.user_name = function() {
    return this.getTypedRuleContext(User_nameContext,0);
};

Resource_idContext.prototype.resource_name = function() {
    return this.getTypedRuleContext(Resource_nameContext,0);
};

Resource_idContext.prototype.valid_semver = function() {
    return this.getTypedRuleContext(Valid_semverContext,0);
};

Resource_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterResource_id(this);
	}
};

Resource_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitResource_id(this);
	}
};

Resource_idContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitResource_id(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Resource_idContext = Resource_idContext;

MappingParser.prototype.resource_id = function() {

    var localctx = new Resource_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, MappingParser.RULE_resource_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        this.user_name();
        this.state = 269;
        this.match(MappingParser.T__20);
        this.state = 270;
        this.resource_name();
        this.state = 273;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        if(la_===1+1) {
            this.state = 271;
            this.match(MappingParser.T__21);
            this.state = 272;
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


function Object_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_object_id;
    return this;
}

Object_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Object_idContext.prototype.constructor = Object_idContext;

Object_idContext.prototype.bucket_name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Bucket_nameContext);
    } else {
        return this.getTypedRuleContext(Bucket_nameContext,i);
    }
};

Object_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterObject_id(this);
	}
};

Object_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitObject_id(this);
	}
};

Object_idContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitObject_id(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Object_idContext = Object_idContext;

MappingParser.prototype.object_id = function() {

    var localctx = new Object_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, MappingParser.RULE_object_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 275;
        this.bucket_name();
        this.state = 276;
        this.match(MappingParser.T__20);
        this.state = 277;
        this.bucket_name();
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


function Exhibit_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_exhibit_name;
    return this;
}

Exhibit_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Exhibit_nameContext.prototype.constructor = Exhibit_nameContext;

Exhibit_nameContext.prototype.ID = function() {
    return this.getToken(MappingParser.ID, 0);
};

Exhibit_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterExhibit_name(this);
	}
};

Exhibit_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitExhibit_name(this);
	}
};

Exhibit_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitExhibit_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Exhibit_nameContext = Exhibit_nameContext;

MappingParser.prototype.exhibit_name = function() {

    var localctx = new Exhibit_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, MappingParser.RULE_exhibit_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 279;
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


function Resource_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_resource_name;
    return this;
}

Resource_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Resource_nameContext.prototype.constructor = Resource_nameContext;

Resource_nameContext.prototype.ID = function() {
    return this.getToken(MappingParser.ID, 0);
};

Resource_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterResource_name(this);
	}
};

Resource_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitResource_name(this);
	}
};

Resource_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitResource_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Resource_nameContext = Resource_nameContext;

MappingParser.prototype.resource_name = function() {

    var localctx = new Resource_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, MappingParser.RULE_resource_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 281;
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


function Object_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_object_name;
    return this;
}

Object_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Object_nameContext.prototype.constructor = Object_nameContext;

Object_nameContext.prototype.ID = function() {
    return this.getToken(MappingParser.ID, 0);
};

Object_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterObject_name(this);
	}
};

Object_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitObject_name(this);
	}
};

Object_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitObject_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Object_nameContext = Object_nameContext;

MappingParser.prototype.object_name = function() {

    var localctx = new Object_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, MappingParser.RULE_object_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
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
    this.enterRule(localctx, 78, MappingParser.RULE_bucket_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 285;
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
    this.enterRule(localctx, 80, MappingParser.RULE_user_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 287;
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
    this.enterRule(localctx, 82, MappingParser.RULE_valid_semver);
    var _la = 0; // Token type
    try {
        this.state = 316;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 290;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__24 || _la===MappingParser.T__25) {
                this.state = 289;
                this.prefix();
            }

            this.state = 292;
            this.version_core();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 294;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__24 || _la===MappingParser.T__25) {
                this.state = 293;
                this.prefix();
            }

            this.state = 296;
            this.version_core();
            this.state = 297;
            this.match(MappingParser.T__22);
            this.state = 298;
            this.preRelease();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 301;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__24 || _la===MappingParser.T__25) {
                this.state = 300;
                this.prefix();
            }

            this.state = 303;
            this.version_core();
            this.state = 304;
            this.match(MappingParser.T__23);
            this.state = 305;
            this.build();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 308;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__24 || _la===MappingParser.T__25) {
                this.state = 307;
                this.prefix();
            }

            this.state = 310;
            this.version_core();
            this.state = 311;
            this.match(MappingParser.T__22);
            this.state = 312;
            this.preRelease();
            this.state = 313;
            this.match(MappingParser.T__23);
            this.state = 314;
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
    this.enterRule(localctx, 84, MappingParser.RULE_prefix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 318;
        _la = this._input.LA(1);
        if(!(_la===MappingParser.T__24 || _la===MappingParser.T__25)) {
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
    this.enterRule(localctx, 86, MappingParser.RULE_version_core);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 320;
        this.major();
        this.state = 321;
        this.match(MappingParser.T__26);
        this.state = 322;
        this.minor();
        this.state = 323;
        this.match(MappingParser.T__26);
        this.state = 324;
        this.patch();
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
    this.enterRule(localctx, 88, MappingParser.RULE_major);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 326;
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
    this.enterRule(localctx, 90, MappingParser.RULE_minor);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 328;
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
    this.enterRule(localctx, 92, MappingParser.RULE_patch);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
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
    this.enterRule(localctx, 94, MappingParser.RULE_preRelease);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 332;
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
    this.enterRule(localctx, 96, MappingParser.RULE_dotSeparated_preRelease_identifiers);
    try {
        this.state = 339;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 334;
            this.preRelease_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 335;
            this.preRelease_identifier();
            this.state = 336;
            this.match(MappingParser.T__26);
            this.state = 337;
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
    this.enterRule(localctx, 98, MappingParser.RULE_build);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 341;
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
    this.enterRule(localctx, 100, MappingParser.RULE_dotSeparated_build_identifiers);
    try {
        this.state = 348;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 343;
            this.build_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 344;
            this.build_identifier();
            this.state = 345;
            this.match(MappingParser.T__26);
            this.state = 346;
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
    this.enterRule(localctx, 102, MappingParser.RULE_preRelease_identifier);
    try {
        this.state = 352;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 350;
            this.alphanumeric_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 351;
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
    this.enterRule(localctx, 104, MappingParser.RULE_build_identifier);
    try {
        this.state = 356;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 354;
            this.alphanumeric_identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 355;
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
    this.enterRule(localctx, 106, MappingParser.RULE_alphanumeric_identifier);
    try {
        this.state = 369;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 358;
            this.nonDigit();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 359;
            this.nonDigit();
            this.state = 360;
            this.identifier_characters();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 362;
            this.identifier_characters();
            this.state = 363;
            this.nonDigit();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 365;
            this.identifier_characters();
            this.state = 366;
            this.nonDigit();
            this.state = 367;
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
    this.enterRule(localctx, 108, MappingParser.RULE_numeric_identifier);
    try {
        this.state = 376;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 371;
            this.match(MappingParser.T__27);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 372;
            this.positive_digit();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 373;
            this.positive_digit();
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
    this.enterRule(localctx, 110, MappingParser.RULE_identifier_characters);
    try {
        this.state = 382;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 378;
            this.identifier_character();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 379;
            this.identifier_character();
            this.state = 380;
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
    this.enterRule(localctx, 112, MappingParser.RULE_identifier_character);
    try {
        this.state = 386;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
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
            this.enterOuterAlt(localctx, 1);
            this.state = 384;
            this.digit();
            break;
        case MappingParser.T__22:
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
        case MappingParser.T__87:
        case MappingParser.T__88:
            this.enterOuterAlt(localctx, 2);
            this.state = 385;
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
    this.enterRule(localctx, 114, MappingParser.RULE_nonDigit);
    try {
        this.state = 390;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
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
        case MappingParser.T__87:
        case MappingParser.T__88:
            this.enterOuterAlt(localctx, 1);
            this.state = 388;
            this.letter();
            break;
        case MappingParser.T__22:
            this.enterOuterAlt(localctx, 2);
            this.state = 389;
            this.match(MappingParser.T__22);
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
    this.enterRule(localctx, 116, MappingParser.RULE_digits);
    try {
        this.state = 396;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 392;
            this.digit();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 393;
            this.digit();
            this.state = 394;
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
    this.enterRule(localctx, 118, MappingParser.RULE_digit);
    try {
        this.state = 400;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MappingParser.T__27:
            this.enterOuterAlt(localctx, 1);
            this.state = 398;
            this.match(MappingParser.T__27);
            break;
        case MappingParser.T__28:
        case MappingParser.T__29:
        case MappingParser.T__30:
        case MappingParser.T__31:
        case MappingParser.T__32:
        case MappingParser.T__33:
        case MappingParser.T__34:
        case MappingParser.T__35:
        case MappingParser.T__36:
            this.enterOuterAlt(localctx, 2);
            this.state = 399;
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
    this.enterRule(localctx, 120, MappingParser.RULE_positive_digit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 402;
        _la = this._input.LA(1);
        if(!(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (MappingParser.T__28 - 29)) | (1 << (MappingParser.T__29 - 29)) | (1 << (MappingParser.T__30 - 29)) | (1 << (MappingParser.T__31 - 29)) | (1 << (MappingParser.T__32 - 29)) | (1 << (MappingParser.T__33 - 29)) | (1 << (MappingParser.T__34 - 29)) | (1 << (MappingParser.T__35 - 29)) | (1 << (MappingParser.T__36 - 29)))) !== 0))) {
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
    this.enterRule(localctx, 122, MappingParser.RULE_letter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 404;
        _la = this._input.LA(1);
        if(!(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (MappingParser.T__37 - 38)) | (1 << (MappingParser.T__38 - 38)) | (1 << (MappingParser.T__39 - 38)) | (1 << (MappingParser.T__40 - 38)) | (1 << (MappingParser.T__41 - 38)) | (1 << (MappingParser.T__42 - 38)) | (1 << (MappingParser.T__43 - 38)) | (1 << (MappingParser.T__44 - 38)) | (1 << (MappingParser.T__45 - 38)) | (1 << (MappingParser.T__46 - 38)) | (1 << (MappingParser.T__47 - 38)) | (1 << (MappingParser.T__48 - 38)) | (1 << (MappingParser.T__49 - 38)) | (1 << (MappingParser.T__50 - 38)) | (1 << (MappingParser.T__51 - 38)) | (1 << (MappingParser.T__52 - 38)) | (1 << (MappingParser.T__53 - 38)) | (1 << (MappingParser.T__54 - 38)) | (1 << (MappingParser.T__55 - 38)) | (1 << (MappingParser.T__56 - 38)) | (1 << (MappingParser.T__57 - 38)) | (1 << (MappingParser.T__58 - 38)) | (1 << (MappingParser.T__59 - 38)) | (1 << (MappingParser.T__60 - 38)) | (1 << (MappingParser.T__61 - 38)) | (1 << (MappingParser.T__62 - 38)) | (1 << (MappingParser.T__63 - 38)) | (1 << (MappingParser.T__64 - 38)) | (1 << (MappingParser.T__65 - 38)) | (1 << (MappingParser.T__66 - 38)) | (1 << (MappingParser.T__67 - 38)) | (1 << (MappingParser.T__68 - 38)))) !== 0) || ((((_la - 70)) & ~0x1f) == 0 && ((1 << (_la - 70)) & ((1 << (MappingParser.T__69 - 70)) | (1 << (MappingParser.T__70 - 70)) | (1 << (MappingParser.T__71 - 70)) | (1 << (MappingParser.T__72 - 70)) | (1 << (MappingParser.T__73 - 70)) | (1 << (MappingParser.T__74 - 70)) | (1 << (MappingParser.T__75 - 70)) | (1 << (MappingParser.T__76 - 70)) | (1 << (MappingParser.T__77 - 70)) | (1 << (MappingParser.T__78 - 70)) | (1 << (MappingParser.T__79 - 70)) | (1 << (MappingParser.T__80 - 70)) | (1 << (MappingParser.T__81 - 70)) | (1 << (MappingParser.T__82 - 70)) | (1 << (MappingParser.T__83 - 70)) | (1 << (MappingParser.T__84 - 70)) | (1 << (MappingParser.T__85 - 70)) | (1 << (MappingParser.T__86 - 70)) | (1 << (MappingParser.T__87 - 70)) | (1 << (MappingParser.T__88 - 70)))) !== 0))) {
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
