const {decompile} = require('../../lib');

describe('属性操作反编译测试', () => {

    const rules = [{
        operation: 'alter',
        exhibitName: 'en1',
        attrs: [{
            operation: 'add',
            key: 'key1',
            value: 'value1',
            description: 'description1',
        }, {
            operation: 'add',
            key: 'key2',
            value: 'value2',
        }, {
            operation: 'delete',
            key: 'key3',
        }]
    }];

    const text =
        'alter en1\n' +
        '  do\n' +
        '    add_attr key1 value1 description1\n' +
        '    add_attr key2 value2\n' +
        '    delete_attr key3\n' +
        '  end';

    test('编译结果正确', () => {
        expect(decompile(rules)).toEqual(text);
    });
});
