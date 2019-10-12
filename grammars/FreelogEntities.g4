grammar FreelogEntities;

import Semver;

fragment DIGIT : [0-9] ;
fragment ALPHABET : [a-zA-Z];
//fragment HEX_ALPHABET : [a-fA-F];
//fragment SHA_DIGIT : (DIGIT|HEX_ALPHABET);

SCOPE
  : 'scope'
  ;

INT:  DIGIT+;

fragment CHINESE_WORD
  : '\u4e00'..'\u9fef'
  ;

fragment CHAR
  : ALPHABET
  | CHINESE_WORD
//  | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0'
  | DIGIT
  | '_' | '(' | ')' | '（' | '）'
  ;

ID
  : CHAR (CHAR)*
  | CHAR (CHAR | '-') * CHAR
  ;

//------ Comments
LINE_COMMENT  : '//' .*? '\n' -> skip;
BLOCK_COMMENT : '/*' .*? '*/' -> skip;

//------ Whitespace
WS : [ \t\n\r]+ -> skip;

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
