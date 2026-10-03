import { faker } from "@faker-js/faker";

let cartText = `<div>you have ${faker.number.int({ min: 1, max: 100 })} items in your cart</div>`;
 
document.querySelector("#dev-cart").innerHTML = cartText;
 