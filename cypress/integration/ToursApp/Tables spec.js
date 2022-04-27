describe('Tables specifaction',()=>{
    it('verify tables',()=>{
         cy.visit('https://testautomationpractice.blogspot.com/')
         cy.get('#HTML1 > .widget-content').contains('td','Learn Selenium').should('be.visible')
         cy.get('tbody > :nth-child(2) > :nth-child(3)').contains('Selenium').should('be.visible')

            
            
        
    })
})
//'table[name=BookTable]>tbody>tr td:nth-child(2)'