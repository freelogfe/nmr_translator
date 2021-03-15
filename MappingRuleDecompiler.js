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
        return `activate_theme ${rule.themeName}`;
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
        for (let key in rule) {
            switch (key) {
                case "labels":
                    actionStr += this.wrapLineCodeStr(this.decompileAction4Labels(rule.labels));
                    break;
                case "replaces":
                    for (let replace of rule.replaces) {
                        actionStr += this.wrapLineCodeStr(this.decompileAction4Replace(replace));
                    }
                    break;
                case "online":
                    actionStr += this.wrapLineCodeStr(this.decompileAction4Online(rule.online));
                    break;
                case "title":
                    actionStr += this.wrapLineCodeStr(this.decompileAction4Title(rule.title));
                    break;
                case "cover":
                    actionStr += this.wrapLineCodeStr(this.decompileAction4Cover(rule.cover));
                    break;
                case "attrs":
                    for (let attr of rule.attrs) {
                        actionStr += this.wrapLineCodeStr(this.decompileAction4Attr(attr));
                    }
                    break;
            }
        }
        actionStr = `\tdo\n${actionStr}\tend`;

        return actionStr;
    }

    decompileAction4Labels(labels) {
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

    decompileAction4Title(title) {
        return `set_title ${title}`;
    }

    decompileAction4Cover(cover) {
        return `set_cover "${cover}"`;
    }

    decompileAction4Attr(attr) {
        if (attr.operation === "add") {
            let description = attr.description ? ` ${attr.description}` : "";
            return `add_attr ${attr.key} ${attr.value} ${description}`;
        } else {
            return `delete_attr ${attr.key}`;
        }
    }

    wrapLineCodeStr(lineCodeStr) {
        return `\t\t${lineCodeStr}\n`;
    }
}

exports.MappingRuleDecompiler = MappingRuleDecompiler;