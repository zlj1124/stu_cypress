
// 使用request 请求进行登录并提取登录方法为公共方法
Cypress.Commands.add('login', (userType, options = {}) => {
        const accountTypes = {   // 设置账号类型
            admin:{
                username:'10086',
                password:'10086'
            }
        }
        cy.log(accountTypes[userType] )    
        cy.request({
            url:'http://192.168.3.21:30236/auth/login/',
            method:'POST',
            body:accountTypes[userType]      // 使用 超管 账号登录
        }).then((resp)=>{
            // cy.log(resp.body) 设置sessionStorage
            window.sessionStorage.setItem('token',resp.body.token)
            window.sessionStorage.setItem('profile',resp.body.profile)
        })
        
    })

describe('车辆监控',function(){
    beforeEach(function() {
        cy.login('admin')
        cy.visit('http://192.168.3.21:18093/monitor')

          
    })

    it('验证搜索框查询清空功能',function(){
        // 验证搜索框查询清空功能
        cy.url().should('include', '/monitor')
        cy.get('.ivu-input').type('TESTLIWPHP0111124')
        cy.contains('查询').click()
        cy.get('.ivu-scroll-content > li').should('contain','TESTLIWPHP0111124')


        cy.contains('清空').click()
        cy.get('.reset-btn > span').should('not.have.text' )
        
    })

    


   
})