export class Card {
	constructor(parentElement, tagName, title, descr, price, className) {
		this.transfer = 40;
		this.price = price;
		this.card = document.createElement(tagName);
		this.card.className = className;
		this.card.innerHTML = `
		<div>
			<h3 class="card__title">${title}</h3>
			<p class="card__text">${descr}</p>
			<span class="card__price">${this.price} UAH</span>
		</div>
	`;
		parentElement.append(this.card)
	}

	createCounter() {
		const counterWrapper = document.createElement('div');
		const counterInput = document.createElement('div');
		const counterPlus = document.createElement('button');
		const counterMinus = document.createElement('button');
		const counterReset = document.createElement('button');
		const priceFinal = document.createElement('span');

		counterPlus.classList.add('counter__plus')
		counterMinus.classList.add('counter__minus')
		counterReset.classList.add('counter__reset')
		priceFinal.classList.add('price__final')

		priceFinal.textContent = this.price
		
		counterInput.classList.add('counter__input')
		counterInput.textContent = 1;
		counterMinus.textContent = '-';
		counterPlus.textContent = '+';
		counterReset.textContent = 'reset';

		counterWrapper.append(counterPlus, counterInput, counterMinus, counterReset, priceFinal);
		
		counterWrapper.style.display = 'flex';
		this.card.append(counterWrapper)

		let counter = 1;
		const changePrice = (action, price = this.price) => {
			if (action === 'plus') {
				counter += 1;
			} else if (action === 'reset') {
				counter = 1;
			} else if (action === 'remove') {
				clone.remove()
			}
			else {
				if (counter > 0) 
					counter -= 1;
			} 
			counterInput.textContent = `${counter} items`;
			priceFinal.textContent = `${counter * price} UAH`
		};

		counterPlus.onclick = (event) => {
			event.stopPropagation();
			if (this.card.classList.contains('card__active')) {
				changePrice('plus')
			}
		};
		counterMinus.onclick = (event) => {
			event.stopPropagation();
			if (this.card.classList.contains('card__active')) {
				changePrice('minus')
			}
		};
		counterReset.onclick = (event) => {
			event.stopPropagation();
			if (this.card.classList.contains('card__active')) {
				changePrice('reset')
			}
		};
	}

}

export let arrayCards = [
	// new Card(
	// document.body,
	// 'div',
	// 'ROMATOS',
	// 'loremloremlorem',
	// 10,
	// 'card',
	// ),
	new Card(
	document.querySelector('.product__cards'),
	'div',
	'ROMATOS',
	'loremloremlorem',
	14,
	'card',
	).createCounter(),
	new Card(
	document.querySelector('.product__cards'),
	'div',
	'ROMATOS',
	'loremloremlorem',
	50,
	'card',
	).createCounter(),
	new Card(
	document.querySelector('.product__cards'),
	'div',
	'ROMATOS',
	'loremloremlorem',
	100,
	'card',
	).createCounter(),
	new Card(
	document.querySelector('.product__cards'),
	'div',
	'ROMATOS',
	'loremloremlorem',
	88,
	'card',
	).createCounter(),
	new Card(
	document.querySelector('.product__cards'),
	'div',
	'ROMATOS',
	'loremloremlorem',
	777,
	'card',
	).createCounter(),
	new Card(
	document.querySelector('.product__cards'),
	'div',
	'ROMATOS',
	'loremloremlorem',
	1240,
	'card',
	).createCounter(),

]
