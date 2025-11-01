describe('test scenario',()=>{
    it('test case',()=>{ 
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[data-test="username"]').type('standar_user').should('have.value','standar_user')
        cy.get('input[data-test="password"]').type('secret_sauce').should('have.value','secret_sauce')
    })
})