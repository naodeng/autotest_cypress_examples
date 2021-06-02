// 测试用例
describe("光谷社区登录验证", function () {

    // 执行用例执行用例之前先进入首页
    beforeEach(function () {
        cy.initHomePage()
    })

    //正确邮箱账号登录
    it("正确邮箱账号登录验证", function () {
        cy.login("dengnao.123@163.com","xxxx")
    })

        // 执行用例执行用例之后清除登录信息
        afterEach(function () {
            // 清除cookies
            cy.clearCookies()
        })
})