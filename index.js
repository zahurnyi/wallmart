import { wrapper,buttons, basket, calculating, products, cards, card, productsAdd, productsClose, closeCalculateBtn, btnReset, btnAdd, btnCount, btnClear }
 from './modules/variables.js'

import { Card, arrayCards } from './modules/card.js'
import { Buttons } from './modules/buttons.js'


const items = document.querySelectorAll('.card')
items.forEach(item => {
	const itemAdd = () => {
		item.classList.toggle('card__active')
	}
	item.onclick = () => itemAdd();
})

const openProducts = () => {
	products.style.display = 'block'
}

const clearProducts = () => {
	basket.textContent = ''
}

const closeMenu = () => {
	products.style.display = 'none';
	items.forEach(item => {
		item.classList.remove('card__active')
	})
}

const openCalculate = () => {
	calculating.style.display = 'block';
	calculating.append(closeCalculateBtn)
}

const closeCalculate = () => {
	calculating.style.display = 'none'
}

const addingProducts = () => {
	items.forEach(item => {
	if (item.classList.contains('card__active')) {
		const basket = document.querySelector('.basket');
		const clone = item.cloneNode(true);
		clone.style.width = "100%";

		const counterWrapper = document.createElement('div');
		const counterInput = document.createElement('div');
		const counterPlus = document.createElement('button');
		const counterMinus = document.createElement('button');
		const counterReset = document.createElement('button');
		const counterRemove = document.createElement('button');

		counterWrapper.style.display = 'flex';

		let resultPrices = []
		arrayCards.forEach(item => {
			resultPrices.push(item.price);
		})
		console.log(resultPrices);
		resultPrices.forEach(value => {
			// console.log(value);
		})

		const price = document.querySelector('.card__price');
		price.textContent = 10; 
		const priceFinal = document.createElement('span');
		priceFinal.textContent = price.textContent;

		counterInput.classList.add('counter__input')
		priceFinal.classList.add('price__final')

		counterInput.textContent = `1 item`;
		counterMinus.textContent = '-';
		counterPlus.textContent = '+';
		counterReset.textContent = 'reset';
		counterRemove.textContent = 'X';

		counterRemove.classList.add('counter__remove')

		counterWrapper.append(counterPlus,counterInput, counterMinus, counterReset, counterRemove);
		clone.append(counterWrapper, priceFinal);

	
		let counter = 1;
		const changePrice = (action, price = 10) => {
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

		counterPlus.onclick = () => changePrice('plus')
		counterMinus.onclick = () => changePrice('minus')
		counterReset.onclick = () => changePrice('reset')
		counterRemove.onclick = () => changePrice('remove')

		basket.append(clone)	
		products.style.display = 'none'
		item.classList.remove('card__active')
	} else {
		productsClose.onclick = () => closeMenu();
	}
})
}

const itemsReset = () => {
	const resetInput = document.querySelectorAll('.counter__input')
	const resetPrice = document.querySelectorAll('.price__final')
	const price = document.querySelector('.card__price')

	resetInput.forEach(input => {
		input.textContent = `1 item`;
	});
	resetPrice.forEach(card => {
		card.textContent = price.textContent;
	}
)}

btnReset.onclick = () => itemsReset();
btnAdd.onclick = () => openProducts();
btnClear.onclick = () => clearProducts();
btnCount.onclick = () => openCalculate();
closeCalculateBtn.onclick = () => closeCalculate();
productsClose.onclick = () => closeMenu();
productsAdd.onclick = () => addingProducts()
