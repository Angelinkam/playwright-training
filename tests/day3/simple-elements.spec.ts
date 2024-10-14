import { test, expect } from '@playwright/test';


test.describe("Test suite for authenticaiton tests", () =>{

    test('test1', async ({ page }) => {
      await page.goto('https://qademo.com/text-box');
      await page.getByPlaceholder('Full Name').focus();
      await page.getByPlaceholder('Full Name').click();
      await page.getByPlaceholder('Full Name').fill('Angelina Mocanoski');

    })

    test('test2', async ({ page }) => {
        await page.goto('https://qademo.com/checkbox');
        await page.getByLabel('Toggle').focus();
        await page.getByLabel('Toggle').click();

  
      })

    
})