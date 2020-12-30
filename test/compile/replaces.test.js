const {compile} = require('../../lib');

describe('测试替换规则', () => {
    const text = 'alter p2 replace $uu9/rr9@1.1.1 with #bb/mm under $u6/m6>$u7/m7, $u8/m8';

    const {errors, rules, errorObjects} = compile(text);

    test('语法正确的话，不会报错1', () => {
        expect(errors).toBeNull();
    });

    test('语法正确的话，不会报错2', () => {
        expect(errorObjects).toBeNull();
    });

    test('正确获取替换目标信息', () => {
        expect(rules[0].replaces[0].replaced).toEqual({
            "name": "uu9/rr9",
            "versionRange": "1.1.1",
            "type": "resource"
        });
    });

    test('正确获取替换源信息', () => {
        expect(rules[0].replaces[0].replacer).toEqual({
            "name": "bb/mm",
            "type": "object"
        });
    });

    test('正确获取替换范围', () => {
        expect(rules[0].replaces[0].scopes).toEqual([
            [
                {
                    "name": "u6/m6",
                    "versionRange": "*",
                    "type": "resource"
                },
                {
                    "name": "u7/m7",
                    "versionRange": "*",
                    "type": "resource"
                }
            ],
            [
                {
                    "name": "u8/m8",
                    "versionRange": "*",
                    "type": "resource"
                }
            ]
        ]);
    });

    test('当不设范围时，scopes 应为空数组', () => {
        const text = 'alter p2 replace $uu9/rr9@1.1.1 with #bb/mm8';
        const {rules} = compile(text);
        expect(rules[0].replaces[0].scopes).toEqual([]);
    });
});
