import { BasketPage } from "./BasketPage.js";
import { BasketControls } from "./BasketControls.js";

export class Application {
	constructor(parentElement) {
		const wrapper = document.createElement('div')
		wrapper.classList.add('wrapper')	
	
		this.basketPage = new BasketPage(
			wrapper,
			'div',
			'basket__page',
			'BASKET PAGE',
		);
		this.chooseButton = new BasketControls(
		  wrapper,
			'button',
			'basket__button',
			'choose products'
		);
		this.clearButton = new BasketControls(
		  wrapper,
		  'button',
			'basket__button',
			'clear products'
		);
		this.resetButton = new BasketControls(
			wrapper,
			'button',
			'basket__button',
			'reset items'
		);
		parentElement.append(wrapper);
	}
}  
