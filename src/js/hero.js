const heroContainer = document.querySelector('[data-hero-images]');
const heroModals = [...document.querySelectorAll('[data-hero-modal]')];

const hideModals = () =>
  heroModals.forEach(modal => modal.classList.remove('is-open'));

const toggleHeroModal = ({ target }) => {
  if (target.classList.contains('hero__modal-trigger')) {
    target.nextElementSibling.classList.add('is-open');
  } else {
    hideModals();
  }
};

heroContainer.addEventListener('click', toggleHeroModal);
