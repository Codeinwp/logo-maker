import { test, expect, type Page } from '@playwright/test';


test.describe('Showcase Page', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://themeisle.com/logo-maker/logo-wizzard/#/showcase');
    });

      
    test('should render the examples', async({ page }) => {
        await page.waitForTimeout(5000);
        const logos = page.locator('.logos-container .logo');
        
        await page.screenshot({ path: 'artifacts/screenshots/showcase-examples.png' });
       
        const logos_count = await logos.count();
        // loop through them one-by-one to check visibility
        for (let logo_index = 0; logo_index < logos_count; logo_index++) {
            const loop_image = logos.nth(logo_index);
            await expect(loop_image).toBeVisible();
            await expect(loop_image.locator('> svg')).toBeDefined(); // full logo
            await expect.soft(loop_image.locator('> svg > svg')).toBeDefined(); // image logo
        }

    })
})