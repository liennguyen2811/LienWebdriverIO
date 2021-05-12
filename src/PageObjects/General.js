
const plus_button = '//*[contains(@resource-id,"fabMenuButton")]'
const upload_button = '//*[contains(@resource-id,"uploadDocumentLayout")]'
const take_picture_button = '//*[contains(@resource-id,"takePictureLayout")]'
const app_icon = '//*[@text="My Files"]'
const file_name = '//*[@text="BE2113213111_INV-001 - Copy - Copy - Copy.pdf"'
const done_button = '//*[contains(@resource-id,"text_menu_1st")]'
const send_button = '//*[@text="Send"]'

class General {
    ClickPlusButton(){
        $(plus_button).waitForDisplayed({ timeout: 5000 })
        $(plus_button).click()
        return this
      }
      ClickUploadButton(){
        $(upload_button).waitForDisplayed({ timeout: 5000 })
        $(upload_button).click()
        return this
    }
    ClickToFile(){
        $(plus_button).waitForDisplayed({ timeout: 5000 })
        $(plus_button).click()
        return this
    }
    ClickFile(){
        $(file_name).waitForDisplayed({ timeout: 5000 })
        $(file_name).click()
        return this
    }
    ClickSendButton(){
        $(file_name).waitForDisplayed({ timeout: 5000 })
        $(file_name).click()
        return this
    }

}
module.exports = new General()