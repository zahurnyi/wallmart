import { Products } from "./products.js";
import { Control } from "./Control.js";

export class ProductsPage {
  constructor(parentElement, tagName, className = "", title = "") {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.element.textContent = title;
    parentElement.append(this.element);

    new Products(
      this.element,
      "div",
      "tomato",
      "some text or description",
      88,
      "product"
    ).addCounter();

    new Products(
      this.element,
      "div",
      "Milk",
      "some text or description",
      12,
      "product"
    ).addCounter();

    new Control(this.element, "button", "control__button", "add").addCards();
    new Control(
      this.element,
      "button",
      "control__button",
      "cancel"
    ).cancelCards();
  }
}
