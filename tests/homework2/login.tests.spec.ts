
import { test, expect } from '@playwright/test';

import * as fs from 'fs';
import {LoginPage} from './login-page';


    
const users = JSON.parse(fs.readFileSync('C:/Users/Angelina.Stamatoska/Desktop/playwright-training/tests/day2/users.json','utf-8'));

const login = JSON.parse(fs.readFileSync('C:/Users/Angelina.Stamatoska/Desktop/playwright-training/tests/day2/login.json','utf-8'));

//create as much tests as users??
users.forEach((user) => {
    
test(`Login test with pom ${user.username} ${user.password}`, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('/');
  await loginPage.typeUsername(user.username);
  await loginPage.typePassword(user.password);
  await loginPage.clickLogin();
  await expect(page.locator('[data-test="title"]')).toContainText("Products");
  

});

});

