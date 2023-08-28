export class Products {
  constructor(parentElement, tagName, title, description, price, className) {
    this.transfer = 40;
    this.price = price;
    this.product = document.createElement(tagName);
    this.product.className = className;
    this.product.innerHTML = `
		<div>
			<h3 class="product__title">${title}</h3>
			<p class="product__text">${description}</p>
			<span class="product__price">${this.price} UAH</span>
		</div>
	`;
    parentElement.append(this.product);
  }

  addCounter() {
    const counterWrapper = document.createElement("div");
    const counterInput = document.createElement("div");
    const counterPlus = document.createElement("button");
    const counterMinus = document.createElement("button");
    const counterReset = document.createElement("button");
    const priceFinal = document.createElement("span");

    counterPlus.classList.add("counter__plus");
    counterMinus.classList.add("counter__minus");
    counterReset.classList.add("counter__reset");
    priceFinal.classList.add("price__final");
    counterInput.classList.add("counter__input");

    priceFinal.textContent = `${this.price} UAH`;

    counterInput.textContent = 1;
    counterMinus.textContent = "-";
    counterPlus.textContent = "+";
    counterReset.textContent = "reset";

    counterWrapper.append(
      counterPlus,
      counterInput,
      counterMinus,
      counterReset,
      priceFinal
    );
    counterWrapper.style.display = "flex";
    this.product.append(counterWrapper);

    let counter = 1;
    const updatePrice = (action, price = this.price) => {
      if (action === "plus") {
        counter += 1;
        this.product.classList.add("product__active");
      } else if (action === "reset") {
        counter = 1;
      } else if (action === "remove") {
        clone.remove();
      } else {
        if (counter > 0) counter -= 1;
      }
      counterInput.textContent = Number(counter);
      priceFinal.textContent = `${counter * price} UAH`;
    };

    counterPlus.onclick = (event) => {
      updatePrice("plus");
      // this.product.classList.add("product__active");
    };
    counterMinus.onclick = (event) => {
      event.stopPropagation();
      updatePrice("minus");
    };
    counterReset.onclick = (event) => {
      updatePrice("reset");
    };
  }
}

// export let products= [
// 	new Products(
// 	document.body,
// 	'div',
// 	'Milk',
// 	'some text or description',
// 	12,
// 	'product',
// 	).addCounter(),

// ]
