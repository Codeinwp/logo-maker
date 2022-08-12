import { test, expect, type Page } from '@playwright/test';

test.describe('Creator Page', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://themeisle.com/logo-maker/logo-wizzard/#/creator');
    });

      
    test('should render the menu', async({ page }) => {
        await expect(page.locator('#btn-select-logo')).toBeVisible();
        await page.locator('#btn-select-logo').click();
        await page.screenshot({ path: 'artifacts/screenshots/creator-logos.png' });

        await expect(page.locator('#btn-select-typography')).toBeVisible();
        await page.locator('#btn-select-typography').click();
        await page.screenshot({ path: 'artifacts/screenshots/creator-typography.png' });

        await expect(page.locator('#btn-select-layout')).toBeVisible();
        await page.locator('#btn-select-layout').click();
        await page.screenshot({ path: 'artifacts/screenshots/creator-layout.png' });

        await expect(page.locator('#btn-select-colors')).toBeVisible();
        await page.locator('#btn-select-colors').click();
        await page.screenshot({ path: 'artifacts/screenshots/creator-colors.png' });
    })
})