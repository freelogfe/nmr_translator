const {decompile} = require('../lib');

const rules = [
    {
        "text": "add $u2/r10@1.1.1 as p3\n  do\n    set_tags t1,t2,t3\n    set_tags t5,t6,t7\n    replace $uu9/rr9@1.1.1 with #bb0/mm0 under $u6/m6>$u7/m7, $u8/m8\n    replace $uu4/rr4 with #bb5/mm5 under $u1/m1>$u2/m2, $u3/m3\n  end",
        "tags": [],
        "replaces": [
            {
                "replaced": {
                    "name": "uu9/rr9",
                    "versionRange": "1.1.1",
                    "type": "release"
                },
                "replacer": {
                    "name": "bb0/mm0",
                    "type": "mock"
                },
                "scopes": [
                    [
                        {
                            "name": "u6/m6",
                            "versionRange": "*",
                            "type": "release"
                        },
                        {
                            "name": "u7/m7",
                            "versionRange": "*",
                            "type": "release"
                        }
                    ],
                    [
                        {
                            "name": "u8/m8",
                            "versionRange": "*",
                            "type": "release"
                        }
                    ]
                ]
            },
            {
                "replaced": {
                    "name": "uu4/rr4",
                    "versionRange": "*",
                    "type": "release"
                },
                "replacer": {
                    "name": "bb5/mm5",
                    "type": "mock"
                },
                "scopes": [
                    [
                        {
                            "name": "u1/m1",
                            "versionRange": "*",
                            "type": "release"
                        },
                        {
                            "name": "u2/m2",
                            "versionRange": "*",
                            "type": "release"
                        }
                    ],
                    [
                        {
                            "name": "u3/m3",
                            "versionRange": "*",
                            "type": "release"
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
            "type": "release"
        },
        "presentableName": "p3"
    },
    {
        "text": "add $u2/r10@1.1.1 as p3\n  do\n    set_tags t1,t2,t3\n    set_tags t5,t6,t7\n    replace $uu9/rr9@1.1.1 with #bb0/mm0 under $u6/m6>$u7/m7, $u8/m8\n    replace $uu4/rr4 with #bb5/mm5 under $u1/m1>$u2/m2, $u3/m3\n  end",
        "tags": [
            "t5",
            "t6",
            "t7"
        ],
        "replaces": [
            {
                "replaced": {
                    "name": "uu9/rr9",
                    "versionRange": "1.1.1",
                    "type": "release"
                },
                "replacer": {
                    "name": "bb0/mm0",
                    "type": "mock"
                },
                "scopes": [
                    [
                        {
                            "name": "u6/m6",
                            "versionRange": "*",
                            "type": "release"
                        },
                        {
                            "name": "u7/m7",
                            "versionRange": "*",
                            "type": "release"
                        }
                    ],
                    [
                        {
                            "name": "u8/m8",
                            "versionRange": "*",
                            "type": "release"
                        }
                    ]
                ]
            },
            {
                "replaced": {
                    "name": "uu4/rr4",
                    "versionRange": "*",
                    "type": "release"
                },
                "replacer": {
                    "name": "bb5/mm5",
                    "type": "mock"
                },
                "scopes": [
                    [
                        {
                            "name": "u1/m1",
                            "versionRange": "*",
                            "type": "release"
                        },
                        {
                            "name": "u2/m2",
                            "versionRange": "*",
                            "type": "release"
                        }
                    ],
                    [
                        {
                            "name": "u3/m3",
                            "versionRange": "*",
                            "type": "release"
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
            "type": "release"
        },
        "presentableName": "p3"
    }
];

const text = decompile(rules);
console.log(text);
