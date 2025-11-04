describe('Scenario Verifikasi Fungsi Login',()=>{
    //Pengguna login menggunakan data valid
    it('TC01-Login dengan Username dan Password benar',()=>{ 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin').should('have.value','Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click().should('be.visible')
        cy.url().should('include','dashboard')
    })

    //Pengguna login menggunakan data invalid
    it('TC02-Login dengan username benar dan password salah',()=>{
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('input[name="username"]').type('Admin').should('have.value','Admin')
      cy.get('input[name="password"]').type('123')
      cy.get('button[type="submit"]').click().should('be.visible')
      cy.get('.oxd-alert').should('contain', 'Invalid credentials')
    });

    //Pengguna login menggunakan data invalid
    it('TC03-Login dengan username salah dan password benar',()=>{
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('input[name="username"]').type('admin123').should('have.value','admin123')
      cy.get('input[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click().should('be.visible')
      cy.get('.oxd-alert').should('contain', 'Invalid credentials')
    });

    //Pengguna login menggunakan data invalid
    it('TC04-Login dengan Username dan Password salah',()=>{ 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('admin123')
        cy.get('input[name="password"]').type('123')
        cy.get('button[type="submit"]').click().should('be.visible')
        cy.get('.oxd-alert').should('contain','Invalid credentials')
    })
  
    //Pengguna login menggunakan data invalid
    it('TC05-Login tanpa memasukan username',()=>{
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('input[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click().should('be.visible')
      cy.get('.oxd-input-field-error-message').should('contain', 'Required')
    });

    //Pengguna login menggunakan data invalid
    it('TC06-Login tanpa memasukan password',()=>{
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('input[name="username"]').type('Admin').should('have.value','Admin')
      cy.get('button[type="submit"]').click().should('be.visible')
      cy.get('.oxd-input-field-error-message').should('contain', 'Required')
    });

    //Pengguna login menggunakan data invalid
    it('TC07-Login tanpa memasukan username dan password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('button[type="submit"]').click();
      cy.get('.oxd-input-field-error-message').should('contain', 'Required')
    });

    //Pengguna akses halaman reset password
    it('TC08-Pengguna akses halaman reset password',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.contains('Forgot your password?').click();
        cy.url().should('include','requestPasswordReset');
        cy.get('.orangehrm-card-container').should('be.visible');
        cy.get('input[name="username"]').type('Admin').should('have.value','Admin')
        cy.get('button[type="submit"]').click().should('be.visible')
    })
})