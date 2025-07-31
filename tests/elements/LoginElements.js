export const LoginElements = {
	// Form elements
	loginTitle: '.orangehrm-login-title',
	loginForm: '.orangehrm-login-form',

	// Input fields
	usernameInput: 'input[name="username"]',
	passwordInput: 'input[name="password"]',

	// Buttons
	loginButton: '.orangehrm-login-button',

	// Links
	forgotPasswordLink: '.orangehrm-login-forgot-header',

	// Error messages
	invalidCredentialsError: '.oxd-alert-content--error',
	requiredFieldErrorUsername:
		'.oxd-input-group:has(input[name="username"]) .oxd-input-field-error-message',
	requiredFieldErrorPassword:
		'.oxd-input-group:has(input[name="password"]) .oxd-input-field-error-message',

	// Forgot password elements
	forgotPassword: {
		usernameInput: 'input[name="username"]',
		submitButton: 'button[type="submit"]',
		cancelButton: 'button[type="button"]',
		requiredFieldError: '.oxd-input-field-error-message',
		confirmationMessage: '.orangehrm-forgot-password-title',
	},

	// Dashboard elements
	dashboard: {
		title: '.oxd-topbar-header-breadcrumb-module',
	},
};
