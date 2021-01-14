const {decompile} = require('../../lib');

describe('综合测试1', () => {
    const rules = [
        {
            "labels": [],
            "replaces": [
                {
                    "replaced": {
                        "name": "uu9/rr9",
                        "versionRange": "1.1.1",
                        "type": "resource"
                    },
                    "replacer": {
                        "name": "bb0/mm0",
                        "type": "object"
                    },
                    "scopes": [
                        [
                            {
                                "name": "u6/m6",
                                "versionRange": "*",
                                "type": "resource"
                            },
                            {
                                "name": "u7/m7",
                                "versionRange": "*",
                                "type": "resource"
                            }
                        ],
                        [
                            {
                                "name": "u8/m8",
                                "versionRange": "*",
                                "type": "resource"
                            }
                        ]
                    ]
                },
                {
                    "replaced": {
                        "name": "uu4/rr4",
                        "versionRange": "*",
                        "type": "resource"
                    },
                    "replacer": {
                        "name": "bb5/mm5",
                        "type": "object"
                    },
                    "scopes": [
                        [
                            {
                                "name": "u1/m1",
                                "versionRange": "*",
                                "type": "resource"
                            },
                            {
                                "name": "u2/m2",
                                "versionRange": "*",
                                "type": "resource"
                            }
                        ],
                        [
                            {
                                "name": "u3/m3",
                                "versionRange": "*",
                                "type": "resource"
                            }
                        ]
                    ]
                }
            ],
            "online": false,
            "operation": "add",
            "candidate": {
                "name": "u2/r10",
                "versionRange": "1.1.1",
                "type": "resource"
            },
            "presentableName": "p3"
        },
        {
            "labels": [
                "t5",
                "t6",
                "t7"
            ],
            "replaces": [
                {
                    "replaced": {
                        "name": "uu9/rr9",
                        "versionRange": "1.1.1",
                        "type": "resource"
                    },
                    "replacer": {
                        "name": "bb0/mm0",
                        "type": "object"
                    },
                    "scopes": [
                        [
                            {
                                "name": "u6/m6",
                                "versionRange": "*",
                                "type": "resource"
                            },
                            {
                                "name": "u7/m7",
                                "versionRange": "*",
                                "type": "resource"
                            }
                        ],
                        [
                            {
                                "name": "u8/m8",
                                "versionRange": "*",
                                "type": "resource"
                            }
                        ]
                    ]
                },
                {
                    "replaced": {
                        "name": "uu4/rr4",
                        "versionRange": "*",
                        "type": "resource"
                    },
                    "replacer": {
                        "name": "bb5/mm5",
                        "type": "object"
                    },
                    "scopes": [
                        [
                            {
                                "name": "u1/m1",
                                "versionRange": "*",
                                "type": "resource"
                            },
                            {
                                "name": "u2/m2",
                                "versionRange": "*",
                                "type": "resource"
                            }
                        ],
                        [
                            {
                                "name": "u3/m3",
                                "versionRange": "*",
                                "type": "resource"
                            }
                        ]
                    ]
                }
            ],
            "online": false,
            "operation": "add",
            "candidate": {
                "name": "u2/r10",
                "versionRange": "1.1.1",
                "type": "resource"
            },
            "presentableName": "p3"
        }
    ];
    const text = 'add $u2/r10@1.1.1 as p3\n  do\n    set_labels \n    replace $uu9/rr9@1.1.1 with #bb0/mm0 under $u6/m6 > $u7/m7, $u8/m8\n    replace $uu4/rr4 with #bb5/mm5 under $u1/m1 > $u2/m2, $u3/m3\n    hide\n  end\n\nadd $u2/r10@1.1.1 as p3\n  do\n    set_labels t5, t6, t7\n    replace $uu9/rr9@1.1.1 with #bb0/mm0 under $u6/m6 > $u7/m7, $u8/m8\n    replace $uu4/rr4 with #bb5/mm5 under $u1/m1 > $u2/m2, $u3/m3\n    hide\n  end';

    test('测试', () => {
        // console.log(JSON.stringify(decompile(rules)));
        expect(decompile(rules)).toEqual(text);
    });
});
