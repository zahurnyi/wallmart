import { wrapper,buttons, basket, calculating, products, cards, card, productsAdd, productsClose, closeCalculateBtn, btnReset, btnAdd, btnCount, btnClear }
 from './modules/variables.js'

import { Card, arrayCards } from './modules/card.js'
import { Buttons } from './modules/buttons.js'
import { createClone } from './modules/cloneNode.js'
// import { counterDelete } from './modules/counterRemove.js'



const items = document.querySelectorAll('.card')
items.forEach(item => {
	const itemAdd = () => {
		item.classList.toggle('card__active')
	}
	item.onclick = () => itemAdd();
})

const openMenu = () => {
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
	createClone();
	// createCounter();
	// changePrice();
	closeMenu();
}

const itemsReset = () => {
	const resetInput = document.querySelectorAll('.counter__input')
	const resetPrice = document.querySelectorAll('.price__final')
	const priceCard = document.querySelectorAll('.card__price')
	// console.log(resetPrice);
	// console.log(resetPrice.innerHTML);
	// console.log(resetPrice.textContent);
	// console.log(resetPrice.values);

	resetInput.forEach(input => {
		input.textContent = `1 item`;
	});

	resetPrice.forEach(item => {
		item.innerHTML = priceCard[1].textContent;
	})
	priceCard.forEach(input => {
		// console.log(input.textContent);
	});

	const plus = document.querySelectorAll('.counter__plus')
	console.log(plus);
	plus.forEach(btn => {
		btn.onclick = ()=> alert('+')
	})
	
}

btnReset.onclick = () => itemsReset();
btnAdd.onclick = () => openMenu();
btnClear.onclick = () => clearProducts();
btnCount.onclick = () => openCalculate();
closeCalculateBtn.onclick = () => closeCalculate();
productsClose.onclick = () => closeMenu();
productsAdd.onclick = () => addingProducts()
