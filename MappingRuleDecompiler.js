class MappingRuleDecompiler {

    decompile(mappingRules) {
        let result = "";

        mappingRules.forEach(mappingRule => {
            let ruleStr;
            switch (mappingRule.operation) {
                case "add":
                    ruleStr = this.decompileRuleAdd(mappingRule);
                    break;
                case "alter":
                    ruleStr = this.decompileRuleAlter(mappingRule);
                    break;
                case "activate_theme":
                    ruleStr = this.decompileRuleActivateTheme(mappingRule);
                    break;
                case"comment":
                    ruleStr = this.decompileRuleComment(mappingRule).trim();
                    break;
                default:
                    throw new Error("错误的规则：" + mappingRule);
            }
            result += `${ruleStr}\n`;
        });

        return result;
    }

    decompileRuleAdd(rule) {
        let candidateStr = this.decompileCandidate(rule.candidate);
        let actionStr = this.decompileAction(rule);
        return `add ${candidateStr} as ${rule.exhibitName}\n${actionStr}`;
    }

    decompileRuleAlter(rule) {
        let actionStr = this.decompileAction(rule);
        return `alter ${rule.exhibitName}\n${actionStr}`;
    }

    decompileRuleActivateTheme(rule) {
        return `activate_theme ${rule.exhibitName}`;
    }

    decompileRuleComment(rule) {
        return rule.text;
    }

    decompileCandidate(candidate) {
        if (candidate.type === "resource") {
            return "$" + candidate.name + ((candidate.versionRange === "*" || candidate.versionRange === "latest") ? "" : ("@" + candidate.versionRange));
        } else if (candidate.type === "object") {
            return "#" + candidate.name;
        }
    }

    decompileAction(rule) {
        let actionStr = "";
        for (let action of rule.actions) {
            switch (action["operation"]) {
                case "set_labels":
                    actionStr += this.wrapLineCodeStr(this.decompileAction4SetLabels(action["content"]));
                    break;
                case "replace":
                    actionStr += this.wrapLineCodeStr(this.decompileAction4Replace(action["content"]));
                    break;
                case "online":
                    actionStr += this.wrapLineCodeStr(this.decompileAction4Online(action["content"]));
                    break;
                case "set_title":
                    actionStr += this.wrapLineCodeStr(this.decompileAction4SetTitle(action["content"]));
                    break;
                case "set_cover":
                    actionStr += this.wrapLineCodeStr(this.decompileAction4SetCover(action["content"]));
                    break;
                case "add_attr":
                    actionStr += this.wrapLineCodeStr(this.decompileAction4AddAttr(action["content"]));
                    break;
                case "delete_attr":
                    actionStr += this.wrapLineCodeStr(this.decompileAction4DeleteAttr(action["content"]));
                    break;
                case "comment":
                    actionStr += this.wrapLineCodeStr(this.decompileAction4Comment(action["content"]).trim());
                    break
            }
        }
        actionStr = `\tdo\n${actionStr}\tend`;

        return actionStr;
    }

    decompileAction4SetLabels(labels) {
        return `set_labels ${labels.join(",")}`
    }

    decompileAction4Replace(replace) {
        let replacedStr = this.decompileCandidate(replace.replaced);
        let replacerStr = this.decompileCandidate(replace.replacer);
        let scopesStr = this.decompileAction4ReplaceScopes(replace.scopes);

        return `replace ${replacedStr} with ${replacerStr}${scopesStr}`;
    }

    decompileAction4ReplaceScopes(scopes) {
        if (scopes == null || scopes.length === 0) {
            return ` `;
        } else {
            let scopesStr = [];
            for (let scope of scopes) {
                let scopeStr = scope.map(s => this.decompileCandidate(s)).join(">");
                scopesStr.push(scopeStr);
            }
            return ` under ${scopesStr.join(",")}`;
        }
    }

    decompileAction4Online(online) {
        return online ? "show" : "hide";
    }

    decompileAction4SetTitle(title) {
        return `set_title "${title}"`;
    }

    decompileAction4SetCover(cover) {
        return `set_cover "${cover}"`;
    }

    decompileAction4AddAttr(attr) {
        let description = attr.description ? ` ${attr.description}` : "";
        return `add_attr ${attr.key} ${attr.value} ${description}`;
    }

    decompileAction4DeleteAttr(attr) {
        return `delete_attr ${attr.key}`;
    }

    decompileAction4Comment(comment) {
        return comment;
    }

    wrapLineCodeStr(lineCodeStr) {
        return `\t\t${lineCodeStr}\n`;
    }
}

exports.MappingRuleDecompiler = MappingRuleDecompiler;
