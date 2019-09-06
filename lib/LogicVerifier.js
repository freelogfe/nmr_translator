/*! *********************************************************************
逻辑校验器：对解析好的 js 规则对象，进行逻辑校验
************************************************************************ */

class LogicVerifier {

    /**
     *
     * @param {object[]} rules
     */
    constructor(rules) {
        this.__rules = rules;
        // 错误容器
        this.__errors = [];

        this.__verifyAddRule();
        this.__verifyOnlineAndDownlineRules();
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
        const allAddMockRules = allAddRules.filter(i => i.candidate.type === 'mock').map(j => j.candidate.name);
        const allAddReleaseRules = allAddRules.filter(i => i.candidate.type === 'release').map(j => j.candidate.name);

        if (allAddMockRules.length !== new Set(allAddMockRules).size) {
            this.__errors.push('添加规则中，不能重复添加 mock');
        }

        if (allAddReleaseRules.length !== new Set(allAddReleaseRules).size) {
            this.__errors.push('添加规则中，不能重复添加 release');
        }
        // console.log(this.__rules)
    }


    /**
     * 校验上下线规则
     * 同一个 presentation 被上下线不超过一次
     */
    __verifyOnlineAndDownlineRules() {
        const allOnlineAndDownline = this.__rules.filter(i => i.operation === 'online' || i.operation === 'downline').map(j => j.presentation);
        if (allOnlineAndDownline.length !== new Set(allOnlineAndDownline).size) {
            this.__errors.push('同一个 presentation 不能被多次上下线');
        }
    }

}


module.exports = LogicVerifier;