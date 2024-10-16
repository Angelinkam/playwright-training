import {expect, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs';

const products = JSON.parse(fs.readFileSync('tests\homework2\products.json', 'utf-8'));

export class ProductsPage {
    readonly page: Page;
    readonly clickOnProduct: Locator;
    readonly addToCart: Locator;
    readonly clickOnCart: Locator;
    readonly clickOnAZ: Locator;
    readonly clickOnZA: Locator;
    readonly clickOnLowPrice: Locator;
    readonly clickOnHihgPrice: Locator;

    constructor (page: Page) {
        this.page = page;
        this.clickOnProduct = page.locator(products.clickOnCart)
        this.addToCart = page.locator(products.addToCart);
        this.clickOnCart = page.locator(products.clickOnCart);
        this.clickOnAZ = page.locator(products.clickonAZ);
        this.clickOnZA = page.locator(products.clickonZA);
        this.clickOnLowPrice = page.locator(products.clickOnLowPrice);
        this.clickOnHihgPrice = page.locator(products.clickOnHihgPrice);
        
    }

    async clickOnFirstProduct() {
        await this.clickOnProduct.click();

}

    async clickOnAddToCart() {
    await this.addToCart.click();

}

async clickOnCartButton() {
    await this.clickOnCart.click();

}

async orderByLetterZA() {
    await this.clickOnZA.selectOption('za');

}

async orderByLetterAZ() {
    await this.clickOnAZ.selectOption('za');

}

async orderByLowPrice() {
    await this.clickOnLowPrice.selectOption('lohi');

}

async orderByHighPrice() {
    await this.clickOnLowPrice.selectOption('hilo');

}



}