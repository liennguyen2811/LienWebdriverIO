const LoginPage = require('../PageObjects/Login')
const assert = require('assert')
const Dashboard = require('../PageObjects/Dashboard')


describe('Test login flow', () => {
    before( () => {

    })
    it('should login on successful', () => {
        LoginPage
        .ClickLoginAndStart()
        .SelectCountry()
        .EnterUserName()
        .EnterPassword()
        .ClickLoginButton()
        browser.pause(3000)  
        LoginPage.SelectBrand()
        .SelectCompany()
        browser.pause(3000)  

      })
    

})