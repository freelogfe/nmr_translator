const {decompile} = require('../../lib');

describe('设置封面反编译测试', () => {

    const rules = [{
        operation: 'alter',
        exhibitName: 'en1',
        online: false,
    }, {
        operation: 'alter',
        exhibitName: 'en2',
        online: true,
    }];

    const text =
        'alter en1\n' +
        '  do\n' +
        '    hide\n' +
        '  end\n' +
        '\n' +
        'alter en2\n' +
        '  do\n' +
        '    show\n' +
        '  end';

    test('编译结果正确', () => {
        // console.log(decompile(rules));
        expect(decompile(rules)).toEqual(text);
    });
});
