const heroImagesContainer = document.querySelector('[data-hero-images]');
const heroModals = [...document.querySelectorAll('[data-hero-modal]')];
const backgroundLayer = document.querySelector('[data-change-bg');
const heroHeaderText = document.querySelector('[data-hero-header');
const heroContainer = document.querySelector('[data-hero-container');

const hideModals = () =>
  heroModals.forEach(modal => modal.classList.remove('is-open'));

const toggleHeroModal = ({ target }) => {
  if (target.classList.contains('hero__modal-trigger')) {
    target.nextElementSibling.classList.add('is-open');
  } else {
    hideModals();
  }
};

const observerFn = entries => {
  let heroContainerEntry = entries[0];
  heroContainerEntry.isIntersecting
    ? window.addEventListener('scroll', changeBackground)
    : window.removeEventListener('scroll', changeBackground);
};

let observer = new IntersectionObserver(observerFn);
observer.observe(heroContainer);

const changeBackground = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const {height: containerHeight} = heroContainer.getBoundingClientRect();
  const opacityPromile = containerHeight / 1000000;
  const finalOpacity = (scrollTop/1.4) * opacityPromile;
  backgroundLayer.style.opacity = 1 - finalOpacity;
  finalOpacity < 0.4
    ? (heroHeaderText.style.color = '#fff')
    : (heroHeaderText.style.color = '#000');
};

heroImagesContainer.addEventListener('click', toggleHeroModal);
