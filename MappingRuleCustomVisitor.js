const MappingRuleVisitor = require('./gen/MappingRuleVisitor').MappingRuleVisitor;
const path = require('path');
const fs = require("fs");
const http = require("http");

class MappingRuleCustomVisitor extends MappingRuleVisitor {

    visitMapping_rule_section(ctx) {
        this.mappingRules = [];

        return super.visitMapping_rule_section(ctx);
    }

    visitRule_add(ctx) {
        this.rule = {
            text: ctx.start.getInputStream().strdata.slice(ctx.start.start, ctx.stop.stop + 1),
            operation: "add",
            exhibitName: ctx.ID().getText(),
            candidate: this.wrapCandidate(ctx.candidate())
        };

        this.mappingRules.push(this.rule);

        return super.visitRule_add(ctx);
    }

    visitRule_alter(ctx) {
        this.rule = {
            text: ctx.start.getInputStream().strdata.slice(ctx.start.start, ctx.stop.stop + 1),
            operation: "alter",
            exhibitName: ctx.ID().getText()
        }

        this.mappingRules.push(this.rule);

        return super.visitRule_alter(ctx);
    }

    visitRule_activate_theme(ctx) {
        this.rule = {
            text: ctx.start.getInputStream().strdata.slice(ctx.start.start, ctx.stop.stop + 1),
            operation: "activate_theme",
            themeName: ctx.ID().getText()
        }

        this.mappingRules.push(this.rule);

        return super.visitRule_activate_theme(ctx);
    }

    visitSet_labels(ctx) {
        let labels = [];
        ctx.ID().forEach(label => {
            labels.push(label.getText());
        })

        if (labels.length !== 0) {
            this.rule.labels = labels;
        } else {
            delete this.rule.labels;
        }

        return super.visitSet_labels(ctx);
    }

    visitReplace(ctx) {
        if (this.rule.replaces == null) {
            this.rule.replaces = [];
        }
        let replace = {
            replaced: this.wrapCandidate(ctx.target, "*"),
            replacer: this.wrapCandidate(ctx.source)
        }

        let scopes = [];
        ctx.scope().forEach(scope => {
            let chain = [];
            scope.candidate().forEach(candidate => {
                chain.push(this.wrapCandidate(candidate, "*"));
            })
            scopes.push(chain);
        })
        if (scopes.length !== 0) {
            replace.scopes = scopes;
        }

        this.rule.replaces.push(replace);

        return super.visitReplace(ctx);
    }

    visitShow(ctx) {
        this.rule.online = true;

        return super.visitShow(ctx);
    }

    visitHide(ctx) {
        this.rule.online = false;

        return super.visitHide(ctx);
    }

    visitSet_title(ctx) {
        if (ctx.title == null) {
            this.rule.title = null;
        } else {
            let title = ctx.title.text;
            this.rule.title = title.slice(1, title.length - 1);
        }

        return super.visitSet_title(ctx);
    }

    visitSet_cover(ctx) {
        if (ctx.cover == null) {
            this.rule.cover = null;
        } else {
            let cover = ctx.cover.text;
            this.rule.cover = cover.slice(1, cover.length - 1);
        }

        return super.visitSet_cover(ctx);
    }

    visitAdd_attr(ctx) {
        if (this.rule.attrs == null) {
            this.rule.attrs = [];
        }

        let attr = {
            operation: "add",
            key: ctx.key.text,
            value: ctx.value.text
        }
        if (ctx.description != null) {
            attr.description = ctx.description.text;
        }

        this.rule.attrs.push(attr);

        return super.visitAdd_attr(ctx);
    }

    visitDelete_attr(ctx) {
        if (this.rule.attrs == null) {
            this.rule.attrs = [];
        }

        let attr = {
            operation: "delete",
            key: ctx.key.text,
        }

        this.rule.attrs.push(attr);

        return super.visitDelete_attr(ctx);
    }

    wrapCandidate(ctx, releaseDefaultVersion = "latest") {
        if (ctx == null) {
            return null;
        }

        let candidate;
        if (ctx.resource_name() != null) {
            let rctx = ctx.resource_name();
            if (rctx == null) {
                return null;
            }
            candidate = {
                name: `${rctx.userName.text}${rctx.SLASH().getText()}${rctx.resourceName.text}`,
                versionRange: rctx.SEMVER() != null ? rctx.SEMVER().getText() : releaseDefaultVersion,
                type: "resource"
            };
        } else {
            let octx = ctx.object_name();
            if (octx == null) {
                return null;
            }
            candidate = {
                name: `${octx.bucketName.text}${octx.SLASH().getText()}${octx.objectName.text}`,
                type: "object"
            };
        }

        return candidate;
    }

    verify() {
        this.errors = [];

        this.verifyRuleAdd();
        this.verifyExhibitName4Rule();
        this.verifyRuleActivateTheme();
    }

    verifyRuleAdd() {
        let ruleNameR = [];
        let ruleNameO = [];
        this.mappingRules.filter(mappingRule => mappingRule.operation === "add").forEach(mappingRule => {
            if (mappingRule.candidate == null) {
                return;
            }
            if (mappingRule.candidate.type === "resource") {
                ruleNameR.push(mappingRule.candidate.name);
            } else if (mappingRule.candidate.type === "object") {
                ruleNameO.push(mappingRule.candidate.name);
            }
        });
        let repeatNameR = new Set();
        let repeatNameO = new Set();

        let pool = new Set();
        ruleNameR.forEach(ruleName => {
            if (pool.has(ruleName)) {
                repeatNameR.add(ruleName);
            } else {
                pool.add(ruleName);
            }
        });

        pool.clear();
        ruleNameO.forEach(ruleName => {
            if (pool.has(ruleName)) {
                repeatNameO.add(ruleName);
            } else {
                pool.add(ruleName);
            }
        });

        if (repeatNameR.size !== 0) {
            this.errors.push(`添加规则中，不能重复添加 resource: ${Array.from(repeatNameR).join(", ")}`)
        }
        if (repeatNameO.size !== 0) {
            this.errors.push(`添加规则中，不能重复添加 object: ${Array.from(repeatNameO).join(", ")}`)
        }
    }

    verifyExhibitName4Rule() {
        let exhibitNames = new Set();
        let repeatExhibitNames = new Set();
        this.mappingRules.filter(mappingRule => mappingRule.operation === "add" || mappingRule.operation === "alter").forEach(mappingRule => {
            if (exhibitNames.has(mappingRule.exhibitName)) {
                repeatExhibitNames.add(mappingRule.exhibitName);
            } else {
                exhibitNames.add(mappingRule.exhibitName);
            }
        });

        if (repeatExhibitNames.size !== 0) {
            this.errors.push(`不能使用重复的展品名称: ${Array.from(repeatExhibitNames).join(", ")}`);
        }
    }

    verifyRuleActivateTheme() {
        if (this.mappingRules.filter(mappingRule => mappingRule.operation === "activate_theme").length > 1) {
            this.errors.push("激活主题语句（activate_theme）不可重复");
        }
    }
}

exports.MappingRuleCustomVisitor = MappingRuleCustomVisitor;
