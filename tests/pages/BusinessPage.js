const { expect } = require('@playwright/test');

class BusinessPage {
  constructor(page) {
    this.page = page;
    this.selectors = {
      interactiveCaresText: this.page.getByText('Interactive CaresFor Your'),
      hiringNewTeamText: this.page.getByText('Be it hiring new team members'),
      companyPartnersHeading: this.page.getByRole('heading', { name: 'Our Company Partners' }),
      engageEmpowerHeading: this.page.getByRole('heading', { name: 'Engage and Empower Your' }),
      hireBestHeading: this.page.getByRole('heading', { name: 'Hire only the best' }),
      rigorousSelectionText: this.page.getByText('Our rigorous selection'),
      learnMoreButton1: this.page.getByRole('button', { name: 'Learn More' }).first(),
      engageIconOne1: this.page.getByRole('img', { name: 'engageIconOne' }).first(),
      upskillTeamHeading: this.page.getByRole('heading', { name: 'Train to upskill your team' }),
      comprehensiveCorporateText: this.page.getByText('Our comprehensive corporate'),
      learnMoreButton2: this.page.getByRole('button', { name: 'Learn More' }).nth(1),
      engageIconOne2: this.page.getByRole('img', { name: 'engageIconOne' }).nth(1),
      longTermCareerHeading: this.page.getByRole('heading', { name: 'Build a long term career path' }),
      expertlyDesignedCoursesText: this.page.getByText('Our expertly designed courses can be availed in bulk for your team.'),
      learnMoreButton3: this.page.getByRole('button', { name: 'Learn More' }).nth(2),
      engageIconTwo: this.page.getByRole('img', { name: 'engageIconTwo' }),
      bestCandidatesHeading: this.page.getByRole('heading', { name: 'Hire the best candidates' }),
      candidatesGoText: this.page.getByText('Each of our candidates go'),
      workforceDevelopHeading: this.page.getByRole('heading', { name: 'Develop your workforce\'s' }),
      onDemandLearningHeading: this.page.getByRole('heading', { name: 'On Demand Learning' }),
      groupSettingText: this.page.getByText('Help the group setting to'),
      curatedContentHeading: this.page.getByRole('heading', { name: 'Expert Curated Content' }),
      empowerTeamText: this.page.getByText('Empower your team with'),
      easyAccessHeading: this.page.getByRole('heading', { name: 'Easy access and Manageable' }),
      userFriendlyText: this.page.getByText('User-friendly access and 24/7'),
      inspiringProfessionalsHeading: this.page.getByRole('heading', { name: 'Inspiring Professionals' }),
      enableEmployeesText: this.page.getByText('Enable your employees to'),
      customQuotationHeading: this.page.getByRole('heading', { name: 'Get custom quotation tailored' }),
      weCanHelpHeading: this.page.getByRole('heading', { name: 'We Can Help Your Company' }),
      enhanceText: this.page.getByText('Through this you can enhance'),
      interactiveCaresDiv: this.page.locator('#root div').filter({ hasText: 'Interactive Cares is' }).nth(4),
      contactUsText: this.page.getByText('Contact Us36/6, Square Tower'),
      quickLinksText: this.page.getByText('Quick LinksCourses Hire'),
      footerImg: this.page.getByRole('img', { name: 'footer', exact: true }),
      termsOfUseText: this.page.getByText('Terms of UseReport an Issue'),
      allRightsReservedText: this.page.getByText('© 2024 All Rights Reserved to')
    };
  }

  async goto() {
    await this.page.goto('https://www.interactivecares.com/business');
  }

  async verifyElements() {
    for (const key in this.selectors) {
      await expect(this.selectors[key]).toBeVisible();
    }
  }

  async clickCustomQuotationHeading() {
    await this.selectors.customQuotationHeading.click();
  }
}

module.exports = { BusinessPage };
