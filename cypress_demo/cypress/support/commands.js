// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login",(username,password) => {
    cy.clearCookies() //清除cookies,保证页面为未登录状态
    cy.visit('http://www.guanggoo.com/') //访问url
    cy.url().should('include', 'www.guanggoo.com') //验证目标url 是否正确包含光谷社区正确域名 验证是否正确跳转到光谷社区页面
    cy.title().should('contain', '光谷社区') //验证页面 title 是否正确
    cy.get(':nth-child(1) > .nav-collapse').click() //点击登录按钮
    cy.url().should('include', 'login') //验证正确跳转到登录页面
    cy.get('#email') //根据 css 定位用户名输入框
    .type(username) //输入参数化的用户名
    cy.get('#password') //根据 css 定位密码输入框
    .type(password) //输入参数化的密码
    cy.get('.btn-success').click() //点击登录按钮
    cy.get(':nth-child(2) > .nav-collapse').should('contain', '设置') //验证登录成功回到首页，设置按钮展示正确
    })

Cypress.Commands.add("initHomePage",() => {
    cy.visit('http://www.guanggoo.com/') //访问url
    cy.url().should('include', 'www.guanggoo.com') //验证目标url 是否正确包含光谷社区正确域名 验证是否正确跳转到光谷社区页面
    cy.title().should('contain', '光谷社区') //验证页面 title 是否正确
})