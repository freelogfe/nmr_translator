// Generated from Mapping.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by MappingParser.

function MappingVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

MappingVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
MappingVisitor.prototype.constructor = MappingVisitor;

// Visit a parse tree produced by MappingParser#mapping_rules.
MappingVisitor.prototype.visitMapping_rules = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#mapping_rule.
MappingVisitor.prototype.visitMapping_rule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#disabled_modifier.
MappingVisitor.prototype.visitDisabled_modifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#add_presentation_rule.
MappingVisitor.prototype.visitAdd_presentation_rule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#replace_presentation_rule.
MappingVisitor.prototype.visitReplace_presentation_rule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#downline_presentation_rule.
MappingVisitor.prototype.visitDownline_presentation_rule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#online_presentation_rule.
MappingVisitor.prototype.visitOnline_presentation_rule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#set_rule.
MappingVisitor.prototype.visitSet_rule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#set_version.
MappingVisitor.prototype.visitSet_version = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#set_tags.
MappingVisitor.prototype.visitSet_tags = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#tags.
MappingVisitor.prototype.visitTags = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#source_entity.
MappingVisitor.prototype.visitSource_entity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#replaced.
MappingVisitor.prototype.visitReplaced = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#replacer.
MappingVisitor.prototype.visitReplacer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#the_candidate.
MappingVisitor.prototype.visitThe_candidate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#scope_specification.
MappingVisitor.prototype.visitScope_specification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#scope_set.
MappingVisitor.prototype.visitScope_set = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#scope_set_element.
MappingVisitor.prototype.visitScope_set_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#release_id.
MappingVisitor.prototype.visitRelease_id = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#mock_id.
MappingVisitor.prototype.visitMock_id = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#presentation_name.
MappingVisitor.prototype.visitPresentation_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#release_name.
MappingVisitor.prototype.visitRelease_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#mock_name.
MappingVisitor.prototype.visitMock_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#bucket_name.
MappingVisitor.prototype.visitBucket_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#user_name.
MappingVisitor.prototype.visitUser_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#valid_semver.
MappingVisitor.prototype.visitValid_semver = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#prefix.
MappingVisitor.prototype.visitPrefix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#version_core.
MappingVisitor.prototype.visitVersion_core = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#major.
MappingVisitor.prototype.visitMajor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#minor.
MappingVisitor.prototype.visitMinor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#patch.
MappingVisitor.prototype.visitPatch = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#preRelease.
MappingVisitor.prototype.visitPreRelease = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#dotSeparated_preRelease_identifiers.
MappingVisitor.prototype.visitDotSeparated_preRelease_identifiers = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#build.
MappingVisitor.prototype.visitBuild = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#dotSeparated_build_identifiers.
MappingVisitor.prototype.visitDotSeparated_build_identifiers = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#preRelease_identifier.
MappingVisitor.prototype.visitPreRelease_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#build_identifier.
MappingVisitor.prototype.visitBuild_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#alphanumeric_identifier.
MappingVisitor.prototype.visitAlphanumeric_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#numeric_identifier.
MappingVisitor.prototype.visitNumeric_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#identifier_characters.
MappingVisitor.prototype.visitIdentifier_characters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#identifier_character.
MappingVisitor.prototype.visitIdentifier_character = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#nonDigit.
MappingVisitor.prototype.visitNonDigit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#digits.
MappingVisitor.prototype.visitDigits = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#digit.
MappingVisitor.prototype.visitDigit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#positive_digit.
MappingVisitor.prototype.visitPositive_digit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#letter.
MappingVisitor.prototype.visitLetter = function(ctx) {
  return this.visitChildren(ctx);
};



exports.MappingVisitor = MappingVisitor;