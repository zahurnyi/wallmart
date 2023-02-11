const wrapper = document.createElement('div')
const basket = document.createElement('div')
const buttons = document.createElement('div')
const calculating = document.createElement('div');
const products = document.createElement('div')
const cards = document.createElement('div')
const card = document.createElement('div')
const btnAdd = document.createElement('button')
const btnCount = document.createElement('button')
const btnClear = document.createElement('button')
const btnReset = document.createElement('button')
const productsClose = document.createElement('button');
const productsAdd = document.createElement('button');
const closeCalculateBtn = document.createElement('button')


export { wrapper,buttons, basket, calculating, products, cards, card, productsAdd, productsClose, closeCalculateBtn, btnReset, btnAdd, btnCount, btnClear }

btnAdd.classList.add('buttonAdd')
btnCount.classList.add('buttonCount')
btnClear.classList.add('buttonClear')
btnReset.classList.add('button__reset')
buttons.classList.add('buttons')
wrapper.classList.add('wrapper')
basket.classList.add('basket')
calculating.classList.add('calculate');
productsAdd.classList.add('closeProducts');
productsClose.classList.add('close');
products.classList.add('products')
cards.classList.add('product__cards')
card.classList.add('card')

btnAdd.textContent = 'choose products'
btnCount.textContent = 'change counting'
btnClear.textContent = 'clear basket'
btnReset.textContent = 'reset items'
productsClose.textContent = 'close';
productsAdd.textContent = 'add';
closeCalculateBtn.textContent = 'close'

document.body.append(wrapper)
wrapper.append(products,basket, buttons, calculating)
buttons.append(btnAdd, btnCount, btnClear, btnReset)
products.append(cards, productsClose, productsAdd);
// cards.append(card)
