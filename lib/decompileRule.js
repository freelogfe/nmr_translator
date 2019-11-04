function decompileRule(rule) {
    console.log(rule, 'rule');
    let ruleText = '';
    if (rule.operation === 'add') {
        ruleText = `add ${decompileReleaseAndMock(rule.candidate)} as ${rule.presentableName}`;
    } else {
        ruleText = `alter ${rule.presentableName}`;
    }
    ruleText += '\n';
    ruleText += '  do\n';

    if (rule.tags) {
        ruleText += '    set_tags ';
        ruleText += rule.tags.join(', ');
        ruleText += '\n';
    }

    for (const rep of rule.replaces) {
        ruleText += '    ';
        ruleText += decompileReplace(rep);
        ruleText += '\n';
    }

    if (rule.online !== null) {
        ruleText += '    ';
        ruleText += rule.online ? 'show' : 'hide';
        ruleText += '\n';
    }


    ruleText += `  end`;


    return ruleText;
}

function decompileReplace({replaced, replacer, scopes}) {
    return `replace ${decompileReleaseAndMock(replaced)} with ${decompileReleaseAndMock(replacer)}`
        + (scopes.length === 0 ? '' : ` under ${scopes.map(i => i.map(j => decompileReleaseAndMock(j)).join(' > ')).join(', ')}`);
}

function decompileReleaseAndMock({type, name, versionRange}) {
    return `${type === 'release' ? '$' : '#'}${name}${!versionRange || (versionRange === 'latest') || (versionRange === '*') ? '' : versionRange}`;
}

module.exports = decompileRule;
