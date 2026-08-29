console.log("script.js loaded");

const bttn1 = document.querySelector('.btn1');
const bttn2 = document.querySelector('.btn2');
const bttn3 = document.querySelector('.reset');
const title = document.querySelector('.title');
const background = document.querySelector('body');

console.log(bttn1, bttn2, bttn3, title);

bttn1.addEventListener('click', () => {
    let string = "#";
    for(let i = 0; i < 6; i++){
        string += Math.floor(Math.random() * 16).toString(16);
    }
    background.style.backgroundColor = string;
})

bttn2.addEventListener('click', () => {
    title.style.fontSize = '20px';
})

bttn3.addEventListener('click', () => {
    title.style.fontSize = '16px';
    background.style.backgroundColor = 'white';
})