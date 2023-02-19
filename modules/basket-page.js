import { ProductsPage } from './products-page.js';

export class basketPage extends ProductsPage {
	constructor(parentElement, tagName, title, className) {
		super(parentElement, tagName, title, className)
	}
}

new basketPage(
	document.body,
	'div',
	'BASKET PAGE',
	'basket__page'
)