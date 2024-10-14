import {expect, type Locator, type Page } from '@playwright/test';
import * as fs from 'fs';

const login = JSON.parse(fs.readFileSync('C:/Users/Angelina.Stamatoska/Desktop/playwright-training/tests/day2/login.json','utf-8'));


export class SauceDemoPage {
readonly page: Page;
readonly username: Locator;
readonly password: Locator;
readonly loginButton: Locator;


constructor (page: Page) {
this.page = page;
this.username = page.locator(login.username);
this.password = page.locator(login.password);
this.loginButton = page.locator(login.loginButton);

}


async goto() {
    await this.page.goto ('/');
}

async typeUsername(user) {
    await this.username.fill(user);

}
    async typePassword(pass) {
        await this.password.fill(pass);

}

async clickLogin() {
    await this.loginButton.click();

}
}