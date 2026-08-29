const container = document.querySelectorAll('.container');
console.log(container);

// Extract and log names of all products 
const productNames = document.querySelectorAll('.product-name');
// console.log(productNames
productNames.forEach(name => {
    console.log(name.innerText);
});

// 
const laptop = document.querySelector('[data-category="laptop"]');
console.log(laptop.innerText);