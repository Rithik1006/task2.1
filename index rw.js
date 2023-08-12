const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.nav-list');
const rightNav = document.querySelector('.rightNav');

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-cls-resp');
    navList.classList.toggle('v-cls-resp');
    navbar.classList.toggle('h-nav-resp');
})