const btnAdd = document.querySelector('.buttonAdd')

const productsOpen = document.querySelector('.products')
const openProducts = () => {
	productsOpen.style.display = 'block'
}

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
			document.querySelector('.basket').append(item)
			productsOpen.style.display = 'none'
		} else {
			productsClose.addEventListener('click', closeMenu)
		}
	})
})




const btnCount = document.querySelector('.buttonCount')
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

