const {compile} = require('../../lib');

describe('新建 presentable', () => {

    const text = `add $u2/r1@1.1.1 as p3
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
        expect(rules[0].operation).toBe('add');
    });

    test('presentableName 应为 p3', () => {
        expect(rules[0].presentableName).toBe('p3');
    });

    test('正确获取 candidate', () => {
        expect(rules[0].candidate).toEqual({
            "name": "u2/r1",
            "versionRange": "1.1.1",
            "type": "release"
        });
    });
});

describe('修改 presentable', () => {

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

    test('presentableName 应为 p3', () => {
        expect(rules[0].presentableName).toBe('p3');
    });
});
