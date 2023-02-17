// import { createCounter } from "./createCounter.js";
export const createClone = () => {
	const basket = document.querySelector('.basket');
	const card = document.querySelectorAll('.card');
	card.forEach(item => {
		if (item.classList.contains('card__active')) {
			const clone = item.cloneNode(true);
			clone.style.width = "100%";	
			basket.append(clone);
		}
	})
}