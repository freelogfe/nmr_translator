const {compile} = require('../../lib');

describe('当没有任何操作时', () => {
    const text = `
    add $u1/r1 as p1
      do
      end
    `;

    const {errors, rules, errorObjects} = compile(text);

    test('没有操作，不会报错1', () => {
        // console.log(errors, 'EEEEEEEEEE');
        expect(errors).toBeNull();
    });

    test('没有操作，不会报错2', () => {
        expect(errorObjects).toBeNull();
    });
});
