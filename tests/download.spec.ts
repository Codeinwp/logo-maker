import { test, expect, type Page } from '@playwright/test';


test.describe('Navigate', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://themeisle.com/logo-maker/logo-wizzard/');
      });

      
    test('should render the next button', async ({ page }) => {
        let next = page.locator('.content-section .next a');

        await expect(next).toHaveAttribute('href', '#/showcase');
        await next.click();

        await page.waitForLoadState();
        next = page.locator('div.next > a');
        
        await expect(next).toHaveAttribute('href', '#/creator');
    });
})

test.describe('Download', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://themeisle.com/logo-maker/logo-wizzard/#/creator');
      });


    test('should render the download button', async ({ page }) => {
        const downloadBtn = page.locator('.download-button button');

        await expect(downloadBtn).toBeVisible();
        await downloadBtn.click();

        const downloadBtns = page.$$('.download-button .btn-group button');

        expect((await downloadBtns).length).toBe(3);
    });

    test('should download the bundle', async ({ page }) => {
        const downloadBtn = page.locator('.download-button button');

        await expect(downloadBtn).toBeVisible();
        await downloadBtn.click();

        const bundleButton = page.locator('.download-button .btn-group button', {hasText: 'BUNDLE'});

        await expect(bundleButton).toBeVisible();
        await page.screenshot({ path: 'artifacts/screenshots/creator-download-menu.png' });

        const [ download ] = await Promise.all([
            // Start waiting for the download
            page.waitForEvent('download'),
            // Perform the action that initiates download
            bundleButton.click(),
          ]);
          
        // Wait for the download process to complete
        expect( await download.path() ).toBeDefined();
        // Save downloaded file somewhere
        await download.saveAs('artifacts/bundles/logos.zip');
    });

    test('should download the PNG', async ({ page }) => {
        const downloadBtn = page.locator('.download-button button');

        await expect(downloadBtn).toBeVisible();
        await downloadBtn.click();

        const pngBtn = page.locator('.download-button .btn-group button', {hasText: 'PNG'});

        await expect(pngBtn).toBeVisible();

        const [ download ] = await Promise.all([
            // Start waiting for the download
            page.waitForEvent('download'),
            // Perform the action that initiates download
            pngBtn.click(),
          ]);
          
        // Wait for the download process to complete
        expect( await download.path() ).toBeDefined();
        // Save downloaded file somewhere
        await download.saveAs('artifacts/bundles/logo.png');
    });

    test('should download the SVG', async ({ page }) => {
        const downloadBtn = page.locator('.download-button button');

        await expect(downloadBtn).toBeVisible();
        await downloadBtn.click();

        const svgBtn = page.locator('.download-button .btn-group button', {hasText: 'SVG'});

        await expect(svgBtn).toBeVisible();

        const [ download ] = await Promise.all([
            // Start waiting for the download
            page.waitForEvent('download'),
            // Perform the action that initiates download
            svgBtn.click(),
          ]);
          
        // Wait for the download process to complete
        expect( await download.path() ).toBeDefined();
        // Save downloaded file somewhere
        await download.saveAs('artifacts/bundles/logo.svg');
    });
})