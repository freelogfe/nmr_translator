# nmr_translator

## 1 安装

```
npm i @freelog/nmr_translator
```

## 2 使用

```
// 引入编译器
const {compile} = require('nmr_translator');
// 要编译的字符内容
const rulesText = '......';
// 调用函数，并返回编译结果
const {errors, rules} = compile(rulesText);
```

**注：规则语法概要**
```
// 『新增』 Presentable 的符号
+
// 对原有 Presentable 进行『设置』的符号
&
// + 和 & 紧跟的词为当前 Presentable 的『名称』，是检索每条 Presentable 的索引
p1
// mock
#:b1/m1
// 带版本的 『release』
$:u2/r1@1.0.0
// 省略版本的 『release』，当为被替换时，特指所有版本" @* "；其它情况，都指最新版本" @latest "
$:u1/r1
// 『标签』（可以省略）
tags=[1,2,3]
// 『替换』，默认指该 Presentable 下全部替换（可以省略）
replace=[#:b1/m1=>#:b2/m2]
// 『替换』并指定范围（可以省略）
replace=[$:u1/r1@1.0.0=>$:u2/r2~[$:u3/r4->$u4/r4,#:b1/m1],$u3/r3=>#:b1/m1]
// 『上下线』，当为上线时，有该属性，否则没有该属性，默认下线
online
// 单行注释符号" // "
    // 这是一条注释
// 多行注释 /* */
    /****
    这是多行注释
    这是多行注释
    ****/

/**
 * 新增 Presentable，命名为 p1，
 * 引用的 mock 名称为 b1/m1
 * 设置标签为 t1,t2,t3
 * 并将此 Presentable 下依赖的所有 release u1/r1 替换为 mock b2/m2
 * 并且为上线状态
 */
+ p1 #:b1/m1 tags=[t1,t2,t3] replace=[$:u1/r1=>#:b2/m2] online

/**
 * 设置正式 Presentable p2
 * 将 release u3/r3@1.0.0 替换为 mock b4/m4，替换范围为 release u3/r4 依赖的 u4/r4 依赖的 u3/r3@1.0.0 和 release u3/r4 依赖的 b1/m1 依赖下的所有 u3/r3@1.0.0
 * 将此 Presentable 下依赖的所有 release u3/r3 替换为 mock b1/m1
 */
& p2 replace=[$u3/r3@1.0.0=>#:b4/m4~[$:u3/r4->$u4/r4->$u3/r3@1.0.0,$:u3/r4->#:b1/m1],$u3/r3=>#:b1/m1]

```

## 3 结果说明
- 如果编译出错，```error``` 变量为错误内容组成的数组
- 如果编译通过，```error``` 变量为 ```null```，```rules``` 为编译结果的规则数组


```typescript
interface ICandidate {
    name: string;
    versionRange?: string;
    type: 'release' | 'mock';
}

interface IReplace {
    replaced: ICandidate;
    replacer: ICandidate;
    scopes: ICandidate[][];
}

interface IRule {
    text: string;
    operation: 'add' | 'alter';
    presentableName: string;
    candidate?: ICandidate;
    tags: Array<string | number> | null;
    replace: IReplace[];
    online: boolean | null;
}

interface IResult {
    error: string[] | null;
    rules?: IRule[];
}

// 最终编译结果
// const {errors, rules}: IResult = compile(rulesText);
```
