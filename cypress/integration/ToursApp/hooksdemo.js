///<reference types ="cypress"/>


describe("Test login",()=>{
    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    it('verify test login',()=>{
        cy.visit("https://admin-demo.nopcommerce.com/login")
        
         cy.get('#Email').clear()
         cy.get('#Email').type(this.data.email)
         cy.get('#Password').clear()
         cy.get('#Password').type(this.data.password)
      
         cy.get('[type="submit"]').click();
    })
})