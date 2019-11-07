const {compile} = require('../lib');

describe('当没有任何操作时', () => {
    const text = `
    add $u1/r1 as p1
      do
      end
    `;

    const {errors, rules} = compile(text);

    test('没有操作，不会报错', () => {
        expect(errors).toBe(null);
    });

    test('tags 为 null', () => {
        expect(rules[0].tags).toBe(null);
    });

    test('replaces 为空数组', () => {
        expect(rules[0].replaces).toEqual([]);
    });

    test('online 为空 null', () => {
        expect(rules[0].online).toBe(null);
    });
});

// const text2 = `
// add $u1/r1 as p1
// `;
