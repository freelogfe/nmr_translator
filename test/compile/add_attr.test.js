const {compile} = require('../../lib');

describe('添加属性', () => {

    const text = `
    add $u1/r1 as p1
      do
        add_attr key1 value1
        add_attr key2 value2 description2
      end
    `;

    const {errors, rules, errorObjects} = compile(text);

    console.log(JSON.stringify(rules), 'rules1234');
    test('没有操作，不会报错1', () => {
        // console.log(errors, 'EEEEEEEEEE');
        expect(errors).toBeNull();
    });

    test('没有操作，不会报错2', () => {
        expect(errorObjects).toBeNull();
    });
});
