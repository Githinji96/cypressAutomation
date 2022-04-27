///<reference types= "cypress"/>
describe('checkbox elements',()=>{
    it('verify checkbox elements',()=>{
        
        cy.clearCookies()
        cy.visit('http://demo.automationtesting.in/Register.html')
         
       
        

        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')
       
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

})
       it('select skills',function(){
        cy.get('#Skills').select('APIs').should('have.value','APIs')
 })
    it('select languages',()=>{
        cy.get('#msdd').click()
        cy.get('.ui-autocomplete').contains('English').click()
        cy.get('.ui-autocomplete').contains('Dutch').click()
    })
    it('select countries',()=>{
        cy.get('#select2-country-container').click({force:true})
        cy.get('.select2-search__field').type('India')
       // cy.get('.select2-search__field').type('{enter}')
    })
})