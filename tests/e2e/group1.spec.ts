import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=demoqa&oq=demoqa&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDEwMzFqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'DEMOQA DEMOQA https://demoqa.' }).click();
  await page.locator('path').first().click();
  await page.getByText('Text Box').click();
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('Angelina');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Cras justo odio').click();
  await page.getByText('Dapibus ac facilisis in').click();
}); 