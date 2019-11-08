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
        this.mappingRule.tags = null;
        this.mappingRule.replaces = [];
        this.mappingRule.online = null;

        super.visitAddRule(ctx);
        // this.mappingRule.tags = this.mappingRule.tags || null;
    }

    visitAlterRule(ctx) {
        this.mappingRule.operation = 'alter';
        this.mappingRule.tags = null;
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
    visitPresentationName(ctx) {
        this.mappingRule.presentableName = this.__getFullRowString(ctx);
        super.visitPresentationName(ctx);
    }

    //
    visitCandidate(ctx) {
        this.mappingRule.candidate = {};
        const candidate = this.__getFullRowString(ctx);
        this.mappingRule.candidate = this.__returnRelaseOrMockObj(candidate);
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
    visitSetTags(ctx) {
        this.mappingRule.tags = [];
        super.visitSetTags(ctx);
    }

    visitTag(ctx) {
        const text = this.__getFullRowString(ctx);
        this.mappingRule.tags.push(text);
        super.visitTag(ctx);
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
        this.replace.replaced = this.__returnRelaseOrMockObj(text, '*');
        super.visitTarget(ctx);
    }

    visitSource(ctx) {
        const text = this.__getFullRowString(ctx);
        this.replace.replacer = this.__returnRelaseOrMockObj(text);
        super.visitSource(ctx);
    }

    visitScope(ctx) {
        this.scope = [];
        super.visitScope(ctx);
        this.scopes.push(this.scope);
    }

    visitScopeNode(ctx) {
        const text = this.__getFullRowString(ctx);
        this.scope.push(this.__returnRelaseOrMockObj(text, '*'));
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
        this.mappingRule.showPageBuild = {
            name: text,
        };
    }

    //
    // // visitReplaceConfig(ctx) {
    // //     this.mappingRule.replace.push({});
    // //     super.visitReplaceConfig(ctx);
    // // }
    //
    // visitReplaceItem(ctx) {
    //     this.mappingRule.replaces.push({scopes: []});
    //     super.visitReplaceItem(ctx);
    // }
    //
    // visitReplaced(ctx) {
    //     const replaces = this.mappingRule.replaces;
    //     const obj = {};
    //     const replaced = this.__getFullRowString(ctx).replace('$:', '').split('@');
    //     obj.name = replaced[0];
    //     obj.versionRange = replaced[1] || '*';
    //     obj.type = 'release';
    //     replaces[replaces.length - 1].replaced = obj;
    //     super.visitReplaced(ctx);
    // }
    //
    // visitReplacer(ctx) {
    //     const replaces = this.mappingRule.replaces;
    //     const replacer = this.__getFullRowString(ctx);
    //     replaces[replaces.length - 1].replacer = this.__returnFormat(replacer);
    //
    //     super.visitReplacer(ctx);
    // }
    //
    // visitSetScope(ctx) {
    //     // console.log(this.__getFullRowString(ctx), '##########');
    //     const scopeText = this.__getFullRowString(ctx);
    //     const replaces = this.mappingRule.replaces;
    //     replaces[replaces.length - 1].scopes = scopeText
    //         .replace('*', '')
    //         .replace('[', '')
    //         .replace(']', '')
    //         .split(/\s*,\s*/)
    //         .map(i => {
    //             return i.split(/\s*>\s*/).map(j => {
    //                 if (j.startsWith('#:')) {
    //                     return {
    //                         name: j.replace('#:', ''),
    //                         type: 'mock',
    //                     };
    //                 } else if (j.startsWith('$:')) {
    //                     const release = j.replace('$:', '').split('@');
    //                     return {
    //                         name: release[0],
    //                         versionRange: release[1] || '*',
    //                         type: 'release',
    //                     };
    //                 }
    //             });
    //         });
    //
    //     // }
    //     super.visitSetScope(ctx);
    // }
    //
    // visitOnlineConfig(ctx) {
    //     const onlineText = this.__getFullRowString(ctx);
    //     // console.log(onlineText, 'onlineText');
    //     if (onlineText.includes('true')) {
    //         this.mappingRule.online = true;
    //     } else if (onlineText.includes('false')) {
    //         this.mappingRule.online = false;
    //     }
    //
    //     super.visitOnlineConfig(ctx);
    // }

    /**
     *
     */
    __returnRelaseOrMockObj(text, releaseDefaultVersion = 'latest') {
        const obj = {};
        if (text.startsWith('#')) {
            obj.name = text.replace('#', '');
            obj.type = 'mock';
        }

        if (text.startsWith('$')) {
            const release = text.replace('$', '').split('@');
            obj.name = release[0];
            obj.versionRange = release[1] || releaseDefaultVersion;
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
