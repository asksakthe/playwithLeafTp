import {Page} from "@playwright/test"

export class LeadCreation {

    constructor (private page: Page){}

    async newLead (cName: string, fName: string, lName:string){
        await this.page.locator("#createLeadForm_companyName").fill(cName)
        await this.page.locator("#createLeadForm_firstName").fill(fName)
        await this.page.locator("#createLeadForm_lastName").fill(lName)
        console.log("Details are entered successfully, Ready for creation")
        await this.page.locator(".smallSubmit").click()
        console.log("Submittted Click")
        return this
    }

}