const {decompile} = require('../../lib');

describe('设置标题规则反编译测试', () => {

    const rules = [{
        operation: 'alter',
        exhibitName: 'en1',
        title: '标题1'
    }];

    const text = 'alter en1\n  do\n    set_title 标题1\n  end';

    test('编译结果正确', () => {
        expect(decompile(rules)).toEqual(text);
    });
});
