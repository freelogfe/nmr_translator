// Generated from mapping.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002W\u0185\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
    "?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0004",
    "F\tF\u0004G\tG\u0004H\tH\u0004I\tI\u0004J\tJ\u0004K\tK\u0004L\tL\u0004",
    "M\tM\u0004N\tN\u0004O\tO\u0004P\tP\u0004Q\tQ\u0004R\tR\u0004S\tS\u0004",
    "T\tT\u0004U\tU\u0004V\tV\u0004W\tW\u0004X\tX\u0004Y\tY\u0004Z\tZ\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003",
    "!\u0003\"\u0003\"\u0003#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003&\u0003",
    "&\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003+\u0003",
    "+\u0003,\u0003,\u0003-\u0003-\u0003.\u0003.\u0003/\u0003/\u00030\u0003",
    "0\u00031\u00031\u00032\u00032\u00033\u00033\u00034\u00034\u00035\u0003",
    "5\u00036\u00036\u00037\u00037\u00038\u00038\u00039\u00039\u0003:\u0003",
    ":\u0003;\u0003;\u0003<\u0003<\u0003=\u0003=\u0003>\u0003>\u0003?\u0003",
    "?\u0003@\u0003@\u0003A\u0003A\u0003B\u0003B\u0003C\u0003C\u0003D\u0003",
    "D\u0003E\u0003E\u0003F\u0003F\u0003G\u0003G\u0003H\u0003H\u0003I\u0003",
    "I\u0003J\u0003J\u0003K\u0003K\u0003L\u0003L\u0003M\u0003M\u0003N\u0003",
    "N\u0003O\u0003O\u0003P\u0003P\u0003Q\u0003Q\u0003R\u0003R\u0003S\u0003",
    "S\u0003T\u0003T\u0003U\u0003U\u0003V\u0003V\u0005V\u0169\nV\u0003W\u0003",
    "W\u0003W\u0003W\u0003W\u0003W\u0003X\u0006X\u0172\nX\rX\u000eX\u0173",
    "\u0003Y\u0003Y\u0003Y\u0003Y\u0007Y\u017a\nY\fY\u000eY\u017d\u000bY",
    "\u0003Z\u0006Z\u0180\nZ\rZ\u000eZ\u0181\u0003Z\u0003Z\u0002\u0002[\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f",
    "\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a",
    "3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.",
    "[/]0_1a2c3e4g5i6k7m8o9q:s;u<w=y>{?}@\u007fA\u0081B\u0083C\u0085D\u0087",
    "E\u0089F\u008bG\u008dH\u008fI\u0091J\u0093K\u0095L\u0097M\u0099N\u009b",
    "O\u009dP\u009fQ\u00a1R\u00a3S\u00a5\u0002\u00a7\u0002\u00a9\u0002\u00ab",
    "\u0002\u00adT\u00afU\u00b1V\u00b3W\u0003\u0002\u0007\u0003\u00022;\u0004",
    "\u0002C\\c|\u0004\u0002CHch\u0004\u0002//aa\u0005\u0002\u000b\f\u000f",
    "\u000f\"\"\u0002\u0186\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005",
    "\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t",
    "\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r",
    "\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011",
    "\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015",
    "\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019",
    "\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d",
    "\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!",
    "\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003",
    "\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002",
    "\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002",
    "\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002",
    "\u00023\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u0002",
    "7\u0003\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002;\u0003",
    "\u0002\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002",
    "\u0002\u0002\u0002A\u0003\u0002\u0002\u0002\u0002C\u0003\u0002\u0002",
    "\u0002\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003\u0002\u0002\u0002",
    "\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003\u0002\u0002\u0002\u0002",
    "M\u0003\u0002\u0002\u0002\u0002O\u0003\u0002\u0002\u0002\u0002Q\u0003",
    "\u0002\u0002\u0002\u0002S\u0003\u0002\u0002\u0002\u0002U\u0003\u0002",
    "\u0002\u0002\u0002W\u0003\u0002\u0002\u0002\u0002Y\u0003\u0002\u0002",
    "\u0002\u0002[\u0003\u0002\u0002\u0002\u0002]\u0003\u0002\u0002\u0002",
    "\u0002_\u0003\u0002\u0002\u0002\u0002a\u0003\u0002\u0002\u0002\u0002",
    "c\u0003\u0002\u0002\u0002\u0002e\u0003\u0002\u0002\u0002\u0002g\u0003",
    "\u0002\u0002\u0002\u0002i\u0003\u0002\u0002\u0002\u0002k\u0003\u0002",
    "\u0002\u0002\u0002m\u0003\u0002\u0002\u0002\u0002o\u0003\u0002\u0002",
    "\u0002\u0002q\u0003\u0002\u0002\u0002\u0002s\u0003\u0002\u0002\u0002",
    "\u0002u\u0003\u0002\u0002\u0002\u0002w\u0003\u0002\u0002\u0002\u0002",
    "y\u0003\u0002\u0002\u0002\u0002{\u0003\u0002\u0002\u0002\u0002}\u0003",
    "\u0002\u0002\u0002\u0002\u007f\u0003\u0002\u0002\u0002\u0002\u0081\u0003",
    "\u0002\u0002\u0002\u0002\u0083\u0003\u0002\u0002\u0002\u0002\u0085\u0003",
    "\u0002\u0002\u0002\u0002\u0087\u0003\u0002\u0002\u0002\u0002\u0089\u0003",
    "\u0002\u0002\u0002\u0002\u008b\u0003\u0002\u0002\u0002\u0002\u008d\u0003",
    "\u0002\u0002\u0002\u0002\u008f\u0003\u0002\u0002\u0002\u0002\u0091\u0003",
    "\u0002\u0002\u0002\u0002\u0093\u0003\u0002\u0002\u0002\u0002\u0095\u0003",
    "\u0002\u0002\u0002\u0002\u0097\u0003\u0002\u0002\u0002\u0002\u0099\u0003",
    "\u0002\u0002\u0002\u0002\u009b\u0003\u0002\u0002\u0002\u0002\u009d\u0003",
    "\u0002\u0002\u0002\u0002\u009f\u0003\u0002\u0002\u0002\u0002\u00a1\u0003",
    "\u0002\u0002\u0002\u0002\u00a3\u0003\u0002\u0002\u0002\u0002\u00ad\u0003",
    "\u0002\u0002\u0002\u0002\u00af\u0003\u0002\u0002\u0002\u0002\u00b1\u0003",
    "\u0002\u0002\u0002\u0002\u00b3\u0003\u0002\u0002\u0002\u0003\u00b5\u0003",
    "\u0002\u0002\u0002\u0005\u00b7\u0003\u0002\u0002\u0002\u0007\u00ba\u0003",
    "\u0002\u0002\u0002\t\u00bc\u0003\u0002\u0002\u0002\u000b\u00be\u0003",
    "\u0002\u0002\u0002\r\u00c0\u0003\u0002\u0002\u0002\u000f\u00c2\u0003",
    "\u0002\u0002\u0002\u0011\u00c9\u0003\u0002\u0002\u0002\u0013\u00cb\u0003",
    "\u0002\u0002\u0002\u0015\u00cd\u0003\u0002\u0002\u0002\u0017\u00cf\u0003",
    "\u0002\u0002\u0002\u0019\u00d1\u0003\u0002\u0002\u0002\u001b\u00d4\u0003",
    "\u0002\u0002\u0002\u001d\u00d7\u0003\u0002\u0002\u0002\u001f\u00d9\u0003",
    "\u0002\u0002\u0002!\u00db\u0003\u0002\u0002\u0002#\u00de\u0003\u0002",
    "\u0002\u0002%\u00e0\u0003\u0002\u0002\u0002\'\u00e2\u0003\u0002\u0002",
    "\u0002)\u00e4\u0003\u0002\u0002\u0002+\u00e6\u0003\u0002\u0002\u0002",
    "-\u00e8\u0003\u0002\u0002\u0002/\u00ea\u0003\u0002\u0002\u00021\u00ec",
    "\u0003\u0002\u0002\u00023\u00ee\u0003\u0002\u0002\u00025\u00f0\u0003",
    "\u0002\u0002\u00027\u00f2\u0003\u0002\u0002\u00029\u00f4\u0003\u0002",
    "\u0002\u0002;\u00f6\u0003\u0002\u0002\u0002=\u00f8\u0003\u0002\u0002",
    "\u0002?\u00fa\u0003\u0002\u0002\u0002A\u00fc\u0003\u0002\u0002\u0002",
    "C\u00fe\u0003\u0002\u0002\u0002E\u0100\u0003\u0002\u0002\u0002G\u0102",
    "\u0003\u0002\u0002\u0002I\u0104\u0003\u0002\u0002\u0002K\u0106\u0003",
    "\u0002\u0002\u0002M\u0108\u0003\u0002\u0002\u0002O\u010a\u0003\u0002",
    "\u0002\u0002Q\u010c\u0003\u0002\u0002\u0002S\u010e\u0003\u0002\u0002",
    "\u0002U\u0110\u0003\u0002\u0002\u0002W\u0112\u0003\u0002\u0002\u0002",
    "Y\u0114\u0003\u0002\u0002\u0002[\u0116\u0003\u0002\u0002\u0002]\u0118",
    "\u0003\u0002\u0002\u0002_\u011a\u0003\u0002\u0002\u0002a\u011c\u0003",
    "\u0002\u0002\u0002c\u011e\u0003\u0002\u0002\u0002e\u0120\u0003\u0002",
    "\u0002\u0002g\u0122\u0003\u0002\u0002\u0002i\u0124\u0003\u0002\u0002",
    "\u0002k\u0126\u0003\u0002\u0002\u0002m\u0128\u0003\u0002\u0002\u0002",
    "o\u012a\u0003\u0002\u0002\u0002q\u012c\u0003\u0002\u0002\u0002s\u012e",
    "\u0003\u0002\u0002\u0002u\u0130\u0003\u0002\u0002\u0002w\u0132\u0003",
    "\u0002\u0002\u0002y\u0134\u0003\u0002\u0002\u0002{\u0136\u0003\u0002",
    "\u0002\u0002}\u0138\u0003\u0002\u0002\u0002\u007f\u013a\u0003\u0002",
    "\u0002\u0002\u0081\u013c\u0003\u0002\u0002\u0002\u0083\u013e\u0003\u0002",
    "\u0002\u0002\u0085\u0140\u0003\u0002\u0002\u0002\u0087\u0142\u0003\u0002",
    "\u0002\u0002\u0089\u0144\u0003\u0002\u0002\u0002\u008b\u0146\u0003\u0002",
    "\u0002\u0002\u008d\u0148\u0003\u0002\u0002\u0002\u008f\u014a\u0003\u0002",
    "\u0002\u0002\u0091\u014c\u0003\u0002\u0002\u0002\u0093\u014e\u0003\u0002",
    "\u0002\u0002\u0095\u0150\u0003\u0002\u0002\u0002\u0097\u0152\u0003\u0002",
    "\u0002\u0002\u0099\u0154\u0003\u0002\u0002\u0002\u009b\u0156\u0003\u0002",
    "\u0002\u0002\u009d\u0158\u0003\u0002\u0002\u0002\u009f\u015a\u0003\u0002",
    "\u0002\u0002\u00a1\u015c\u0003\u0002\u0002\u0002\u00a3\u015e\u0003\u0002",
    "\u0002\u0002\u00a5\u0160\u0003\u0002\u0002\u0002\u00a7\u0162\u0003\u0002",
    "\u0002\u0002\u00a9\u0164\u0003\u0002\u0002\u0002\u00ab\u0168\u0003\u0002",
    "\u0002\u0002\u00ad\u016a\u0003\u0002\u0002\u0002\u00af\u0171\u0003\u0002",
    "\u0002\u0002\u00b1\u0175\u0003\u0002\u0002\u0002\u00b3\u017f\u0003\u0002",
    "\u0002\u0002\u00b5\u00b6\u0007-\u0002\u0002\u00b6\u0004\u0003\u0002",
    "\u0002\u0002\u00b7\u00b8\u0007?\u0002\u0002\u00b8\u00b9\u0007@\u0002",
    "\u0002\u00b9\u0006\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007,\u0002",
    "\u0002\u00bb\b\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007/\u0002\u0002",
    "\u00bd\n\u0003\u0002\u0002\u0002\u00be\u00bf\u0007`\u0002\u0002\u00bf",
    "\f\u0003\u0002\u0002\u0002\u00c0\u00c1\u0007(\u0002\u0002\u00c1\u000e",
    "\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007v\u0002\u0002\u00c3\u00c4",
    "\u0007c\u0002\u0002\u00c4\u00c5\u0007i\u0002\u0002\u00c5\u00c6\u0007",
    "u\u0002\u0002\u00c6\u00c7\u0007?\u0002\u0002\u00c7\u00c8\u0007]\u0002",
    "\u0002\u00c8\u0010\u0003\u0002\u0002\u0002\u00c9\u00ca\u0007.\u0002",
    "\u0002\u00ca\u0012\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007_\u0002",
    "\u0002\u00cc\u0014\u0003\u0002\u0002\u0002\u00cd\u00ce\u0007?\u0002",
    "\u0002\u00ce\u0016\u0003\u0002\u0002\u0002\u00cf\u00d0\u0007]\u0002",
    "\u0002\u00d0\u0018\u0003\u0002\u0002\u0002\u00d1\u00d2\u0007/\u0002",
    "\u0002\u00d2\u00d3\u0007@\u0002\u0002\u00d3\u001a\u0003\u0002\u0002",
    "\u0002\u00d4\u00d5\u0007&\u0002\u0002\u00d5\u00d6\u0007<\u0002\u0002",
    "\u00d6\u001c\u0003\u0002\u0002\u0002\u00d7\u00d8\u00071\u0002\u0002",
    "\u00d8\u001e\u0003\u0002\u0002\u0002\u00d9\u00da\u0007B\u0002\u0002",
    "\u00da \u0003\u0002\u0002\u0002\u00db\u00dc\u0007%\u0002\u0002\u00dc",
    "\u00dd\u0007<\u0002\u0002\u00dd\"\u0003\u0002\u0002\u0002\u00de\u00df",
    "\u0007a\u0002\u0002\u00df$\u0003\u0002\u0002\u0002\u00e0\u00e1\u0007",
    "3\u0002\u0002\u00e1&\u0003\u0002\u0002\u0002\u00e2\u00e3\u00074\u0002",
    "\u0002\u00e3(\u0003\u0002\u0002\u0002\u00e4\u00e5\u00075\u0002\u0002",
    "\u00e5*\u0003\u0002\u0002\u0002\u00e6\u00e7\u00076\u0002\u0002\u00e7",
    ",\u0003\u0002\u0002\u0002\u00e8\u00e9\u00077\u0002\u0002\u00e9.\u0003",
    "\u0002\u0002\u0002\u00ea\u00eb\u00078\u0002\u0002\u00eb0\u0003\u0002",
    "\u0002\u0002\u00ec\u00ed\u00079\u0002\u0002\u00ed2\u0003\u0002\u0002",
    "\u0002\u00ee\u00ef\u0007:\u0002\u0002\u00ef4\u0003\u0002\u0002\u0002",
    "\u00f0\u00f1\u0007;\u0002\u0002\u00f16\u0003\u0002\u0002\u0002\u00f2",
    "\u00f3\u0007C\u0002\u0002\u00f38\u0003\u0002\u0002\u0002\u00f4\u00f5",
    "\u0007D\u0002\u0002\u00f5:\u0003\u0002\u0002\u0002\u00f6\u00f7\u0007",
    "E\u0002\u0002\u00f7<\u0003\u0002\u0002\u0002\u00f8\u00f9\u0007F\u0002",
    "\u0002\u00f9>\u0003\u0002\u0002\u0002\u00fa\u00fb\u0007G\u0002\u0002",
    "\u00fb@\u0003\u0002\u0002\u0002\u00fc\u00fd\u0007H\u0002\u0002\u00fd",
    "B\u0003\u0002\u0002\u0002\u00fe\u00ff\u0007I\u0002\u0002\u00ffD\u0003",
    "\u0002\u0002\u0002\u0100\u0101\u0007J\u0002\u0002\u0101F\u0003\u0002",
    "\u0002\u0002\u0102\u0103\u0007K\u0002\u0002\u0103H\u0003\u0002\u0002",
    "\u0002\u0104\u0105\u0007L\u0002\u0002\u0105J\u0003\u0002\u0002\u0002",
    "\u0106\u0107\u0007M\u0002\u0002\u0107L\u0003\u0002\u0002\u0002\u0108",
    "\u0109\u0007N\u0002\u0002\u0109N\u0003\u0002\u0002\u0002\u010a\u010b",
    "\u0007O\u0002\u0002\u010bP\u0003\u0002\u0002\u0002\u010c\u010d\u0007",
    "P\u0002\u0002\u010dR\u0003\u0002\u0002\u0002\u010e\u010f\u0007Q\u0002",
    "\u0002\u010fT\u0003\u0002\u0002\u0002\u0110\u0111\u0007R\u0002\u0002",
    "\u0111V\u0003\u0002\u0002\u0002\u0112\u0113\u0007S\u0002\u0002\u0113",
    "X\u0003\u0002\u0002\u0002\u0114\u0115\u0007T\u0002\u0002\u0115Z\u0003",
    "\u0002\u0002\u0002\u0116\u0117\u0007U\u0002\u0002\u0117\\\u0003\u0002",
    "\u0002\u0002\u0118\u0119\u0007V\u0002\u0002\u0119^\u0003\u0002\u0002",
    "\u0002\u011a\u011b\u0007W\u0002\u0002\u011b`\u0003\u0002\u0002\u0002",
    "\u011c\u011d\u0007X\u0002\u0002\u011db\u0003\u0002\u0002\u0002\u011e",
    "\u011f\u0007Y\u0002\u0002\u011fd\u0003\u0002\u0002\u0002\u0120\u0121",
    "\u0007Z\u0002\u0002\u0121f\u0003\u0002\u0002\u0002\u0122\u0123\u0007",
    "[\u0002\u0002\u0123h\u0003\u0002\u0002\u0002\u0124\u0125\u0007\\\u0002",
    "\u0002\u0125j\u0003\u0002\u0002\u0002\u0126\u0127\u0007c\u0002\u0002",
    "\u0127l\u0003\u0002\u0002\u0002\u0128\u0129\u0007d\u0002\u0002\u0129",
    "n\u0003\u0002\u0002\u0002\u012a\u012b\u0007e\u0002\u0002\u012bp\u0003",
    "\u0002\u0002\u0002\u012c\u012d\u0007f\u0002\u0002\u012dr\u0003\u0002",
    "\u0002\u0002\u012e\u012f\u0007g\u0002\u0002\u012ft\u0003\u0002\u0002",
    "\u0002\u0130\u0131\u0007h\u0002\u0002\u0131v\u0003\u0002\u0002\u0002",
    "\u0132\u0133\u0007i\u0002\u0002\u0133x\u0003\u0002\u0002\u0002\u0134",
    "\u0135\u0007j\u0002\u0002\u0135z\u0003\u0002\u0002\u0002\u0136\u0137",
    "\u0007k\u0002\u0002\u0137|\u0003\u0002\u0002\u0002\u0138\u0139\u0007",
    "l\u0002\u0002\u0139~\u0003\u0002\u0002\u0002\u013a\u013b\u0007m\u0002",
    "\u0002\u013b\u0080\u0003\u0002\u0002\u0002\u013c\u013d\u0007n\u0002",
    "\u0002\u013d\u0082\u0003\u0002\u0002\u0002\u013e\u013f\u0007o\u0002",
    "\u0002\u013f\u0084\u0003\u0002\u0002\u0002\u0140\u0141\u0007p\u0002",
    "\u0002\u0141\u0086\u0003\u0002\u0002\u0002\u0142\u0143\u0007q\u0002",
    "\u0002\u0143\u0088\u0003\u0002\u0002\u0002\u0144\u0145\u0007r\u0002",
    "\u0002\u0145\u008a\u0003\u0002\u0002\u0002\u0146\u0147\u0007s\u0002",
    "\u0002\u0147\u008c\u0003\u0002\u0002\u0002\u0148\u0149\u0007t\u0002",
    "\u0002\u0149\u008e\u0003\u0002\u0002\u0002\u014a\u014b\u0007u\u0002",
    "\u0002\u014b\u0090\u0003\u0002\u0002\u0002\u014c\u014d\u0007v\u0002",
    "\u0002\u014d\u0092\u0003\u0002\u0002\u0002\u014e\u014f\u0007w\u0002",
    "\u0002\u014f\u0094\u0003\u0002\u0002\u0002\u0150\u0151\u0007x\u0002",
    "\u0002\u0151\u0096\u0003\u0002\u0002\u0002\u0152\u0153\u0007y\u0002",
    "\u0002\u0153\u0098\u0003\u0002\u0002\u0002\u0154\u0155\u0007z\u0002",
    "\u0002\u0155\u009a\u0003\u0002\u0002\u0002\u0156\u0157\u0007{\u0002",
    "\u0002\u0157\u009c\u0003\u0002\u0002\u0002\u0158\u0159\u0007|\u0002",
    "\u0002\u0159\u009e\u0003\u0002\u0002\u0002\u015a\u015b\u0007\u0080\u0002",
    "\u0002\u015b\u00a0\u0003\u0002\u0002\u0002\u015c\u015d\u00070\u0002",
    "\u0002\u015d\u00a2\u0003\u0002\u0002\u0002\u015e\u015f\u00072\u0002",
    "\u0002\u015f\u00a4\u0003\u0002\u0002\u0002\u0160\u0161\t\u0002\u0002",
    "\u0002\u0161\u00a6\u0003\u0002\u0002\u0002\u0162\u0163\t\u0003\u0002",
    "\u0002\u0163\u00a8\u0003\u0002\u0002\u0002\u0164\u0165\t\u0004\u0002",
    "\u0002\u0165\u00aa\u0003\u0002\u0002\u0002\u0166\u0169\u0005\u00a5S",
    "\u0002\u0167\u0169\u0005\u00a9U\u0002\u0168\u0166\u0003\u0002\u0002",
    "\u0002\u0168\u0167\u0003\u0002\u0002\u0002\u0169\u00ac\u0003\u0002\u0002",
    "\u0002\u016a\u016b\u0007u\u0002\u0002\u016b\u016c\u0007e\u0002\u0002",
    "\u016c\u016d\u0007q\u0002\u0002\u016d\u016e\u0007r\u0002\u0002\u016e",
    "\u016f\u0007g\u0002\u0002\u016f\u00ae\u0003\u0002\u0002\u0002\u0170",
    "\u0172\u0005\u00a5S\u0002\u0171\u0170\u0003\u0002\u0002\u0002\u0172",
    "\u0173\u0003\u0002\u0002\u0002\u0173\u0171\u0003\u0002\u0002\u0002\u0173",
    "\u0174\u0003\u0002\u0002\u0002\u0174\u00b0\u0003\u0002\u0002\u0002\u0175",
    "\u017b\u0005\u00a7T\u0002\u0176\u017a\u0005\u00a7T\u0002\u0177\u017a",
    "\u0005\u00afX\u0002\u0178\u017a\t\u0005\u0002\u0002\u0179\u0176\u0003",
    "\u0002\u0002\u0002\u0179\u0177\u0003\u0002\u0002\u0002\u0179\u0178\u0003",
    "\u0002\u0002\u0002\u017a\u017d\u0003\u0002\u0002\u0002\u017b\u0179\u0003",
    "\u0002\u0002\u0002\u017b\u017c\u0003\u0002\u0002\u0002\u017c\u00b2\u0003",
    "\u0002\u0002\u0002\u017d\u017b\u0003\u0002\u0002\u0002\u017e\u0180\t",
    "\u0006\u0002\u0002\u017f\u017e\u0003\u0002\u0002\u0002\u0180\u0181\u0003",
    "\u0002\u0002\u0002\u0181\u017f\u0003\u0002\u0002\u0002\u0181\u0182\u0003",
    "\u0002\u0002\u0002\u0182\u0183\u0003\u0002\u0002\u0002\u0183\u0184\b",
    "Z\u0002\u0002\u0184\u00b4\u0003\u0002\u0002\u0002\b\u0002\u0168\u0173",
    "\u0179\u017b\u0181\u0003\b\u0002\u0002"].join("");


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
mappingLexer.T__12 = 13;
mappingLexer.T__13 = 14;
mappingLexer.T__14 = 15;
mappingLexer.T__15 = 16;
mappingLexer.T__16 = 17;
mappingLexer.T__17 = 18;
mappingLexer.T__18 = 19;
mappingLexer.T__19 = 20;
mappingLexer.T__20 = 21;
mappingLexer.T__21 = 22;
mappingLexer.T__22 = 23;
mappingLexer.T__23 = 24;
mappingLexer.T__24 = 25;
mappingLexer.T__25 = 26;
mappingLexer.T__26 = 27;
mappingLexer.T__27 = 28;
mappingLexer.T__28 = 29;
mappingLexer.T__29 = 30;
mappingLexer.T__30 = 31;
mappingLexer.T__31 = 32;
mappingLexer.T__32 = 33;
mappingLexer.T__33 = 34;
mappingLexer.T__34 = 35;
mappingLexer.T__35 = 36;
mappingLexer.T__36 = 37;
mappingLexer.T__37 = 38;
mappingLexer.T__38 = 39;
mappingLexer.T__39 = 40;
mappingLexer.T__40 = 41;
mappingLexer.T__41 = 42;
mappingLexer.T__42 = 43;
mappingLexer.T__43 = 44;
mappingLexer.T__44 = 45;
mappingLexer.T__45 = 46;
mappingLexer.T__46 = 47;
mappingLexer.T__47 = 48;
mappingLexer.T__48 = 49;
mappingLexer.T__49 = 50;
mappingLexer.T__50 = 51;
mappingLexer.T__51 = 52;
mappingLexer.T__52 = 53;
mappingLexer.T__53 = 54;
mappingLexer.T__54 = 55;
mappingLexer.T__55 = 56;
mappingLexer.T__56 = 57;
mappingLexer.T__57 = 58;
mappingLexer.T__58 = 59;
mappingLexer.T__59 = 60;
mappingLexer.T__60 = 61;
mappingLexer.T__61 = 62;
mappingLexer.T__62 = 63;
mappingLexer.T__63 = 64;
mappingLexer.T__64 = 65;
mappingLexer.T__65 = 66;
mappingLexer.T__66 = 67;
mappingLexer.T__67 = 68;
mappingLexer.T__68 = 69;
mappingLexer.T__69 = 70;
mappingLexer.T__70 = 71;
mappingLexer.T__71 = 72;
mappingLexer.T__72 = 73;
mappingLexer.T__73 = 74;
mappingLexer.T__74 = 75;
mappingLexer.T__75 = 76;
mappingLexer.T__76 = 77;
mappingLexer.T__77 = 78;
mappingLexer.T__78 = 79;
mappingLexer.T__79 = 80;
mappingLexer.T__80 = 81;
mappingLexer.SCOPE = 82;
mappingLexer.INT = 83;
mappingLexer.ID = 84;
mappingLexer.WS = 85;

mappingLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

mappingLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

mappingLexer.prototype.literalNames = [ null, "'+'", "'=>'", "'*'", "'-'", 
                                        "'^'", "'&'", "'tags=['", "','", 
                                        "']'", "'='", "'['", "'->'", "'$:'", 
                                        "'/'", "'@'", "'#:'", "'_'", "'1'", 
                                        "'2'", "'3'", "'4'", "'5'", "'6'", 
                                        "'7'", "'8'", "'9'", "'A'", "'B'", 
                                        "'C'", "'D'", "'E'", "'F'", "'G'", 
                                        "'H'", "'I'", "'J'", "'K'", "'L'", 
                                        "'M'", "'N'", "'O'", "'P'", "'Q'", 
                                        "'R'", "'S'", "'T'", "'U'", "'V'", 
                                        "'W'", "'X'", "'Y'", "'Z'", "'a'", 
                                        "'b'", "'c'", "'d'", "'e'", "'f'", 
                                        "'g'", "'h'", "'i'", "'j'", "'k'", 
                                        "'l'", "'m'", "'n'", "'o'", "'p'", 
                                        "'q'", "'r'", "'s'", "'t'", "'u'", 
                                        "'v'", "'w'", "'x'", "'y'", "'z'", 
                                        "'~'", "'.'", "'0'", "'scope'" ];

mappingLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         null, null, null, null, "SCOPE", 
                                         "INT", "ID", "WS" ];

mappingLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                     "T__5", "T__6", "T__7", "T__8", "T__9", 
                                     "T__10", "T__11", "T__12", "T__13", 
                                     "T__14", "T__15", "T__16", "T__17", 
                                     "T__18", "T__19", "T__20", "T__21", 
                                     "T__22", "T__23", "T__24", "T__25", 
                                     "T__26", "T__27", "T__28", "T__29", 
                                     "T__30", "T__31", "T__32", "T__33", 
                                     "T__34", "T__35", "T__36", "T__37", 
                                     "T__38", "T__39", "T__40", "T__41", 
                                     "T__42", "T__43", "T__44", "T__45", 
                                     "T__46", "T__47", "T__48", "T__49", 
                                     "T__50", "T__51", "T__52", "T__53", 
                                     "T__54", "T__55", "T__56", "T__57", 
                                     "T__58", "T__59", "T__60", "T__61", 
                                     "T__62", "T__63", "T__64", "T__65", 
                                     "T__66", "T__67", "T__68", "T__69", 
                                     "T__70", "T__71", "T__72", "T__73", 
                                     "T__74", "T__75", "T__76", "T__77", 
                                     "T__78", "T__79", "T__80", "DIGIT", 
                                     "ALPHABET", "HEX_ALPHABET", "SHA_DIGIT", 
                                     "SCOPE", "INT", "ID", "WS" ];

mappingLexer.prototype.grammarFileName = "mapping.g4";



exports.mappingLexer = mappingLexer;

