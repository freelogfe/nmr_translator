grammar FreelogEntities;

import Semver;

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
  : '_' | '(' | ')' | '（' | '）' | '-'
  ;

// 组装后的标准通用字符集
fragment CHAR
  : ALPHABET
  | DIGIT
//  | SYMBOL
//  | CHINESE_WORD
  ;

ID
  : CHAR (CHAR)*
  ;

//------ Comments
LINE_COMMENT  : '//' .*? '\n' -> skip;
BLOCK_COMMENT : '/*' .*? '*/' -> skip;

//------ Whitespace
WS : [ \t\n\r]+ -> skip;

release_id
  : user_name '/' release_name ('@' valid_semver)??
  ;

mock_id
  : bucket_name '/' mock_name
  ;

presentation_name
  : ( '.' | ID)*
  ;

release_name
  : ID
  ;

mock_name
  : ID
  ;

bucket_name
  : ID
  ;

user_name
  : ID
  ;
