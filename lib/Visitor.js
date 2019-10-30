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
        // console.log('visitMapping_rules((((((())))))))');
        this.mappingRules = [];
        super.visitMappingRules(ctx);
    };

    // Visit a parse tree produced by mappingParser#mapping_rule.
    visitMappingRule(ctx) {
        this.mappingRule = {
            text: this.__getFullRowString(ctx),
            tags: null,
            replace: [],
            online: false
        };
        super.visitMappingRule(ctx);
        this.mappingRules.push({...this.mappingRule});
    }

    visitAddRule(ctx) {
        this.mappingRule.operation = 'add';
        super.visitAddRule(ctx);
        // this.mappingRule.tags = this.mappingRule.tags || null;
    }

    // Visit a parse tree produced by mappingParser#presentation_name.
    visitPresentation_name(ctx) {
        this.mappingRule.presentableName = this.__getFullRowString(ctx);
        super.visitPresentation_name(ctx);
    }

    visitTheCandidate(ctx) {
        this.mappingRule.candidate = {};
        const candidate = this.__getFullRowString(ctx);
        // if (candidate.startsWith('#:')) {
        //     this.mappingRule.candidate.name = candidate.replace('#:', '');
        //     this.mappingRule.candidate.type = 'mock';
        // }
        //
        // if (candidate.startsWith('$:')) {
        //     const release = candidate.replace('$:', '').split('@');
        //     this.mappingRule.candidate.name = release[0];
        //     this.mappingRule.candidate.versionRange = release[1] || 'latest';
        //     this.mappingRule.candidate.type = 'release';
        // }
        this.mappingRule.candidate = this.__returnFormat(candidate);
        super.visitTheCandidate(ctx);
    }

    visitSetRule(ctx) {
        this.mappingRule.operation = 'set';
        this.mappingRule.tags = undefined;
        this.mappingRule.version = undefined;
        super.visitSetRule(ctx);
    }

    visitTags(ctx) {
        this.mappingRule.tags = [
            ...(this.mappingRule.tags || []),
            this.__getFullRowString(ctx),
        ];
        super.visitTags(ctx);
    }

    // visitReplaceConfig(ctx) {
    //     this.mappingRule.replace.push({});
    //     super.visitReplaceConfig(ctx);
    // }

    visitReplaceItem(ctx) {
        this.mappingRule.replace.push({});
        super.visitReplaceItem(ctx);
    }

    visitReplaced(ctx) {
        const replace = this.mappingRule.replace;
        const obj = {};
        const replaced = this.__getFullRowString(ctx).replace('$:', '').split('@');
        obj.name = replaced[0];
        obj.versionRange = replaced[1] || '*';
        obj.type = 'release';
        replace[replace.length - 1].replaced = obj;
        super.visitReplaced(ctx);
    }

    visitReplacer(ctx) {
        const replace = this.mappingRule.replace;
        // replace[replace.length - 1].replacer = {};
        const replacer = this.__getFullRowString(ctx);
        // if (replacer.startsWith('#:')) {
        //     this.mappingRule.replacer.name = replacer.replace('#:', '');
        //     this.mappingRule.replacer.type = 'mock';
        // }
        //
        // if (replacer.startsWith('$:')) {
        //     const release = replacer.replace('$:', '').split('@');
        //     this.mappingRule.replacer.name = release[0];
        //     this.mappingRule.replacer.versionRange = release[1] || 'latest';
        //     this.mappingRule.replacer.type = 'release';
        // }
        replace[replace.length - 1].replacer = this.__returnFormat(replacer);

        super.visitReplacer(ctx);
    }

    visitSetScope(ctx) {
        // console.log(this.__getFullRowString(ctx), '##########');
        const scopeText = this.__getFullRowString(ctx);
        // if (scopeText.startsWith('[') && scopeText.endsWith(']')) {

        // } else {
        const replace = this.mappingRule.replace;
        replace[replace.length - 1].scope = scopeText
            .replace('*', '')
            .replace('[', '')
            .replace(']', '')
            .split(/\s*,\s*/)
            .map(i => {
                return i.split(/\s*>\s*/).map(j => {
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
                    }
                });
            });

        // }
        super.visitSetScope(ctx);
    }

    visitOnlineConfig(ctx) {
        this.mappingRule.online = true;
        super.visitOnlineConfig(ctx);
    }

    /**
     *
     */
    __returnFormat(text) {
        const obj = {};
        if (text.startsWith('#:')) {
            obj.name = text.replace('#:', '');
            obj.type = 'mock';
        }

        if (text.startsWith('$:')) {
            const release = text.replace('$:', '').split('@');
            obj.name = release[0];
            obj.versionRange = release[1] || 'latest';
            obj.type = 'release';
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
