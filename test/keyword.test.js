const {compile} = require('../lib');

describe('测试关键子错误', () => {
    test('把『do』关键字写错要报错', () => {
        const text = `
            alter p2
              d
              end
        `;
        const {errors} = compile(text);
        expect(errors).not.toBe(null);
    });

    test('把『do』关键字写错, 中间有其它内容，要报错', () => {
        const text = `
            alter p2
              d
                set_tags a1, b2
              end
        `;
        const {errors} = compile(text);
        expect(errors).not.toBe(null);
    });

    test('把『end』关键字写错要报错', () => {
        const text = `
            alter p2
              do
              en
        `;
        const {errors} = compile(text);
        expect(errors).not.toBe(null);
    });

    test('把『end』关键字写错，中间有其它内容，要报错', () => {
        const text = `
            alter p2
              do
              en
        `;
        const {errors} = compile(text);
        expect(errors).not.toBe(null);
    });



});
