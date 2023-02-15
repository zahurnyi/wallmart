export class Card {
	constructor(parentElement, tagName, title, descr, price, className) {
		this.transfer = 40;
		this.price = price;
		const element = document.querySelector(parentElement);
		const card = document.createElement(tagName);
		card.className = className;
		card.innerHTML = `
			<div>
				<h3 class="card__title">${title}</h3>
				<p class="card__text">${descr}</p>
				<span class="card__price">${price} UAH</span>
			</div>
		`;
		if (element) {
			element.append(card) 
		}
	}

	changeToUAH() {
		this.price = this.price * this.transfer;
	}

	destroy() {
		// this.className.classist.remove()
	}
}


export let arrayCards = [
	new Card(
	'.product__cards',
	'div',
	'ROMATOS',
	'loremloremlorem',
	10,
	'card',
	),
	new Card(
	'.product__cards',
	'div',
	'ROMATOS',
	'loremloremlorem',
	35,
	'card',
	),
	new Card(
	'.product__cards',
	'div',
	'japanese',
	'loremloremlorem',
	18,
	'card',
	),
	new Card(
	'.product__cards',
	'div',
	'indusi',
	'loremloremlorem',
	8,
	'card',
	),
	new Card(
	'.product__cards',
	'div',
	'indusi',
	'loremloremlorem',
	828,
	'card',
	),

]

