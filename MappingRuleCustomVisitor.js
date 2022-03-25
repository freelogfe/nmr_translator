const MappingRuleVisitor = require('./gen/MappingRuleVisitor').MappingRuleVisitor;
const path = require('path');
const fs = require("fs");
const http = require("http");

class MappingRuleCustomVisitor extends MappingRuleVisitor {

    constructor() {
        super();

        this.relyAddMap = new Map();
        this.relyDelMap = new Map();
    }

    visitMapping_rule_section(ctx) {
        this.mappingRules = [];
        this.errors = [];

        return super.visitMapping_rule_section(ctx);
    }

    visitRule_add(ctx) {
        this.rule = {
            text: ctx.start.getInputStream().strdata.slice(ctx.start.start, ctx.stop.stop + 1),
            operation: "add",
            actions: [],
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
            actions: [],
            exhibitName: ctx.ID().getText()
        }

        this.mappingRules.push(this.rule);

        return super.visitRule_alter(ctx);
    }

    visitRule_activate_theme(ctx) {
        this.rule = {
            text: ctx.start.getInputStream().strdata.slice(ctx.start.start, ctx.stop.stop + 1),
            operation: "activate_theme",
            actions: [],
            exhibitName: ctx.ID().getText()
        }

        this.mappingRules.push(this.rule);

        return super.visitRule_activate_theme(ctx);
    }

    visitRule_comment_section(ctx) {
        this.rule = {
            text: ctx.start.getInputStream().strdata.slice(ctx.start.start, ctx.stop.stop + 1),
            operation: "comment"
        }

        this.mappingRules.push(this.rule);

        return super.visitRule_comment_section(ctx);
    }

    visitSet_labels(ctx) {
        let action;
        let exist = false;
        for (let tmp of this.rule.actions) {
            if (tmp["operation"] === "set_labels") {
                action = tmp;
                exist = true;
                break;
            }
        }

        let labels = [];
        ctx.ID().forEach(label => {
            labels.push(label.getText());
        })

        if (!exist) {
            action = {};
            action["operation"] = "set_labels";
            action["content"] = labels;
            this.rule.actions.push(action);
        } else {
            action["content"] = labels;
        }

        return super.visitSet_labels(ctx);
    }

    visitReplace(ctx) {
        let action = {
            operation: "replace",
            content: {
                replaced: this.wrapCandidate(ctx.target, "*"),
                replacer: this.wrapCandidate(ctx.source)
            }
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
            action.content.scopes = scopes;
        }

        this.rule.actions.push(action);

        return super.visitReplace(ctx);
    }

    visitShow(ctx) {
        let action;
        let exist = false;
        for (let tmp of this.rule.actions) {
            if (tmp["operation"] === "online") {
                action = tmp;
                exist = true;
                break;
            }
        }

        if (!exist) {
            action = {};
            action["operation"] = "online";
            action["content"] = true;
            this.rule.actions.push(action);
        } else {
            action["content"] = true;
        }

        return super.visitShow(ctx);
    }

    visitHide(ctx) {
        let action;
        let exist = false;
        for (let tmp of this.rule.actions) {
            if (tmp["operation"] === "online") {
                action = tmp;
                exist = true;
                break;
            }
        }

        if (!exist) {
            action = {};
            action["operation"] = "online";
            action["content"] = false;
            this.rule.actions.push(action);
        } else {
            action["content"] = false;
        }

        return super.visitHide(ctx);
    }

    visitSet_title(ctx) {
        let action;
        let exist = false;
        for (let tmp of this.rule.actions) {
            if (tmp["operation"] === "set_title") {
                action = tmp;
                exist = true;
                break;
            }
        }

        let title;
        if (ctx.title == null) {
            title = null;
        } else {
            title = ctx.title.text.slice(1, ctx.title.text.length - 1);
        }

        if (!exist) {
            action = {};
            action["operation"] = "set_title";
            action["content"] = title;
            this.rule.actions.push(action);
        } else {
            action["content"] = title;
        }

        return super.visitSet_title(ctx);
    }

    visitSet_cover(ctx) {
        let action;
        let exist = false;
        for (let tmp of this.rule.actions) {
            if (tmp["operation"] === "set_cover") {
                action = tmp;
                exist = true;
                break;
            }
        }

        let cover;
        if (ctx.cover == null) {
            cover = null;
        } else {
            cover = ctx.cover.text.slice(1, ctx.cover.text.length - 1);
        }

        if (!exist) {
            action = {};
            action["operation"] = "set_cover";
            action["content"] = cover;
            this.rule.actions.push(action);
        } else {
            action["content"] = cover;
        }

        return super.visitSet_cover(ctx);
    }

    visitAdd_attr(ctx) {
        let action = {
            operation: "add_attr",
            content: {
                key: ctx.key.text,
                value: ctx.value.text,
                description: ctx.description ? ctx.description.text : null
            }
        };

        for (let tmp of this.rule.actions) {
            if (tmp["operation"] === "add_attr" && tmp["content"]["key"] === action["content"]["key"]) {
                this.errors.push(`添加属性中，不能重复添加 attr: ${action["content"]["key"]}  ${action["content"]["value"]}`);
                break;
            }
        }

        this.rule.actions.push(action);

        return super.visitAdd_attr(ctx);
    }

    visitDelete_attr(ctx) {
        let action = {
            operation: "delete_attr",
            content: {
                key: ctx.key.text
            }
        }

        this.rule.actions.push(action);

        return super.visitDelete_attr(ctx);
    }

    visitAdd_rely(ctx) {
        let content = {resources: []};

        if (ctx.rely_target() != null) {
            content["target"] = ctx.rely_target().getText();
        } else {
            content["target"] = null;
        }
        let resourceArray = this.relyAddMap.get(content["target"]);
        if (resourceArray == null) {
            resourceArray = [];
        }

        ctx.candidate().forEach(cCtx => {
            let resource = cCtx.getText();
            if (resourceArray.indexOf(resource) !== -1) {
                this.errors.push(`添加依赖中，不能重复添加 rely: ${resource} ${content["target"] != null ? "target: " + content["target"] : ""}`);
            } else {
                content["resources"].push(resource);
                resourceArray.push(resource);
            }
        });
        this.relyAddMap.set(content["target"], resourceArray);

        this.rule.actions.push({
            operation: "add_rely",
            content: content
        });

        return super.visitAdd_rely(ctx);
    }

    visitDelete_rely(ctx) {
        let content = {resources: []};

        if (ctx.rely_target() != null) {
            content["target"] = ctx.rely_target().getText();
        } else {
            content["target"] = null;
        }
        let resourceArray = this.relyDelMap.get(content["target"]);
        if (resourceArray == null) {
            resourceArray = [];
        }

        ctx.candidate().forEach(cCtx => {
            let resource = cCtx.getText();
            if (resourceArray.indexOf(resource) !== -1) {
                this.errors.push(`删除依赖中，不能重复删除 rely: ${resource} ${content["target"] != null ? "target: " + content["target"] : ""}`);
            } else {
                content["resources"].push(resource);
                resourceArray.push(resource);
            }
        });
        this.relyDelMap.set(content["target"], resourceArray);

        this.rule.actions.push({
            operation: "delete_rely",
            content: content
        });

        return super.visitDelete_rely(ctx);
    }

    visitLine_code_comment_section(ctx) {
        let action = {
            operation: "comment",
            content: ctx.start.getInputStream().strdata.slice(ctx.start.start, ctx.stop.stop + 1),
        };

        this.rule.actions.push(action);

        return super.visitLine_code_comment_section(ctx);
    }

    wrapCandidate(ctx, releaseDefaultVersion = "latest") {
        if (ctx == null) {
            return null;
        }

        let candidate;
        if (ctx.resource_name() != null) {
            let rctx = ctx.resource_name();
            if (rctx == null || rctx.resourceName == null) {
                return null;
            }
            candidate = {
                name: `${rctx.userName.text}${rctx.SLASH().getText()}${rctx.resourceName.text}`,
                versionRange: rctx.SEMVER() != null ? rctx.SEMVER().getText() : releaseDefaultVersion,
                type: "resource"
            };
        } else {
            let octx = ctx.object_name();
            if (octx == null || octx.objectName == null) {
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
