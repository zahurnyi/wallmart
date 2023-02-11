export class Card {
	constructor(parentElement, title, descr, price, className) {
		this.parent = document.querySelector(parentElement)
		this.title = title;
		this.descr = descr;
		this.price = price;
		this.className = className;
		this.transfer = 40;
	}

	changeToUAH() {
		this.price = this.price * this.transfer;
	}

	render() {
		this.changeToUAH();
		const card = document.createElement('div');
		card.innerHTML = `
		<div class=${this.className}>
		<h3 class="card__title">${this.title}</h3>
		<p class="card__text">${this.descr}</p>
		<span class="card__price">${this.price} UAH</span>
		</div>
		`;
		this.parent.append(card)
	}
}