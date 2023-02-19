export class ProductsPage {
	constructor(parentElement, tagName, title, className) {
		this.productsPage = document.createElement(tagName)
		this.productsPage.className = className;
		this.productsPage.textContent = title
		parentElement.append(this.productsPage)
	}
}

new ProductsPage(
	document.body,
	'div',
	'PRODUCTS PAGE',
	'products__page'
)