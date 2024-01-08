const burgerBtn = document.querySelector('.navbar__burger-btn');
const menu = document.querySelector('.menu');
const content = document.querySelector('.content');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    menu.classList.toggle('open');
    content.classList.toggle('hidden');
});