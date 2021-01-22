const {decompile} = require('../../lib');

describe('添加规则反编译测试', () => {

    const rules = [{
        operation: 'add',
        exhibitName: 'en1',
        candidate: {
            name: 'u2/r10',
            versionRange: '1.1.1',
            type: 'resource'
        },
    }];

    const text =
        'add $u2/r10@1.1.1 as en1\n' +
        '  do\n' +
        '  end';

    test('编译结果正确', () => {
        expect(decompile(rules)).toEqual(text);
    });
});
