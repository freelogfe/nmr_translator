const {compile} = require('../lib');

const text = `
    add $u2/r10@1.1.1 as p3
      do
        set_tags t1,t2,t3
      end
    `;
const {errors, rules} = compile(text);
// describe('the La Croix cans on my desk',

describe('设置标签测试', () => {
    test('不会报错', () => {
        expect(errors).toBe(null);

    });

    test('presentableName = p3', () => {
        expect(rules[0].presentableName).toEqual('p3');
    });

    test('tags = ' + `['t1', 't2', 't3']`, () => {
        expect(rules[0].tags).toEqual(['t1', 't2', 't3']);
    });

    test('candidate 对象', () => {
        expect(rules[0].candidate).toEqual({"name": "u2/r10", "versionRange": "1.1.1", "type": "release"});
    });

});


