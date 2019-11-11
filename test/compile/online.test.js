const {compile} = require('../../lib');

describe('测试上下线', () => {

    test('online 最后一次为 show，结果为 true', () => {
        const text = `
        add $u2/r1@1.1.1 as p3
          do
            show
            hide
            show
          end
        `;
        const {rules} = compile(text);
        expect(rules[0].online).toBe(true);
    });

    test('online 最后一次为 hide，结果为 false', () => {
        const text = `
        add $u2/r1@1.1.1 as p3
          do
            hide
            show
            hide
          end
        `;
        const {rules} = compile(text);
        expect(rules[0].online).toBe(false);
    });

    test('没有 show 和 hide 的操作，online 为 null', () => {
        const text = `
        add $u2/r1@1.1.1 as p3
          do
          end
        `;
        const {rules} = compile(text);
        expect(rules[0].online).toBeNull();
    });
});
