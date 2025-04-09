// typescript
import { Page, expect } from '@playwright/test';

/**
 * Page Object Class for the Login Page on Salesforce
 */
export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigates to the specified URL
   * @param url - The login page URL
   */
  async navigateToUrl(url: string) {
    await this.page.goto(url);
    console.log('Navigated to URL:', url);
  }

  /**
   * Enter the username in the email input field
   * @param username - The username to be entered
   */
  async enterUsername(username: string) {
    const usernameField = this.page.locator('#username');
    await usernameField.fill(username);
    console.log("Username entered successfully");
  }

  /**
   * Enter the password in the password input field
   * @param password - The password to be entered
   */
  async enterPassword(password: string) {
    const passwordField = this.page.locator('#password');
    await passwordField.fill(password);
    console.log("Password entered successfully");
  }

  /**
   * Click the "Log In" button to attempt login
   */
  async clickLoginButton() {
    const loginButton = this.page.locator('#Login');
    await loginButton.click();
    console.log("Login button clicked");
  }

  /**
   * Verifies that the user successfully logged in by checking URL or specific element
   */
  async verifyLogin(vari:string) {
    // await this.page.waitForLoadState('networkidle');
    // Example verification, adjust as needed
    // const currentUrl = await this.page.getByTitle();
    expect(this.page).toHaveTitle(vari);
    console.log("Login verification successful");
  }
}
