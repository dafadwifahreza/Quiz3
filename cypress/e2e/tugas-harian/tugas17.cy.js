import loginPage from "../../support/pageObjects/loginPage"
import loginData from "../../fixtures/loginData.json"

describe('Scenario Login',  ()=>{
    it('TC01-Login dengan Username dan Password benar',()=>{ 
        loginPage.visit()
        loginPage.inputUsername(loginData.valid_username)
        loginPage.inputPassword(loginData.valid_password)
        loginPage.clickLoginBtn()
        loginPage.assertionLogin()
    })
    
    it('TC02-Login dengan Username benar dan Password salah',()=>{ 
        loginPage.visit()
        loginPage.inputUsername(loginData.valid_username)
        loginPage.inputPassword(loginData.invalid_password)
        loginPage.clickLoginBtn()
        loginPage.assertionInvalidCredintal()
    })

    it('TC03-Login dengan Username salah dan Password benar',()=>{ 
        loginPage.visit()
        loginPage.inputUsername(loginData.invalid_username)
        loginPage.inputPassword(loginData.valid_password)
        loginPage.clickLoginBtn()
        loginPage.assertionInvalidCredintal()
    })
    
    it('TC04-Login dengan Username dan Password salah',()=>{
        loginPage.visit()
        loginPage.inputUsername(loginData.invalid_username)
        loginPage.inputPassword(loginData.invalid_password)
        loginPage.clickLoginBtn()
        loginPage.assertionInvalidCredintal()
    })

    it('TC05-Login tanpa memasukan username',()=>{
        loginPage.visit()
        loginPage.inputUsername(loginData.empty_username)
        loginPage.inputPassword(loginData.valid_password)
        loginPage.clickLoginBtn()
        loginPage.assertionRequired()
    });

    it('TC06-Login tanpa memasukan password',()=>{
        loginPage.visit()
        loginPage.inputUsername(loginData.valid_username)
        loginPage.inputPassword(loginData.empty_password)
        loginPage.clickLoginBtn()
        loginPage.assertionRequired()
    })

    it('TC07-Login tanpa memasukan username dan password', () => {
        loginPage.visit()
        loginPage.inputUsername(loginData.empty_username)
        loginPage.inputPassword(loginData.empty_password)
        loginPage.clickLoginBtn()
        loginPage.assertionRequired()
    })

     it('TC08-Pengguna akses halaman reset password', () => {
        loginPage.visit()
        loginPage.visitresetpass()
        loginPage.inputUsername(loginData.valid_username)
        loginPage.clickLoginBtn()
    })


    

}) 