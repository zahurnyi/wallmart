export class Buttons  {
	constructor(parentElement, tagName, textContent, className) {
		// const element = document.querySelector(parentElement);
		this.button = document.createElement(tagName);
		this.button.onclick = () => onclick;
		
		this.button.textContent = textContent;
		this.button.className = className;
		parentElement.append(this.button);
	}

	openProducts() {
		this.button.onclick = () => {
			document.querySelector('.products').style.display = 'block'
		}
	}
	closeProducts() {
		this.button.onclick = () => {
			document.querySelectorAll('.card').forEach(card => {
				card.classList.remove('card__active')
			})
			document.querySelector('.products').style.display = 'none'
		}
	}
	addProducts() {
		this.button.onclick = () => {
			const basket = document.querySelector('.basket');
			const card = document.querySelectorAll('.card')
			card.forEach(item => {
			if (item.classList.contains('card__active')) {
				const clone = item.cloneNode(true);
				clone.style.width = "100%";	
				basket.append(clone);
				document.querySelector('.products').style.display = 'none'
				}	
			})
		}
	}
	clearProducts() {
		this.button.onclick = () => {
			document.querySelector('.basket').textContent = ''
		}
	}
}

// new Buttons(
// 	document.body,
// 	'button',
// 	'choose products',
// 	'open__products',
// ).openProducts()

// new Buttons(
// 	document.body,
// 	'button',
// 	'clear products',
// 	'clear__products',
// ).clearProducts()

// new Buttons(
// 	document.querySelector('.products'),
// 	'button',
// 	'close',
// 	'close__products',
// ).closeProducts()

// new Buttons(
// 	document.querySelector('.products'),
// 	'button',
// 	'add',
// 	'add__products',
// ).addProducts()