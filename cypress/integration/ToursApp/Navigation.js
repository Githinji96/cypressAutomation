///<reference types="cypress"/>

describe('Navigation pages',()=>{
    it('verify navigation',()=>{
        cy.visit("https://demo.nopcommerce.com")
        cy.title().should('eql','nopCommerce demo store')
        cy.get('.ico-register').click();
        cy.title().should('eql','nopCommerce demo store. Register')

        cy.go('back')
        cy.title().should('eql','nopCommerce demo store')
        cy.go('forward')
        cy.title().should('eql','nopCommerce demo store. Register')

        cy.go(-1)
        cy.title().should('eql','nopCommerce demo store')
        cy.go(1)
        cy.title().should('eql','nopCommerce demo store. Register')
        cy.reload()

    })
})