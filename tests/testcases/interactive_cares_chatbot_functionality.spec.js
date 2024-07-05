const { test } = require('@playwright/test');
const { InteractiveCaresChatbotPage } = require('../pages/interactive_cares_chatbot_functionality');

test('test Interactive Cares Chatbot functionality', async ({ page }) => {
  const chatbotPage = new InteractiveCaresChatbotPage(page);
  await chatbotPage.goto();
  await chatbotPage.openChatbot();
  await chatbotPage.verifyChatbotOpened();
  await chatbotPage.sendMessage('I want to enroll in a cyber security course');
});
