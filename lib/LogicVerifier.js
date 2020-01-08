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
        this.__verifyPresentableName();
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
     * 『新添加』规则，mock 和 release 的 name 不能重复
     * @private
     */
    __verifyAddRule() {
        const allAddRules = this.__rules.filter(i => i.operation === 'add');
        // debugger;
        const allAddMockRules = allAddRules.filter(i => i.candidate && i.candidate.type === 'mock').map(j => j.candidate.name);
        const allAddReleaseRules = allAddRules.filter(i => i.candidate && i.candidate.type === 'release').map(j => j.candidate.name);

        const mockErrors = getCountGT1(allAddMockRules);
        if (mockErrors.length !== 0) {
            // this.__errors.push(`添加规则中，不能重复添加 mock：：『 ${mockErrors.join(', ')} 』`);
            // this.__errors.push(`Cannot add duplicate mock: ${mockErrors.join(', ')}`);
            this.__errors.push(`添加规则中，不能重复添加 mock: ${mockErrors.join(', ')}`);
        }

        const realseErrors = getCountGT1(allAddReleaseRules);
        if (realseErrors.length !== 0) {
            // this.__errors.push('添加规则中，不能重复添加 release');
            // this.__errors.push(`添加规则中，不能重复添加 release：：『 ${realseErrors.join(', ')} 』`);
            // this.__errors.push(`Cannot add duplicate release: ${realseErrors.join(', ')}`);
            this.__errors.push(`添加规则中，不能重复添加发行: ${realseErrors.join(', ')}`);
        }
        // console.log(this.__rules)
    }

    /**
     * 所有 presentableName 不能重复
     */
    __verifyPresentableName() {
        const map = new Map();
        for (const i of this.__rules) {
            if (!i.presentableName) {
                continue;
            }
            // console.log(i.presentableName, 'i.presentableNamei.presentableNamei.presentableName');
            if (map.has(i.presentableName)) {
                map.set(i.presentableName, map.get(i.presentableName) + 1);
            } else {
                map.set(i.presentableName, 1);
            }
        }

        const repeat = Array.from(map.entries()).filter(i => i[1] > 1).map(j => j[0]);
        // console.log(repeat, 'repeat');
        if (repeat.length > 0) {
            // this.__errors.push(`presentableName 重复：：『 ${repeat.join(', ')} 』`);
            // this.__errors.push(`Cannot use duplicate presentable name: ${repeat.join(', ')}`);
            this.__errors.push(`不能使用重复的展品名称: ${repeat.join(', ')}`);
        }

    }

    /**
     * 校验 不能超过1次 激活主题设置
     */
    __verifyActivateTheme() {
        const setRule = this.__rules.filter(i => i.operation === 'activate_theme');
        if (setRule.length > 1) {
            // this.__errors.push(`设置主题操作 activate_theme 不能超过 1 次`);
            // this.__errors.push(`Cannot reuse 'activate_theme'`);
            // this.__errors.push(`不可以重复激活主题`);
            this.__errors.push(`激活主题语句（activate_theme）不可重复`);
        }
    }

    /**
     * 校验上下线规则
     * 同一个 presentation 被上下线不超过一次
     */
    // __verifyOnlineAndDownlineRules() {
    //     const allOnlineAndDownline = this.__rules.filter(i => i.operation === 'online' || i.operation === 'offline').map(j => j.presentableName);
    //     const errors = getCountGT1(allOnlineAndDownline);
    //     if (allOnlineAndDownline.length !== new Set(allOnlineAndDownline).size) {
    //         this.__errors.push(`同一个 presentation 不能被多次上下线：：『 ${errors.join(', ')} 』`);
    //     }
    // }

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
