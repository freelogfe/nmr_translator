const {decompile} = require('../../lib');

const rules = [
    {
        online: null,
        operation: "alter",
        presentableName: "DDDDDDDDDD",
        replaces: [
            {
                replaced: {name: "12345123451234/AAAAAAAAAA", versionRange: "*", type: "release"},
                replacer: {name: "12345123451234/CCC", type: "release", versionRange: "0.1.0"},
                scopes: [
                    [
                        {name: "12345123451234/DDDDDDDDDD", versionRange: "*", type: "release"},
                        {name: "12345123451234/BBBBBBBBBB", versionRange: "*", type: "release"},
                    ]
                ],

            },
        ],
        tags: null,
    }
];
const text = 'alter DDDDDDDDDD\n  do\n    replace $12345123451234/AAAAAAAAAA with $12345123451234/CCC@0.1.0 under $12345123451234/DDDDDDDDDD > $12345123451234/BBBBBBBBBB\n  end';
describe('综合测试1', () => {
    test('测试', () => {
        // console.log(JSON.stringify(decompile(rules)));
        expect(decompile(rules)).toEqual(text);
    });
});
