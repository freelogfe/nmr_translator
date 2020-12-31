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

    test('labels 为 undefined', () => {
        expect(rules[0].labels).toBeUndefined();
    });

    test('replaces 为 undefined', () => {
        // expect(rules[0].replaces).toEqual([]);
        expect(rules[0].replaces).toBeUndefined();
    });

    test('online 为空 undefined', () => {
        expect(rules[0].online).toBeUndefined();
    });
});

// const text2 = `
// add $u1/r1 as p1
// `;
