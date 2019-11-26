const {compile} = require('../../lib');

describe('测试激活主题', () => {

    describe('激活 presentable1', () => {
        const text = 'activate_theme presentable1';
        const {errors, rules, errorObjects} = compile(text);

        test('不应报错1', () => {
            expect(errors).toBeNull();
        });

        test('不应报错2', () => {
            expect(errorObjects).toBeNull();
        });

        test('正确匹配', () => {
            expect(rules[0]).toEqual({
                text: 'activate_theme presentable1',
                themeName:'presentable1',
                operation: 'activate_theme',
            });
        });

    });

    test('出现超过1个的激活主题，将报错', () => {
        const text = 'activate_theme presentable1 activate_theme presentable2';
        const {errors, rules} = compile(text);

        expect(errors).not.toBeNull();
    });
});
