import { mount as productsMount } from 'products/ProductsIndex';
import 'cart/CartShow';

console.log("MFE container");
productsMount(document.querySelector("#dev-products"));