const login_and_start = '//*[contains(@resource-id,"filledButtonLayout")]'
const select_country = '//*[contains(@resource-id,"belgium_logo")]'
const user_name = '//*[contains(@resource-id,"edittextEmail")]'
const password = '//*[contains(@resource-id,"edittextPassword")]'
const login_button = '//*[contains(@resource-id,"filledBackgroundText")]'
const brand = '//android.widget.TextView[@content-desc="billtobox"]'



class Login {
    ClickLoginAndStart () {
        $(login_and_start).waitForDisplayed(5000)
        $(login_and_start).click()
        return this
      }
      SelectCountry(){
        $(select_country).waitForDisplayed(5000)
        $(select_country).click()
        return this
      }
      EnterUserName () {
        $(user_name).waitForDisplayed(5000)
        $(user_name).setValue("liennth7@unifiedpost.com")
        return this
      }
      EnterPassword () {
        $(password).waitForDisplayed(5000)
        $(password).setValue("0983791128a@")
        return this
      }
      ClickLoginButton () {
        $(login_button).waitForDisplayed(5000)
        $(login_button).click()
        return this
      }
      ClickLoginButton () {
        $(brand).waitForDisplayed(5000)
        $(brand).click()
        return this
      }

}
module.exports = new Login()