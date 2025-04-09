import {test} from "@playwright/test"
import {LoginPage} from "../POM/Login"

test("checking the Login Func", async ({page}) => {

    const newCheck = new LoginPage(page)

    await newCheck.navigateToUrl("https://orgfarm-3fe5b17d48-dev-ed.develop.my.salesforce.com/")
    await newCheck.enterUsername("asksakthe409@agentforce.com")
    await newCheck.enterPassword("Sakthi@123")
    await newCheck.clickLoginButton()

    await page.waitForTimeout(5000)
    
    const titleOnpage = await page.title()
    console.log(`the Current page title is ${titleOnpage}`) 

    await newCheck.verifyLogin('Lightning Experience')
    
})