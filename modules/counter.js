import { createCounter } from "./createCounter.js";
import { createClone } from "./cloneNode.js";

// export const changePrice = (action, price = 10) => {
// 	const priceDefault = document.createElement('span');
// 	const priceFinal = document.createElement('span');
// 	const counterInput = document.createElement('div');
// 	priceDefault.textContent = 10; 
// 	priceFinal.textContent = priceDefault.textContent;
	
// 	counterInput.classList.add('counter__input')
// 	priceFinal.classList.add('price__final')
	
// 	let counter = 1;
// 	if (action === 'plus') {
// 		counter += 1;
// 	} else if (action === 'reset') {
// 		counter = 1;
// 	} else if (action === 'remove') {
// 		clone.remove()
// 	}
// 	else {
// 		if (counter > 0) 
// 			counter -= 1;
// 	} 
// 	counterInput.textContent = `${counter} items`;
// 	priceFinal.textContent = `${counter * priceDefault} UAH`
// };
