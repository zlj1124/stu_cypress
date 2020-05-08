
// 别名的方式访问fixture里面的
beforeEach(function () {
    // 对用户的fixtures取个别名
    cy.fixture('example.json').as('users')
  })
  
  it('utilize users in some way', function () {
    // 访问users的属性
    const user = this.users
  
    // 确保header中包含第一个用户名字
    for (const key in user) {

        cy.log(key)

        
    }
    cy.log(user)
    // cy.get('name').should('contain', user[0])
  })