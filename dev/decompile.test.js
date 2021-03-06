const {decompile} = require('../lib');

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

const text = decompile(rules);
console.log(text);
