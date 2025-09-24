import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/login';


test('Login', async ({ page, context }) => {
    await page.goto('https://food-web.p-stageenv.xyz/?_guestTokenRedirected=true');
    const login = new loginPage(page);
    await login.go_to_login_page();
    await login.click_login_register_button();
    await login.login('+8801521432574');
    await page.getByTestId('locate-me').locator('i').click();
    await page.getByRole('textbox', { name: 'Enter your address and see' }).click();
    await page.getByRole('textbox', { name: 'Enter your address and see' }).fill('mohammadpur');
    await page.locator('xpath=//*[@id="myModal"]/div/div/div[2]/button').click();


});
