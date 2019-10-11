const {mappingVisitor} = require('../gen/MappingVisitor');

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
        this.mappingRule = {
            text: this.__getFullRowString(ctx),
            disabled: false,
        };
        super.visitMapping_rule(ctx);
        this.mappingRules.push({...this.mappingRule});
    }

    visitDisabled_modifier(ctx){
        this.mappingRule.disabled = true;
        super.visitDisabled_modifier(ctx);
    }

    visitAdd_presentation_rule(ctx) {
        this.mappingRule.operation = 'add';
        super.visitAdd_presentation_rule(ctx);
        this.mappingRule.tags = this.mappingRule.tags || null;
    }

    visitReplace_presentation_rule(ctx) {
        this.mappingRule.operation = 'replace';
        super.visitReplace_presentation_rule(ctx);
        this.mappingRule.scope = this.mappingRule.scope || [];
    }

    // Visit a parse tree produced by mappingParser#downline_presentation_rule.
    visitDownline_presentation_rule(ctx) {
        this.mappingRule.operation = 'offline';
        super.visitDownline_presentation_rule(ctx);
    }

    visitOnline_presentation_rule(ctx) {
        this.mappingRule.operation = 'online';
        super.visitOnline_presentation_rule(ctx);
    }

    // Visit a parse tree produced by mappingParser#set_tags_rule.
    visitSet_tags_rule(ctx) {
        this.mappingRule.operation = 'set';
        super.visitSet_tags_rule(ctx);
    }

    // Visit a parse tree produced by mappingParser#presentation_name.
    visitPresentation_name(ctx) {
        this.mappingRule.presentableName = this.__getFullRowString(ctx);
        super.visitPresentation_name(ctx);
    }

    visitThe_candidate(ctx) {
        this.mappingRule.candidate = {};
        const candidate = this.__getFullRowString(ctx);
        if (candidate.startsWith('#:')) {
            this.mappingRule.candidate.name = candidate.replace('#:', '');
            this.mappingRule.candidate.type = 'mock';
        }

        if (candidate.startsWith('$:')) {
            const release = candidate.replace('$:', '').split('@');
            this.mappingRule.candidate.name = release[0];
            this.mappingRule.candidate.versionRange = release[1] || 'latest';
            this.mappingRule.candidate.type = 'release';
        }
        super.visitThe_candidate(ctx);
    }

    visitSet_rule(ctx) {
        this.mappingRule.tags = undefined;
        this.mappingRule.version = undefined;
        super.visitSet_tags(ctx);
    }

    visitTags(ctx) {
        this.mappingRule.tags = [
            ...(this.mappingRule.tags || []),
            this.__getFullRowString(ctx),
        ];
        super.visitTags(ctx);
    }

    visitSet_version(ctx) {
        const text = this.__getFullRowString(ctx);
        this.mappingRule.version =  text && text.replace('version=', '');
        super.visitSet_version(ctx);
    }

    visitReplaced(ctx) {
        this.mappingRule.replaced = {};
        const replaced = this.__getFullRowString(ctx).replace('$:', '').split('@');
        this.mappingRule.replaced.name = replaced[0];
        this.mappingRule.replaced.versionRange = replaced[1] || '*';
        this.mappingRule.replaced.type = 'release';
        super.visitReplaced(ctx);
    }

    visitReplacer(ctx) {
        this.mappingRule.replacer = {};
        const replacer = this.__getFullRowString(ctx);
        if (replacer.startsWith('#:')) {
            this.mappingRule.replacer.name = replacer.replace('#:', '');
            this.mappingRule.replacer.type = 'mock';
        }

        if (replacer.startsWith('$:')) {
            const release = replacer.replace('$:', '').split('@');
            this.mappingRule.replacer.name = release[0];
            this.mappingRule.replacer.versionRange = release[1] || 'latest';
            this.mappingRule.replacer.type = 'release';
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
                        return {
                            name: j.replace('#:', ''),
                            type: 'mock',
                        };
                    } else if (j.startsWith('$:')) {
                        const release = j.replace('$:', '').split('@');
                        return {
                            name: release[0],
                            versionRange: release[1] || '*',
                            type: 'release',
                        };
                    } else {
                        return {
                            name: j,
                            type: 'presentable',
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
