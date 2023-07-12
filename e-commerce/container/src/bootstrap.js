// import 'productsApp/ProductsIndex' ///this productsApp in webpack.config.js
import { mount } from '../../products/src/bootstrap'
import 'cartApp/CartShow'
//here products , cartApp files loaded up asynchronously in container

console.log('container project')
mount(document.querySelector('#my-products'));