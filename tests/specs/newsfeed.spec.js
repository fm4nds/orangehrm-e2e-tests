import { expect, test } from '@playwright/test';
import dotenv from 'dotenv';
import { NewsFeedElements } from '../elements/newsFeedElements.js';
import { LoginPage } from '../pages/LoginPage.js';
import { NewsfeedPage } from '../pages/newsfeedPage.js';

dotenv.config();

test.describe('Buzz Newsfeed Functionality', () => {
	let loginPage;
	let newsfeedPage;

	test.beforeEach(async ({ page }) => {
		loginPage = new LoginPage(page);
		newsfeedPage = new NewsfeedPage(page);

		await loginPage.login(
			process.env.ORANGEHRM_USERNAME,
			process.env.ORANGEHRM_PASSWORD,
		);

		await loginPage.expectToBeOnDashboard();

		await newsfeedPage.navigateToBuzz();
		await newsfeedPage.expectToBeOnBuzzPage();
	});

	test.describe('Post Creation', () => {
		test('Should create a post successfully', async ({ page }) => {
			const postText = newsfeedPage.generatePostText();

			await newsfeedPage.createPost(postText);

			await newsfeedPage.expectPostCreated(postText);
		});

		test('Should display success message after creating post', async ({
			page,
		}) => {
			const postText = newsfeedPage.generatePostText();

			await newsfeedPage.createPost(postText);

			await expect(
				page.locator(NewsFeedElements.successMessageText),
			).toBeVisible();
		});
	});

	test.describe('Post Deletion', () => {
		test('Should delete a post successfully', async ({ page }) => {
			const postText = newsfeedPage.generatePostText();

			await newsfeedPage.createPost(postText);
			await newsfeedPage.waitForPostsToLoad();

			await newsfeedPage.deleteFirstPost();

			await expect(
				page.locator(NewsFeedElements.successMessageText),
			).toBeVisible();
		});
	});

	test.describe('Navigation', () => {
		test('Should navigate to Buzz page via menu', async ({
			page,
		}) => {
			await newsfeedPage.clickBuzzMenu();

			await newsfeedPage.expectToBeOnBuzzPage();
		});
	});

	test.describe('UI Elements', () => {
		test('Should display Buzz page elements correctly', async ({
			page,
		}) => {
			await expect(
				page.locator(NewsFeedElements.pageTitle),
			).toBeVisible();
			await expect(
				page.locator(NewsFeedElements.inputPost),
			).toBeVisible();
			await expect(
				page.locator(NewsFeedElements.buttonPost),
			).toBeVisible();
		});

		test('Should enable post button when text is entered', async ({
			page,
		}) => {
			const postText = newsfeedPage.generatePostText();

			await page.fill(NewsFeedElements.inputPost, postText);

			await expect(
				page.locator(NewsFeedElements.buttonPost),
			).toBeEnabled();
		});
	});
});
