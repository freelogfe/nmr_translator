grammar Semver;

//fragment ONE2NINE : [1-9];
//fragment ALPHABET : [a-zA-Z];

valid_semver
    : prefix? version_core
    | prefix? version_core '-' preRelease
    | prefix? version_core '+' build
    | prefix? version_core '-' preRelease '+' build
    ;

prefix
    : '^'
    | '~'
    ;

version_core
    : major '.' minor '.' patch
    ;

major
    : numeric_identifier
    ;

minor
    : numeric_identifier
    ;

patch
    : numeric_identifier
    ;

preRelease
    : dotSeparated_preRelease_identifiers
    ;

dotSeparated_preRelease_identifiers
    : preRelease_identifier
    | preRelease_identifier '.' dotSeparated_preRelease_identifiers
    ;

build
    : dotSeparated_build_identifiers
    ;

dotSeparated_build_identifiers
    : build_identifier
    | build_identifier '.' dotSeparated_build_identifiers
    ;

preRelease_identifier
    : alphanumeric_identifier
    | numeric_identifier
    ;

build_identifier
    : alphanumeric_identifier
    | digits
    ;

alphanumeric_identifier
    : nonDigit
    | nonDigit identifier_characters
    | identifier_characters nonDigit
    | identifier_characters nonDigit identifier_characters
    ;

numeric_identifier
    : '0'
    | positive_digit
    | positive_digit digits
    ;

identifier_characters
    : identifier_character
    | identifier_character identifier_characters
    ;

identifier_character
    : digit
    | nonDigit
    ;

nonDigit
    : letter
    | '-'
    ;

digits
    : digit
    | digit digits
    ;

digit
    : '0'
    | positive_digit
    ;

positive_digit
    : '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    ;

letter
    : 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J'
    | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T'
    | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' | 'a' | 'b' | 'c' | 'd'
    | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n'
    | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x'
    | 'y' | 'z'
    ;
