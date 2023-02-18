const wrapper = document.createElement('div')
const basket = document.createElement('div')
const buttons = document.createElement('div')
const products = document.createElement('div')
const cards = document.createElement('div')
const card = document.createElement('div')
const btnAdd = document.createElement('button')
const btnClear = document.createElement('button')
const btnReset = document.createElement('button')
const productsClose = document.createElement('button');
const productsAdd = document.createElement('button');


export { wrapper,buttons, basket, products, cards, card, productsAdd, productsClose, btnReset, btnAdd, btnClear }

btnAdd.classList.add('buttonAdd')
btnClear.classList.add('buttonClear')
btnReset.classList.add('button__reset')
buttons.classList.add('buttons')
wrapper.classList.add('wrapper')
basket.classList.add('basket')
productsAdd.classList.add('closeProducts');
productsClose.classList.add('close');
products.classList.add('products')
cards.classList.add('product__cards')
card.classList.add('card')

btnAdd.textContent = 'choose products'
btnClear.textContent = 'clear basket'
btnReset.textContent = 'reset items'
productsClose.textContent = 'close';
productsAdd.textContent = 'add';

document.body.append(wrapper)
wrapper.append(products,basket, buttons)
buttons.append(btnAdd, btnClear, btnReset)
products.append(cards, productsClose, productsAdd);
