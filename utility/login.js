import {config } from '../config/config.js';

export async function login(page) 
{
  await page.goto(config.loginURL);
  await page.locator('#user_name').fill(config.username);
  await page.locator('#username_password').fill(config.password);
  await page.locator('#bigbutton').click();
}

  // await page.goto("https://demo.suiteondemand.com/index.php?action=Login&module=Users");
  // await page.getByRole('textbox', {name: 'Username'}).fill("will");
  // await page.getByRole('textbox', {name: "Password"}).fill("will");
  // await page.screenshot({path : './screenshots/loginPage.png', fullPage : true});
  // await page.getByRole('button', {name: "Log In"}).click();