export class Buttons {
	constructor(parentElement, tagName, textContent, className) {
		const element = document.querySelector(parentElement);
		const button = document.createElement(tagName);
		button.onclick = () => onClick();
		button.textContent = textContent;
		button.className = className;
		element.append(button);

		// const button = document.createElement(tagName)
		// button.classList.add(className)
		// button.textContent = textContent;
		// button.className = className;
		// document.body.append(button)
	}

	openProducts() {
		console.log('hello');
	}
}
