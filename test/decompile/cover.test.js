const {decompile} = require('../../lib');

describe('设置封面反编译测试', () => {

    const rules = [{
        operation: 'alter',
        exhibitName: 'en1',
        cover: '//static.freelog.com/png1.png'
    }];

    const text = 'alter en1\n  do\n    set_cover //static.freelog.com/png1.png\n  end';

    test('编译结果正确', () => {
        expect(decompile(rules)).toEqual(text);
    });
});
