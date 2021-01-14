const {compile} = require('../../lib');

describe('添加属性', () => {

    const text = `
    add $u1/r1 as p1
      do
        add_attr key1 value1
        add_attr key2 value2 description2
        delete_attr key3
      end
    `;

    const {errors, rules, errorObjects} = compile(text);

    // console.log(JSON.stringify(rules), 'rules1234');
    test('没有操作，不会报错1', () => {
        // console.log(errors, 'EEEEEEEEEE');
        expect(errors).toBeNull();
    });

    test('没有操作，不会报错2', () => {
        expect(errorObjects).toBeNull();
    });

    test('获取添加属性的结果', () => {
        expect(rules[0].attrs).toEqual([
            {
                "operation": "add",
                "key": "key1",
                "value": "value1"
            }, {
                "operation": "add",
                "key": "key2",
                "value": "value2",
                "description": "description2"
            }, {
                "operation": "delete",
                "key": "key3"
            }
        ]);
    });
});

//online
