const { expect } = require('@playwright/test');

class SearchBoxPage {
  constructor(page) {
    this.page = page;
    this.selectors = {
      searchBox: this.page.getByRole('textbox'),
      searchDialog: this.page.getByRole('dialog').locator('path'),
      cyberSecurityLink: this.page.getByRole('link', { name: 'Cyber Security Fundamentals' }),
      tanvirHassanText: this.page.getByText('Tanvir Hassan Zoha'),
      lessons21Text: this.page.getByText('21 Lessons'),
      quizText: this.page.getByText('Quiz').first(),
      price500Text: this.page.getByText('500.00'),
      price1000Text: this.page.getByText('1000'),
      cyberSecurityEthicalLink: this.page.getByRole('link', { name: 'Cyber Security and Ethical' }),
      papanSahaText: this.page.getByText('Papan Saha'),
      lessons26Text: this.page.getByText('26 Lessons'),
      price20000Text: this.page.getByText('20000')
    };
  }

  async goto() {
    await this.page.goto('https://www.interactivecares.com/business');
  }

  async search(term) {
    await this.selectors.searchBox.click();
    await this.selectors.searchBox.fill(term);
    await this.selectors.searchBox.press('Enter');
  }

  async clickSearchDialog() {
    await this.selectors.searchDialog.click();
  }

  async verifySearchResults() {
    await expect(this.selectors.cyberSecurityLink).toBeVisible();
    await expect(this.selectors.tanvirHassanText).toBeVisible();
    await expect(this.selectors.lessons21Text).toBeVisible();
    await expect(this.selectors.quizText).toBeVisible();
    await expect(this.selectors.price500Text).toBeVisible();
    await expect(this.selectors.price1000Text).toBeVisible();
    await expect(this.selectors.cyberSecurityEthicalLink).toBeVisible();
    await expect(this.selectors.papanSahaText).toBeVisible();
    await expect(this.selectors.lessons26Text).toBeVisible();
    await expect(this.selectors.price20000Text).toBeVisible();
  }
}

module.exports = { SearchBoxPage };
