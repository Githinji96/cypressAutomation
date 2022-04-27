///<reference types= "cypress"/>
describe('userinterface elements',()=>{
   it("locate ui elements",()=>{
       cy.visit("https://demo.guru99.com/test/newtours/")
       cy.url().should('include','newtours')
       //login
       cy.get('input[name=userName]').should('be.visible').should('be.enabled').type('mercury')
       cy.get('input[name=password]').should('be.visible').should('be.enabled').type('mercury')
       cy.get('input[name=submit]').should('be.visible').click();
      // cy.title().should('eq','name="findFlights":')

       //Radio buttons
       cy.get('body > div:nth-child(5) > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click()
       cy.get('input[name=tripType]').should('be.visible').should('be.checked')
       cy.get('body > div:nth-child(5) > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(5) > td > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > b > font > input[type=radio]:nth-child(2)').should('be.visible').should('not.be.checked')
       cy.get('input[name=findFlights').should('be.visible').click();
       cy.title().should('eq','Find a Flight: Mercury Tours:');
    })
})