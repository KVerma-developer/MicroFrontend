import faker from 'faker';


let products = '';

for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div><ul>
    <li>${name}</li></ul></div>`;
  }
  console.log(products);

  document.querySelector('#dev-products').innerHTML=products;
  
