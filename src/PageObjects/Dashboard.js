const name_company = '//*[@resource-id="fsoft"]'
const dashboard_button = '//*[contains(@resource-id,"dashboard")]'
const active_docs_button = '//*[contains(@resource-id,"activeDocs")]'
const doc_center_button = '//*[contains(@resource-id,"docCenter")]'
const archive_button = '//*[contains(@resource-id,"archiveDocs")]'

class Dashboard {
    ClickActiveDoc() {
        $(active_docs_button).waitForDisplayed(5000)
        $(active_docs_button).click()
        return this
    }

    checkIsActiveDocDisplayed() {
        $(active_docs_button).waitForDisplayed(5000)
        console.log("Chung" + $(active_docs_button).isDisplayed())
        return $(active_docs_button).isDisplayed()
    }

    isActiveDocButtonDisplayed() {
        $(active_docs_button).waitForDisplayed(5000)
        $(active_docs_button).isDisplayed()
    }

}
module.exports = new Dashboard()