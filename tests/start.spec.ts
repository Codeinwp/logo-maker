import { test, expect, type Page } from '@playwright/test';


test.describe('Start Page', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://themeisle.com/logo-maker/logo-wizzard/');
      });

      
    test('should write the logo name', async({ page }) => {
        const logoName = page.locator('#input-logo-text');

        await expect(logoName).toBeVisible();

        await logoName.fill('TestE2E');

        await expect(logoName).toHaveAttribute('value', 'TestE2E');

        await page.screenshot({ path: 'artifacts/screenshots/start-set-logo-name.png' });
    })
    
    test('should write the logo slogan', async({ page }) => {
        const slogan = page.locator('#input-logo-slogan');

        await expect(slogan).toBeVisible();

        await slogan.fill('The best TestE2E');

        await expect(slogan).toHaveAttribute('value', 'The best TestE2E');

        await page.screenshot({ path: 'artifacts/screenshots/start-set-slogan-name.png' });
    })
})