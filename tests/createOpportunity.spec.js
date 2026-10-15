import { test, expect } from '@playwright/test';
import { login } from '../utility/login';

test.beforeEach(async ({ page }) => {
        await login(page);
        });



test('Create New Opportunity', async ({ page }) => {

 
  await page.locator('//div[contains(@class,"desktop-bar")]//a[contains(normalize-space(.),"CREATE")]').click();
  await page.getByRole('link',{name: "Create Opportunities"}).click();
  
  await page.locator('#name').fill('HAGSFD');
  await page.locator('#account_name').fill('Air Safety Inc')
  await page.waitForTimeout(2000);

  await page.locator('#amount').click();
  await page.locator('#amount').fill('10000')

  await page.locator('#account_name').click();
  
  await page.locator('.suitepicon.suitepicon-module-calendar').click();
  await page.locator('#date_closed_trigger_div_t').getByRole('link', { name: '30', exact: true }).click();

  await page.locator('#opportunity_type').selectOption('New Business')
  await page.locator('#lead_source').selectOption('Partner')

  await page.locator('#next_step').fill('next step');
  await page.locator('#description').fill('description step');
  await page.locator('//div/form/div//*[@id="SAVE"]').click();
 
});