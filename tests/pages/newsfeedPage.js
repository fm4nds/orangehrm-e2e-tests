import { faker } from '@faker-js/faker';
import { NewsFeedElements } from '../elements/newsfeedElements.js';

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

	async waitForBuzzPageToLoad() {
		await this.page.waitForURL(/.*buzz/);
		await this.page.waitForSelector(this.elements.pageTitle);
	}

	async createPost(postText) {
		await this.page.fill(this.elements.inputPost, postText);
		await this.page.click(this.elements.buttonPost);
		await this.page.waitForLoadState('networkidle');
	}

	async deleteFirstPost() {
		await this.page.click(this.elements.buttonConfig);
		await this.page.click(this.elements.buttonDelete);
		await this.page.click(this.elements.confirmDeleteButton);
	}

	async fillPostInput(text) {
		await this.page.fill(this.elements.inputPost, text);
	}

	generatePostText() {
		return faker.lorem.paragraph();
	}
}
