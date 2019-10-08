grammar freelogEntities;

import semver;

fragment DIGIT : [0-9] ;
fragment ALPHABET : [a-zA-Z];
fragment HEX_ALPHABET : [a-fA-F];
fragment SHA_DIGIT : (DIGIT|HEX_ALPHABET);

SCOPE
  : 'scope'
  ;

INT:  DIGIT+;

CHAR
  : ALPHABET
  | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0'
  | '_' | '(' | ')' | '（' | '）' | '.'
  | '\u4e00'..'\u9fef'
  ;

//CHINESE_WORD
//  : 'A'..'Z' | 'a'..'z'
//  | '0'..'9'
//  ;

ID
  : CHAR (CHAR)*
  | CHAR (CHAR | '-') * CHAR
  ;

//SHA_ID_4MIN
//  : SHA_DIGIT SHA_DIGIT SHA_DIGIT SHA_DIGIT SHA_DIGIT*
//  ;

// 双斜线 注释
SL_COMMENT
    : '//' .*? '\n' -> skip
    ;
// 忽略 空白字符
WS : [ \t\r\n]+ -> skip;

//resource_id : '@:' SHA_ID_4MIN;

release_id
  : '$:' user_name '/' release_name ('@' valid_semver)?
  ;

mock_id
  : '#:' bucket_name '/' mock_name
  ;

presentation_name
  : ID
  | INT
  ;

release_name
  : ID
  | INT
  ;

mock_name
  : ID
  | INT
  ;

bucket_name
  : ID
  | INT
  ;

user_name
  : ID
  | INT
  ;
