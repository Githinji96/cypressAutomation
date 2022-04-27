///<reference types ="cypress"/>

import LoginPage from "../PageObject/LoginPage"


describe('page object demo',()=>{
    it('logindemo test', ()=>{
        const lop = new LoginPage()
        lop.visit()
        lop.fillemail("admin@yourstore.com")
        lop.fillpassword("admin")
        lop.submit()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')

    })
})