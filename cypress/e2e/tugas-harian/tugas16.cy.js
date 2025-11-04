describe ('Scenario Verifikasi Fungsi Login', () => {
    // Pengguna login menggunakan data valid
    it('TC01-Login dengan Username dan Password benar',()=>{ 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin').should('have.value','Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations'). as('loginRequest')
        cy.get('button[type="submit"]').click().should('be.visible')
        cy.url().should('include','dashboard')
        cy.wait('@loginRequest').its('response.statusCode').should('eq', 200)
    })
    
    //Pengguna login menggunakan data invalid
    it('TC02-Login dengan Username dan Password salah',()=>{ 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('admin123')
        cy.get('input[name="password"]').type('123')
        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate'). as('gagalLogin')
        cy.get('button[type="submit"]').click().should('be.visible')
        cy.get('.oxd-alert').should('contain','Invalid credentials')
        cy.wait('@gagalLogin').its('response.statusCode').should('eq', 302)
    })
    
    //Pengguna login menggunakan data invalid
    it('TC03-Login dengan username benar dan password salah',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin').should('have.value','Admin')
        cy.get('input[name="password"]').type('123')
        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate'). as('wrongPass')
        cy.get('button[type="submit"]').click().should('be.visible')
        cy.get('.oxd-alert').should('contain', 'Invalid credentials')
        cy.wait('@wrongPass').its('response.statusCode').should('eq', 302)
    })

     //Pengguna login menggunakan data invalid
    it('TC04-Login dengan username salah dan password benar',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('admin123').should('have.value','admin123')
        cy.get('input[name="password"]').type('admin123')
        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate'). as('wrongUsername')
        cy.get('button[type="submit"]').click().should('be.visible')
        cy.get('.oxd-alert').should('contain', 'Invalid credentials')
        cy.wait('@wrongUsername').its('response.statusCode').should('eq', 302)
    })

     //Pengguna akses halaman reset password
    it('TC05-Pengguna melakukan reset password',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode'). as('resetPass')
        cy.contains('Forgot your password?').click();
        cy.url().should('include','requestPasswordReset');
        cy.get('.orangehrm-card-container').should('be.visible');
        cy.get('input[name="username"]').type('Admin').should('have.value','Admin')
        cy.get('button[type="submit"]').click().should('be.visible')
        cy.wait('@resetPass').its('response.statusCode').should('eq', 200)
    })
})