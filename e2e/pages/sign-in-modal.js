const { expect } = require('@playwright/test');

exports.SignInModal = class SignInModal {

  /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        this.emailAddressField = page.getByLabel('Email Address');
        this.passwordField = page.getByLabel('Password');
        this.rememberMeCheckbox = page.getByLabel('Remember Me');
        this.signInButton = page.locator('.liferay-modal:has-text("Sign In")').getByRole('button', {
            name: 'Sign In' });
    }

    async goto() {
        await this.page.getByRole('button', { name: 'Sign In' }).click();
    }

    async signIn(email, password, rememberMe) {
        await this.page.getByLabel('Email Address').fill(email);
        await this.page.getByLabel('Password').fill(password);

        if (rememberMe == true)
        {
            await this.page.getByLabel('Remember Me').check();
        }

        await expect(this.page.locator('.liferay-modal >> h1:has-text("Sign In")')).toContainText('Sign In');
        await this.page.locator('.liferay-modal:has-text("Sign In")').getByRole('button', { name: 'Sign In' }).click();

        if (await this.page.waitForSelector("text=Password Recovery Question and Answer"))
      {
        await expect(this.page.locator(".sheet-title")).toContainText('Password Recovery Question and Answer');
      }
    }

};

