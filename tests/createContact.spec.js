// @ts-check
import { test, expect } from '@playwright/test';
import { login } from '../utility/login';
        test.beforeEach(async ({ page }) => {
        await login(page);
        });

test('Create New Contact', async ({ page }) => {



  //Login 
//   await page.goto("https://demo.suiteondemand.com/index.php?action=Login&module=Users");
//   await page.getByRole('textbox', {name: 'Username'}).fill("will");
//   await page.getByRole('textbox', {name: "Password"}).fill("will");
//   await page.screenshot({path : './screenshots/loginPage.png', fullPage : true});
//   await page.getByRole('button', {name: "Log In"}).click();


  await page.locator('//div[contains(@class,"desktop-bar")]//a[contains(normalize-space(.),"CREATE")]').click();
  await page.getByRole('link',{name: "Create Contacts"}).click();

  //Contact Details
  await page.locator('#salutation').selectOption('Mr.')
  await page.locator('#first_name').fill('FirstName');
  await page.locator('#last_name').fill('LastName');
  await page.locator('#phone_work').fill('1237894560');
  await page.locator('#phone_mobile').fill('7854123690');
  await page.locator('#Contacts0emailAddress0').fill('ASDF@gmail.com');
  await page.locator('.suitepicon.suitepicon-action-plus').click();

  //Primary Address
  
  await page.locator('#primary_address_street').fill('primary_address_street');
  await page.locator('#primary_address_city').fill('primary_address_city');
  await page.locator('#primary_address_state').fill('primary_address_state');
  await page.locator('#primary_address_postalcode').fill('12345')
  await page.locator('#primary_address_country').fill('India');
  await page.locator('#alt_checkbox').check();
  await page.locator('#description').fill('description');

  await page.locator('#lead_source').selectOption("Partner");
  await page.locator('//div/form/div//*[@id="SAVE"]').click();
  });