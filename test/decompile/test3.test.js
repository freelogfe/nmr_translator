const {decompile} = require('../../lib');

const rules = [
    {
        online: null,
        operation: "alter",
        presentableName: "我爱你",
        replaces: [
            {
                replaced: {name: "12345123451234/我爱你", versionRange: "*", type: "release"},
                replacer: {name: "12345123451234/下雪了", type: "release", versionRange: "0.1.0"},
                scopes: [],
            }
        ],
        tags: null,
        text: ""
    }
];
const text = 'alter 我爱你\n  do\n    replace $12345123451234/我爱你 with $12345123451234/下雪了@0.1.0\n  end';
describe('综合测试1', () => {
    test('测试', () => {
        // console.log(JSON.stringify(decompile(rules)));
        expect(decompile(rules)).toEqual(text);
    });
});
