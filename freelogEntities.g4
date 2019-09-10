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
  : ALPHABET | INT | '_'
  ;

ID
  : CHAR (CHAR)*
  | CHAR (CHAR | '-')* CHAR
  ;

//SHA_ID_4MIN
//  : SHA_DIGIT SHA_DIGIT SHA_DIGIT SHA_DIGIT SHA_DIGIT*
//  ;

WS  : [ \t\r\n]+ -> skip;

//resource_id : '@:' SHA_ID_4MIN;

release_id
  : '$:' user_name '/' release_name ('@' valid_semver)?
  ;

mock_id
  : '#:' bucket_name '/' mock_name
  ;

presentation_name
  : ID
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
