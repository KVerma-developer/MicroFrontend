// import 'productsApp/ProductsIndex' ///this productsApp in webpack.config.js
import { mount as productMount} from '../../products/src/bootstrap'
// import 'cartApp/CartShow'
import { mount as cartMount} from '../../cart/src/bootstrap';
//here products , cartApp files loaded up asynchronously in container

console.log('container project')
productMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'))