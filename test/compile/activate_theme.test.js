const {compile} = require('../../lib');

describe('测试激活主题', () => {

    test('应该返回正确的数据', () => {
        const text = 'activate_theme presentable1';
        const {errors, rules} = compile(text);

        expect(rules[0]).toEqual({
            text: 'activate_theme presentable1',
            themeName:'presentable1',
            operation: 'activate_theme',
        });
    });

    test('出现超过1个的激活主题，将报错', () => {
        const text = 'activate_theme presentable1 activate_theme presentable2';
        const {errors, rules} = compile(text);

        expect(errors).not.toBeNull();
    });
});
