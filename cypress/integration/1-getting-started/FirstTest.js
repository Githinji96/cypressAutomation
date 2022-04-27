describe('First test',()=>{
    it('Verify title page-positive',()=>{
        cy.visit('https://demo.nopcommerce.com')
        cy.title().should('eql','nopCommerce demo store')
    })
})