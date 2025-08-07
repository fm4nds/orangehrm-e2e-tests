import { faker } from '@faker-js/faker';
import { NewsFeedElements } from '../elements/newsFeedElements.js';

export class NewsfeedPage {
	constructor(page) {
		this.page = page;
		this.elements = NewsFeedElements;
	}

	async navigateToBuzz() {
		await this.page.goto('/web/index.php/buzz/viewBuzz');
	}

	async clickBuzzMenu() {
		await this.page.click(this.elements.buzzMenu);
	}

	async expectToBeOnBuzzPage() {
		await this.page.waitForURL(/.*buzz/);
		await this.page.waitForSelector(this.elements.pageTitle);
	}

	async createPost(postText) {
		await this.page.fill(this.elements.inputPost, postText);
		await this.page.click(this.elements.buttonPost);
	}

	async expectPostCreated(postText) {
		try {
			await this.page.waitForSelector(
				this.elements.successMessageText,
			);
		} catch (e) {}

		const postLocator = this.page
			.locator(this.elements.postText, { hasText: postText })
			.first();
		await postLocator.waitFor();
	}

	async deleteFirstPost() {
		await this.page.click(this.elements.buttonConfig);
		await this.page.click(this.elements.buttonDelete);
		await this.page.click(this.elements.confirmDeleteButton);
	}

	async expectPostDeleted() {
		await this.page.waitForSelector(this.elements.successMessageText);
	}

	async waitForPostsToLoad() {
		await this.page.waitForSelector(this.elements.postList);
	}

	async verifySuccessMessage() {
		await this.page.waitForSelector(this.elements.successMessageText);
	}

	generatePostText() {
		return faker.lorem.paragraph();
	}
}
