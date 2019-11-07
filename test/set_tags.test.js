const {compile} = require('../lib');

describe('设置标签测试', () => {

    const text = `
    add $u2/r10@1.1.1 as p3
      do
        set_tags t1,t2,t3
      end
    `;
    const {errors, rules} = compile(text);

    test('语法正确的话，不会报错', () => {
        expect(errors).toBe(null);
    });

    test('presentableName = p3', () => {
        expect(rules[0].presentableName).toEqual('p3');
    });

    test('tags = ' + `['t1', 't2', 't3']`, () => {
        expect(rules[0].tags).toEqual(['t1', 't2', 't3']);
    });

    test('candidate 对象正确匹配', () => {
        expect(rules[0].candidate).toEqual({"name": "u2/r10", "versionRange": "1.1.1", "type": "release"});
    });

    test('当没有设置标签动作时，结果应为 null', () => {
        const text = `
        add $u2/r10@1.1.1 as p3
          do
          end
        `;
        const {rules} = compile(text);
        expect(rules[0].tags).toBe(null);
    });

    test('当设置标签没有内容时，结果应为空数组', () => {
        const text = `
        add $u2/r10@1.1.1 as p3
          do
            set_tags
          end
        `;
        const {rules} = compile(text);
        expect(rules[0].tags).toEqual([]);
    });

});



