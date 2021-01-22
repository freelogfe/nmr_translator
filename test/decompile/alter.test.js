const {decompile} = require('../../lib');

describe('修改规则反编译测试', () => {

    const rules = [{
        operation: 'alter',
        exhibitName: 'en1',
    }];

    const text =
        'alter en1\n' +
        '  do\n' +
        '  end';

    test('编译结果正确', () => {
        expect(decompile(rules)).toEqual(text);
    });
});
