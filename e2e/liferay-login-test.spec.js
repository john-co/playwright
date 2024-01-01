// @ts-check
const { test, expect } = require('@playwright/test');
const { SignInModal } = require('./pages/sign-in-modal');

test('can login', async ({ page }) => {
  await page.goto('http://localhost:8080');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home - Liferay/);

  // Login as super admin
  const signIn = new SignInModal(page);
  await signIn.goto();
  await signIn.signIn("test@liferay.com", "test", true);
  
});