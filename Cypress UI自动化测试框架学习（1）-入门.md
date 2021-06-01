# Cypress UI自动化测试框架学习（1）- 入门

## Introduction

基于 JavaScript 的前端自动化测试工具，可以对浏览器中运行的任何内容进行快速、简单、可靠的测试

Cypress 是自集成的，提供了一套完整的端到端测试，无须借助其他外部工具，安装后即可快速地创建、编写、运行测试用例，且对每一步操作都支持回看

不同于其他只能测试 UI 层的前端测试工具，Cypress 允许编写所有类型的测试，覆盖了测试金字塔模型的所有测试类型【界面测试，集成测试，单元测试】

Cypress官网：https://www.cypress.io/

## Getting Started

> 下面以MacOS来进行介绍，其他系统可参考官网信息

### Operating System

- macOS 10.9 and above (64-bit only)
- Node.js 12 or 14 and above

### Before Started

- 已安装好node.js和npm
  
![](https://tva1.sinaimg.cn/large/008i3skNgy1gqvntxlww1j30k406waau.jpg)

- 已安装好vs code或者其他代码编辑器

### Started and Run

- Step1：通过npm新建项目

```
# 新建项目文件夹
$ mkdir cypress-demo
# 进入项目文件夹
$ cd cypress-demo
# npm项目环境准备
$ npm init
```

- Step2：安装cypress

```
# 项目安装cypress包
$ npm install cypress --save-dev
```

- Step3：运行cypress程序

> 若提示：npm ERR! missing script: cypress:open，可在项目根目录package.json文件的scripts下新增"cypress:open": "cypress open"，保存后再次运行命令即可

```
# 启动demo
$ npm run cypress:open
```

### Started Screenshot

- 运行截图
![](https://tva1.sinaimg.cn/large/008i3skNgy1gqvsqw8ytcj323h0u0qp2.jpg)

- demo用例执行截图
![](https://tva1.sinaimg.cn/large/008i3skNgy1gqvsshqeflj31gl0u0nbf.jpg)

## Try First Testscript

### Testcase

```
1.访问光谷社区主页http://www.guanggoo.com/
2.验证是否正确跳转到光谷社区页面
3.验证网页标题是否正确
4.点击登录按钮，验证正确跳转到登录页面
5.在登录页面输入用户名和输入密码
6.点击登录按钮，验证登录成功
```

### Testscript

- 在项目cypress/integration下新建demo文件夹

- 在demo文件夹下新建demo-guanggoo.js

- demo-guanggoo.js编写测试脚本
  
> 脚本中账号密码需换成自己的账号密码

```
describe('first testcase for cypress',function(){
    it('visit guanggoo homepage and login for guanggoo:',function(){

        // 访问并登录光谷社区
        cy.visit('http://www.guanggoo.com/') //访问url
        cy.url().should('include','www.guanggoo.com')     //验证目标url 是否正确包含光谷社区正确域名 验证是否正确跳转到光谷社区页面
        cy.title().should('contain','光谷社区')  //验证页面 title 是否正确
        cy.get(':nth-child(1) > .nav-collapse').click()   //点击登录按钮
        cy.url().should('include','login')  //验证正确跳转到登录页面
        cy.get('#email') //根据 css 定位用户名输入框
        .type('dengnao.123@163.com')        //输入用户名
        cy.get('#password') //根据 css 定位密码输入框
        .type('xxxxxxx')        //输入密码
        cy.get('.btn-success').click()   //点击登录按钮

    })
})
```

### Run Screenshot

- 运行cypress程序

```
# 启动
$ npm run cypress:open
```

![](https://tva1.sinaimg.cn/large/008i3skNgy1gqvtcq43csj323f0u0qn9.jpg)

- 页面上选择点击运行demo-guanggoo.js即可

![](https://tva1.sinaimg.cn/large/008i3skNgy1gqvtjib8jdj31g80u0e81.jpg)

- 运行通过无报错，代表用例编写成功
