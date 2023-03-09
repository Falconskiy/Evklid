const swiper = new Swiper('.swiper-container', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  a11y: {
    paginationBulletMessage: 'Слайд номер {{index}}',
  }
});

let tabsBtn = document.querySelectorAll('.steps__button');
let tabsItem = document.querySelectorAll('.steps__item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('steps__btn--active') });
    e.currentTarget.classList.add('steps__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('steps__item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('steps__item--active');
  });
});

new Accordion('.accordion-list', {
  elementClass: 'accordion-item',
  triggerClass: 'accordion-control',
  panelClass: 'accordion-content',
  activeClass: 'accordion--active'
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__item');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');

  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')
  })
});

let open = document.querySelector('.header__link');
let search = document.querySelector('.header__search');
let close = document.querySelector('.header__search-close');

open.addEventListener('click',

  function () {

    search.classList.toggle('header__search--active');

    open.classList.toggle('header__link--active');

});

  close.addEventListener('click',

  function () {

    search.classList.remove('header__search--active');

    open.classList.remove('header__link--active');

  })
