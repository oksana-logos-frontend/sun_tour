'use strict';

//star raiting
const stars = document.querySelectorAll('.top-block__stars img');

stars.forEach((star, index1) => {
  star.addEventListener('click', () => {
    stars.forEach((star, index2) => {
      if(index1 >= index2) {
        star.src = './images/Star.svg';
      } else {
        star.src = './images/empty-star.svg';
      }
    });
  });
});

//Accordion
const accordionBlock = document.querySelector('.sale__bottom-block');

accordionBlock.addEventListener('click', () => {
  if(accordionBlock.style.height == '47' + 'px' ) {
    accordionBlock.style.height = '125' + 'px';
  } else {
    accordionBlock.style.height = '47' + 'px' 
  }
});

//Modal

const modalTrigger = document.querySelector('.sale__button');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('[data-close]');

const modalTimerId = setTimeout(openModal, 3000);

function openModal() {
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  clearInterval(modalTimerId);
}

function closeModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
 
}

modalTrigger.addEventListener('click', openModal);

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if(e.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if(e.code === 'Escape' && modal.classList.contains('show')) {
    closeModal();
  }
});
