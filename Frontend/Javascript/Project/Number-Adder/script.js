let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let result = document.getElementById('result');
let addButton = document.querySelector('.add-button');

addButton.addEventListener('click', () => {
    if(number1.value === '' || number2.value === '') {
        result.textContent = 'Please enter two numbers';
    } else {
        result.textContent = parseInt(number1.value) + parseInt(number2.value);
        number1.value = '';
        number2.value = '';
    }
})