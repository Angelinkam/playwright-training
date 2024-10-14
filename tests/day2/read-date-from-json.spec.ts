
import { test, expect } from '@playwright/test';

import * as fs from 'fs';
import {SauceDemoPage} from './saucedemo-page';


const data = JSON.parse(fs.readFileSync('C:/Users/Angelina.Stamatoska/Desktop/playwright-training/tests/day2/users.json','utf-8'));

const login = JSON.parse(fs.readFileSync('C:/Users/Angelina.Stamatoska/Desktop/playwright-training/tests/day2/login.json','utf-8'));

test('test', async ({ page }) => {
    await page.goto('/');
    await page.locator('.login_logo').click();
    console.log(data[0].username);
    await page.locator('[data-test="username"]').fill(data[0].username);
    await page.locator('[data-test="password"]').fill(data[0].password);
    await page.getByRole('button', { name: 'LOGIN' }).click();
  
  });
  
test(`Login test with page object modell`, async ({ page }) => {
    const saucedemosaucedemoPage = new SauceDemoPage(page);
    await saucedemosaucedemoPage.goto();
    await saucedemosaucedemoPage.typeUsername(data[0].username);
    await saucedemosaucedemoPage.typePassword(data[0].password);
    await saucedemosaucedemoPage.clickLogin();
    await expect(page.locator('[data-test="title"]')).toContainText("Products");
  
  });
  