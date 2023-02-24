import { Control } from './Control.js';
import { ControlPanel } from './ControlPanel.js';

export class BasketPage extends Control {
	constructor(parentElement, tagName, title, className) {
		super(parentElement, tagName, title, className)
		// this.productsPage = document.createElement(tagName);

		// const page = new Control(
		// 	document.body,
		// 	'div',
		// 	'products__page',
		// 	'PRODUCTS PAGE',
		// );

	
	}
}

const addControlButton = new ControlPanel(
	document.body,
	'button',
	'control__button',
	'add',
);

const closeControlButton = new ControlPanel(
	document.body,
	'button',
	'control__button',
	'close',
);