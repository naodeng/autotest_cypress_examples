// 测试用例
describe("api测试demo", function () {


    // post接口测试脚本demo
    it("POST接口验证", function () {
        cy.request({
            method: 'POST', //请求类型
            url: 'http://127.0.0.1:81/api/add_event/', // 请求连接
            form: true, // 请求参数类型
            body: {
                'name': 'zhangsan1',
                'address': '101build',
                'limit': '2000',
                'start_time': '2021-06-08 11:11:11',
                'eid': '1234'
            }, //请求参数
        }).then((res) => {
            console.log(res.body)
            expect(res.status).to.be.equal(200)
            expect(res.body.status).to.be.equal(10022)
            expect(res.body.message).to.be.equal("event id already exists")
        })

    });
    // get接口测试脚本demo
    it("get接口验证", function () {
        cy.request({
            method: "GET", //请求类型
            url: 'http://127.0.0.1:81/api/get_event_list?eid='+'1234', // 请求连接
        }).then((res) => {
            console.log(res.body)
            expect(res.status).to.be.equal(200)
            expect(res.body.status).to.be.equal(10200)
            expect(res.body.message).to.be.equal("success")
        })

    })

})