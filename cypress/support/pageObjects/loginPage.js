class loginPage{
    visit(){
        cy.visit('https://www.saucedemo.com/')
    }
    inputUsername(username){
        cy.get('#user-name').type(username)
    }
    inputPassword(password){
        cy.get('#password').type(password)
    }
    clickLoginBtn(){
        cy.get('#login-button').should('be.visible')
        cy.get('#login-button').click()
    }
    assertionLogin(){
        cy.url().should('include','inventory')
    }
}

export default new loginPage