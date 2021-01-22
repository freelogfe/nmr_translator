const {decompile} = require('../../lib');

describe('替换规则反编译测试', () => {

    const rules = [{
        operation: 'alter',
        exhibitName: 'en1',
        replaces: [
            {
                replaced: {
                    name: 'uu9/rr9',
                    versionRange: '1.1.1',
                    type: 'resource'
                },
                replacer: {
                    name: 'bb0/mm0',
                    type: 'object'
                },
                scopes: [
                    [
                        {
                            name: 'u6/m6',
                            versionRange: '*',
                            type: 'resource'
                        },
                        {
                            name: 'u7/m7',
                            versionRange: '*',
                            type: 'resource'
                        }
                    ],
                    [
                        {
                            name: 'u8/m8',
                            versionRange: '*',
                            type: 'resource'
                        }
                    ]
                ]
            },
            {
                replaced: {
                    name: 'uu4/rr4',
                    versionRange: '*',
                    type: 'resource'
                },
                replacer: {
                    name: 'bb5/mm5',
                    type: 'object'
                },
                scopes: [
                    [
                        {
                            name: 'u1/m1',
                            versionRange: '*',
                            type: 'resource'
                        },
                        {
                            name: 'u2/m2',
                            versionRange: '*',
                            type: 'resource'
                        }
                    ],
                    [
                        {
                            name: 'u3/m3',
                            versionRange: '*',
                            type: 'resource'
                        }
                    ]
                ]
            }
        ],
    }];

    const text =
        'alter en1\n' +
        '  do\n' +
        '    replace $uu9/rr9@1.1.1 with #bb0/mm0 under $u6/m6 > $u7/m7, $u8/m8\n' +
        '    replace $uu4/rr4 with #bb5/mm5 under $u1/m1 > $u2/m2, $u3/m3\n' +
        '  end';

    test('编译结果正确', () => {
        expect(decompile(rules)).toEqual(text);
    });
});
