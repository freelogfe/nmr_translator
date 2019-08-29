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


// Visit a parse tree produced by mappingParser#hide_existing_presentation_rule.
mappingVisitor.prototype.visitHide_existing_presentation_rule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#mock_presentation_rule.
mappingVisitor.prototype.visitMock_presentation_rule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#remapping_rule.
mappingVisitor.prototype.visitRemapping_rule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#replaced.
mappingVisitor.prototype.visitReplaced = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by mappingParser#source_entity.
mappingVisitor.prototype.visitSource_entity = function(ctx) {
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


// Visit a parse tree produced by mappingParser#resource_id.
mappingVisitor.prototype.visitResource_id = function(ctx) {
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



exports.mappingVisitor = mappingVisitor;