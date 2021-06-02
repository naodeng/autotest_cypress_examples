// 测试用例
describe("光谷社区登录验证", function () {

    // 执行用例执行用例之前先进入首页
    beforeEach(function () {
        // 访问并登录光谷社区
        cy.visit('http://www.guanggoo.com/') //访问url
        cy.url().should('include', 'www.guanggoo.com') //验证目标url 是否正确包含光谷社区正确域名 验证是否正确跳转到光谷社区页面
        cy.title().should('contain', '光谷社区') //验证页面 title 是否正确
        // 获取测试数据
        cy.fixture('testLoginData.json').as('loginData')
    })

    //正确邮箱账号登录
    it("正确邮箱账号登录验证", function () {
        cy.get(':nth-child(1) > .nav-collapse').click() //点击登录按钮
        cy.url().should('include', 'login') //验证正确跳转到登录页面
        cy.get('#email') //根据 css 定位用户名输入框
            .type(this.loginData.testLoginUserEmail.username) //输入邮箱用户名
        cy.get('#password') //根据 css 定位密码输入框
            .type(this.loginData.testLoginUserEmail.password) //输入密码
        cy.get('.btn-success').click() //点击登录按钮
        cy.get('.ui-header > .username')
            .should('have.text', 'waitnoww') //验证登录正确返回到首页，登录信息返回正确
    }),

    //正确ID账号登录
    it("正确id账号登录验证", function () {
        cy.get(':nth-child(1) > .nav-collapse').click() //点击登录按钮
        cy.url().should('include', 'login') //验证正确跳转到登录页面
        cy.get('#email') //根据 css 定位用户名输入框
            .type(this.loginData.testLoginUserId.username) //输入ID用户名
        cy.get('#password') //根据 css 定位密码输入框
            .type(this.loginData.testLoginUserId.password) //输入密码
        cy.get('.btn-success').click() //点击登录按钮
        cy.get('.ui-header > .username')
            .should('have.text', 'waitnoww') //验证登录正确返回到首页，登录信息返回正确
    }),

    //正确手机账号登录
    it("正确手机号账号登录验证", function () {
        cy.get(':nth-child(1) > .nav-collapse').click() //点击登录按钮
        cy.url().should('include', 'login') //验证正确跳转到登录页面
        cy.get('#email') //根据 css 定位用户名输入框
            .type(this.loginData.testLoginUserMobilephone.username) //输入手机号用户名
        cy.get('#password') //根据 css 定位密码输入框
            .type(this.loginData.testLoginUserMobilephone.password) //输入密码
        cy.get('.btn-success').click() //点击登录按钮
        cy.get('.ui-header > .username')
            .should('have.text', 'waitnoww') //验证登录正确返回到首页，登录信息返回正确
    })

        // 执行用例执行用例之后清除登录信息
        afterEach(function () {
            // 清除cookies
            cy.clearCookies()
        })
})