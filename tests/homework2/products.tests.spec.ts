import { test, expect } from '@playwright/test';

import * as fs from 'fs';
import {LoginPage} from './login-page';
import { ProductsPage } from './products-page';

const data = JSON.parse(fs.readFileSync('C:/Users/Angelina.Stamatoska/Desktop/playwright-training/tests/day2/users.json','utf-8'));


test.describe('Adding a product to the cart', () => {

test(`Add a product to the cart`, async ({ page }) => {
    const Products = new ProductsPage(page);
    await page.goto('https://www.saucedemo.com/inventory.html');
    await Products.clickOnFirstProduct();
    await Products.clickOnAddToCart();
    await Products.clickOnCartButton();
  //add assertions
  });


  test(`Ordering products`, async ({ page }) => {
    const Products = new ProductsPage(page);
    await page.goto('https://www.saucedemo.com/inventory.html');
    await Products.orderByLetterZA();
    await Products.orderByLetterAZ();
    await Products.orderByLowPrice();
    await Products.orderByHighPrice();
//add assertions and split these tests in separate ones 
});

})