# nmr_translator 开发

## 1 安装 Java 环境

```
下载并安装 [https://www.java.com](https://www.java.com)
配置好 Java 环境
```

## 2 安装 npm 依赖

```
yarn
```

## 3 生成 JavaScript 代码

- 根据根目录下 mapping.g4 文件定义的语法规则，在 gen 目录下生成对应的 JavaScript 文件
```
yarn build
```

## 4 编写所需文法处理逻辑

```
在 lib 目录下，根据业务需要，编写所需词法解析逻辑，并暴露出业务所需的函数
```

## 5 测试结果是否正确

```
yarn test
```