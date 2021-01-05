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

    describe('对象不能包含 ":" 字符', () => {
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

    describe('展品不能包含 ":" 字符', () => {
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

    describe('展品不能包含 "@" 字符', () => {
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

    describe('展品、对象、资源可以是纯数字', () => {
        const text = `
        add $1111/2222@1.1.1 as 3333
          do
          end
        add #1111/2222 as 4444 
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

    // TODO:
    // describe(`所有名字都可以使用"."`, () => {
    //     const text = `
    //     add $u1/r1 as p1
    //       do
    //       end
    //
    //     add #b1/o1 as p2
    //       do
    //       end
    //     `;
    //
    //     const {errors, rules, errorObjects} = compile(text);
    //     // console.log(rules, 'rules');
    //     test('资源名称、对象名称和展品名称可以包含"."字符，不会报错1', () => {
    //         // console.log(errors, 'EEEEEEEEEE');
    //         expect(errors).toBeNull();
    //     });
    //
    //     test('资源名称和展品名称可以包含"."字符，不会报错1', () => {
    //         expect(errorObjects).toBeNull();
    //     });
    // });

    describe(`资源名称中可以使用“@”来添加版本`, () => {
        const text = `
        add $u1/r1@^1.1.1 as p1
          do
          end
        `;

        const {errors, rules, errorObjects} = compile(text);
        // console.log(rules, 'rules111');
        test('没有操作，不会报错1', () => {
            // console.log(errors, 'EEEEEEEEEE');
            expect(errors).toBeNull();
        });

        test('没有操作，不会报错2', () => {
            expect(errorObjects).toBeNull();
        });

    });
});
