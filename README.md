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
const {errors, rules, errorObjects} = compile(rulesText);
```

<!-- **注：规则语法概要** -->

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

interface IErrorObject {
    line?: number;
    col?: number;
    msg: string;
    lineText?: string;
}

interface IResult {
    error: string[] | null;
    rules?: IRule[];
    errorObjects: IErrorObject[] | null;
}

// 最终编译结果
// const {errors, rules, errorObjects}: IResult = compile(rulesText);
```
