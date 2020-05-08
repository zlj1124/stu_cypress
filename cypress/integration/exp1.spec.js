// -- Start: Our Application Code --
function add (a, b) {
    return a + b
  }
  
  function subtract (a, b) {
    return a - b
  }
  
  function divide (a, b) {
    return a / b
  }
  
  function multiply (a, b) {
    return a * b
  }
  // -- End: Our Application Code --
  
  // -- Start: Our Cypress Tests --
  describe('Unit test our math functions', function() {
    
    context('math', function() {
        before(function() {
            cy.log('runs once before all tests in the block');
            
          // runs once before all tests in the block
        })
      
        after(function() {
            cy.log('runs once after all tests in the block');
    
          // runs once after all tests in the block
        })
      
        beforeEach(function() {
            cy.wrap('one').as('a')
            cy.log('runs before each test in the block');
        
          // runs before each test in the block
        })
      
        afterEach(function() {
            cy.log('runs after each test in the block');
    
          // runs after each test in the block
        })
    
      it('can add numbers', function() {
        expect(this.a).to.eq('one')
        expect(add(1, 2)).to.eq(3)
      })
  
      it.skip('can subtract numbers', function() {
        expect(subtract(5, 12)).to.eq(-7)
      })
  
      specify('can divide numbers', function() {
        expect(divide(27, 9)).to.eq(3)
      })
  
      specify('can multiply numbers', function() {
        expect(multiply(5, 4)).to.eq(20)
      })
    })
  })

  
   
  // -- End: Our Cypress Tests --