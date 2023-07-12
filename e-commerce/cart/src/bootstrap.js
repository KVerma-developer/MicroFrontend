import faker from 'faker'
const cartText=`<div>You have ${faker.random.number()} item in your cart</div>`
document.querySelector('#cart-dev').innerHTML= cartText;