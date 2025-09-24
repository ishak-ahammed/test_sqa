export class loginPage {
    constructor(page) {
        this.page = page;
      //  this.url = 'https://food-web.p-stageenv.xyz/?_guestTokenRedirected=true';
        this.mobile_number_textbox = this.page.getByTestId('mobile-number-input').getByRole('textbox');
        this.send_otp_button = this.page.getByTestId('send-otp');
        this.otp_textbox = this.page.locator('.border');
        this.submit_otp_button = this.page.getByTestId('submit-otp');

        
    }
    // async go_to_login_page() {
    //     await this.page.goto(this.url);
    // }
    async click_login_register_button() {
        await this.page.getByTestId('login-register-button').click();
    }

    async login(mobileNumber, otp = '222222') {
        await this.mobile_number_textbox.fill(mobileNumber);
        await this.send_otp_button.click();

        await this.fillOtp(otp);

        await this.submit_otp_button.click();
    }

    async fillOtp(otp) {
        const digits = String(otp).split('');

        if (digits[0]) {
            await this.page.locator('.border').first().click();
            await this.page.locator('.border').first().fill(digits[0]);
        }
        if (digits[1]) {
            await this.page.locator('div:nth-child(2) > .border').click();
            await this.page.locator('div:nth-child(2) > .border').fill(digits[1]);
        }
        if (digits[2]) {
            await this.page.locator('div:nth-child(3) > .border').click();
            await this.page.locator('div:nth-child(3) > .border').fill(digits[2]);
        }
        if (digits[3]) {
            await this.page.locator('div:nth-child(4) > .border').click();
            await this.page.locator('div:nth-child(4) > .border').fill(digits[3]);
        }
        if (digits[4]) {
            await this.page.locator('div:nth-child(5) > .border').click();
            await this.page.locator('div:nth-child(5) > .border').fill(digits[4]);
        }
        if (digits[5]) {
            await this.page.locator('.w-1\\/6.mr-0 > .border').click();
            await this.page.locator('.w-1\\/6.mr-0 > .border').fill(digits[5]);
        }
    }

};