export class Card {
	constructor(parentElement, tagName, title, descr, price, className) {
		this.transfer = 40;
		this.price = price;

		const counterWrapper = document.createElement('div');
		const counterInput = document.createElement('div');
		const counterPlus = document.createElement('button');
		const counterMinus = document.createElement('button');
		const counterReset = document.createElement('button');
		const priceFinal = document.createElement('span');
		
		priceFinal.classList.add('price__final')
		priceFinal.textContent = this.price
		
		counterInput.classList.add('counter__input')
		counterInput.textContent = 1;
		counterMinus.textContent = '-';
		counterPlus.textContent = '+';
		counterReset.textContent = 'reset';

		counterWrapper.append(counterPlus, counterInput, counterMinus, counterReset, priceFinal);
		
		counterWrapper.style.display = 'flex';

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

		counterPlus.onclick = () => changePrice('plus');
		counterMinus.onclick = () => changePrice('minus');
		counterReset.onclick = () => changePrice('reset');

		const card = document.createElement(tagName);
		card.className = className;
		card.innerHTML = `
		<div>
			<h3 class="card__title">${title}</h3>
			<p class="card__text">${descr}</p>
			<span class="card__price">${this.price} UAH</span>
		</div>
	`;
		card.append(counterWrapper)
		parentElement.append(card)
	
	}

	// changeToUAH() {
	// 	this.price = this.price * this.transfer;
	// };

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
	),
	new Card(
	document.querySelector('.product__cards'),
	'div',
	'ROMATOS',
	'loremloremlorem',
	100,
	'card',
	),
	new Card(
	document.querySelector('.product__cards'),
	'div',
	'ROMATOS',
	'loremloremlorem',
	88,
	'card',
	),
	new Card(
	document.querySelector('.product__cards'),
	'div',
	'ROMATOS',
	'loremloremlorem',
	777,
	'card',
	),
	new Card(
	document.querySelector('.product__cards'),
	'div',
	'ROMATOS',
	'loremloremlorem',
	1240,
	'card',
	),

]
