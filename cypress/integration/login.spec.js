import LoginPage from '../pageObjects/LoginPage';
import HomePage from '../pageObjects/HomePage';

describe('Login Test', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  it('should log in successfully', () => {
    loginPage.visit();
    loginPage.fillUsername('testuser');
    loginPage.fillPassword('testpassword');
    loginPage.submit();

    // Verify that the welcome message appears after login
    homePage.getWelcomeMessage().should('contain', 'Welcome');
  });
});
