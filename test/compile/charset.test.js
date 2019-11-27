const {compile} = require('../../lib');

describe('字符集测试', () => {
    describe('发行不能包含 ":" 字符', () => {

        const text = `
        add $:u1/r1 as p1
          do
          end
        `;

        const {errors, errorObjects} = compile(text);
        test('需要报错', () => {
            expect(errors).not.toBeNull();
        });

        test('错行数应为 2', () => {
            expect(errorObjects[0].line).toBe(2);
        })

    });

    describe('mock 不能包含 ":" 字符', () => {
        const text = `
        add #:b1/m1 as p2
          do
          end
        `;

        const {errors, errorObjects} = compile(text);
        test('需要报错', () => {
            expect(errors).not.toBeNull();
        });

        test('错行数应为 2', () => {
            expect(errorObjects[0].line).toBe(2);
        });

    });

    describe('presentable 不能包含 ":" 字符', () => {
        const text = `
        add #b1/m1 as :p2
          do
          end
        `;
        const {errors, errorObjects} = compile(text);
        test('需要报错', () => {
            expect(errors).not.toBeNull();
        });

        test('错行数应为 2', () => {
            expect(errorObjects[0].line).toBe(2);
        });
    });

    describe('presentable 不能包含 "@" 字符', () => {
        const text = `
        add #b1/m10 as p@2
          do
          end
        `;
        const {errors, errorObjects} = compile(text);
        test('需要报错', () => {
            expect(errors).not.toBeNull();
        });

        test('错行数应为 2', () => {
            expect(errorObjects[0].line).toBe(2);
        });
    });

    describe('presentable mock release 可以是纯数字', () => {
        const text = `
        add $1111/2222@1.1.1 as 3333
          do
          end
        `;
        const {errors, errorObjects} = compile(text);
        test('不会报错1', () => {
            expect(errors).toBeNull();
        });

        test('不会报错2', () => {
            expect(errorObjects).toBeNull();
        });
    });
});
