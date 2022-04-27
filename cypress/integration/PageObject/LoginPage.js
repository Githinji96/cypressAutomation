class LoginPage{
    visit(){
    cy.visit("https://admin-demo.nopcommerce.com/login")
}
 fillemail(value){
     const field =  cy.get('#Email')
      field.clear();
      field.type(value)
      return this
 }
 fillpassword(value){
     const field=cy.get('#Password')
     field.clear();
     field.type(value)
     return this
 }
   submit(){
       const button = cy.get('.buttons')
       button.click()
   }
}
    export default LoginPage
