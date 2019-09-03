// Generated from mapping.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by mappingParser.
function mappingListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

mappingListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
mappingListener.prototype.constructor = mappingListener;

// Enter a parse tree produced by mappingParser#mapping_rules.
mappingListener.prototype.enterMapping_rules = function(ctx) {
};

// Exit a parse tree produced by mappingParser#mapping_rules.
mappingListener.prototype.exitMapping_rules = function(ctx) {
};


// Enter a parse tree produced by mappingParser#mapping_rule.
mappingListener.prototype.enterMapping_rule = function(ctx) {
};

// Exit a parse tree produced by mappingParser#mapping_rule.
mappingListener.prototype.exitMapping_rule = function(ctx) {
};


// Enter a parse tree produced by mappingParser#add_presentation_rule.
mappingListener.prototype.enterAdd_presentation_rule = function(ctx) {
};

// Exit a parse tree produced by mappingParser#add_presentation_rule.
mappingListener.prototype.exitAdd_presentation_rule = function(ctx) {
};


// Enter a parse tree produced by mappingParser#replace_presentation_rule.
mappingListener.prototype.enterReplace_presentation_rule = function(ctx) {
};

// Exit a parse tree produced by mappingParser#replace_presentation_rule.
mappingListener.prototype.exitReplace_presentation_rule = function(ctx) {
};


// Enter a parse tree produced by mappingParser#downline_presentation_rule.
mappingListener.prototype.enterDownline_presentation_rule = function(ctx) {
};

// Exit a parse tree produced by mappingParser#downline_presentation_rule.
mappingListener.prototype.exitDownline_presentation_rule = function(ctx) {
};


// Enter a parse tree produced by mappingParser#online_presentation_rule.
mappingListener.prototype.enterOnline_presentation_rule = function(ctx) {
};

// Exit a parse tree produced by mappingParser#online_presentation_rule.
mappingListener.prototype.exitOnline_presentation_rule = function(ctx) {
};


// Enter a parse tree produced by mappingParser#set_tags_rule.
mappingListener.prototype.enterSet_tags_rule = function(ctx) {
};

// Exit a parse tree produced by mappingParser#set_tags_rule.
mappingListener.prototype.exitSet_tags_rule = function(ctx) {
};


// Enter a parse tree produced by mappingParser#set_tags.
mappingListener.prototype.enterSet_tags = function(ctx) {
};

// Exit a parse tree produced by mappingParser#set_tags.
mappingListener.prototype.exitSet_tags = function(ctx) {
};


// Enter a parse tree produced by mappingParser#tag.
mappingListener.prototype.enterTag = function(ctx) {
};

// Exit a parse tree produced by mappingParser#tag.
mappingListener.prototype.exitTag = function(ctx) {
};


// Enter a parse tree produced by mappingParser#source_entity.
mappingListener.prototype.enterSource_entity = function(ctx) {
};

// Exit a parse tree produced by mappingParser#source_entity.
mappingListener.prototype.exitSource_entity = function(ctx) {
};


// Enter a parse tree produced by mappingParser#replaced.
mappingListener.prototype.enterReplaced = function(ctx) {
};

// Exit a parse tree produced by mappingParser#replaced.
mappingListener.prototype.exitReplaced = function(ctx) {
};


// Enter a parse tree produced by mappingParser#replacer.
mappingListener.prototype.enterReplacer = function(ctx) {
};

// Exit a parse tree produced by mappingParser#replacer.
mappingListener.prototype.exitReplacer = function(ctx) {
};


// Enter a parse tree produced by mappingParser#the_candidate.
mappingListener.prototype.enterThe_candidate = function(ctx) {
};

// Exit a parse tree produced by mappingParser#the_candidate.
mappingListener.prototype.exitThe_candidate = function(ctx) {
};


// Enter a parse tree produced by mappingParser#scope_specification.
mappingListener.prototype.enterScope_specification = function(ctx) {
};

// Exit a parse tree produced by mappingParser#scope_specification.
mappingListener.prototype.exitScope_specification = function(ctx) {
};


// Enter a parse tree produced by mappingParser#scope_set.
mappingListener.prototype.enterScope_set = function(ctx) {
};

// Exit a parse tree produced by mappingParser#scope_set.
mappingListener.prototype.exitScope_set = function(ctx) {
};


// Enter a parse tree produced by mappingParser#scope_set_element.
mappingListener.prototype.enterScope_set_element = function(ctx) {
};

// Exit a parse tree produced by mappingParser#scope_set_element.
mappingListener.prototype.exitScope_set_element = function(ctx) {
};


// Enter a parse tree produced by mappingParser#release_id.
mappingListener.prototype.enterRelease_id = function(ctx) {
};

// Exit a parse tree produced by mappingParser#release_id.
mappingListener.prototype.exitRelease_id = function(ctx) {
};


// Enter a parse tree produced by mappingParser#mock_id.
mappingListener.prototype.enterMock_id = function(ctx) {
};

// Exit a parse tree produced by mappingParser#mock_id.
mappingListener.prototype.exitMock_id = function(ctx) {
};


// Enter a parse tree produced by mappingParser#presentation_name.
mappingListener.prototype.enterPresentation_name = function(ctx) {
};

// Exit a parse tree produced by mappingParser#presentation_name.
mappingListener.prototype.exitPresentation_name = function(ctx) {
};


// Enter a parse tree produced by mappingParser#release_name.
mappingListener.prototype.enterRelease_name = function(ctx) {
};

// Exit a parse tree produced by mappingParser#release_name.
mappingListener.prototype.exitRelease_name = function(ctx) {
};


// Enter a parse tree produced by mappingParser#mock_name.
mappingListener.prototype.enterMock_name = function(ctx) {
};

// Exit a parse tree produced by mappingParser#mock_name.
mappingListener.prototype.exitMock_name = function(ctx) {
};


// Enter a parse tree produced by mappingParser#bucket_name.
mappingListener.prototype.enterBucket_name = function(ctx) {
};

// Exit a parse tree produced by mappingParser#bucket_name.
mappingListener.prototype.exitBucket_name = function(ctx) {
};


// Enter a parse tree produced by mappingParser#user_name.
mappingListener.prototype.enterUser_name = function(ctx) {
};

// Exit a parse tree produced by mappingParser#user_name.
mappingListener.prototype.exitUser_name = function(ctx) {
};


// Enter a parse tree produced by mappingParser#valid_semver.
mappingListener.prototype.enterValid_semver = function(ctx) {
};

// Exit a parse tree produced by mappingParser#valid_semver.
mappingListener.prototype.exitValid_semver = function(ctx) {
};


// Enter a parse tree produced by mappingParser#version_core.
mappingListener.prototype.enterVersion_core = function(ctx) {
};

// Exit a parse tree produced by mappingParser#version_core.
mappingListener.prototype.exitVersion_core = function(ctx) {
};


// Enter a parse tree produced by mappingParser#major.
mappingListener.prototype.enterMajor = function(ctx) {
};

// Exit a parse tree produced by mappingParser#major.
mappingListener.prototype.exitMajor = function(ctx) {
};


// Enter a parse tree produced by mappingParser#minor.
mappingListener.prototype.enterMinor = function(ctx) {
};

// Exit a parse tree produced by mappingParser#minor.
mappingListener.prototype.exitMinor = function(ctx) {
};


// Enter a parse tree produced by mappingParser#patch.
mappingListener.prototype.enterPatch = function(ctx) {
};

// Exit a parse tree produced by mappingParser#patch.
mappingListener.prototype.exitPatch = function(ctx) {
};


// Enter a parse tree produced by mappingParser#preRelease.
mappingListener.prototype.enterPreRelease = function(ctx) {
};

// Exit a parse tree produced by mappingParser#preRelease.
mappingListener.prototype.exitPreRelease = function(ctx) {
};


// Enter a parse tree produced by mappingParser#dotSeparated_preRelease_identifiers.
mappingListener.prototype.enterDotSeparated_preRelease_identifiers = function(ctx) {
};

// Exit a parse tree produced by mappingParser#dotSeparated_preRelease_identifiers.
mappingListener.prototype.exitDotSeparated_preRelease_identifiers = function(ctx) {
};


// Enter a parse tree produced by mappingParser#build.
mappingListener.prototype.enterBuild = function(ctx) {
};

// Exit a parse tree produced by mappingParser#build.
mappingListener.prototype.exitBuild = function(ctx) {
};


// Enter a parse tree produced by mappingParser#dotSeparated_build_identifiers.
mappingListener.prototype.enterDotSeparated_build_identifiers = function(ctx) {
};

// Exit a parse tree produced by mappingParser#dotSeparated_build_identifiers.
mappingListener.prototype.exitDotSeparated_build_identifiers = function(ctx) {
};


// Enter a parse tree produced by mappingParser#preRelease_identifier.
mappingListener.prototype.enterPreRelease_identifier = function(ctx) {
};

// Exit a parse tree produced by mappingParser#preRelease_identifier.
mappingListener.prototype.exitPreRelease_identifier = function(ctx) {
};


// Enter a parse tree produced by mappingParser#build_identifier.
mappingListener.prototype.enterBuild_identifier = function(ctx) {
};

// Exit a parse tree produced by mappingParser#build_identifier.
mappingListener.prototype.exitBuild_identifier = function(ctx) {
};


// Enter a parse tree produced by mappingParser#alphanumeric_identifier.
mappingListener.prototype.enterAlphanumeric_identifier = function(ctx) {
};

// Exit a parse tree produced by mappingParser#alphanumeric_identifier.
mappingListener.prototype.exitAlphanumeric_identifier = function(ctx) {
};


// Enter a parse tree produced by mappingParser#numeric_identifier.
mappingListener.prototype.enterNumeric_identifier = function(ctx) {
};

// Exit a parse tree produced by mappingParser#numeric_identifier.
mappingListener.prototype.exitNumeric_identifier = function(ctx) {
};


// Enter a parse tree produced by mappingParser#identifier_characters.
mappingListener.prototype.enterIdentifier_characters = function(ctx) {
};

// Exit a parse tree produced by mappingParser#identifier_characters.
mappingListener.prototype.exitIdentifier_characters = function(ctx) {
};


// Enter a parse tree produced by mappingParser#identifier_character.
mappingListener.prototype.enterIdentifier_character = function(ctx) {
};

// Exit a parse tree produced by mappingParser#identifier_character.
mappingListener.prototype.exitIdentifier_character = function(ctx) {
};


// Enter a parse tree produced by mappingParser#nonDigit.
mappingListener.prototype.enterNonDigit = function(ctx) {
};

// Exit a parse tree produced by mappingParser#nonDigit.
mappingListener.prototype.exitNonDigit = function(ctx) {
};


// Enter a parse tree produced by mappingParser#digits.
mappingListener.prototype.enterDigits = function(ctx) {
};

// Exit a parse tree produced by mappingParser#digits.
mappingListener.prototype.exitDigits = function(ctx) {
};


// Enter a parse tree produced by mappingParser#digit.
mappingListener.prototype.enterDigit = function(ctx) {
};

// Exit a parse tree produced by mappingParser#digit.
mappingListener.prototype.exitDigit = function(ctx) {
};


// Enter a parse tree produced by mappingParser#positive_digit.
mappingListener.prototype.enterPositive_digit = function(ctx) {
};

// Exit a parse tree produced by mappingParser#positive_digit.
mappingListener.prototype.exitPositive_digit = function(ctx) {
};


// Enter a parse tree produced by mappingParser#letter.
mappingListener.prototype.enterLetter = function(ctx) {
};

// Exit a parse tree produced by mappingParser#letter.
mappingListener.prototype.exitLetter = function(ctx) {
};



exports.mappingListener = mappingListener;