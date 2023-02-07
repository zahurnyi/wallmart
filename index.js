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
const productsClose = document.createElement('button');
const productsAdd = document.createElement('button');
const closeCalculateBtn = document.createElement('button')

document.body.append(wrapper)
wrapper.append(products,basket, buttons, calculating)
buttons.append(btnAdd, btnCount, btnClear)
products.append(cards, productsClose, productsAdd);
cards.append(card)

btnAdd.classList.add('buttonAdd')
btnCount.classList.add('buttonCount')
btnClear.classList.add('buttonClear')
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

		counterWrapper.style.display = 'flex';

		const price = document.querySelector('.card__price')
		const priceFinal = document.createElement('span');
		price.textContent = price.textContent;
		priceFinal.textContent = `${price.textContent} UAH`;

		counterInput.textContent = '1';
		counterMinus.textContent = '-'
		counterPlus.textContent = '+'
		counterWrapper.append(counterPlus,counterInput, counterMinus);
		clone.append(counterWrapper, priceFinal);

		let counter = 0;
		const changePrice = (action, price = 10) => {
			if (action === 'plus') {
				counter += 1;
			} else {
				if (counter > 0) 
					counter -= 1;
			}
			counterInput.textContent = counter;
			priceFinal.textContent = `${counter * price} UAH`
		};

		counterPlus.onclick = () => changePrice('plus')
		counterMinus.onclick = () => changePrice('minus')

		basket.append(clone)	
		products.style.display = 'none'
		item.classList.remove('card__active')
	} else {
		productsClose.onclick = () => closeMenu();
	}
})
}

const openCalculate = () => {
	calculating.style.display = 'block';
	calculating.append(closeCalculateBtn)
}

const closeCalculate = () => {
	calculating.style.display = 'none'
}

btnAdd.onclick = () => openProducts();
btnClear.onclick = () => clearProducts();
btnCount.onclick = () => openCalculate();
closeCalculateBtn.onclick = () => closeCalculate();
productsClose.onclick = () => closeMenu();
productsAdd.onclick = () => addingProducts()
