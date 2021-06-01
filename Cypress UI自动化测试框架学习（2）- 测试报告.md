# Cypress UI自动化测试框架学习（2）- 测试报告

## 写在前面

由于Cypress测试报告是建立在Mocha测试报告之上的，这意味着任何为Mocha构建的报告程序都可以与Cypress一起使用。

以下是内置的Mocha测试类型列表（Cypress也同样支持）：https://mochajs.org/#reporters

## 前置准备工作

在package.json文件的scripts模块加入了如下脚本："cypress:run":"cypress run"，便于后面生成报告

不同运行脚本的区别：

 - cypress run：是以无头浏览器模式跑测试用例文件夹下的所有测试用例
 - cypress open：会打开测试用例集的界面，需要手动运行

## 常用报告类型

### spec格式报告

- 运行命令

```
$ npm run cypress:run --reporter=spec
```

- 报告截图
![](https://tva1.sinaimg.cn/large/008i3skNgy1gqx2v3ihu9j31ka0eojtc.jpg)

### Dot格式报告
- 前置：在cypress.json文件新增"reporter": "dot"信息

- 运行方式：

```
$ npm run cypress:run
```

- 报告截图
![](https://tva1.sinaimg.cn/large/008i3skNgy1gqy74s99hij30qo0800t5.jpg)

### json格式报告
- 前置：在cypress.json文件新增"reporter": "json"信息

- 运行方式：

```
$ npm run cypress:run
```

- 报告截图
![](https://tva1.sinaimg.cn/large/008i3skNgy1gqy6zo6iu9j30u00u644f.jpg)

### List格式报告
- 前置：在cypress.json文件新增"reporter": "list"信息

- 运行方式：

```
$ npm run cypress:run
```

- 报告截图
![](https://tva1.sinaimg.cn/large/008i3skNgy1gqy78or4xhj30v80by76y.jpg)

### NYAN格式报告
- 前置：在cypress.json文件新增"reporter": "nyan"信息

- 运行方式：

```
$ npm run cypress:run
```

- 报告截图

![](https://tva1.sinaimg.cn/large/008i3skNgy1gqy7cxd155j30my09mq3k.jpg)
## 高大上报告类型

### Mochawesome格式报告
 - 前置：安装 Mocha、Mochawesome 至项目中

```
npm install --save-dev mocha
npm install --save-dev mochawesome
```
- 在cypress.json文件新增"reporter": "mochawesome"信息

- 运行命令

```
$ npm run cypress:run
```
- 报告截图

![](https://tva1.sinaimg.cn/large/008i3skNgy1gqy7w33bfsj31xd0u0q78.jpg)

### allure格式报告
 - 前置：安装 allure（推荐使用brew安装）

```
$ brew install allure
```
 - 在cypress.json文件新增如下信息

```
    "reporter": "junit",
    "reporterOptions": {
        "mochaFile": "results/test_report_[hash].xml",
        "toConsole": true
    }
```

- 运行命令

```
$ npm run cypress:run
```
- 生成报告

```
$ allure serve results 
```
- 报告截图

![](https://tva1.sinaimg.cn/large/008i3skNgy1gqy9t4vp9xj31p80u044v.jpg)


### Dashboard格式报告
> 待完善，参考资料：https://docs.cypress.io/guides/dashboard/introduction#Features

- 运行命令

```
$ npx cypress run --record --key 7aaee33b-f67b-4993-8d6c-2c392a1bd1c8
```
- 报告截图
![](https://tva1.sinaimg.cn/large/008i3skNgy1gqya4w0n7xj31op0u0do2.jpg)

