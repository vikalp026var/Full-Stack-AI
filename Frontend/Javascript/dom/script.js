const title = document.getElementById("title");
const innerText = title.innerText;
console.log(innerText);

const productCard = document.querySelector('#product-card');
console.log(productCard.innerHTML);

const productCardAttribute = productCard.querySelector("[product-card = '4080']");
console.log(productCardAttribute.innerHTML);