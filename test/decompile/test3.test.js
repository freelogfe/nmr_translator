const {decompile} = require('../../lib');

describe('综合测试3', () => {
    const rules = [
        {
            online: false,
            operation: "alter",
            presentableName: "测试3",
            replaces: [
                {
                    replaced: {name: "12345123451234/测试3", versionRange: "*", type: "resource"},
                    replacer: {name: "12345123451234/下雪了", type: "resource", versionRange: "0.1.0"},
                    scopes: [],
                }
            ],
            text: "",
        }
    ];

    const text = 'alter 测试3\n  do\n    replace $12345123451234/测试3 with $12345123451234/下雪了@0.1.0\n    hide\n  end';
    test('测试', () => {
        // console.log(JSON.stringify(decompile(rules)));
        expect(decompile(rules)).toEqual(text);
    });
});
