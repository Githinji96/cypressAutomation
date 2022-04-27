///<reference types= "cypress"/>
describe('alert element',()=>{
    it('verfify alert element',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#HTML9 > .widget-content > button').click()
        cy.on('window:confirm',(str)=>{
          expect(str).to.equal('Press a button!')
        })
    })
})
//cgi-bin/login.cgi"