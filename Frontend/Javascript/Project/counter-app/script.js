let count = 0;

const bttn1 = document.querySelector('.btn1');
const bttn2 = document.querySelector('.btn2');
const bttn3 = document.querySelector('.btn3');
const title = document.querySelector('.title');

bttn1.addEventListener('click', () => {
    count++;
    title.innerHTML = count > 20 ? 20 : count;
});

bttn2.addEventListener('click', () => {
    count--;
    title.innerHTML = count < 0 ? 0 : count;
});

bttn3.addEventListener('click', () => {
    count = 0;
    title.innerHTML = count < 0 ? 0 : count;
});

console.log(window.location.host);
console.log(window.screen);
console.log(window.history);
window.open('https://www.google.com', '_blank');

