const {compile} = require('../../lib');

describe('新建 presentable', () => {

    const text = `add $u2/r1@1.1.1 as p3
      do
      end`;
    const {errors, rules, errorObjects} = compile(text);

    test('语法正确的话，不会报错1', () => {
        expect(errors).toBeNull();
    });

    test('语法正确的话，不会报错2', () => {
        expect(errorObjects).toBeNull();
    });

    test('文本保持不变', () => {
        expect(rules[0].text).toEqual(text);
    });

    test('操作应为 add', () => {
        expect(rules[0].operation).toBe('add');
    });

    test('exhibitName 应为 p3', () => {
        expect(rules[0].exhibitName).toBe('p3');
    });

    test('正确获取 candidate', () => {
        expect(rules[0].candidate).toEqual({
            "name": "u2/r1",
            "versionRange": "1.1.1",
            "type": "resource"
        });
    });
});

describe('修改 exhibit', () => {

    const text = `alter p3
      do
      end`;
    const {errors, rules} = compile(text);

    test('语法正确的话，不会报错', () => {
        expect(errors).toBeNull();
    });

    test('文本保持不变', () => {
        expect(rules[0].text).toEqual(text);
    });

    test('操作应为 add', () => {
        expect(rules[0].operation).toBe('alter');
    });

    test('exhibitName 应为 p3', () => {
        expect(rules[0].exhibitName).toBe('p3');
    });
});
