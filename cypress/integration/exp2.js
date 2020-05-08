describe('generation case', function () {
    ['mouseover', 'mouseout', 'mouseenter', 'mouseleave'].forEach((event) => {
      it('triggers event: ' + event, function () {
     
        cy.log('event:'+event)
      })
    })
  })