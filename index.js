const wrapper = document.createElement('div')
const basket = document.createElement('div')
const buttons = document.createElement('div')
const calculating = document.createElement('div');

const products = document.createElement('div')
const cards = document.createElement('div')
const card = document.createElement('div')
const btnAdd = document.createElement('button')
const btnCount = document.createElement('button')
const btnClear = document.createElement('button')
const btnReset = document.createElement('button')
const productsClose = document.createElement('button');
const productsAdd = document.createElement('button');
const closeCalculateBtn = document.createElement('button')

document.body.append(wrapper)
wrapper.append(products,basket, buttons, calculating)
buttons.append(btnAdd, btnCount, btnClear, btnReset)
products.append(cards, productsClose, productsAdd);
cards.append(card)

btnAdd.classList.add('buttonAdd')
btnCount.classList.add('buttonCount')
btnClear.classList.add('buttonClear')
btnReset.classList.add('button__reset')
buttons.classList.add('buttons')
wrapper.classList.add('wrapper')
productsAdd.classList.add('closeProducts');
productsClose.classList.add('close');
basket.classList.add('basket')
products.classList.add('products')
cards.classList.add('product__cards')
card.classList.add('card')
calculating.classList.add('calculate');

btnAdd.textContent = 'choose products'
btnCount.textContent = 'change counting'
btnClear.textContent = 'clear basket'
productsClose.textContent = 'close';
productsAdd.textContent = 'add';
closeCalculateBtn.textContent = 'close'
btnReset.textContent = 'reset items'


cards.innerHTML = `
	<div class="card">
		<h3 class="card__title">potatos</h3>
		<p class="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		<span class="card__price">10</span>
	</div>
`

for (let i = 0; i < 5; i++){
	cards.innerHTML += `
		<div class="card">
		<h3 class="card__title">potatos</h3>
		<p class="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		<span class="card__price">10</span>
	</div>
	`
};
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

		const price = document.querySelector('.card__price')
		const priceFinal = document.createElement('span');
		// price.textContent = price.textContent;
		priceFinal.textContent = `${price.textContent} UAH`;

		counterInput.classList.add('counter__input')
		priceFinal.classList.add('price__final')

		counterInput.textContent = '1';
		counterMinus.textContent = '-'
		counterPlus.textContent = '+'
		counterReset.textContent = 'reset'
		counterRemove.textContent = 'X'

		counterRemove.classList.add('counter__remove')

		counterWrapper.append(counterPlus,counterInput, counterMinus, counterReset, counterRemove);
		clone.append(counterWrapper, priceFinal);

		let counter = 0;
		const changePrice = (action, price = 10) => {
			if (action === 'plus') {
				counter += 1;
			} else if (action === 'reset') {
				counter = 1;
			} else {
				if (counter > 0) 
					counter -= 1;
			} 
			counterInput.textContent = counter;
			priceFinal.textContent = `${counter * price} UAH`
		};

		const removeItem = () => {
			clone.remove()
		}

		counterPlus.onclick = () => changePrice('plus')
		counterMinus.onclick = () => changePrice('minus')
		counterReset.onclick = () => changePrice('reset')
		counterRemove.onclick = () => removeItem()

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

	// resetInput.forEach(item => console.log(item.textContent))
	// resetPrice.forEach(item => console.log(item.textContent))
	
	// console.log(resetInput);
	// console.log(resetPrice);

	// let counter = 0;
	resetInput.forEach(card => {
		card.innerHTML = 1
	});
	resetPrice.forEach(card => {
		card.textContent = price.textContent
	});
}
btnReset.onclick = () => itemsReset();

btnAdd.onclick = () => openProducts();
btnClear.onclick = () => clearProducts();
btnCount.onclick = () => openCalculate();
closeCalculateBtn.onclick = () => closeCalculate();
productsClose.onclick = () => closeMenu();
productsAdd.onclick = () => addingProducts()
