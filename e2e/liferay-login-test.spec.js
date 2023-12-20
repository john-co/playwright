// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://localhost:8080');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home - Liferay/);

  // Click on sign in link

  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.getByLabel('Email Address').fill('test@liferay.com');
  await page.getByLabel('Password').fill('test');
  await page.getByLabel('Remember Me').check();

  await page.locator('.liferay-modal').getByRole('button', { name: 'Sign In' }).click();


  if (await page.waitForSelector("text=Password Recovery Question and Answer"))
{
  await expect(page.locator(".sheet-title")).toContainText('Password Recovery Question and Answer');

}
  
});