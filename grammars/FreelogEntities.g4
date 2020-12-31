grammar FreelogEntities;

import Semver;

//------ Comments
LINE_COMMENT  : '//' .*? '\n' -> skip;
BLOCK_COMMENT : '/*' .*? '*/' -> skip;
//------ Whitespace
WS : [ \t\n\r]+ -> skip;

resource_id
  : user_name '/' resource_name ('@' valid_semver)??
  ;

user_name
  : ID
  ;

resource_name
  : ID
  ;

object_id
  : bucket_name '/' object_name
  ;

bucket_name
  : ID
  ;

object_name
  : ID
  ;

exhibit_name
  : ID
  ;

fragment ID
  : NAME_CHAR (NAME_CHAR)*
  ;

// 组装后的目标名称标准通用字符集
fragment NAME_CHAR
  : ALPHABET
  | DIGIT
  | SYMBOL
  | CHINESE_WORD
  ;

// 数字字符
fragment DIGIT : [0-9] ;
// 英文大小写字母
fragment ALPHABET : [a-zA-Z];
// 中文字符
fragment CHINESE_WORD
  : '\u4e00'..'\u9fef'
  ;
// 符号设定
fragment SYMBOL
  : '_' | '(' | ')' | '（' | '）' | '-' | '[' | ']' | '{' | '}'
  ;

standard_string
  : CHAR (CHAR)*
  ;

fragment CHAR
  : 'A'..'Z' | 'a'..'z'
  | '\u00C0'..'\u00D6'
  | '\u00D8'..'\u00F6'
  | '\u00F8'..'\u02FF'
  | '\u0370'..'\u037D'
  | '\u037F'..'\u1FFF'
  | '\u200C'..'\u200D'
  | '\u2070'..'\u218F'
  | '\u2C00'..'\u2FEF'
  | '\u3001'..'\uD7FF'
  | '\uF900'..'\uFDCF'
  | '\uFDF0'..'\uFFFD'
  | '0'..'9'
  | '_'
  | '\u00B7'
  | '\u0300'..'\u036F'
  | '\u203F'..'\u2040'
  ;
