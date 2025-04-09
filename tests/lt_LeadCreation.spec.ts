import { expect, test } from "@playwright/test";
import {LF_Home} from "../POM/leafTap_Home";
import { LeadCreation } from "../POM/lead_creation";

test("new lead creation", async ({page}) => {

    //Login page and landing
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill('DemoSalesManager')
    await page.locator("#password").fill('crmsfa')
    await page.locator(".decorativeSubmit").click()
    await page.locator("//a[contains(text(), 'CRM/SFA')]").click()

    const homeNavigation = new LF_Home(page)
    await homeNavigation.goto_leadCreation()

    const newlead_details = new LeadCreation(page)
    await newlead_details.newLead('lti', 'sasiB', 'anal')

    

}
)