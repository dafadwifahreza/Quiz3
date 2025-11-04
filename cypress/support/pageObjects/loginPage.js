class loginPage{
    visit(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    inputUsername(username){
        cy.get('input[name="username"]').type(username)
    }
    inputPassword(password){
        cy.get('input[name="password"]').type(password)
    }
    clickLoginBtn(){
        cy.get('button[type="submit"]').should('be.visible')
        cy.get('button[type="submit"]').click()
    }
    assertionLogin(){
        cy.url().should('include','dashboard')
    }
    assertionInvalidCredintal(){
        cy.get('.oxd-alert').should('contain', 'Invalid credentials')
    }
    assertionRequired(){
        cy.get('.oxd-input-field-error-message').should('contain', 'Required')
    }
    visitresetpass(){
        cy.contains('Forgot your password?').click()
    }
}

export default new loginPage