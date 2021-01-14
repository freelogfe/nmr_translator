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
- 如果编译出错，```error``` ```errorObjects``` 变量均为错误内容组成的数组
- 如果编译通过，```error```  ```errorObjects``` 变量均为 ```null```，```rules``` 为编译结果的规则数组


```typescript
interface ICandidate {
    name: string;
    versionRange?: string;
    type: 'resource' | 'object';
}

interface IReplace {
    replaced: ICandidate;
    replacer: ICandidate;
    scopes: ICandidate[][];
}

interface IRule {
    text: string;
    operation: 'add' | 'alter';
    exhibitName: string;
    candidate?: ICandidate;
    labels: string[] | null;
    replace: IReplace[];
    online: boolean | null;
    cover: string;
    title: string;
    attrs: {
        operation: 'add' | 'delete'; 
        key: string;
        value?: string;
        description?: string;
    }[];
}

interface IErrorObject {
    line?: number;
    col?: number;
    msg: string;
    lineText?: string;
}

interface IResult {
    errors: string[] | null;
    rules?: IRule[];
    errorObjects: IErrorObject[] | null;
}

// 最终编译结果
// const {errors, rules, errorObjects}: IResult = compile(rulesText);
```
