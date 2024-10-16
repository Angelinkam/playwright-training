
import { test, expect } from '@playwright/test';

import * as fs from 'fs';
import {SauceDemoPage} from './saucedemo-page';


const data = JSON.parse(fs.readFileSync('C:/Users/Angelina.Stamatoska/Desktop/playwright-training/tests/day2/users.json','utf-8'));

const login = JSON.parse(fs.readFileSync('C:/Users/Angelina.Stamatoska/Desktop/playwright-training/tests/day2/login.json','utf-8'));


data.forEach((user) => {

  test(`Login test ${user.username} ${user.password}`, async ({ page }) => {
    await page.goto('/');
    await page.locator(login.username).fill(user.username);
    await page.locator(login.password).fill(user.password);
    await page.locator(login.loginButton).click();
    await expect(page.locator('[data-test="title"]')).toContainText("Products");
});


// test(`Login test ${user.username} ${user.password}`, async ({ page }) => {
//   await page.goto('/');
//   await page.locator(login.username).fill(user.username);
//   await page.locator(login.password).fill(user.password);
//   await page.locator(login.loginButton).click();
//   await expect(page.locator('[data-test="title"]')).toContainText("Products");
// });
// test(`Login test with pom` async ({ page }) => {
//   const saucedemosaucedemoPage = new SauceDemoPage(page);
//   await page.goto('/');
//   await saucedemosaucedemoPage.typeUsername(user.username);
//   await saucedemosaucedemoPage.typePassword(user.password);
//   await saucedemosaucedemoPage.clickLogin();
//   await expect(page.locator('[data-test="title"]')).toContainText("Products");

// });


  });
