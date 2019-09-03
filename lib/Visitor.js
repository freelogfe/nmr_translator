const {mappingVisitor} = require('../gen/mappingVisitor');

// const mappingVisitor = require('../gen/mappingListener').mappingListener;

/**
 * 重载 mappingVisitor 中的方法，实现业务逻辑
 */
class Visitor extends mappingVisitor {
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
    visitMapping_rules(ctx) {
        // console.log('visitMapping_rules((((((())))))))');
        this.mappingRules = [];
        super.visitMapping_rules(ctx);
    };

    // Visit a parse tree produced by mappingParser#mapping_rule.
    visitMapping_rule(ctx) {
        this.mappingRule = {};
        super.visitMapping_rule(ctx);
        this.mappingRules.push({...this.mappingRule});
    }

    visitAdd_presentation_rule(ctx) {
        this.mappingRule.type = '+';
        super.visitAdd_presentation_rule(ctx);
    }

    visitReplace_presentation_rule(ctx) {
        this.mappingRule.type = '*';
        super.visitReplace_presentation_rule(ctx);
    }

    // Visit a parse tree produced by mappingParser#downline_presentation_rule.
    visitDownline_presentation_rule(ctx) {
        this.mappingRule.type = '-';
        super.visitDownline_presentation_rule(ctx);
    }

    visitOnline_presentation_rule(ctx) {
        this.mappingRule.type = '^';
        super.visitOnline_presentation_rule(ctx);
    }

    // Visit a parse tree produced by mappingParser#set_tags_rule.
    visitSet_tags_rule(ctx) {
        this.mappingRule.type = '[SET]';
        super.visitSet_tags_rule(ctx);
    }

    // Visit a parse tree produced by mappingParser#presentation_name.
    visitPresentation_name(ctx) {
        this.mappingRule.presentationName = this.__getFullRowString(ctx);
        super.visitPresentation_name(ctx);
    }

    visitThe_candidate(ctx) {
        const candidate = this.__getFullRowString(ctx);
        if (candidate.startsWith('#:')) {
            this.mappingRule.mockID = candidate.replace('#:', '');
        }

        if (candidate.startsWith('$:')) {
            const release = candidate.replace('$:', '').split('@');
            this.mappingRule.releaseID = release[0];
            this.mappingRule.releaseVersion = release[1] || 'latest';
        }
        super.visitThe_candidate(ctx);
    }

    visitSet_tags(ctx) {
        this.mappingRule.tags = [];
        super.visitSet_tags(ctx);
    }

    visitTag(ctx) {
        this.mappingRule.tags.push(this.__getFullRowString(ctx));
        super.visitTag(ctx);
    }

    visitReplaced(ctx) {
        const replaced = this.__getFullRowString(ctx).replace('$:', '').split('@');
        this.mappingRule.replacedReleaseID = replaced[0];
        this.mappingRule.replacedReleaseVersion = replaced[1] || 'latest';
        super.visitReplaced(ctx);
    }

    visitReplacer(ctx) {
        const replacer = this.__getFullRowString(ctx);
        if (replacer.startsWith('#:')) {
            this.mappingRule.replacerMockID = replacer.replace('#:', '');
        }

        if (replacer.startsWith('$:')) {
            const release = replacer.replace('$:', '').split('@');
            this.mappingRule.replacerReleaseID = release[0];
            this.mappingRule.replacerReleaseVersion = release[1] || 'latest';
        }

        super.visitReplacer(ctx);
    }

    visitScope_set(ctx) {
        // console.log(this.__getFullRowString(ctx), '##########');
        const scopeText = this.__getFullRowString(ctx);
        // if (scopeText.startsWith('[') && scopeText.endsWith(']')) {

        // } else {
        this.mappingRule.scope = scopeText.replace('[', '').replace(']', '')
            .split(/\s*,\s*/)
            .map(i => {
                return i.split(/\s*->\s*/).map(j => {
                    if (j.startsWith('#:')) {
                        return {mockID: j.replace('#:', '')};
                    } else if (j.startsWith('$:')) {
                        const release = j.replace('$:', '').split('@');
                        return {
                            releaseID: release[0],
                            releaseVersion: release[1] || 'latest',
                        };
                    } else {
                        return {
                            presentationName: j,
                        };
                    }
                });
            });

        // }
        super.visitScope_set(ctx);
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
