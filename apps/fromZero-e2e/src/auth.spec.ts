import { expect, test } from '@playwright/test';

test.describe('auth', () => {
    test('Login demo test 1', async ({ page }) => {
        await page.goto('https://demo.applitools.com/');
        await page.pause();
        await page
            .locator('[placeholder="Enter your username"]')
            .fill('Raghav');
        await page.locator('[placeholder="Enter your password"]').fill('1234');
        await page.locator('text=Sign in').click();
        await page.locator('text=ACME').isVisible();
    });

    test('Login demo test 3', async ({ page }) => {
        await page.goto(
            'https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F'
        );
        await page.locator('input[name="Email"]').click();
        await page.locator('input[name="Email"]').fill('admin@yourstore.com');
        await page.locator('input[name="Password"]').click();
        await page.locator('input[name="Password"]').fill('admin');
        await page.locator('text=Log in').click();
        await page.locator('#nopSideBarPusher i').click();
        await page.locator('text=Logout').click();
        await page.waitForURL(
            'https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F'
        );
        await page.close();
    });

    ////

    test('Demo login', async ({ browser }) => {
        const ctx = await browser.newContext();
        const page = await ctx.newPage();
        await page.goto('/login');
        await page.pause();
        // fill email
        await page.getByTestId('login-input-email').fill('abc@gmail.com');
        // check validate input email
        const errorEmail = page.getByTestId('login-input-email-error');
        await expect(errorEmail).toBeHidden();

        // fill password
        await page.getByTestId('login-input-password').fill('1234');

        // check validate input password
        const errorPassword = page.getByTestId('login-input-password-error');
        await expect(errorPassword).toBeHidden();

        // submit login
        await page.getByTestId('login-button').click();

        // check login success
        await expect(page).toHaveURL('/');

        // check is login
        const isLogin = await page.evaluate(() =>
            localStorage.getItem('isLogin')
        );
        expect(isLogin).toEqual('1');
        console.log('Login successfully !!!');
    });

    // test.use({
    //   geolocation: { longitude: 13.404954, latitude: 52.520008 },
    //   permissions: ['geolocation'],
    //   locale: 'de-DE',
    //   timezoneId: 'Europe/Berlin',
    // });

    // test('test location', async ({ page, context }) => {
    //   await context.setGeolocation({
    //     longitude: 13.404954,
    //     latitude: 52.520008,
    //   });
    //   await page.goto('https://www.google.com/maps');
    //   await page.pause();
    //   await page.close();
    //   await context.close()
    // });

    test('Check login in multiple tabs', async ({ browser }) => {
        const ctx = await browser.newContext();
        const homePage = await ctx.newPage();
        await homePage.goto('/');
        const pageLogin = await ctx.newPage();
        await pageLogin.goto('/login');
        await pageLogin.pause();
        // fill email
        await pageLogin.getByTestId('login-input-email').fill('abc@gmail.com');
        // check validate input email
        const errorEmail = pageLogin.getByTestId('login-input-email-error');
        await expect(errorEmail).toBeHidden();

        // fill password
        await pageLogin.getByTestId('login-input-password').fill('1234');

        // check validate input password
        const errorPassword = pageLogin.getByTestId(
            'login-input-password-error'
        );
        await expect(errorPassword).toBeHidden();

        // submit login
        await pageLogin.getByTestId('login-button').click();

        // check login success
        await expect(pageLogin).toHaveURL('/');

        // check is login
        const isLogin = await pageLogin.evaluate(() =>
            localStorage.getItem('isLogin')
        );
        expect(isLogin).toEqual('1');
        console.log('Login successfully !!!');

        //check is home page have same data login
        const homeIsLogin = await homePage.evaluate(() =>
            localStorage.getItem('isLogin')
        );
        expect(homeIsLogin).toEqual('1');
        console.log('Home page login successfully !!!');
    });
});
