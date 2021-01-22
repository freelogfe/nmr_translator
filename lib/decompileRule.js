function decompileRule(rule) {
    // console.log(rule, 'rule');
    let ruleText = '';
    if (rule.operation === 'add') {
        ruleText = `add ${decompileResourceAndObject(rule.candidate)} as ${rule.exhibitName}`;
    } else {
        ruleText = `alter ${rule.exhibitName}`;
    }
    ruleText += '\n';
    ruleText += '  do\n';

    if (rule.labels !== undefined) {
        ruleText += '    set_labels ';
        ruleText += rule.labels.join(',');
        ruleText += '\n';
    }

    if (rule.replaces !== undefined) {
        for (const rep of rule.replaces) {
            ruleText += '    ';
            ruleText += decompileReplace(rep);
            ruleText += '\n';
        }
    }

    if (rule.online !== undefined) {
        ruleText += '    ';
        ruleText += rule.online ? 'show' : 'hide';
        ruleText += '\n';
    }

    if (rule.cover !== undefined) {
        ruleText += '    set_cover ';
        ruleText += rule.cover;
        ruleText += '\n';
    }

    if (rule.title !== undefined) {
        ruleText += '    set_title ';
        ruleText += rule.title;
        ruleText += '\n';
    }

    if (rule.attrs !== undefined) {
        for (const attr of rule.attrs) {
            if (attr.operation === 'add') {
                ruleText += '    add_attr ';
                ruleText += `${attr.key} ${attr.value}` + (attr.description ? ` ${attr.description}` : '');
                ruleText += '\n';
            }

            if (attr.operation === 'delete') {
                ruleText += '    delete_attr ';
                ruleText += attr.key;
                ruleText += '\n';
            }
        }
    }

    ruleText += `  end`;

    return ruleText;
}

function decompileReplace({replaced, replacer, scopes}) {
    return `replace ${decompileResourceAndObject(replaced)} with ${decompileResourceAndObject(replacer)}`
        + (scopes.length === 0 ? '' : ` under ${scopes.map(i => i.map(j => decompileResourceAndObject(j)).join(' > ')).join(', ')}`);
}

function decompileResourceAndObject({type, name, versionRange}) {
    return `${type === 'resource' ? '$' : '#'}${name}${!versionRange || (versionRange === 'latest') || (versionRange === '*') ? '' : ('@' + versionRange)}`;
}

module.exports = decompileRule;
