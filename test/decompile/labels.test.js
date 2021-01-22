const {decompile} = require('../../lib');

describe('设置封面反编译测试', () => {

    const rules = [{
        operation: 'alter',
        exhibitName: 'en1',
        labels: ['label1', 'label2', 'label3'],
    }];

    const text = 'alter en1\n  do\n    set_labels label1,label2,label3\n  end';

    test('编译结果正确', () => {
        expect(decompile(rules)).toEqual(text);
    });
});
