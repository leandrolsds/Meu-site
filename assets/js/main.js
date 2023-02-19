'use strict'
//=========================menu mobile=============================

const btnHamburguer = document.getElementById("btn__hamburguer");
function hamburguer(event) {
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById("menu");
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}
btnHamburguer.addEventListener('click', hamburguer);
btnHamburguer.addEventListener('touchstart', hamburguer);

//==================animação dos links ativos====================

const li = document.querySelectorAll(".menu__link");
const sec = document.querySelectorAll("section");

function activeMenu() {
    let len = sec.length;
    while(--len && window.scrollY - 200 < sec[len].offsetTop){
        li.forEach(ltx => ltx.classList.remove("active"));
        li[len].classList.add("active");
    }
}
activeMenu();
window.addEventListener("scroll", activeMenu);


//==================animação do site=========================

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)
        }
        else {
            element.classList.remove(animationClass)
        }
    })
}

animeScroll();
if(target.length) {
    window.addEventListener('scroll', debounce(function() {
        animeScroll();
    }, 200));
}