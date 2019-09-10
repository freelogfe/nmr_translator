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

ID
  : ALPHABET (ALPHABET | INT | '_' | '-')*
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
  : char1234 (char1234)*
  | char1234 strike_char1234* char1234
  ;

user_name
  : char1234 (char1234)*
  | char1234 strike_char1234* char1234
  ;

strike_char1234
  : char1234
  | '-'
  ;

char1234
  : digit1234
  | letter1234
  | '_'
  ;

digit1234
    : '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    ;

letter1234
    : 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J'
    | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T'
    | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | 'a' | 'b' | 'c' | 'd'
    | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n'
    | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x'
    | 'y' | 'z'
    ;