import {test,expect} from "@playwright/test";



test.beforeEach(async({page})=>{
 await page.goto('http://localhost:4200/login');

 const username=page.locator('input[name="name"]');
 await expect(username).toBeVisible();
 const password=page.locator('input[name="password"]');
 await expect(password).toBeVisible();
 const submitBtn=page.locator('button[type="submit"]');
 await expect(submitBtn).toBeVisible();
});


test('Check if username error message is display if username field is blank', async({page})=>{

    await page.fill('input[name="password"]','testuser');
    await page.click('button[type="submit"]');

    const userNameErrorMessage=page.locator('text=Username is required');
    await expect(userNameErrorMessage).toBeVisible();
   });


   test('Check if password error message is display if password field is blank', async({page})=>{

    await page.fill('input[name="name"]','testuser');
    await page.click('button[type="submit"]');

    const passwordErrorMessage=page.locator('text=Password is required');
    await expect(passwordErrorMessage).toBeVisible();
   });
test('testLogin', async ({ page }) => {

    await page.getByRole('textbox', { name: 'Username' }).fill('ania');
    await page.getByRole('textbox', { name: 'Enter Password' }).fill('ania@123');
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole('button', { name: 'Login' }).click();
    await page.goto('http://localhost:4200/customer-update?username=ania');
  });


