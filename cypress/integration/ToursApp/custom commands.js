///<reference types  = "cypress"/>

describe('Custom command',()=>{
    it('loginTest',function(){
        cy.login('admin@yourstore.com','admin')// valid
        cy.title().should('be.equal','Dashboard/nopCommerce administration')
      
//         cy.login('admin@yourstore111.com','admin')// invalid
//         cy.title().should('be.equal','Your store.Login')
        
//         cy.login('admin@yourstore.com','admin3')// invalid
//         cy.title().should('be.equal','Your store.Login')
//     })
//     it('Add customer',()=>{
//         cy.login('admin@yourstore.com','admin')
//         cy.title().should('be.equal','Dashboard/nopCommerce administration')
// })
//     it('edit customer',()=>{
//       cy.login('admin@yourstore.com','admin')
//        cy.title().should('be.equal','Dashboard/nopCommerce administration')

})
})