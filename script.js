const openBtn = document.getElementById('open');
const modal = document.querySelector('.modal');
const openModal = () => {
  modal.classList.remove('hidden');
}
openBtn.addEventListener('click', openModal);

const closeBtn = document.querySelector('#close')
const bg = document.querySelector('.modal__overlay')
const closeModal = () => {
  modal.classList.add('hidden')
}
closeBtn.addEventListener('click', closeModal)
bg.addEventListener('click', closeModal)


