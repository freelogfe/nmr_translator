const {compile} = require('../../lib');

describe('设置标签测试', () => {

    const text = `
    add $u2/r1@1.1.1 as p3
      do
        set_labels t1,t2,t3
      end
    `;
    const {errors, rules, errorObjects} = compile(text);

    test('语法正确的话，不会报错1', () => {
        expect(errors).toBeNull();
    });

    test('语法正确的话，不会报错2', () => {
        expect(errorObjects).toBeNull();
    });

    test('exhibit = p3', () => {
        expect(rules[0].exhibitName).toEqual('p3');
    });

    test('labels = ' + `['t1', 't2', 't3']`, () => {
        expect(rules[0].labels).toEqual(['t1', 't2', 't3']);
    });

    test('candidate 对象正确匹配', () => {
        expect(rules[0].candidate).toEqual({"name": "u2/r1", "versionRange": "1.1.1", "type": "release"});
    });

    test('当没有 set_labels 时，结果应为 null', () => {
        const text = `
        add $u2/r1@1.1.1 as p3
          do
          end
        `;
        const {rules} = compile(text);
        expect(rules[0].labels).toBeNull();
    });

    test('当 set_labels 没有内容时，结果应为空数组', () => {
        const text = `
        add $u2/r1@1.1.1 as p3
          do
            set_labels
          end
        `;
        const {rules} = compile(text);
        expect(rules[0].labels).toEqual([]);
    });

});



