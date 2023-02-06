const btnAdd = document.createElement('button')
const btnCount = document.createElement('button')
const btnClear = document.createElement('button')
const buttons = document.createElement('div')
const wrapper = document.querySelector('.wrapper')
const basket = document.querySelector('.basket')
const productsOpen = document.querySelector('.products')
const productsClose = document.createElement('button');
const productsAdd = document.createElement('button');
const items = document.querySelectorAll('.products__item');
const calculating = document.querySelector('.calculate');
const closeCalculateBtn = document.createElement('button')

wrapper.append(buttons)
buttons.append(btnAdd, btnCount, btnClear)
productsOpen.append(productsClose, productsAdd);
document.querySelector('body').append(wrapper)

btnAdd.classList.add('buttonAdd')
btnCount.classList.add('buttonCount')
btnClear.classList.add('buttonClear')
buttons.classList.add('buttons')
wrapper.classList.add('.wrapper')
productsAdd.classList.add('closeProducts');
productsClose.classList.add('close');

btnAdd.textContent = 'choose products'
btnCount.textContent = 'change counting'
btnClear.textContent = 'clear basket'
productsClose.textContent = 'close';
productsAdd.textContent = 'add';
closeCalculateBtn.textContent = 'close'

items.forEach(item => {
	const itemAdd = () => {
		item.classList.toggle('products__active')
	}
	item.addEventListener('click', itemAdd)
})

const openProducts = () => {
	productsOpen.style.display = 'block'
}

const clearProducts = () => {
	basket.textContent = ''
}

const closeMenu = () => {
	productsOpen.style.display = 'none'
	items.forEach(item => {
		item.classList.remove('products__active')
	})
}

const addingProducts = () => {
	items.forEach(item => {
	if (item.classList.contains('products__active')) {
		const basket = document.querySelector('.basket')
		const clone = item.cloneNode(true)
		clone.style.width = "100%"

		const counterWrapper = document.createElement('div')
		const counterInput = document.createElement('div')
		const counterPlus = document.createElement('button')
		const counterMinus = document.createElement('button')

		counterWrapper.style.display = 'flex';

		const price = document.querySelector('.products__price')
		const priceFinal = document.createElement('span');
		price.textContent = `${price.textContent}`
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
		productsOpen.style.display = 'none'
		item.classList.remove('products__active')
	} else {
		productsClose.addEventListener('click', closeMenu)
	}
})
}

const openCalculate = () => {
	calculating.style.display = 'block';
	calculating.append(closeCalculateBtn)
	openCalculate.append(closeCalculateBtn)
}

const closeCalculate = () => {
	calculating.style.display = 'none'
}

productsAdd.addEventListener('click', addingProducts)
btnCount.addEventListener('click', openCalculate);
btnClear.addEventListener('click', clearProducts)
closeCalculateBtn.addEventListener('click', closeCalculate)
btnAdd.addEventListener('click', openProducts)
productsClose.addEventListener('click', closeMenu)


