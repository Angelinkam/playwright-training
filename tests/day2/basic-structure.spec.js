import { test, expect } from '@playwright/test';

test.describe("Test suite for authenticaiton tests", () =>{

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Swag Labs Swag Labs https://' }).click();
  await page.locator('.login_logo').click();
  //await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  //await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await expect(page.getByText('Products')).toBeVisible();
  await expect(page.locator('#header_container div').nth(1)).toBeVisible();

});

test('Test fail', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Swag Labs Swag Labs https://' }).click();
    await page.locator('.login_logo').click();
    //await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    //await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await expect(page.getByText('Products')).toBeVisible();
    // await expect(page.locator('#header_container div').nth(1)).toBeVisible();
  
  });

});