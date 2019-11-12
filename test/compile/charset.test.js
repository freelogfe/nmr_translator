const {compile} = require('../../lib');

describe('字符集测试', () => {
    test('发行不能包含 ":" 字符', () => {
        const text = `
        add $:u1/r1 as p1
          do
          end
        `;
        const {errors} = compile(text);
        expect(errors).not.toBeNull();
    });

    test('mock 不能包含 ":" 字符', () => {
        const text = `
        add #:b1/m1 as p2
          do
          end
        `;
        const {errors} = compile(text);
        expect(errors).not.toBeNull();
    });

    test('presentable 不能包含 ":" 字符', () => {
        const text = `
        add #b1/m1 as :p2
          do
          end
        `;
        const {errors} = compile(text);
        expect(errors).not.toBeNull();
    });

    test('presentable 不能包含 "@" 字符', () => {
        const text = `
        add #b1/m10 as @p2
          do
          end
        `;
        const {errors} = compile(text);
        expect(errors).not.toBeNull();
    });

    test('presentable mock release 可以是纯数字', () => {
        const text = `
        add $1111/2222@1.1.1 as 3333
          do
          end
        `;
        const {errors} = compile(text);
        expect(errors).toBeNull();
    });
});
