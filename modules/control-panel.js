import { BasketPageControls } from "./basket-controls.js";

export class ControlPanel extends BasketPageControls {
	constructor(parentElement, tagName, className) {
		super(parentElement, tagName, className)
	}
}

const addControlButton = new ControlPanel(
	document.body,
	'button',
	'control__button',
);
addControlButton.setButton('add')

const closeControlButton = new ControlPanel(
	document.body,
	'button',
	'control__button', 
	)

closeControlButton.setButton('close')