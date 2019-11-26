const {compile} = require('../../lib');

describe('测试关键子错误', () => {
    // TODO:
    // test('把『do』关键字写错要报错', () => {
    //     const text = `
    //         alter p2
    //           d
    //           end
    //     `;
    //     const {errorObjects} = compile(text);
    //     expect(errorObjects[0].line).toBe(3);
    // });

    // TODO:
    // test('把『do』关键字写错, 中间有其它内容，要报错', () => {
    //     const text = `
    //         alter p2
    //           d
    //             set_tags a1, b2
    //           end
    //     `;
    //     const {errorObjects} = compile(text);
    //     expect(errorObjects[0].line).toBe(3);
    // });

    test('把『end』关键字写错要报错', () => {
        const text = `
            alter p2
              do
              en
        `;
        const {errorObjects} = compile(text);
        expect(errorObjects[0].line).toBe(4);
    });

    test('把『end』关键字写错，中间有其它内容，要报错', () => {
        const text = `
            alter p2
              do
              en
        `;
        const {errorObjects} = compile(text);
        expect(errorObjects[0].line).toBe(4);
    });

    test('每条语句必选以『add』或『alter』开头 1', () => {
        const text = `
            lter p2
              do
              end
        `;
        const {errorObjects} = compile(text);
        expect(errorObjects[0].line).toBe(2);
    });

    test('每条语句必选以『add』或『alter』开头 2', () => {
        const text = `
            alter p2
              do
              end
              
            lter p2
              do
              end
        `;
        const {errorObjects} = compile(text);
        expect(errorObjects[0].line).toBe(6);
    });

    test('动作『set_tags』必须正确书写', () => {
        const text = `
           alter p3
             do
               set_tag a1
               replace $u1/r1 with #b1/m1
               show
               hide
             end
        `;
        const {errorObjects} = compile(text);
        expect(errorObjects[0].line).toBe(4);
    });

    test('动作『replac』必须正确书写', () => {
        const text = `
           alter p3
             do
               set_tags a1
               replac $u1/r1 with #b1/m1
               show
               hide
             end
        `;
        const {errorObjects} = compile(text);
        expect(errorObjects[0].line).toBe(5);
    });

    test('动作『show』必须正确书写', () => {
        const text = `
           alter p3
             do
               set_tags a1
               replace $u1/r1 with #b1/m1
               sho
               hide
             end
        `;
        const {errorObjects} = compile(text);
        expect(errorObjects[0].line).toBe(6);
    });

    test('动作『hide』必须正确书写', () => {
        const text = `
           alter p3
             do
               set_tags a1
               replace $u1/r1 with #b1/m1
               show
               hid
             end
        `;
        const {errorObjects} = compile(text);
        expect(errorObjects[0].line).toBe(7);
    });

});
