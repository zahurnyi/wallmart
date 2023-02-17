// import {changePrice} from './counter.js'
// export const createCounter = () => {
// 	const counterWrapper = document.createElement('div');
// 	const counterInput = document.createElement('div');
// 	const counterPlus = document.createElement('button');
// 	const counterMinus = document.createElement('button');
// 	const counterReset = document.createElement('button');
// 	const counterRemove = document.createElement('button');

// 	counterInput.classList.add('counter__input')
// 	counterRemove.classList.add('counter__remove')

// 	counterInput.textContent = `1 item`;
// 	counterMinus.textContent = '-';
// 	counterPlus.textContent = '+';
// 	counterReset.textContent = 'reset';
// 	counterRemove.textContent = 'X';
	
// 	document.body.append(counterWrapper)
// 	counterWrapper.append(counterPlus, counterInput, counterMinus, counterReset, counterRemove);
	
// 	counterWrapper.style.display = 'flex';

// 	const changePrice = (action, price = 10) => {
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

// counterPlus.onclick = () => changePrice('plus')
// counterMinus.onclick = () => changePrice('minus')
// counterReset.onclick = () => changePrice('reset')
// counterRemove.onclick = () => changePrice('remove')


	
// }

