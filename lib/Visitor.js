const {MappingVisitor} = require('../gen/MappingVisitor');

// const mappingVisitor = require('../gen/mappingListener').mappingListener;

/**
 * 重载 mappingVisitor 中的方法，实现业务逻辑
 */
class Visitor extends MappingVisitor {
    constructor() {
        super();

    }

    /**
     * 获取所有规则
     * @returns {[]|Array}
     */
    getMappingRules() {
        return this.mappingRules;
    }

    // Visit a parse tree produced by mappingParser#mapping_rules.
    visitMappingRules(ctx) {
        // console.log(this.__getFullRowString(ctx), 'ctxctx');
        // console.log('visitMapping_rules((((((())))))))');
        this.mappingRules = [];
        super.visitMappingRules(ctx);
    };

    // Visit a parse tree produced by mappingParser#mapping_rule.
    visitMappingRule(ctx) {
        this.mappingRule = {
            text: this.__getFullRowString(ctx),
            // tags: null,
            // replaces: [],
            // online: null,
        };
        super.visitMappingRule(ctx);
        this.mappingRules.push({...this.mappingRule});
    }

    visitAddRule(ctx) {
        this.mappingRule.operation = 'add';
        this.mappingRule.labels = null;
        this.mappingRule.replaces = [];
        this.mappingRule.online = null;

        super.visitAddRule(ctx);
        // this.mappingRule.tags = this.mappingRule.tags || null;
    }

    visitAlterRule(ctx) {
        this.mappingRule.operation = 'alter';
        this.mappingRule.labels = null;
        this.mappingRule.replaces = [];
        this.mappingRule.online = null;
        super.visitAlterRule(ctx);
    }

    visitImportantRule(ctx) {
        this.mappingRule.operation = 'set';
        super.visitImportantRule(ctx);
    }

    //
    // // Visit a parse tree produced by mappingParser#presentation_name.
    visitExhibitName(ctx) {
        this.mappingRule.exhibitName = this.__getFullRowString(ctx);
        super.visitExhibitName(ctx);
    }

    //
    visitCandidate(ctx) {
        this.mappingRule.candidate = {};
        const candidate = this.__getFullRowString(ctx);
        this.mappingRule.candidate = this.__returnResourceOrObject(candidate);
        super.visitCandidate(ctx);
    }

    //
    // visitSetRule(ctx) {
    //     this.mappingRule.operation = 'set';
    //     // this.mappingRule.tags = undefined;
    //     // this.mappingRule.version = undefined;
    //     super.visitSetRule(ctx);
    // }
    //
    visitSetLabels(ctx) {
        this.mappingRule.labels = [];
        super.visitSetLabels(ctx);
    }

    visitLabel(ctx) {
        const text = this.__getFullRowString(ctx);
        this.mappingRule.labels.push(text);
        super.visitLabel(ctx);
    }

    visitReplace(ctx) {
        this.scopes = [];
        this.replace = {};
        super.visitReplace(ctx);
        this.replace.scopes = this.scopes;
        this.mappingRule.replaces.push(this.replace);
    }

    visitTarget(ctx) {
        const text = this.__getFullRowString(ctx);
        this.replace.replaced = this.__returnResourceOrObject(text, '*');
        super.visitTarget(ctx);
    }

    visitSource(ctx) {
        const text = this.__getFullRowString(ctx);
        this.replace.replacer = this.__returnResourceOrObject(text);
        super.visitSource(ctx);
    }

    visitScope(ctx) {
        this.scope = [];
        super.visitScope(ctx);
        this.scopes.push(this.scope);
    }

    visitScopeNode(ctx) {
        const text = this.__getFullRowString(ctx);
        this.scope.push(this.__returnResourceOrObject(text, '*'));
        super.visitScopeNode(ctx);
    }

    visitShow(ctx) {
        this.mappingRule.online = true;
        super.visitScopeNode(ctx);
    }

    visitHide(ctx) {
        this.mappingRule.online = false;
        super.visitScopeNode(ctx);
    }

    visitHostage(ctx) {
        const text = this.__getFullRowString(ctx);
        this.mappingRule.operation = 'activate_theme';
        this.mappingRule.themeName = text;
        super.visitHostage(ctx);
    }

    /**
     *
     */
    __returnResourceOrObject(text, releaseDefaultVersion = 'latest') {
        const obj = {};
        if (text.startsWith('#')) {
            obj.name = text.replace('#', '');
            obj.type = 'object';
        }

        if (text.startsWith('$')) {
            const release = text.replace('$', '').split('@');
            obj.name = release[0];
            obj.versionRange = release[1] || releaseDefaultVersion;
            obj.type = 'resource';
        }
        return obj;
    }

    /**
     * 根据上下文 获取原生文本字符串
     * @param ctx
     * @return {string}
     * @private
     */
    __getFullRowString(ctx) {
        return ctx.start.getInputStream().strdata.slice(ctx.start.start, ctx.stop.stop + 1);
    }

}

exports.Visitor = Visitor;
