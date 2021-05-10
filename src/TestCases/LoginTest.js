const LoginPage = require('../PageObjects/Login')
const LoginPage = require('../PageObjects/Dashboard')
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


      })
    

})