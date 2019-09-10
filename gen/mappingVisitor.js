// Generated from mapping.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by mappingParser.

function mappingVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

mappingVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
mappingVisitor.prototype.constructor = mappingVisitor;

// Visit a parse tree produced by mappingParser#mapping_rules.
mappingVisitor.prototype.visitMapping_rules = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#mapping_rule.
mappingVisitor.prototype.visitMapping_rule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#add_presentation_rule.
mappingVisitor.prototype.visitAdd_presentation_rule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#replace_presentation_rule.
mappingVisitor.prototype.visitReplace_presentation_rule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#downline_presentation_rule.
mappingVisitor.prototype.visitDownline_presentation_rule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#online_presentation_rule.
mappingVisitor.prototype.visitOnline_presentation_rule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#set_tags_rule.
mappingVisitor.prototype.visitSet_tags_rule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#set_tags.
mappingVisitor.prototype.visitSet_tags = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#tag.
mappingVisitor.prototype.visitTag = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#source_entity.
mappingVisitor.prototype.visitSource_entity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#replaced.
mappingVisitor.prototype.visitReplaced = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#replacer.
mappingVisitor.prototype.visitReplacer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#the_candidate.
mappingVisitor.prototype.visitThe_candidate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#scope_specification.
mappingVisitor.prototype.visitScope_specification = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#scope_set.
mappingVisitor.prototype.visitScope_set = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#scope_set_element.
mappingVisitor.prototype.visitScope_set_element = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#release_id.
mappingVisitor.prototype.visitRelease_id = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#mock_id.
mappingVisitor.prototype.visitMock_id = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#presentation_name.
mappingVisitor.prototype.visitPresentation_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#release_name.
mappingVisitor.prototype.visitRelease_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#mock_name.
mappingVisitor.prototype.visitMock_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#bucket_name.
mappingVisitor.prototype.visitBucket_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#user_name.
mappingVisitor.prototype.visitUser_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#valid_semver.
mappingVisitor.prototype.visitValid_semver = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#prefix.
mappingVisitor.prototype.visitPrefix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#version_core.
mappingVisitor.prototype.visitVersion_core = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#major.
mappingVisitor.prototype.visitMajor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#minor.
mappingVisitor.prototype.visitMinor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#patch.
mappingVisitor.prototype.visitPatch = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#preRelease.
mappingVisitor.prototype.visitPreRelease = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#dotSeparated_preRelease_identifiers.
mappingVisitor.prototype.visitDotSeparated_preRelease_identifiers = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#build.
mappingVisitor.prototype.visitBuild = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#dotSeparated_build_identifiers.
mappingVisitor.prototype.visitDotSeparated_build_identifiers = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#preRelease_identifier.
mappingVisitor.prototype.visitPreRelease_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#build_identifier.
mappingVisitor.prototype.visitBuild_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#alphanumeric_identifier.
mappingVisitor.prototype.visitAlphanumeric_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#numeric_identifier.
mappingVisitor.prototype.visitNumeric_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#identifier_characters.
mappingVisitor.prototype.visitIdentifier_characters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#identifier_character.
mappingVisitor.prototype.visitIdentifier_character = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#nonDigit.
mappingVisitor.prototype.visitNonDigit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#digits.
mappingVisitor.prototype.visitDigits = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#digit.
mappingVisitor.prototype.visitDigit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#positive_digit.
mappingVisitor.prototype.visitPositive_digit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#letter.
mappingVisitor.prototype.visitLetter = function(ctx) {
  return this.visitChildren(ctx);
};



exports.mappingVisitor = mappingVisitor;