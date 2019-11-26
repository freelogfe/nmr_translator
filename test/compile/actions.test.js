const {compile} = require('../../lib');

describe('当没有任何操作时', () => {
    const text = `
    add $u1/r1 as p1
      do
      end
    `;

    const {errors, rules, errorObjects} = compile(text);

    test('没有操作，不会报错1', () => {
        expect(errors).toBeNull();
    });

    test('没有操作，不会报错2', () => {
        expect(errorObjects).toBeNull();
    });

    test('tags 为 null', () => {
        expect(rules[0].tags).toBeNull();
    });

    test('replaces 为空数组', () => {
        expect(rules[0].replaces).toEqual([]);
    });

    test('online 为空 null', () => {
        expect(rules[0].online).toBeNull();
    });
});

// const text2 = `
// add $u1/r1 as p1
// `;
