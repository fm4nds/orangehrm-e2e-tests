import { LoginElements } from '../elements/LoginElements.js';

export class LoginPage {
	constructor(page) {
		this.page = page;
		this.elements = LoginElements;
	}

	async navigateToLogin() {
		await this.page.goto('/web/index.php/auth/login');
	}

	async login(username, password) {
		await this.navigateToLogin();
		await this.fillLoginForm(username, password);
		await this.submitLoginForm();
	}

	async fillLoginForm(username, password) {
		if (username) {
			await this.page.fill(this.elements.usernameInput, username);
		}
		if (password) {
			await this.page.fill(this.elements.passwordInput, password);
		}
	}

	async submitLoginForm() {
		await this.page.click(this.elements.loginButton);
	}

	async validateRequiredFieldError(fieldType) {
		const errorSelector = this.getErrorSelector(fieldType);
		await this.page.waitForSelector(errorSelector);
	}

	getErrorSelector(fieldType) {
		const errorSelectors = {
			username: this.elements.requiredFieldErrorUsername,
			password: this.elements.requiredFieldErrorPassword,
		};
		return errorSelectors[fieldType];
	}

	async loginWithOnlyUsername(username) {
		await this.fillLoginForm(username, null);
		await this.submitLoginForm();
		await this.validateRequiredFieldError('password');
	}

	async loginWithOnlyPassword(password) {
		await this.fillLoginForm(null, password);
		await this.submitLoginForm();
		await this.validateRequiredFieldError('username');
	}

	async loginWithEmptyFields() {
		await this.submitLoginForm();
		await this.validateRequiredFieldError('username');
		await this.validateRequiredFieldError('password');
	}

	async loginWithInvalidCredentials(username, password) {
		await this.fillLoginForm(username, password);
		await this.submitLoginForm();
		await this.page.waitForSelector(
			this.elements.invalidCredentialsError,
		);
	}

	async navigateToForgotPassword() {
		await this.page.click(this.elements.forgotPasswordLink);
	}

	async fillForgotPasswordForm(username) {
		await this.navigateToForgotPassword();
		await this.page.fill(
			this.elements.forgotPassword.usernameInput,
			username,
		);
	}

	async submitForgotPasswordForm(username) {
		await this.fillForgotPasswordForm(username);
		await this.page.click(this.elements.forgotPassword.submitButton);
	}

	async submitForgotPasswordWithEmptyFields() {
		await this.navigateToForgotPassword();
		await this.page.click(this.elements.forgotPassword.submitButton);
		await this.page.waitForSelector(
			this.elements.forgotPassword.requiredFieldError,
		);
	}

	async cancelForgotPasswordForm() {
		await this.navigateToForgotPassword();
		await this.page.click(this.elements.forgotPassword.cancelButton);
	}

	async expectToBeOnDashboard() {
		await this.page.waitForURL(/.*dashboard/);
	}

	async expectToBeOnForgotPasswordPage() {
		await this.page.waitForURL(/.*requestPasswordResetCode/);
	}

	async expectToBeOnLoginPage() {
		await this.page.waitForURL(/.*login/);
	}
}
