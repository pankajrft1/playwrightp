import { test, expect } from '@playwright/test';
import { login } from '../utility/login';

test.beforeEach(async ({ page }) => {
        await login(page);
        });



test('Submit Leads', async({page, context})=>{

// await page.goto('https://demo.suiteondemand.com/index.php?module=Users&action=Login');
// await expect(page).toHaveTitle('SuiteCRM Demo');
// await page.locator('#user_name').fill("will");
// await page.locator('#username_password').fill("will");
// await page.screenshot({path: 'screenshots/loginpage.png',fullPage:true});
// await page.locator('#bigbutton').click();
await expect(page).toHaveTitle('Home » SuiteCRM Demo');
await page.locator('//div[contains(@class,"desktop-bar")]//a[contains(normalize-space(.),"CREATE")]').click();
await page.locator('//div[contains(@class,"desktop-bar")]//a[contains(text(),"Create Leads")]').click();
await expect(page).toHaveTitle('CREATE » Leads » SuiteCRM Demo');
await page.locator('#salutation').selectOption('Mr.');
await page.locator('#first_name').fill('Pankaj Kumar');
await page.locator('#last_name').fill('Gupta');
await page.locator('#title').fill('Quality Assurance');
await page.locator('#phone_mobile').fill('8585747485');
await page.locator('#department').fill('Information Technalogy');
await page.locator('#EditView_account_name').fill('Ducat');

await page.locator('#website').fill('http://www.ducat.com');


await page.locator('#primary_address_street').fill('B-2/10 Ganga Vihar');
await page.locator('#primary_address_city').fill('Delhi');
await page.locator('#primary_address_postalcode').fill('110094');
await page.locator('#primary_address_country').fill('INDIA');
await page.locator('#alt_checkbox').click();
await page.locator('#Leads0emailAddress0').fill('pankajrft@gmail.com');
await page.locator('#description').fill('Creating Leads for testing purpose');
await page.locator('#status').selectOption('New');
await page.locator('#lead_source').selectOption('Other');
await page.locator('#status_description').fill('Creating New Leads for automation testing purpose');
await page.screenshot({path: 'screenshots/home.png', fullPage: true});
await page.waitForTimeout(5000);
const [newPage] = await Promise.all([context.waitForEvent('page'),page.locator('#btn_campaign_name').click()]);
await newPage.waitForLoadState();
console.log('New Page URL:', newPage.url());
await newPage.locator('#name_advanced').fill("pankaj");
await newPage.screenshot({path: 'screenshots/subpage.png', fullPage: true});
await newPage.close();
await page.locator('//div/form/div//*[@id="SAVE"]').click();
await page.locator('//div[contains(text(), "View Leads")]').click();
//await page.waitForTimeout(5000);
const tableData = await page.locator('.list.view.table-responsive').innerText();
console.log('tableData' + tableData);
if (tableData.includes('Pankaj Kumar'))
{
console.log('**********************************Pankaj found***********************************************');

}
else {
console.log('-------------------Pankaj not found----------------------------')
}

});