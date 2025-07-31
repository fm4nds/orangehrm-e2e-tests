import { expect, test } from '@playwright/test';
import dotenv from 'dotenv';
import { LoginElements } from '../elements/LoginElements.js';
import { LoginPage } from '../pages/LoginPage.js';

dotenv.config();

test.describe('Login Functionality', () => {
	let loginPage;

	test.beforeEach(async ({ page }) => {
		loginPage = new LoginPage(page);
		await loginPage.navigateToLogin();
	});

	test.describe('Successful Login', () => {
		test('Should login successfully with valid credentials', async ({
			page,
		}) => {
			await loginPage.login(
				process.env.ORANGEHRM_USERNAME,
				process.env.ORANGEHRM_PASSWORD,
			);
			await loginPage.expectToBeOnDashboard();
		});
	});

	test.describe('Form Validation', () => {
		test('Should display required field message when username field is empty', async ({
			page,
		}) => {
			await loginPage.loginWithOnlyPassword(
				process.env.ORANGEHRM_PASSWORD,
			);
			await expect(
				page.locator(LoginElements.requiredFieldErrorUsername),
			).toBeVisible();
		});

		test('Should display required field message when password field is empty', async ({
			page,
		}) => {
			await loginPage.loginWithOnlyUsername(
				process.env.ORANGEHRM_USERNAME,
			);
			await expect(
				page.locator(LoginElements.requiredFieldErrorPassword),
			).toBeVisible();
		});

		test('Should display required field message when both fields are empty', async ({
			page,
		}) => {
			await loginPage.loginWithEmptyFields();
			await expect(
				page.locator(LoginElements.requiredFieldErrorUsername),
			).toBeVisible();
			await expect(
				page.locator(LoginElements.requiredFieldErrorPassword),
			).toBeVisible();
		});

		test('Should display error message with invalid credentials', async ({
			page,
		}) => {
			await loginPage.loginWithInvalidCredentials(
				'invalid',
				'invalid',
			);
			await expect(
				page.locator(LoginElements.invalidCredentialsError),
			).toBeVisible();
		});
	});

	test.describe('Forgot Password', () => {
		test('Should redirect correctly to password recovery page', async ({
			page,
		}) => {
			await loginPage.navigateToForgotPassword();
			await loginPage.expectToBeOnForgotPasswordPage();
		});

		test('Should display required field message when username field is empty in forgot password page', async ({
			page,
		}) => {
			await loginPage.submitForgotPasswordWithEmptyFields();
			await expect(
				page.locator(LoginElements.forgotPassword.requiredFieldError),
			).toBeVisible();
		});

		test('Should display confirmation message after filling forgot password fields correctly', async ({
			page,
		}) => {
			await loginPage.submitForgotPasswordForm(
				process.env.ORANGEHRM_USERNAME,
			);
			await expect(
				page.locator(
					LoginElements.forgotPassword.confirmationMessage,
				),
			).toBeVisible();
			await expect(
				page.locator(
					LoginElements.forgotPassword.confirmationMessage,
				),
			).toHaveText('Reset Password link sent successfully');
		});

		test('Should redirect to login page after canceling password recovery process', async ({
			page,
		}) => {
			await loginPage.cancelForgotPasswordForm();
			await loginPage.expectToBeOnLoginPage();
		});
	});
});
