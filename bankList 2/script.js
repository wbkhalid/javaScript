'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Scroll btn

btnScrollTo.addEventListener('click', function (e) {
  //new method
  section1.scrollIntoView({ behavior: 'smooth' });
});

//page navigation(event delegation)
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//tabbed components

const tabs= document.querySelectorAll('.operations__tab');
const tabsContainer= document.querySelector('.operations__tab-container');
const tabsContent= document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab')
  if (!clicked) return;
 

  //Remove active classes
  tabs.forEach(t=>t.classList.remove('operations__tab--active'))
  tabsContent.forEach(tc=>tc.classList.remove('operations__content--active'))

  //add active classes
  clicked.classList.add('operations__tab--active');
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')

  console.log(clicked)
})


// #########################################

// btnScrollTo.addEventListener('click', function (e) {
// const s1coords = section1.getBoundingClientRect();
// console.log(e.target.getBoundingClientRect())

//old way 1
// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset
// );

//old way 2
// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior:'smooth'
// });
// });
