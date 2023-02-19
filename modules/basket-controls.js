export class BasketPageControls {
  constructor(parentElement, tagName, className) {
    this.button = document.createElement(tagName);
    this.button.className = className;
    parentElement.append(this.button);
  }

  setButton(textContent) {
    this.button.textContent = textContent;
  }
}

const chooseButton = new BasketPageControls(
  document.body,
  'button',
  'basket__button',
);

chooseButton.setButton('choose products');

const clearButton = new BasketPageControls(
  document.body,
  'button',
  'basket__button',
);

clearButton.setButton('clear products');

const resetButton = new BasketPageControls(
  document.body,
  'button',
  'basket__button',
);

resetButton.setButton('reset items');
