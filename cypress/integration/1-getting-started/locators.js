///<reference types= "cypress"/>

describe('locator elements',()=>{
    it('verify locators elements',()=>{
        cy.visit("https://demo.nopcommerce.com/")
        cy.get("#small-searchterms").type("Nokia")
        cy.get("[type='submit']").click()
        cy.get(".product-box-add-to-cart-button").click()
        cy.get(".cart-label").click()
        //cy.get(".cart-label").trigger('mouseover')
        cy.wait(3000)
        cy.get(".qty-input").clear().type('3');
        cy.get("#updatecart").click()
        cy.get("#shopping-cart-form > div.cart-footer > div.totals").contains('$1,047.00')
       
        
    })
})
