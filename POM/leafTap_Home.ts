import {Page, expect} from "@playwright/test"

export class LF_Home {

    constructor(private page: Page){}

    async goto_leadCreation(){
        const click_Leadnaviagation = this.page.locator("//a[contains(text(),'Create Lead')]")
        await click_Leadnaviagation.click()
        console.log("clicked creation lead shortcut successfully")
        return this
    }

    async goto_accCreation(){
        const click_Accnavigation = this.page.locator("//a[contains(text(),'Create Account')]")
        await click_Accnavigation.click()
        console.log("clicked account creation shortcut successfully")
        return this
    }
}