// import { BasketPage } from "./BasketPage.js";
import { ProductsPage } from "./ProductsPage.js";

export class Control {
  constructor(parentElement, tagName = "div", className = "", title = "") {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.element.textContent = title;
    parentElement.append(this.element);
  }

  openPage() {
    this.element.onclick = () => {
			document.body.querySelector('.wrapper').style.display = 'none';
			new ProductsPage(document.body, "div", "products__page", "Products Page");
			
    };
  }
  clearProducts() {
    this.element.onclick = () => {
      console.log("222");
    };
  }
  resetProducts() {
    this.element.onclick = () => {
      console.log("333");
    };
  }

  addCards() {
		this.element.onclick = () => {
			document.body.querySelector(".wrapper").style.display = "block";
			document.body.querySelector(".products__page").style.display = "none";
    };
  }
  cancelCards() {
    this.element.onclick = () => {
      console.log("cancel cards");
    };
  }
}
