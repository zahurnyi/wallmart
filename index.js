// const btnAdd = document.querySelector('.buttonAdd')
const btnAdd = document.createElement('button')
const btnCount = document.createElement('button')
const btnClear = document.createElement('button')
const buttons = document.createElement('div')
const wrapper = document.querySelector('.wrapper')
const basket = document.querySelector('.basket')

document.querySelector('body').append(wrapper)

wrapper.append(buttons)
buttons.append(btnAdd, btnCount, btnClear)

btnAdd.classList.add('buttonAdd')
btnCount.classList.add('buttonCount')
btnClear.classList.add('buttonClear')
buttons.classList.add('buttons')
wrapper.classList.add('.wrapper')

btnAdd.textContent = 'choose products'
btnCount.textContent = 'change counting'
btnClear.textContent = 'clear basket'


const productsOpen = document.querySelector('.products')

const openProducts = () => {
	productsOpen.style.display = 'block'
}

const clearProducts = () => {
	basket.textContent = ''
}

btnClear.addEventListener('click', clearProducts)
btnAdd.addEventListener('click', openProducts)

const productsClose = document.createElement('button');
const productsAdd = document.createElement('button');

productsClose.textContent = 'close';
productsAdd.textContent = 'add';

productsAdd.classList.add('closeProducts');
productsClose.classList.add('close');

productsOpen.append(productsClose, productsAdd);

const closeMenu = () => {
	productsOpen.style.display = 'none'
	items.forEach(item => {
		item.classList.remove('products__active')
	})
}

productsClose.addEventListener('click', closeMenu)

productsAdd.addEventListener('click', () => {
	items.forEach(item => {
		if (item.classList.contains('products__active')) {
			const basket = document.querySelector('.basket')
			const clone = item.cloneNode(true)
			basket.append(clone)
			productsOpen.style.display = 'none'
			item.classList.remove('products__active')
		} else {
			productsClose.addEventListener('click', closeMenu)
		}
	})
})

// const btnCount = document.querySelector('.buttonCount')
const calculating = document.querySelector('.calculate')
console.log(btnCount);

const openCalculate = () => {
	calculating.style.display = 'block';
}
btnCount.addEventListener('click', openCalculate);

const calculateClose = document.createElement('button');
calculateClose.textContent = 'close'
calculateClose.classList.add('close')
calculating.append(calculateClose)

const closeCalculate = () => {
	calculating.style.display = 'none'
}
calculateClose.addEventListener('click', closeCalculate)

const items = document.querySelectorAll('.products__item');
console.log(items);

items.forEach(item => {
	const itemAdd = () => {
		item.classList.toggle('products__active')
	}
	item.addEventListener('click', itemAdd)
})

