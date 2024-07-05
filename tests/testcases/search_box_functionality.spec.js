const { test } = require('@playwright/test');
const { SearchBoxPage } = require('../pages/search_box_functionality');

test('test search box functionality', async ({ page }) => {
  const searchBoxPage = new SearchBoxPage(page);
  await searchBoxPage.goto();
  await searchBoxPage.search('Cyber Security');
  await searchBoxPage.clickSearchDialog();
  await searchBoxPage.verifySearchResults();
});
