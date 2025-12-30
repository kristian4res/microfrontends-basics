import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartShowMount } from 'cart/CartShow';

console.log("MFE container");
productsMount(document.querySelector("#dev-products"));
cartShowMount(document.querySelector("#dev-cart"));