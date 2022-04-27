describe('Tables specifactions',()=>{
    it('verify if  tables',()=>{
        cy.visit('https://sqengineer.com/practice-sites/practice-tables-selenium/')
        cy.get('#table1> tbody > tr > td:nth-child(1)').each(($elm, index, $list)=> {
            
            // text captured from column1
            const t = $elm.text();
            // matching criteria
            if (t.includes('Selenium')){
               // next sibling captured
               cy.get('#table1 > tbody > tr > td:nth-child(1)')
               .eq(index).next().then(function(d) {
                  // text of following sibling
                  const r = d.text()
                  //assertion
                  expect(r).to.contains('Open Source');
               })
            }
         })
    })
})