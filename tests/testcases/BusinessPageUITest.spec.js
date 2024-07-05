const { test } = require('@playwright/test');
const { BusinessPage } = require('../pages/BusinessPage');

test('test business page elements', async ({ page }) => {
  const businessPage = new BusinessPage(page);
  await businessPage.goto();
  await businessPage.verifyElements();
  await businessPage.clickCustomQuotationHeading();
});
