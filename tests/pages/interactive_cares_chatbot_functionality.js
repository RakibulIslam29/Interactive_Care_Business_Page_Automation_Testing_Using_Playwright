const { expect } = require('@playwright/test');

class InteractiveCaresChatbotPage {
  constructor(page) {
    this.page = page;
    this.selectors = {
      chatbotButton: this.page.locator('.fixed > .MuiButtonBase-root'),
      chatbotHeading: this.page.getByRole('heading', { name: 'Interactive Cares Chatbot' }),
      chatbotProfileImg: this.page.getByRole('img', { name: 'Chatbot Profile' }),
      chatbotIntroText: this.page.getByText('Hello, I am the coolest'),
      messageInput: this.page.getByPlaceholder('Type your message...'),
      sendButton: this.page.locator('.w-\\[70px\\]')
    };
  }

  async goto() {
    await this.page.goto('https://www.interactivecares.com/business');
  }

  async openChatbot() {
    await this.selectors.chatbotButton.click();
  }

  async verifyChatbotOpened() {
    await expect(this.selectors.chatbotHeading).toBeVisible();
    await expect(this.selectors.chatbotProfileImg).toBeVisible();
    await expect(this.selectors.chatbotIntroText).toBeVisible();
  }

  async sendMessage(message) {
    await this.selectors.messageInput.click();
    await this.selectors.messageInput.fill(message);
    await this.selectors.sendButton.click();
  }
}

module.exports = { InteractiveCaresChatbotPage };
