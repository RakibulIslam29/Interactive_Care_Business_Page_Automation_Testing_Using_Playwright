const { expect } = require('@playwright/test');

class GetInTouchPage {
  constructor(page) {
    this.page = page;
    this.selectors = {
      getInTouchButton: this.page.getByRole('button', { name: 'Get in Touch' }),
      heading: this.page.getByRole('heading', { name: 'We can help your company.' }),
      enhanceText: this.page.getByText('Through this, you can enhance'),
      firstNameText: this.page.getByText('First Name'),
      firstNameInput: this.page.getByPlaceholder('Enter your First Name'),
      lastNameText: this.page.getByText('Last Name'),
      lastNameInput: this.page.getByPlaceholder('Enter your Last Name'),
      phoneNumberText: this.page.getByText('Phone Number'),
      phoneNumberInput: this.page.getByPlaceholder('Enter your Phone Number'),
      emailText: this.page.getByText('Email Address'),
      emailInput: this.page.getByPlaceholder('Enter your Email Address'),
      companyNameText: this.page.getByText('Company Name'),
      companyNameInput: this.page.getByPlaceholder('Enter your Company Name'),
      companyAddressText: this.page.getByText('Company Address'),
      companyAddressInput: this.page.getByPlaceholder('Enter your Company Address'),
      companySizeText: this.page.getByText('Company Size', { exact: true }),
      companySizeSelect: this.page.getByRole('combobox').first(),
      traineesText: this.page.getByText('Expected Number of Trainees'),
      traineesSelect: this.page.getByRole('combobox').nth(1),
      preferredTopicText: this.page.getByText('Preferred Topic of Training'),
      preferredTopicInput: this.page.getByPlaceholder('Enter your Preferred Topic'),
      roleText: this.page.getByText('Your Role'),
      roleInput: this.page.getByPlaceholder('Enter your Role'),
      descriptionText: this.page.getByText('Description'),
      descriptionInput: this.page.getByPlaceholder('Enter your Description'),
      submitButton: this.page.getByRole('button', { name: 'Get in Touch' })
    };
  }

  async goto() {
    await this.page.goto('https://www.interactivecares.com/business');
  }

  async clickGetInTouch() {
    await this.selectors.getInTouchButton.click();
  }

  async fillForm() {
    await expect(this.selectors.heading).toBeVisible();
    await expect(this.selectors.enhanceText).toBeVisible();

    await expect(this.selectors.firstNameText).toBeVisible();
    await this.selectors.firstNameInput.click();
    await this.selectors.firstNameInput.fill('Rakibul');

    await expect(this.selectors.lastNameText).toBeVisible();
    await this.selectors.lastNameInput.click();
    await this.selectors.lastNameInput.fill('Islam');

    await expect(this.selectors.phoneNumberText).toBeVisible();
    await this.selectors.phoneNumberInput.click();
    await this.selectors.phoneNumberInput.fill('01705139111');

    await expect(this.selectors.emailText).toBeVisible();
    await this.selectors.emailInput.click();
    await this.selectors.emailInput.fill('rakibulislam@gmail.com');

    await expect(this.selectors.companyNameText).toBeVisible();
    await this.selectors.companyNameInput.click();
    await this.selectors.companyNameInput.fill('Interactive Care');

    await expect(this.selectors.companyAddressText).toBeVisible();
    await this.selectors.companyAddressInput.click();
    await this.selectors.companyAddressInput.fill('Mohammadpur, Dhaka, Bangladesh');

    await expect(this.selectors.companySizeText).toBeVisible();
    await this.selectors.companySizeSelect.selectOption('less Than 500');

    await expect(this.selectors.traineesText).toBeVisible();
    await this.selectors.traineesSelect.selectOption('100 To 500');

    await expect(this.selectors.preferredTopicText).toBeVisible();
    await this.selectors.preferredTopicInput.click();
    await this.selectors.preferredTopicInput.fill('software quality assurance');

    await expect(this.selectors.roleText).toBeVisible();
    await this.selectors.roleInput.click();
    await this.selectors.roleInput.fill('Admin');

    await expect(this.selectors.descriptionText).toBeVisible();
    await this.selectors.descriptionInput.click();
    await this.selectors.descriptionInput.fill('Interested in setting up training for our team.');
  }

  async submitForm() {
    await this.selectors.submitButton.click();
  }
}

module.exports = { GetInTouchPage };
