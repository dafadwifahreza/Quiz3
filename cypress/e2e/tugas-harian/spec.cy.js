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

  it('TC02-Login dengan Username dan Password salah',()=>{ 
    loginPage.visit()
    loginPage.inputUsername(loginData.invalid_username)
    loginPage.inputPassword(loginData.invalid_password)
    loginPage.clickLoginBtn()
  })

}) 