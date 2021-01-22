/*! *********************************************************************
逻辑校验器：对解析好的 js 规则对象，进行逻辑校验
************************************************************************ */

class LogicVerifier {

    /**
     *
     * @param {object[]} rules
     */
    constructor(rules) {
        // console.log(rules, 'rulesrulesrulesrules');
        // debugger;
        this.__rules = rules;
        // 错误容器
        this.__errors = [];

        this.__verifyAddRule();
        this.__verifyExhibitName();
        this.__verifyActivateTheme();
    }

    /**
     * 返回所有错误组成的字符串数组
     * @returns {string[]}
     */
    getAllErrors() {
        return this.__errors;
    }

    /**
     * 校验添加规则
     * 『新添加』规则，object 和 resource 的 name 不能重复
     * @private
     */
    __verifyAddRule() {
        const allAddRules = this.__rules.filter(i => i.operation === 'add');
        const allAddObjectRules = allAddRules.filter(i => i.candidate && i.candidate.type === 'object').map(j => j.candidate.name);
        const allAddResourceRules = allAddRules.filter(i => i.candidate && i.candidate.type === 'resource').map(j => j.candidate.name);

        const objectErrors = getCountGT1(allAddObjectRules);
        if (objectErrors.length !== 0) {
            this.__errors.push(`添加规则中，不能重复添加 object: ${objectErrors.join(', ')}`);
        }

        const resourceErrors = getCountGT1(allAddResourceRules);
        if (resourceErrors.length !== 0) {
            // this.__errors.push('添加规则中，不能重复添加 release');
            // this.__errors.push(`添加规则中，不能重复添加 release：：『 ${realseErrors.join(', ')} 』`);
            // this.__errors.push(`Cannot add duplicate release: ${realseErrors.join(', ')}`);
            this.__errors.push(`添加规则中，不能重复添加发行: ${resourceErrors.join(', ')}`);
        }
    }

    /**
     * 所有 exhibitName 不能重复
     */
    __verifyExhibitName() {
        const map = new Map();
        for (const i of this.__rules) {
            if (!i.exhibitName) {
                continue;
            }
            if (map.has(i.exhibitName)) {
                map.set(i.exhibitName, map.get(i.exhibitName) + 1);
            } else {
                map.set(i.exhibitName, 1);
            }
        }

        const repeat = Array.from(map.entries()).filter(i => i[1] > 1).map(j => j[0]);
        // console.log(repeat, 'repeat');
        if (repeat.length > 0) {
            this.__errors.push(`不能使用重复的展品名称: ${repeat.join(', ')}`);
        }

    }

    /**
     * 校验 不能超过1次 激活主题设置
     */
    __verifyActivateTheme() {
        const setRule = this.__rules.filter(i => i.operation === 'activate_theme');
        if (setRule.length > 1) {
            this.__errors.push(`激活主题语句（activate_theme）不可重复`);
        }
    }
}


module.exports = LogicVerifier;

/**
 * 统计字符串数组中 各字符串出现的次数
 * @param {string[]} strArr
 * @return {object}
 */
function statisticsStringCount(strArr) {
    const countMap = new Map();
    for (const i of strArr) {
        if (countMap.has(i)) {
            countMap.set(i, countMap.get(i) + 1);
        } else {
            countMap.set(i, 1);
        }
    }
    return countMap;
}

/**
 * 获取字符串出现次数超过1次的字符串
 * @param {string[]} strArr
 * @returns {string[]}
 */
function getCountGT1(strArr) {
    return Array.from(statisticsStringCount(strArr).entries()).filter(i => i[1] > 1).map(j => j[0])
}
