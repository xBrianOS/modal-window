'use strict';

// elements variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// function to open the modals
const openModals = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// function to close the modals
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// loop to open the modals
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModals);
}

// buttons to close the modals
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
    closeModal();
  }
});
