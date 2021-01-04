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

object_id
  : bucket_name '/' bucket_name
  ;

exhibit_name
  : ID
  ;

resource_name
  : ID
  ;

object_name
  : ID
  ;

bucket_name
  : ID
  ;

user_name
  : ID
  ;

ID
  : CHAR (CHAR)*
  ;

// 组装后的标准通用字符集
fragment CHAR
  : ALPHABET
  | DIGIT
  | SYMBOL
  | CHINESE_WORD
  ;

// 数字字符
fragment DIGIT : [0-9];
// 英文大小写字母
fragment ALPHABET : [a-zA-Z];
// 中文字符
fragment CHINESE_WORD
  : '\u4e00'..'\u9fef'
  ;
// 符号设定
fragment SYMBOL
  : '_' | '(' | ')' | '（' | '）' | '-' | '[' | ']' | '{' | '}' | '.'
  ;
