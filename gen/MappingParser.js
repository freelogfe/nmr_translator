// Generated from Mapping.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MappingListener = require('./MappingListener').MappingListener;
var MappingVisitor = require('./MappingVisitor').MappingVisitor;

var grammarFileName = "Mapping.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003X\u017e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0003\u0002\u0006\u0002\\\n\u0002\r\u0002\u000e\u0002",
    "]\u0003\u0003\u0003\u0003\u0005\u0003b\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004i\n\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006p\n\u0006",
    "\u0003\u0007\u0003\u0007\u0005\u0007t\n\u0007\u0003\u0007\u0005\u0007",
    "w\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007{\n\u0007\u0003\u0007\u0005",
    "\u0007~\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0082\n\u0007\u0003",
    "\u0007\u0005\u0007\u0085\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007",
    "\u0089\n\u0007\u0003\u0007\u0005\u0007\u008c\n\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007\u0090\n\u0007\u0003\u0007\u0005\u0007\u0093\n\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007\u0097\n\u0007\u0003\u0007\u0005",
    "\u0007\u009a\n\u0007\u0005\u0007\u009c\n\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0007\b\u00a4\n\b\f\b\u000e\b\u00a7\u000b",
    "\b\u0003\b\u0005\b\u00aa\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u00b6\n\n\f\n\u000e",
    "\n\u00b9\u000b\n\u0003\n\u0005\n\u00bc\n\n\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00c4\n\u000b\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0007\u000e\u00cf\n\u000e\f\u000e\u000e\u000e\u00d2",
    "\u000b\u000e\u0005\u000e\u00d4\n\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00db\n\u000f\f\u000f\u000e",
    "\u000f\u00de\u000b\u000f\u0003\u0010\u0003\u0010\u0005\u0010\u00e2\n",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00ec\n\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0007\u0014",
    "\u00f4\n\u0014\f\u0014\u000e\u0014\u00f7\u000b\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0019\u0005\u0019\u0102\n\u0019\u0003\u0019\u0003\u0019",
    "\u0005\u0019\u0106\n\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0005\u0019\u010d\n\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u0114\n\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005",
    "\u0019\u011c\n\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u012c\n",
    "\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003",
    "\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0003 \u0005",
    " \u013b\n \u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005",
    "\"\u0144\n\"\u0003#\u0003#\u0005#\u0148\n#\u0003$\u0003$\u0005$\u014c",
    "\n$\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003",
    "%\u0003%\u0005%\u0159\n%\u0003&\u0003&\u0003&\u0003&\u0003&\u0005&\u0160",
    "\n&\u0003\'\u0003\'\u0003\'\u0003\'\u0005\'\u0166\n\'\u0003(\u0003(",
    "\u0005(\u016a\n(\u0003)\u0003)\u0005)\u016e\n)\u0003*\u0003*\u0003*",
    "\u0003*\u0005*\u0174\n*\u0003+\u0003+\u0005+\u0178\n+\u0003,\u0003,",
    "\u0003-\u0003-\u0003-\u0003\u00eb\u0002.\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@B",
    "DFHJLNPRTVX\u0002\u0006\u0004\u0002\u0013\u0013UU\u0003\u0002\u0015",
    "\u0016\u0003\u0002\u0018 \u0003\u0002!T\u0002\u0187\u0002[\u0003\u0002",
    "\u0002\u0002\u0004a\u0003\u0002\u0002\u0002\u0006c\u0003\u0002\u0002",
    "\u0002\bj\u0003\u0002\u0002\u0002\nl\u0003\u0002\u0002\u0002\f\u009b",
    "\u0003\u0002\u0002\u0002\u000e\u009d\u0003\u0002\u0002\u0002\u0010\u00ad",
    "\u0003\u0002\u0002\u0002\u0012\u00af\u0003\u0002\u0002\u0002\u0014\u00bf",
    "\u0003\u0002\u0002\u0002\u0016\u00c5\u0003\u0002\u0002\u0002\u0018\u00c7",
    "\u0003\u0002\u0002\u0002\u001a\u00c9\u0003\u0002\u0002\u0002\u001c\u00d7",
    "\u0003\u0002\u0002\u0002\u001e\u00e1\u0003\u0002\u0002\u0002 \u00e3",
    "\u0003\u0002\u0002\u0002\"\u00e5\u0003\u0002\u0002\u0002$\u00ed\u0003",
    "\u0002\u0002\u0002&\u00f5\u0003\u0002\u0002\u0002(\u00f8\u0003\u0002",
    "\u0002\u0002*\u00fa\u0003\u0002\u0002\u0002,\u00fc\u0003\u0002\u0002",
    "\u0002.\u00fe\u0003\u0002\u0002\u00020\u011b\u0003\u0002\u0002\u0002",
    "2\u011d\u0003\u0002\u0002\u00024\u012b\u0003\u0002\u0002\u00026\u012d",
    "\u0003\u0002\u0002\u00028\u012f\u0003\u0002\u0002\u0002:\u0131\u0003",
    "\u0002\u0002\u0002<\u0133\u0003\u0002\u0002\u0002>\u013a\u0003\u0002",
    "\u0002\u0002@\u013c\u0003\u0002\u0002\u0002B\u0143\u0003\u0002\u0002",
    "\u0002D\u0147\u0003\u0002\u0002\u0002F\u014b\u0003\u0002\u0002\u0002",
    "H\u0158\u0003\u0002\u0002\u0002J\u015f\u0003\u0002\u0002\u0002L\u0165",
    "\u0003\u0002\u0002\u0002N\u0169\u0003\u0002\u0002\u0002P\u016d\u0003",
    "\u0002\u0002\u0002R\u0173\u0003\u0002\u0002\u0002T\u0177\u0003\u0002",
    "\u0002\u0002V\u0179\u0003\u0002\u0002\u0002X\u017b\u0003\u0002\u0002",
    "\u0002Z\\\u0005\u0004\u0003\u0002[Z\u0003\u0002\u0002\u0002\\]\u0003",
    "\u0002\u0002\u0002][\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002",
    "^\u0003\u0003\u0002\u0002\u0002_b\u0005\u0006\u0004\u0002`b\u0005\n",
    "\u0006\u0002a_\u0003\u0002\u0002\u0002a`\u0003\u0002\u0002\u0002b\u0005",
    "\u0003\u0002\u0002\u0002cd\u0007\u0003\u0002\u0002de\u0005&\u0014\u0002",
    "ef\u0007\u0004\u0002\u0002fh\u0005\b\u0005\u0002gi\u0005\f\u0007\u0002",
    "hg\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002i\u0007\u0003\u0002",
    "\u0002\u0002jk\u0005\u001e\u0010\u0002k\t\u0003\u0002\u0002\u0002lm",
    "\u0007\u0005\u0002\u0002mo\u0005&\u0014\u0002np\u0005\f\u0007\u0002",
    "on\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002p\u000b\u0003\u0002",
    "\u0002\u0002qs\u0005\u000e\b\u0002rt\u0005\u0012\n\u0002sr\u0003\u0002",
    "\u0002\u0002st\u0003\u0002\u0002\u0002tv\u0003\u0002\u0002\u0002uw\u0005",
    " \u0011\u0002vu\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002w\u009c",
    "\u0003\u0002\u0002\u0002xz\u0005\u000e\b\u0002y{\u0005 \u0011\u0002",
    "zy\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{}\u0003\u0002\u0002",
    "\u0002|~\u0005\u0012\n\u0002}|\u0003\u0002\u0002\u0002}~\u0003\u0002",
    "\u0002\u0002~\u009c\u0003\u0002\u0002\u0002\u007f\u0081\u0005\u0012",
    "\n\u0002\u0080\u0082\u0005\u000e\b\u0002\u0081\u0080\u0003\u0002\u0002",
    "\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0084\u0003\u0002\u0002",
    "\u0002\u0083\u0085\u0005 \u0011\u0002\u0084\u0083\u0003\u0002\u0002",
    "\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u009c\u0003\u0002\u0002",
    "\u0002\u0086\u0088\u0005\u0012\n\u0002\u0087\u0089\u0005 \u0011\u0002",
    "\u0088\u0087\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002",
    "\u0089\u008b\u0003\u0002\u0002\u0002\u008a\u008c\u0005\u000e\b\u0002",
    "\u008b\u008a\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002",
    "\u008c\u009c\u0003\u0002\u0002\u0002\u008d\u008f\u0005 \u0011\u0002",
    "\u008e\u0090\u0005\u0012\n\u0002\u008f\u008e\u0003\u0002\u0002\u0002",
    "\u008f\u0090\u0003\u0002\u0002\u0002\u0090\u0092\u0003\u0002\u0002\u0002",
    "\u0091\u0093\u0005\u000e\b\u0002\u0092\u0091\u0003\u0002\u0002\u0002",
    "\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u009c\u0003\u0002\u0002\u0002",
    "\u0094\u0096\u0005 \u0011\u0002\u0095\u0097\u0005\u000e\b\u0002\u0096",
    "\u0095\u0003\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097",
    "\u0099\u0003\u0002\u0002\u0002\u0098\u009a\u0005\u0012\n\u0002\u0099",
    "\u0098\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u009a",
    "\u009c\u0003\u0002\u0002\u0002\u009bq\u0003\u0002\u0002\u0002\u009b",
    "x\u0003\u0002\u0002\u0002\u009b\u007f\u0003\u0002\u0002\u0002\u009b",
    "\u0086\u0003\u0002\u0002\u0002\u009b\u008d\u0003\u0002\u0002\u0002\u009b",
    "\u0094\u0003\u0002\u0002\u0002\u009c\r\u0003\u0002\u0002\u0002\u009d",
    "\u009e\u0007\u0006\u0002\u0002\u009e\u009f\u0007\u0007\u0002\u0002\u009f",
    "\u00a9\u0007\b\u0002\u0002\u00a0\u00a1\u0005\u0010\t\u0002\u00a1\u00a2",
    "\u0007\t\u0002\u0002\u00a2\u00a4\u0003\u0002\u0002\u0002\u00a3\u00a0",
    "\u0003\u0002\u0002\u0002\u00a4\u00a7\u0003\u0002\u0002\u0002\u00a5\u00a3",
    "\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a8",
    "\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a8\u00aa",
    "\u0005\u0010\t\u0002\u00a9\u00a5\u0003\u0002\u0002\u0002\u00a9\u00aa",
    "\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002\u00ab\u00ac",
    "\u0007\n\u0002\u0002\u00ac\u000f\u0003\u0002\u0002\u0002\u00ad\u00ae",
    "\u0007U\u0002\u0002\u00ae\u0011\u0003\u0002\u0002\u0002\u00af\u00b0",
    "\u0007\u000b\u0002\u0002\u00b0\u00b1\u0007\u0007\u0002\u0002\u00b1\u00b7",
    "\u0007\b\u0002\u0002\u00b2\u00b3\u0005\u0014\u000b\u0002\u00b3\u00b4",
    "\u0007\t\u0002\u0002\u00b4\u00b6\u0003\u0002\u0002\u0002\u00b5\u00b2",
    "\u0003\u0002\u0002\u0002\u00b6\u00b9\u0003\u0002\u0002\u0002\u00b7\u00b5",
    "\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u00bb",
    "\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002\u00ba\u00bc",
    "\u0005\u0014\u000b\u0002\u00bb\u00ba\u0003\u0002\u0002\u0002\u00bb\u00bc",
    "\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\u00be",
    "\u0007\n\u0002\u0002\u00be\u0013\u0003\u0002\u0002\u0002\u00bf\u00c0",
    "\u0005\u0016\f\u0002\u00c0\u00c1\u0007\u0004\u0002\u0002\u00c1\u00c3",
    "\u0005\u0018\r\u0002\u00c2\u00c4\u0005\u001a\u000e\u0002\u00c3\u00c2",
    "\u0003\u0002\u0002\u0002\u00c3\u00c4\u0003\u0002\u0002\u0002\u00c4\u0015",
    "\u0003\u0002\u0002\u0002\u00c5\u00c6\u0005\"\u0012\u0002\u00c6\u0017",
    "\u0003\u0002\u0002\u0002\u00c7\u00c8\u0005\u001e\u0010\u0002\u00c8\u0019",
    "\u0003\u0002\u0002\u0002\u00c9\u00ca\u0007\f\u0002\u0002\u00ca\u00d3",
    "\u0007\b\u0002\u0002\u00cb\u00d0\u0005\u001c\u000f\u0002\u00cc\u00cd",
    "\u0007\t\u0002\u0002\u00cd\u00cf\u0005\u001c\u000f\u0002\u00ce\u00cc",
    "\u0003\u0002\u0002\u0002\u00cf\u00d2\u0003\u0002\u0002\u0002\u00d0\u00ce",
    "\u0003\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00d4",
    "\u0003\u0002\u0002\u0002\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d3\u00cb",
    "\u0003\u0002\u0002\u0002\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4\u00d5",
    "\u0003\u0002\u0002\u0002\u00d5\u00d6\u0007\n\u0002\u0002\u00d6\u001b",
    "\u0003\u0002\u0002\u0002\u00d7\u00dc\u0005\u001e\u0010\u0002\u00d8\u00d9",
    "\u0007\r\u0002\u0002\u00d9\u00db\u0005\u001e\u0010\u0002\u00da\u00d8",
    "\u0003\u0002\u0002\u0002\u00db\u00de\u0003\u0002\u0002\u0002\u00dc\u00da",
    "\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd\u001d",
    "\u0003\u0002\u0002\u0002\u00de\u00dc\u0003\u0002\u0002\u0002\u00df\u00e2",
    "\u0005\"\u0012\u0002\u00e0\u00e2\u0005$\u0013\u0002\u00e1\u00df\u0003",
    "\u0002\u0002\u0002\u00e1\u00e0\u0003\u0002\u0002\u0002\u00e2\u001f\u0003",
    "\u0002\u0002\u0002\u00e3\u00e4\u0007\u000e\u0002\u0002\u00e4!\u0003",
    "\u0002\u0002\u0002\u00e5\u00e6\u0007\u000f\u0002\u0002\u00e6\u00e7\u0005",
    ".\u0018\u0002\u00e7\u00e8\u0007\u0010\u0002\u0002\u00e8\u00eb\u0005",
    "(\u0015\u0002\u00e9\u00ea\u0007\u0011\u0002\u0002\u00ea\u00ec\u0005",
    "0\u0019\u0002\u00eb\u00ec\u0003\u0002\u0002\u0002\u00eb\u00e9\u0003",
    "\u0002\u0002\u0002\u00ec#\u0003\u0002\u0002\u0002\u00ed\u00ee\u0007",
    "\u0012\u0002\u0002\u00ee\u00ef\u0005,\u0017\u0002\u00ef\u00f0\u0007",
    "\u0010\u0002\u0002\u00f0\u00f1\u0005*\u0016\u0002\u00f1%\u0003\u0002",
    "\u0002\u0002\u00f2\u00f4\t\u0002\u0002\u0002\u00f3\u00f2\u0003\u0002",
    "\u0002\u0002\u00f4\u00f7\u0003\u0002\u0002\u0002\u00f5\u00f3\u0003\u0002",
    "\u0002\u0002\u00f5\u00f6\u0003\u0002\u0002\u0002\u00f6\'\u0003\u0002",
    "\u0002\u0002\u00f7\u00f5\u0003\u0002\u0002\u0002\u00f8\u00f9\u0007U",
    "\u0002\u0002\u00f9)\u0003\u0002\u0002\u0002\u00fa\u00fb\u0007U\u0002",
    "\u0002\u00fb+\u0003\u0002\u0002\u0002\u00fc\u00fd\u0007U\u0002\u0002",
    "\u00fd-\u0003\u0002\u0002\u0002\u00fe\u00ff\u0007U\u0002\u0002\u00ff",
    "/\u0003\u0002\u0002\u0002\u0100\u0102\u00052\u001a\u0002\u0101\u0100",
    "\u0003\u0002\u0002\u0002\u0101\u0102\u0003\u0002\u0002\u0002\u0102\u0103",
    "\u0003\u0002\u0002\u0002\u0103\u011c\u00054\u001b\u0002\u0104\u0106",
    "\u00052\u001a\u0002\u0105\u0104\u0003\u0002\u0002\u0002\u0105\u0106",
    "\u0003\u0002\u0002\u0002\u0106\u0107\u0003\u0002\u0002\u0002\u0107\u0108",
    "\u00054\u001b\u0002\u0108\u0109\u0007\u0014\u0002\u0002\u0109\u010a",
    "\u0005<\u001f\u0002\u010a\u011c\u0003\u0002\u0002\u0002\u010b\u010d",
    "\u00052\u001a\u0002\u010c\u010b\u0003\u0002\u0002\u0002\u010c\u010d",
    "\u0003\u0002\u0002\u0002\u010d\u010e\u0003\u0002\u0002\u0002\u010e\u010f",
    "\u00054\u001b\u0002\u010f\u0110\u0007\u0003\u0002\u0002\u0110\u0111",
    "\u0005@!\u0002\u0111\u011c\u0003\u0002\u0002\u0002\u0112\u0114\u0005",
    "2\u001a\u0002\u0113\u0112\u0003\u0002\u0002\u0002\u0113\u0114\u0003",
    "\u0002\u0002\u0002\u0114\u0115\u0003\u0002\u0002\u0002\u0115\u0116\u0005",
    "4\u001b\u0002\u0116\u0117\u0007\u0014\u0002\u0002\u0117\u0118\u0005",
    "<\u001f\u0002\u0118\u0119\u0007\u0003\u0002\u0002\u0119\u011a\u0005",
    "@!\u0002\u011a\u011c\u0003\u0002\u0002\u0002\u011b\u0101\u0003\u0002",
    "\u0002\u0002\u011b\u0105\u0003\u0002\u0002\u0002\u011b\u010c\u0003\u0002",
    "\u0002\u0002\u011b\u0113\u0003\u0002\u0002\u0002\u011c1\u0003\u0002",
    "\u0002\u0002\u011d\u011e\t\u0003\u0002\u0002\u011e3\u0003\u0002\u0002",
    "\u0002\u011f\u0120\u00056\u001c\u0002\u0120\u0121\u0007\u0013\u0002",
    "\u0002\u0121\u0122\u00058\u001d\u0002\u0122\u0123\u0007\u0013\u0002",
    "\u0002\u0123\u0124\u0005:\u001e\u0002\u0124\u012c\u0003\u0002\u0002",
    "\u0002\u0125\u0126\u00056\u001c\u0002\u0126\u0127\u0007\u0013\u0002",
    "\u0002\u0127\u0128\u00058\u001d\u0002\u0128\u0129\u0007\u0013\u0002",
    "\u0002\u0129\u012a\u0005:\u001e\u0002\u012a\u012c\u0003\u0002\u0002",
    "\u0002\u012b\u011f\u0003\u0002\u0002\u0002\u012b\u0125\u0003\u0002\u0002",
    "\u0002\u012c5\u0003\u0002\u0002\u0002\u012d\u012e\u0005J&\u0002\u012e",
    "7\u0003\u0002\u0002\u0002\u012f\u0130\u0005J&\u0002\u01309\u0003\u0002",
    "\u0002\u0002\u0131\u0132\u0005J&\u0002\u0132;\u0003\u0002\u0002\u0002",
    "\u0133\u0134\u0005> \u0002\u0134=\u0003\u0002\u0002\u0002\u0135\u013b",
    "\u0005D#\u0002\u0136\u0137\u0005D#\u0002\u0137\u0138\u0007\u0013\u0002",
    "\u0002\u0138\u0139\u0005> \u0002\u0139\u013b\u0003\u0002\u0002\u0002",
    "\u013a\u0135\u0003\u0002\u0002\u0002\u013a\u0136\u0003\u0002\u0002\u0002",
    "\u013b?\u0003\u0002\u0002\u0002\u013c\u013d\u0005B\"\u0002\u013dA\u0003",
    "\u0002\u0002\u0002\u013e\u0144\u0005F$\u0002\u013f\u0140\u0005F$\u0002",
    "\u0140\u0141\u0007\u0013\u0002\u0002\u0141\u0142\u0005B\"\u0002\u0142",
    "\u0144\u0003\u0002\u0002\u0002\u0143\u013e\u0003\u0002\u0002\u0002\u0143",
    "\u013f\u0003\u0002\u0002\u0002\u0144C\u0003\u0002\u0002\u0002\u0145",
    "\u0148\u0005H%\u0002\u0146\u0148\u0005J&\u0002\u0147\u0145\u0003\u0002",
    "\u0002\u0002\u0147\u0146\u0003\u0002\u0002\u0002\u0148E\u0003\u0002",
    "\u0002\u0002\u0149\u014c\u0005H%\u0002\u014a\u014c\u0005R*\u0002\u014b",
    "\u0149\u0003\u0002\u0002\u0002\u014b\u014a\u0003\u0002\u0002\u0002\u014c",
    "G\u0003\u0002\u0002\u0002\u014d\u0159\u0005P)\u0002\u014e\u014f\u0005",
    "P)\u0002\u014f\u0150\u0005L\'\u0002\u0150\u0159\u0003\u0002\u0002\u0002",
    "\u0151\u0152\u0005L\'\u0002\u0152\u0153\u0005P)\u0002\u0153\u0159\u0003",
    "\u0002\u0002\u0002\u0154\u0155\u0005L\'\u0002\u0155\u0156\u0005P)\u0002",
    "\u0156\u0157\u0005L\'\u0002\u0157\u0159\u0003\u0002\u0002\u0002\u0158",
    "\u014d\u0003\u0002\u0002\u0002\u0158\u014e\u0003\u0002\u0002\u0002\u0158",
    "\u0151\u0003\u0002\u0002\u0002\u0158\u0154\u0003\u0002\u0002\u0002\u0159",
    "I\u0003\u0002\u0002\u0002\u015a\u0160\u0007\u0017\u0002\u0002\u015b",
    "\u0160\u0005V,\u0002\u015c\u015d\u0005V,\u0002\u015d\u015e\u0005R*\u0002",
    "\u015e\u0160\u0003\u0002\u0002\u0002\u015f\u015a\u0003\u0002\u0002\u0002",
    "\u015f\u015b\u0003\u0002\u0002\u0002\u015f\u015c\u0003\u0002\u0002\u0002",
    "\u0160K\u0003\u0002\u0002\u0002\u0161\u0166\u0005N(\u0002\u0162\u0163",
    "\u0005N(\u0002\u0163\u0164\u0005L\'\u0002\u0164\u0166\u0003\u0002\u0002",
    "\u0002\u0165\u0161\u0003\u0002\u0002\u0002\u0165\u0162\u0003\u0002\u0002",
    "\u0002\u0166M\u0003\u0002\u0002\u0002\u0167\u016a\u0005T+\u0002\u0168",
    "\u016a\u0005P)\u0002\u0169\u0167\u0003\u0002\u0002\u0002\u0169\u0168",
    "\u0003\u0002\u0002\u0002\u016aO\u0003\u0002\u0002\u0002\u016b\u016e",
    "\u0005X-\u0002\u016c\u016e\u0007\u0014\u0002\u0002\u016d\u016b\u0003",
    "\u0002\u0002\u0002\u016d\u016c\u0003\u0002\u0002\u0002\u016eQ\u0003",
    "\u0002\u0002\u0002\u016f\u0174\u0005T+\u0002\u0170\u0171\u0005T+\u0002",
    "\u0171\u0172\u0005R*\u0002\u0172\u0174\u0003\u0002\u0002\u0002\u0173",
    "\u016f\u0003\u0002\u0002\u0002\u0173\u0170\u0003\u0002\u0002\u0002\u0174",
    "S\u0003\u0002\u0002\u0002\u0175\u0178\u0007\u0017\u0002\u0002\u0176",
    "\u0178\u0005V,\u0002\u0177\u0175\u0003\u0002\u0002\u0002\u0177\u0176",
    "\u0003\u0002\u0002\u0002\u0178U\u0003\u0002\u0002\u0002\u0179\u017a",
    "\t\u0004\u0002\u0002\u017aW\u0003\u0002\u0002\u0002\u017b\u017c\t\u0005",
    "\u0002\u0002\u017cY\u0003\u0002\u0002\u0002/]ahosvz}\u0081\u0084\u0088",
    "\u008b\u008f\u0092\u0096\u0099\u009b\u00a5\u00a9\u00b7\u00bb\u00c3\u00d0",
    "\u00d3\u00dc\u00e1\u00eb\u00f5\u0101\u0105\u010c\u0113\u011b\u012b\u013a",
    "\u0143\u0147\u014b\u0158\u015f\u0165\u0169\u016d\u0173\u0177"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'+'", "'=>'", "'&'", "'tags'", "'='", "'['", 
                     "','", "']'", "'replace'", "'*'", "'>'", "'online'", 
                     "'$:'", "'/'", "'@'", "'#:'", "'.'", "'-'", "'^'", 
                     "'~'", "'0'", "'1'", "'2'", "'3'", "'4'", "'5'", "'6'", 
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
                      null, null, "ID", "LINE_COMMENT", "BLOCK_COMMENT", 
                      "WS" ];

var ruleNames =  [ "mappingRules", "mappingRule", "addRule", "theCandidate", 
                   "setRule", "configs", "tagsConfig", "tags", "replaceConfig", 
                   "replaceItem", "replaced", "replacer", "setScope", "scope_set", 
                   "sourceEntity", "onlineConfig", "release_id", "mock_id", 
                   "presentation_name", "release_name", "mock_name", "bucket_name", 
                   "user_name", "valid_semver", "prefix", "version_core", 
                   "major", "minor", "patch", "preRelease", "dotSeparated_preRelease_identifiers", 
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
MappingParser.ID = 83;
MappingParser.LINE_COMMENT = 84;
MappingParser.BLOCK_COMMENT = 85;
MappingParser.WS = 86;

MappingParser.RULE_mappingRules = 0;
MappingParser.RULE_mappingRule = 1;
MappingParser.RULE_addRule = 2;
MappingParser.RULE_theCandidate = 3;
MappingParser.RULE_setRule = 4;
MappingParser.RULE_configs = 5;
MappingParser.RULE_tagsConfig = 6;
MappingParser.RULE_tags = 7;
MappingParser.RULE_replaceConfig = 8;
MappingParser.RULE_replaceItem = 9;
MappingParser.RULE_replaced = 10;
MappingParser.RULE_replacer = 11;
MappingParser.RULE_setScope = 12;
MappingParser.RULE_scope_set = 13;
MappingParser.RULE_sourceEntity = 14;
MappingParser.RULE_onlineConfig = 15;
MappingParser.RULE_release_id = 16;
MappingParser.RULE_mock_id = 17;
MappingParser.RULE_presentation_name = 18;
MappingParser.RULE_release_name = 19;
MappingParser.RULE_mock_name = 20;
MappingParser.RULE_bucket_name = 21;
MappingParser.RULE_user_name = 22;
MappingParser.RULE_valid_semver = 23;
MappingParser.RULE_prefix = 24;
MappingParser.RULE_version_core = 25;
MappingParser.RULE_major = 26;
MappingParser.RULE_minor = 27;
MappingParser.RULE_patch = 28;
MappingParser.RULE_preRelease = 29;
MappingParser.RULE_dotSeparated_preRelease_identifiers = 30;
MappingParser.RULE_build = 31;
MappingParser.RULE_dotSeparated_build_identifiers = 32;
MappingParser.RULE_preRelease_identifier = 33;
MappingParser.RULE_build_identifier = 34;
MappingParser.RULE_alphanumeric_identifier = 35;
MappingParser.RULE_numeric_identifier = 36;
MappingParser.RULE_identifier_characters = 37;
MappingParser.RULE_identifier_character = 38;
MappingParser.RULE_nonDigit = 39;
MappingParser.RULE_digits = 40;
MappingParser.RULE_digit = 41;
MappingParser.RULE_positive_digit = 42;
MappingParser.RULE_letter = 43;

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
        this.state = 89; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 88;
            this.mappingRule();
            this.state = 91; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===MappingParser.T__0 || _la===MappingParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    try {
        this.state = 95;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MappingParser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 93;
            this.addRule();
            break;
        case MappingParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 94;
            this.setRule();
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

AddRuleContext.prototype.presentation_name = function() {
    return this.getTypedRuleContext(Presentation_nameContext,0);
};

AddRuleContext.prototype.theCandidate = function() {
    return this.getTypedRuleContext(TheCandidateContext,0);
};

AddRuleContext.prototype.configs = function() {
    return this.getTypedRuleContext(ConfigsContext,0);
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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.match(MappingParser.T__0);
        this.state = 98;
        this.presentation_name();
        this.state = 99;
        this.match(MappingParser.T__1);
        this.state = 100;
        this.theCandidate();
        this.state = 102;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MappingParser.T__3) | (1 << MappingParser.T__8) | (1 << MappingParser.T__11))) !== 0)) {
            this.state = 101;
            this.configs();
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

function TheCandidateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_theCandidate;
    return this;
}

TheCandidateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TheCandidateContext.prototype.constructor = TheCandidateContext;

TheCandidateContext.prototype.sourceEntity = function() {
    return this.getTypedRuleContext(SourceEntityContext,0);
};

TheCandidateContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterTheCandidate(this);
	}
};

TheCandidateContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitTheCandidate(this);
	}
};

TheCandidateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitTheCandidate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.TheCandidateContext = TheCandidateContext;

MappingParser.prototype.theCandidate = function() {

    var localctx = new TheCandidateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, MappingParser.RULE_theCandidate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.sourceEntity();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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

SetRuleContext.prototype.presentation_name = function() {
    return this.getTypedRuleContext(Presentation_nameContext,0);
};

SetRuleContext.prototype.configs = function() {
    return this.getTypedRuleContext(ConfigsContext,0);
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
    this.enterRule(localctx, 8, MappingParser.RULE_setRule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.match(MappingParser.T__2);
        this.state = 107;
        this.presentation_name();
        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MappingParser.T__3) | (1 << MappingParser.T__8) | (1 << MappingParser.T__11))) !== 0)) {
            this.state = 108;
            this.configs();
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

function ConfigsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_configs;
    return this;
}

ConfigsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConfigsContext.prototype.constructor = ConfigsContext;

ConfigsContext.prototype.tagsConfig = function() {
    return this.getTypedRuleContext(TagsConfigContext,0);
};

ConfigsContext.prototype.replaceConfig = function() {
    return this.getTypedRuleContext(ReplaceConfigContext,0);
};

ConfigsContext.prototype.onlineConfig = function() {
    return this.getTypedRuleContext(OnlineConfigContext,0);
};

ConfigsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterConfigs(this);
	}
};

ConfigsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitConfigs(this);
	}
};

ConfigsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitConfigs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.ConfigsContext = ConfigsContext;

MappingParser.prototype.configs = function() {

    var localctx = new ConfigsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, MappingParser.RULE_configs);
    var _la = 0; // Token type
    try {
        this.state = 153;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 111;
            this.tagsConfig();
            this.state = 113;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__8) {
                this.state = 112;
                this.replaceConfig();
            }

            this.state = 116;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__11) {
                this.state = 115;
                this.onlineConfig();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 118;
            this.tagsConfig();
            this.state = 120;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__11) {
                this.state = 119;
                this.onlineConfig();
            }

            this.state = 123;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__8) {
                this.state = 122;
                this.replaceConfig();
            }

            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 125;
            this.replaceConfig();
            this.state = 127;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__3) {
                this.state = 126;
                this.tagsConfig();
            }

            this.state = 130;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__11) {
                this.state = 129;
                this.onlineConfig();
            }

            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 132;
            this.replaceConfig();
            this.state = 134;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__11) {
                this.state = 133;
                this.onlineConfig();
            }

            this.state = 137;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__3) {
                this.state = 136;
                this.tagsConfig();
            }

            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 139;
            this.onlineConfig();
            this.state = 141;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__8) {
                this.state = 140;
                this.replaceConfig();
            }

            this.state = 144;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__3) {
                this.state = 143;
                this.tagsConfig();
            }

            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 146;
            this.onlineConfig();
            this.state = 148;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__3) {
                this.state = 147;
                this.tagsConfig();
            }

            this.state = 151;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__8) {
                this.state = 150;
                this.replaceConfig();
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

function TagsConfigContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_tagsConfig;
    return this;
}

TagsConfigContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TagsConfigContext.prototype.constructor = TagsConfigContext;

TagsConfigContext.prototype.tags = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TagsContext);
    } else {
        return this.getTypedRuleContext(TagsContext,i);
    }
};

TagsConfigContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterTagsConfig(this);
	}
};

TagsConfigContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitTagsConfig(this);
	}
};

TagsConfigContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitTagsConfig(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.TagsConfigContext = TagsConfigContext;

MappingParser.prototype.tagsConfig = function() {

    var localctx = new TagsConfigContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, MappingParser.RULE_tagsConfig);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.match(MappingParser.T__3);
        this.state = 156;
        this.match(MappingParser.T__4);
        this.state = 157;
        this.match(MappingParser.T__5);
        this.state = 167;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===MappingParser.ID) {
            this.state = 163;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 158;
                    this.tags();
                    this.state = 159;
                    this.match(MappingParser.T__6); 
                }
                this.state = 165;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
            }

            this.state = 166;
            this.tags();
        }

        this.state = 169;
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

TagsContext.prototype.ID = function() {
    return this.getToken(MappingParser.ID, 0);
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
    this.enterRule(localctx, 14, MappingParser.RULE_tags);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
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

function ReplaceConfigContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_replaceConfig;
    return this;
}

ReplaceConfigContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReplaceConfigContext.prototype.constructor = ReplaceConfigContext;

ReplaceConfigContext.prototype.replaceItem = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ReplaceItemContext);
    } else {
        return this.getTypedRuleContext(ReplaceItemContext,i);
    }
};

ReplaceConfigContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterReplaceConfig(this);
	}
};

ReplaceConfigContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitReplaceConfig(this);
	}
};

ReplaceConfigContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitReplaceConfig(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.ReplaceConfigContext = ReplaceConfigContext;

MappingParser.prototype.replaceConfig = function() {

    var localctx = new ReplaceConfigContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, MappingParser.RULE_replaceConfig);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this.match(MappingParser.T__8);
        this.state = 174;
        this.match(MappingParser.T__4);
        this.state = 175;
        this.match(MappingParser.T__5);
        this.state = 181;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 176;
                this.replaceItem();
                this.state = 177;
                this.match(MappingParser.T__6); 
            }
            this.state = 183;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
        }

        this.state = 185;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===MappingParser.T__12) {
            this.state = 184;
            this.replaceItem();
        }

        this.state = 187;
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

function ReplaceItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_replaceItem;
    return this;
}

ReplaceItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReplaceItemContext.prototype.constructor = ReplaceItemContext;

ReplaceItemContext.prototype.replaced = function() {
    return this.getTypedRuleContext(ReplacedContext,0);
};

ReplaceItemContext.prototype.replacer = function() {
    return this.getTypedRuleContext(ReplacerContext,0);
};

ReplaceItemContext.prototype.setScope = function() {
    return this.getTypedRuleContext(SetScopeContext,0);
};

ReplaceItemContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterReplaceItem(this);
	}
};

ReplaceItemContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitReplaceItem(this);
	}
};

ReplaceItemContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitReplaceItem(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.ReplaceItemContext = ReplaceItemContext;

MappingParser.prototype.replaceItem = function() {

    var localctx = new ReplaceItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, MappingParser.RULE_replaceItem);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        this.replaced();
        this.state = 190;
        this.match(MappingParser.T__1);
        this.state = 191;
        this.replacer();
        this.state = 193;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===MappingParser.T__9) {
            this.state = 192;
            this.setScope();
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
    this.ruleIndex = MappingParser.RULE_replaced;
    return this;
}

ReplacedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReplacedContext.prototype.constructor = ReplacedContext;

ReplacedContext.prototype.release_id = function() {
    return this.getTypedRuleContext(Release_idContext,0);
};

ReplacedContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterReplaced(this);
	}
};

ReplacedContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitReplaced(this);
	}
};

ReplacedContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitReplaced(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.ReplacedContext = ReplacedContext;

MappingParser.prototype.replaced = function() {

    var localctx = new ReplacedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, MappingParser.RULE_replaced);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
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
    this.ruleIndex = MappingParser.RULE_replacer;
    return this;
}

ReplacerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReplacerContext.prototype.constructor = ReplacerContext;

ReplacerContext.prototype.sourceEntity = function() {
    return this.getTypedRuleContext(SourceEntityContext,0);
};

ReplacerContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterReplacer(this);
	}
};

ReplacerContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitReplacer(this);
	}
};

ReplacerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitReplacer(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.ReplacerContext = ReplacerContext;

MappingParser.prototype.replacer = function() {

    var localctx = new ReplacerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, MappingParser.RULE_replacer);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.sourceEntity();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SetScopeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_setScope;
    return this;
}

SetScopeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetScopeContext.prototype.constructor = SetScopeContext;

SetScopeContext.prototype.scope_set = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Scope_setContext);
    } else {
        return this.getTypedRuleContext(Scope_setContext,i);
    }
};

SetScopeContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterSetScope(this);
	}
};

SetScopeContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitSetScope(this);
	}
};

SetScopeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitSetScope(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.SetScopeContext = SetScopeContext;

MappingParser.prototype.setScope = function() {

    var localctx = new SetScopeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, MappingParser.RULE_setScope);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.match(MappingParser.T__9);
        this.state = 200;
        this.match(MappingParser.T__5);
        this.state = 209;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===MappingParser.T__12 || _la===MappingParser.T__15) {
            this.state = 201;
            this.scope_set();
            this.state = 206;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===MappingParser.T__6) {
                this.state = 202;
                this.match(MappingParser.T__6);
                this.state = 203;
                this.scope_set();
                this.state = 208;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 211;
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

function Scope_setContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_scope_set;
    return this;
}

Scope_setContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Scope_setContext.prototype.constructor = Scope_setContext;

Scope_setContext.prototype.sourceEntity = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SourceEntityContext);
    } else {
        return this.getTypedRuleContext(SourceEntityContext,i);
    }
};

Scope_setContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterScope_set(this);
	}
};

Scope_setContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitScope_set(this);
	}
};

Scope_setContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitScope_set(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.Scope_setContext = Scope_setContext;

MappingParser.prototype.scope_set = function() {

    var localctx = new Scope_setContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, MappingParser.RULE_scope_set);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        this.sourceEntity();
        this.state = 218;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MappingParser.T__10) {
            this.state = 214;
            this.match(MappingParser.T__10);
            this.state = 215;
            this.sourceEntity();
            this.state = 220;
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

function SourceEntityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_sourceEntity;
    return this;
}

SourceEntityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceEntityContext.prototype.constructor = SourceEntityContext;

SourceEntityContext.prototype.release_id = function() {
    return this.getTypedRuleContext(Release_idContext,0);
};

SourceEntityContext.prototype.mock_id = function() {
    return this.getTypedRuleContext(Mock_idContext,0);
};

SourceEntityContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterSourceEntity(this);
	}
};

SourceEntityContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitSourceEntity(this);
	}
};

SourceEntityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitSourceEntity(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.SourceEntityContext = SourceEntityContext;

MappingParser.prototype.sourceEntity = function() {

    var localctx = new SourceEntityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, MappingParser.RULE_sourceEntity);
    try {
        this.state = 223;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MappingParser.T__12:
            this.enterOuterAlt(localctx, 1);
            this.state = 221;
            this.release_id();
            break;
        case MappingParser.T__15:
            this.enterOuterAlt(localctx, 2);
            this.state = 222;
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

function OnlineConfigContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MappingParser.RULE_onlineConfig;
    return this;
}

OnlineConfigContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OnlineConfigContext.prototype.constructor = OnlineConfigContext;


OnlineConfigContext.prototype.enterRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.enterOnlineConfig(this);
	}
};

OnlineConfigContext.prototype.exitRule = function(listener) {
    if(listener instanceof MappingListener ) {
        listener.exitOnlineConfig(this);
	}
};

OnlineConfigContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MappingVisitor ) {
        return visitor.visitOnlineConfig(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MappingParser.OnlineConfigContext = OnlineConfigContext;

MappingParser.prototype.onlineConfig = function() {

    var localctx = new OnlineConfigContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, MappingParser.RULE_onlineConfig);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
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
    this.enterRule(localctx, 32, MappingParser.RULE_release_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
        this.match(MappingParser.T__12);
        this.state = 228;
        this.user_name();
        this.state = 229;
        this.match(MappingParser.T__13);
        this.state = 230;
        this.release_name();
        this.state = 233;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        if(la_===1+1) {
            this.state = 231;
            this.match(MappingParser.T__14);
            this.state = 232;
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
    this.enterRule(localctx, 34, MappingParser.RULE_mock_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
        this.match(MappingParser.T__15);
        this.state = 236;
        this.bucket_name();
        this.state = 237;
        this.match(MappingParser.T__13);
        this.state = 238;
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
    this.enterRule(localctx, 36, MappingParser.RULE_presentation_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MappingParser.T__16 || _la===MappingParser.ID) {
            this.state = 240;
            _la = this._input.LA(1);
            if(!(_la===MappingParser.T__16 || _la===MappingParser.ID)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 245;
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
    this.enterRule(localctx, 38, MappingParser.RULE_release_name);
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
    this.enterRule(localctx, 40, MappingParser.RULE_mock_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 248;
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
    this.enterRule(localctx, 42, MappingParser.RULE_bucket_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 250;
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
    this.enterRule(localctx, 44, MappingParser.RULE_user_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 252;
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
    this.enterRule(localctx, 46, MappingParser.RULE_valid_semver);
    var _la = 0; // Token type
    try {
        this.state = 281;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 255;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__18 || _la===MappingParser.T__19) {
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
            if(_la===MappingParser.T__18 || _la===MappingParser.T__19) {
                this.state = 258;
                this.prefix();
            }

            this.state = 261;
            this.version_core();
            this.state = 262;
            this.match(MappingParser.T__17);
            this.state = 263;
            this.preRelease();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 266;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__18 || _la===MappingParser.T__19) {
                this.state = 265;
                this.prefix();
            }

            this.state = 268;
            this.version_core();
            this.state = 269;
            this.match(MappingParser.T__0);
            this.state = 270;
            this.build();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 273;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MappingParser.T__18 || _la===MappingParser.T__19) {
                this.state = 272;
                this.prefix();
            }

            this.state = 275;
            this.version_core();
            this.state = 276;
            this.match(MappingParser.T__17);
            this.state = 277;
            this.preRelease();
            this.state = 278;
            this.match(MappingParser.T__0);
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
    this.enterRule(localctx, 48, MappingParser.RULE_prefix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        _la = this._input.LA(1);
        if(!(_la===MappingParser.T__18 || _la===MappingParser.T__19)) {
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
    this.enterRule(localctx, 50, MappingParser.RULE_version_core);
    try {
        this.state = 297;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 285;
            this.major();
            this.state = 286;
            this.match(MappingParser.T__16);
            this.state = 287;
            this.minor();
            this.state = 288;
            this.match(MappingParser.T__16);
            this.state = 289;
            this.patch();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 291;
            this.major();
            this.state = 292;
            this.match(MappingParser.T__16);
            this.state = 293;
            this.minor();
            this.state = 294;
            this.match(MappingParser.T__16);
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
    this.enterRule(localctx, 52, MappingParser.RULE_major);
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
    this.enterRule(localctx, 54, MappingParser.RULE_minor);
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
    this.enterRule(localctx, 56, MappingParser.RULE_patch);
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
    this.enterRule(localctx, 58, MappingParser.RULE_preRelease);
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
    this.enterRule(localctx, 60, MappingParser.RULE_dotSeparated_preRelease_identifiers);
    try {
        this.state = 312;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
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
            this.match(MappingParser.T__16);
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
    this.enterRule(localctx, 62, MappingParser.RULE_build);
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
    this.enterRule(localctx, 64, MappingParser.RULE_dotSeparated_build_identifiers);
    try {
        this.state = 321;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
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
            this.match(MappingParser.T__16);
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
    this.enterRule(localctx, 66, MappingParser.RULE_preRelease_identifier);
    try {
        this.state = 325;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
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
    this.enterRule(localctx, 68, MappingParser.RULE_build_identifier);
    try {
        this.state = 329;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
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
    this.enterRule(localctx, 70, MappingParser.RULE_alphanumeric_identifier);
    try {
        this.state = 342;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
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
    this.enterRule(localctx, 72, MappingParser.RULE_numeric_identifier);
    try {
        this.state = 349;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 344;
            this.match(MappingParser.T__20);
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
    this.enterRule(localctx, 74, MappingParser.RULE_identifier_characters);
    try {
        this.state = 355;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
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
    this.enterRule(localctx, 76, MappingParser.RULE_identifier_character);
    try {
        this.state = 359;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
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
            this.enterOuterAlt(localctx, 1);
            this.state = 357;
            this.digit();
            break;
        case MappingParser.T__17:
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
    this.enterRule(localctx, 78, MappingParser.RULE_nonDigit);
    try {
        this.state = 363;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
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
            this.enterOuterAlt(localctx, 1);
            this.state = 361;
            this.letter();
            break;
        case MappingParser.T__17:
            this.enterOuterAlt(localctx, 2);
            this.state = 362;
            this.match(MappingParser.T__17);
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
    this.enterRule(localctx, 80, MappingParser.RULE_digits);
    try {
        this.state = 369;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
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
    this.enterRule(localctx, 82, MappingParser.RULE_digit);
    try {
        this.state = 373;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MappingParser.T__20:
            this.enterOuterAlt(localctx, 1);
            this.state = 371;
            this.match(MappingParser.T__20);
            break;
        case MappingParser.T__21:
        case MappingParser.T__22:
        case MappingParser.T__23:
        case MappingParser.T__24:
        case MappingParser.T__25:
        case MappingParser.T__26:
        case MappingParser.T__27:
        case MappingParser.T__28:
        case MappingParser.T__29:
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
    this.enterRule(localctx, 84, MappingParser.RULE_positive_digit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 375;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MappingParser.T__21) | (1 << MappingParser.T__22) | (1 << MappingParser.T__23) | (1 << MappingParser.T__24) | (1 << MappingParser.T__25) | (1 << MappingParser.T__26) | (1 << MappingParser.T__27) | (1 << MappingParser.T__28) | (1 << MappingParser.T__29))) !== 0))) {
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
    this.enterRule(localctx, 86, MappingParser.RULE_letter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 377;
        _la = this._input.LA(1);
        if(!(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (MappingParser.T__30 - 31)) | (1 << (MappingParser.T__31 - 31)) | (1 << (MappingParser.T__32 - 31)) | (1 << (MappingParser.T__33 - 31)) | (1 << (MappingParser.T__34 - 31)) | (1 << (MappingParser.T__35 - 31)) | (1 << (MappingParser.T__36 - 31)) | (1 << (MappingParser.T__37 - 31)) | (1 << (MappingParser.T__38 - 31)) | (1 << (MappingParser.T__39 - 31)) | (1 << (MappingParser.T__40 - 31)) | (1 << (MappingParser.T__41 - 31)) | (1 << (MappingParser.T__42 - 31)) | (1 << (MappingParser.T__43 - 31)) | (1 << (MappingParser.T__44 - 31)) | (1 << (MappingParser.T__45 - 31)) | (1 << (MappingParser.T__46 - 31)) | (1 << (MappingParser.T__47 - 31)) | (1 << (MappingParser.T__48 - 31)) | (1 << (MappingParser.T__49 - 31)) | (1 << (MappingParser.T__50 - 31)) | (1 << (MappingParser.T__51 - 31)) | (1 << (MappingParser.T__52 - 31)) | (1 << (MappingParser.T__53 - 31)) | (1 << (MappingParser.T__54 - 31)) | (1 << (MappingParser.T__55 - 31)) | (1 << (MappingParser.T__56 - 31)) | (1 << (MappingParser.T__57 - 31)) | (1 << (MappingParser.T__58 - 31)) | (1 << (MappingParser.T__59 - 31)) | (1 << (MappingParser.T__60 - 31)) | (1 << (MappingParser.T__61 - 31)))) !== 0) || ((((_la - 63)) & ~0x1f) == 0 && ((1 << (_la - 63)) & ((1 << (MappingParser.T__62 - 63)) | (1 << (MappingParser.T__63 - 63)) | (1 << (MappingParser.T__64 - 63)) | (1 << (MappingParser.T__65 - 63)) | (1 << (MappingParser.T__66 - 63)) | (1 << (MappingParser.T__67 - 63)) | (1 << (MappingParser.T__68 - 63)) | (1 << (MappingParser.T__69 - 63)) | (1 << (MappingParser.T__70 - 63)) | (1 << (MappingParser.T__71 - 63)) | (1 << (MappingParser.T__72 - 63)) | (1 << (MappingParser.T__73 - 63)) | (1 << (MappingParser.T__74 - 63)) | (1 << (MappingParser.T__75 - 63)) | (1 << (MappingParser.T__76 - 63)) | (1 << (MappingParser.T__77 - 63)) | (1 << (MappingParser.T__78 - 63)) | (1 << (MappingParser.T__79 - 63)) | (1 << (MappingParser.T__80 - 63)) | (1 << (MappingParser.T__81 - 63)))) !== 0))) {
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
