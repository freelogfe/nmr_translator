// Generated from semver.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by semverParser.

function semverVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

semverVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
semverVisitor.prototype.constructor = semverVisitor;

// Visit a parse tree produced by semverParser#valid_semver.
semverVisitor.prototype.visitValid_semver = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by semverParser#version_core.
semverVisitor.prototype.visitVersion_core = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by semverParser#major.
semverVisitor.prototype.visitMajor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by semverParser#minor.
semverVisitor.prototype.visitMinor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by semverParser#patch.
semverVisitor.prototype.visitPatch = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by semverParser#preRelease.
semverVisitor.prototype.visitPreRelease = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by semverParser#dotSeparated_preRelease_identifiers.
semverVisitor.prototype.visitDotSeparated_preRelease_identifiers = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by semverParser#build.
semverVisitor.prototype.visitBuild = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by semverParser#dotSeparated_build_identifiers.
semverVisitor.prototype.visitDotSeparated_build_identifiers = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by semverParser#preRelease_identifier.
semverVisitor.prototype.visitPreRelease_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by semverParser#build_identifier.
semverVisitor.prototype.visitBuild_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by semverParser#alphanumeric_identifier.
semverVisitor.prototype.visitAlphanumeric_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by semverParser#numeric_identifier.
semverVisitor.prototype.visitNumeric_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by semverParser#identifier_characters.
semverVisitor.prototype.visitIdentifier_characters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by semverParser#identifier_character.
semverVisitor.prototype.visitIdentifier_character = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by semverParser#nonDigit.
semverVisitor.prototype.visitNonDigit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by semverParser#digits.
semverVisitor.prototype.visitDigits = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by semverParser#digit.
semverVisitor.prototype.visitDigit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by semverParser#positive_digit.
semverVisitor.prototype.visitPositive_digit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by semverParser#letter.
semverVisitor.prototype.visitLetter = function(ctx) {
  return this.visitChildren(ctx);
};



exports.semverVisitor = semverVisitor;