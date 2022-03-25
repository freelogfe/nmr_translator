#### 映射规则结构文档

输入文件：

```
// 昨夜西风凋碧树
// 一条大河波浪宽
add $u2/r10.0@1.1.1 as p3
  do
    // 千金之子，坐不垂堂
    set_labels t1 | t2 | t3
    replace $uu9/rr9@1.1.1 with #bb0/mm0 under $u6/m6>$u7/m7 | $u8/m8
    // 添加依赖
    add_rely $uu9/rr9@1.1.1
    // 添加依赖到某个依赖下
    add_rely $uu9/rr9@1.1.1 | $uu9/rr9@1.1.1 to #bb0/mm0>#bb0/mm0
    // 移除依赖
    delete_rely $uu9/rr9@1.1.1
    // 移除某个依赖的依赖
    delete_rely $uu9/rr9@1.1.1 from #bb0/mm0
    show
  end
/*
 * 无物结同心
 * 烟花不堪剪
 */
alter p4
  do
    hide
    set_title "set_titles"
    set_cover "set_covers"
    add_attr 1 2 3
    delete_attr 4
  end
activate_theme 123
```

输出文件：

```
{
    "rules": [
        {
            "text": "// 昨夜西风凋碧树\r\n",
            "operation": "comment"
        },
        {
            "text": "// 一条大河波浪宽\r\n",
            "operation": "comment"
        },
        {
            "text": "add $u2/r10.0@1.1.1 as p3\r\n  do\r\n    // 千金之子，坐不垂堂\r\n    set_labels t1 | t2 | t3\r\n    replace $uu9/rr9@1.1.1 with #bb0/mm0 under $u6/m6>$u7/m7 | $u8/m8\r\n    // 添加依赖\r\n    add_rely $uu9/rr9@1.1.1\r\n    // 添加依赖到某个依赖下\r\n    add_rely $uu9/rr9@1.1.1 | $uu9/rr9@1.1.1 to #bb0/mm0>#bb0/mm0\r\n    // 移除依赖\r\n    delete_rely $uu9/rr9@1.1.1\r\n    // 移除某个依赖的依赖\r\n    delete_rely $uu9/rr9@1.1.1 from #bb0/mm0\r\n    show\r\n  end",
            "operation": "add",
            "actions": [
                {
                    "operation": "comment",
                    "content": "// 千金之子，坐不垂堂\r\n"
                },
                {
                    "operation": "set_labels",
                    "content": [
                        "t1",
                        "t2",
                        "t3"
                    ]
                },
                {
                    "operation": "replace",
                    "content": {
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
                    }
                },
                {
                    "operation": "comment",
                    "content": "// 添加依赖\r\n"
                },
                {
                    "operation": "add_rely",
                    "content": {
                        "resources": [
                            "$uu9/rr9@1.1.1"
                        ],
                        "target": null
                    }
                },
                {
                    "operation": "comment",
                    "content": "// 添加依赖到某个依赖下\r\n"
                },
                {
                    "operation": "add_rely",
                    "content": {
                        "resources": [
                            "$uu9/rr9@1.1.1"
                        ],
                        "target": "#bb0/mm0>#bb0/mm0"
                    }
                },
                {
                    "operation": "comment",
                    "content": "// 移除依赖\r\n"
                },
                {
                    "operation": "delete_rely",
                    "content": {
                        "resources": [
                            "$uu9/rr9@1.1.1"
                        ],
                        "target": null
                    }
                },
                {
                    "operation": "comment",
                    "content": "// 移除某个依赖的依赖\r\n"
                },
                {
                    "operation": "delete_rely",
                    "content": {
                        "resources": [
                            "$uu9/rr9@1.1.1"
                        ],
                        "target": "#bb0/mm0"
                    }
                },
                {
                    "operation": "online",
                    "content": true
                }
            ],
            "exhibitName": "p3",
            "candidate": {
                "name": "u2/r10.0",
                "versionRange": "1.1.1",
                "type": "resource"
            }
        },
        {
            "text": "/*\r\n * 无物结同心\r\n * 烟花不堪剪\r\n */\r\n",
            "operation": "comment"
        },
        {
            "text": "alter p4\r\n  do\r\n    hide\r\n    set_title \"set_titles\"\r\n    set_cover \"set_covers\"\r\n    add_attr 1 2 3\r\n    delete_attr 4\r\n  end",
            "operation": "alter",
            "actions": [
                {
                    "operation": "online",
                    "content": false
                },
                {
                    "operation": "set_title",
                    "content": "set_titles"
                },
                {
                    "operation": "set_cover",
                    "content": "set_covers"
                },
                {
                    "operation": "add_attr",
                    "content": {
                        "key": "1",
                        "value": "2",
                        "description": "3"
                    }
                },
                {
                    "operation": "delete_attr",
                    "content": {
                        "key": "4"
                    }
                }
            ],
            "exhibitName": "p4"
        },
        {
            "text": "activate_theme 123",
            "operation": "activate_theme",
            "actions": [],
            "exhibitName": "123"
        }
    ],
    "errors": [
        "添加依赖中，不能重复添加 rely: $uu9/rr9@1.1.1 target: #bb0/mm0>#bb0/mm0"
    ],
    "errorObjects": [
        {
            "line": -1,
            "charPositionInLine": -1,
            "offendingSymbol": "",
            "msg": "添加依赖中，不能重复添加 rely: $uu9/rr9@1.1.1 target: #bb0/mm0>#bb0/mm0"
        }
    ]
}
```

结构说明：

```typescript
// 规则
export interface Rule {
    // 原始文本
    text: string;
    // 操作 add | alter | activate_theme | comment
    operation: string;
    // 命令行动作
    actions?: Action[];
    // 展品名，当 operation = add | alter | activate_theme 时，存在该属性
    exhibitName?: string;
    // 标的物，当 operation = add 时，存在该属性
    candidate?: Candidate;
}

// 标的物
export interface Candidate {
    // 名称
    name: string;
    // 版本号 当 type = resource 时，存在该属性
    versionRange?: string;
    // 类型，resource | object
    type: string;
}

// 动作
export interface Action {
    // 操作
    operation: string;
    // 内容，见下面 ContentXx
    content: ContentSetLabel[] | ContentReplace | ContentOnline | ContentSetTitle | ContentSetCover | ContentAddAttr | ContentDeleteAttr | ContentComment;
}

// 设置标签 operation: "set_labels"
export interface ContentSetLabel extends String {
}

// 替换 operation: "replace"
export interface ContentReplace {
    // 被替换者
    replaced: Candidate;
    // 替代者
    replacer: Candidate;
    // 作用域集合
    scopes: Candidate[][];
}

// 设置上下线 operation: "online"
export interface ContentOnline extends Boolean {
}

// 设置标题 operation: "set_title"
export interface ContentSetTitle extends String {
}

// 设置封面 operation: "set_cover"
export interface ContentSetCover extends String {
}

// 添加属性 operation: "add_attr"
export interface ContentAddAttr {
    // 键
    key: string;
    // 值
    value: string;
    // 描述
    description: string;
}

// 删除属性 operation: "delete_attr"
export interface ContentDeleteAttr {
    // 键
    key: string;
}

// 添加依赖 operation: "add_rely"
export interface ContentAddRely{
    // 被添加的依赖
    resources: string[];
    // 添加到的依赖
    target?: string;
}

// 删除依赖 operation: "delete_rely"
export interface ContentDeleteRely{
    // 被添加的依赖
    resources: string[];
    // 添加到的依赖
    target?: string;
}

// 注释 operation: "comment"
export interface ContentComment extends String {
}
```

