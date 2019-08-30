// Generated from semver.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by semverParser.
function semverListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

semverListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
semverListener.prototype.constructor = semverListener;

// Enter a parse tree produced by semverParser#valid_semver.
semverListener.prototype.enterValid_semver = function(ctx) {
};

// Exit a parse tree produced by semverParser#valid_semver.
semverListener.prototype.exitValid_semver = function(ctx) {
};


// Enter a parse tree produced by semverParser#version_core.
semverListener.prototype.enterVersion_core = function(ctx) {
};

// Exit a parse tree produced by semverParser#version_core.
semverListener.prototype.exitVersion_core = function(ctx) {
};


// Enter a parse tree produced by semverParser#major.
semverListener.prototype.enterMajor = function(ctx) {
};

// Exit a parse tree produced by semverParser#major.
semverListener.prototype.exitMajor = function(ctx) {
};


// Enter a parse tree produced by semverParser#minor.
semverListener.prototype.enterMinor = function(ctx) {
};

// Exit a parse tree produced by semverParser#minor.
semverListener.prototype.exitMinor = function(ctx) {
};


// Enter a parse tree produced by semverParser#patch.
semverListener.prototype.enterPatch = function(ctx) {
};

// Exit a parse tree produced by semverParser#patch.
semverListener.prototype.exitPatch = function(ctx) {
};


// Enter a parse tree produced by semverParser#preRelease.
semverListener.prototype.enterPreRelease = function(ctx) {
};

// Exit a parse tree produced by semverParser#preRelease.
semverListener.prototype.exitPreRelease = function(ctx) {
};


// Enter a parse tree produced by semverParser#dotSeparated_preRelease_identifiers.
semverListener.prototype.enterDotSeparated_preRelease_identifiers = function(ctx) {
};

// Exit a parse tree produced by semverParser#dotSeparated_preRelease_identifiers.
semverListener.prototype.exitDotSeparated_preRelease_identifiers = function(ctx) {
};


// Enter a parse tree produced by semverParser#build.
semverListener.prototype.enterBuild = function(ctx) {
};

// Exit a parse tree produced by semverParser#build.
semverListener.prototype.exitBuild = function(ctx) {
};


// Enter a parse tree produced by semverParser#dotSeparated_build_identifiers.
semverListener.prototype.enterDotSeparated_build_identifiers = function(ctx) {
};

// Exit a parse tree produced by semverParser#dotSeparated_build_identifiers.
semverListener.prototype.exitDotSeparated_build_identifiers = function(ctx) {
};


// Enter a parse tree produced by semverParser#preRelease_identifier.
semverListener.prototype.enterPreRelease_identifier = function(ctx) {
};

// Exit a parse tree produced by semverParser#preRelease_identifier.
semverListener.prototype.exitPreRelease_identifier = function(ctx) {
};


// Enter a parse tree produced by semverParser#build_identifier.
semverListener.prototype.enterBuild_identifier = function(ctx) {
};

// Exit a parse tree produced by semverParser#build_identifier.
semverListener.prototype.exitBuild_identifier = function(ctx) {
};


// Enter a parse tree produced by semverParser#alphanumeric_identifier.
semverListener.prototype.enterAlphanumeric_identifier = function(ctx) {
};

// Exit a parse tree produced by semverParser#alphanumeric_identifier.
semverListener.prototype.exitAlphanumeric_identifier = function(ctx) {
};


// Enter a parse tree produced by semverParser#numeric_identifier.
semverListener.prototype.enterNumeric_identifier = function(ctx) {
};

// Exit a parse tree produced by semverParser#numeric_identifier.
semverListener.prototype.exitNumeric_identifier = function(ctx) {
};


// Enter a parse tree produced by semverParser#identifier_characters.
semverListener.prototype.enterIdentifier_characters = function(ctx) {
};

// Exit a parse tree produced by semverParser#identifier_characters.
semverListener.prototype.exitIdentifier_characters = function(ctx) {
};


// Enter a parse tree produced by semverParser#identifier_character.
semverListener.prototype.enterIdentifier_character = function(ctx) {
};

// Exit a parse tree produced by semverParser#identifier_character.
semverListener.prototype.exitIdentifier_character = function(ctx) {
};


// Enter a parse tree produced by semverParser#nonDigit.
semverListener.prototype.enterNonDigit = function(ctx) {
};

// Exit a parse tree produced by semverParser#nonDigit.
semverListener.prototype.exitNonDigit = function(ctx) {
};


// Enter a parse tree produced by semverParser#digits.
semverListener.prototype.enterDigits = function(ctx) {
};

// Exit a parse tree produced by semverParser#digits.
semverListener.prototype.exitDigits = function(ctx) {
};


// Enter a parse tree produced by semverParser#digit.
semverListener.prototype.enterDigit = function(ctx) {
};

// Exit a parse tree produced by semverParser#digit.
semverListener.prototype.exitDigit = function(ctx) {
};


// Enter a parse tree produced by semverParser#positive_digit.
semverListener.prototype.enterPositive_digit = function(ctx) {
};

// Exit a parse tree produced by semverParser#positive_digit.
semverListener.prototype.exitPositive_digit = function(ctx) {
};


// Enter a parse tree produced by semverParser#letter.
semverListener.prototype.enterLetter = function(ctx) {
};

// Exit a parse tree produced by semverParser#letter.
semverListener.prototype.exitLetter = function(ctx) {
};



exports.semverListener = semverListener;