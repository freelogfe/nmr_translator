// Generated from Mapping.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by MappingParser.

function MappingVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

MappingVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
MappingVisitor.prototype.constructor = MappingVisitor;

// Visit a parse tree produced by MappingParser#mappingRules.
MappingVisitor.prototype.visitMappingRules = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#mappingRule.
MappingVisitor.prototype.visitMappingRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#addRule.
MappingVisitor.prototype.visitAddRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#candidate.
MappingVisitor.prototype.visitCandidate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#alterRule.
MappingVisitor.prototype.visitAlterRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#actions.
MappingVisitor.prototype.visitActions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#codeBlock.
MappingVisitor.prototype.visitCodeBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#linesCode.
MappingVisitor.prototype.visitLinesCode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#lineCode.
MappingVisitor.prototype.visitLineCode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#setTags.
MappingVisitor.prototype.visitSetTags = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#tags.
MappingVisitor.prototype.visitTags = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#tag.
MappingVisitor.prototype.visitTag = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#replace.
MappingVisitor.prototype.visitReplace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#target.
MappingVisitor.prototype.visitTarget = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#source.
MappingVisitor.prototype.visitSource = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#under.
MappingVisitor.prototype.visitUnder = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#scope.
MappingVisitor.prototype.visitScope = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#scopeNode.
MappingVisitor.prototype.visitScopeNode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#show.
MappingVisitor.prototype.visitShow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#hide.
MappingVisitor.prototype.visitHide = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#releaseOrMockName.
MappingVisitor.prototype.visitReleaseOrMockName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#presentationName.
MappingVisitor.prototype.visitPresentationName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#hostage.
MappingVisitor.prototype.visitHostage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#releaseName.
MappingVisitor.prototype.visitReleaseName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MappingParser#mockName.
MappingVisitor.prototype.visitMockName = function(ctx) {
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