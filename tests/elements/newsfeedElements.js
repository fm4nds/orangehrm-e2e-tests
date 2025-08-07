export const NewsFeedElements = {
	// Navigation elements
	buzzMenu: '.oxd-main-menu-item:has-text("Buzz")',
	pageTitle: '.oxd-topbar-header-breadcrumb-module:has-text("Buzz")',

	// Post creation elements
	inputPost: '.oxd-buzz-post-input',
	buttonPost: '.oxd-buzz-post-slot',

	// Post content elements
	postText: '.orangehrm-buzz-post-body-text',

	// Post action elements
	buttonConfig: '.orangehrm-buzz-post-header-config',
	buttonDelete:
		'.orangehrm-buzz-post-header-config-item:has-text("Delete Post")',
	confirmDeleteButton: '.oxd-button--label-danger',

	// Success messages
	successMessageText:
		'.oxd-text--toast-message.oxd-toast-content-text:has-text("Successfully Deleted")',
};
