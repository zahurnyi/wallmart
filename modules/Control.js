export class Control {

	constructor(parentElement, tagName = 'div', className = '', title = '') {
		const element = document.createElement(tagName)
		element.className = className;
		element.textContent = title
		parentElement.append(element);
	}
}

new Control(
	document.body,
	'div',
	'products__page',
	'PRODUCTS PAGE',
)

