# nmr_translator

## 1 安装

```
npm install nmr_translator
```

## 2 使用

```
// 引入编译器
const {compile} = require('nmr_translator');
// 要编译的字符内容
const rulesText = '......';
// 调用函数，并返回编译结果
const {errors, rules} = compile(mappingText);
```

## 3 结果说明
- 如果编译出错，```error``` 变量为错误内容组成的数组
- 如果编译通过，```error``` 变量为 ```null```，```rules``` 为编译结果的规则数组