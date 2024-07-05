const { test } = require('@playwright/test');
const { GetInTouchPage } = require('../pages/get_in_touch_button_functionality');

test('test Get in Touch button functionality', async ({ page }) => {
  const getInTouchPage = new GetInTouchPage(page);
  await getInTouchPage.goto();
  await getInTouchPage.clickGetInTouch();
  await getInTouchPage.fillForm();
  await getInTouchPage.submitForm();
});
