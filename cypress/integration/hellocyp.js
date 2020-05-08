describe('My First Test', function() {
    it('Does not do much!', function() {
      cy.visit('http://192.168.3.21:18093/login')
      cy.get('.account').debug().type('10086').should('have.value', '10086')
      cy.get('.password').type('10086').should('have.value', '10086')
      cy.contains('登录').click()
      cy.url().should('include', '/monitor')


        // 在这里有其它的测试代码

        // cy.get('@comments').should((response) => {
        // if (response.status === 200) {
        //     expect(response).to.have.property('duration')
        //     } else {
        //     // 在这里你可以做任何你想做的判断
        //     }
        // })
        })
            

   
  })