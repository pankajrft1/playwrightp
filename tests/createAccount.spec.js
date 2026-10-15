import { test, expect } from '@playwright/test';
import { login } from '../utility/login';

test.beforeEach(async ({ page }) => 
  {
  await login(page);
  });

test('Create New Account', async ({ page }) => {

    console.log("***********Title of Home page--> ****************** "+await page.title());
  //await page.locator('//a[normalize-space()="CREATE"]').click();
  await page.getByText('CREATE',{exact:true}).nth(2).click();
  await page.screenshot({path : './screenshots/homePage.png', fullPage : true});
  await page.getByRole('link',{name : "Create Accounts"}).click();
  await page.locator('#name').fill("first name");
  await page.locator('//input[@name="phone_office"]').fill("1234567890");
  await page.locator('#website').clear();
  await page.locator('#website').fill('https://www.account.com');
  await page.locator('#Accounts0emailAddress0').fill('abcd@getMaxListeners.com');
  await page.locator('.suitepicon.suitepicon-action-plus').click();
  await page.locator('//textarea[@name="billing_address_street"]').fill('billing_address_street')
  await page.locator('#billing_address_city').fill('Jammu');
  await page.locator('#billing_address_state').fill("Jammu");
  await page.locator('#billing_address_postalcode').fill("12345");
  await page.locator('#billing_address_country').fill("12345");
  await page.locator('#shipping_checkbox').check();
  await page.locator('#description').fill("description description description description");

console.log("******* Title of create account page *************"+await page.title());
  await page.locator('#account_type').selectOption('Customer');
  await page.locator('#industry').selectOption('Construction');
  await page.locator('#annual_revenue').fill('10 Lakh');
  await page.locator('#employees').fill('4');
  await page.screenshot({path : './screenshots/createAccount.png', fullPage: true});
  await page.locator('//div/form/div//*[@id="SAVE"]').click();
  console.log("***********Account created confirmation************"+await page.title());
  await page.screenshot({path : './screenshots/createdAccount.png', fullPage: true});
  
});
