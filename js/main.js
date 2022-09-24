const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__block');
const body = document.querySelector('body');

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('block');
})

