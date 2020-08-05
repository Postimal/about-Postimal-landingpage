import { debounce } from './utils';

const navItems = [...document.querySelectorAll('.nav-link')];
const subnavItems = [...document.querySelectorAll('.subnav-content')];
const naviContainer = document.querySelector('[header-container]');

const addClass = (item, className) => item.classList.add(className);

const removeClass = (item, className) => item.classList.remove(className);

function disableScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  window.onscroll = function() {
    window.scrollTo(0, scrollTop);
  };
}

function enableScroll() {
  window.onscroll = function() {};
}

const triggerSubnav = item => {
  if (item.classList.contains('active')) {
    removeClass(item, 'active');
    document.body.classList.remove('menu-active');
    enableScroll();
  } else {
    subnavItems.forEach(el => removeClass(el, 'active'));
    addClass(item, 'active');
    document.body.classList.add('menu-active');
    disableScroll();
  }
};

const targetElement = e => {
  const { menuTarget } = e.target.dataset;
  const hoveredSubnav = subnavItems.find(el => el.dataset.menu === menuTarget);
  return hoveredSubnav;
};

const showSubnav = e => {
  const targetEl = targetElement(e);
  triggerSubnav(targetEl);
};

let lastTopPosition = 0;

const toggleNaviOnScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (lastTopPosition < scrollTop) {
    naviContainer.style.top = '-100px';
    document.body.classList.remove('menu-visible');
  } else {
    naviContainer.style.top = '-0';
    document.body.classList.add('menu-visible');
  }
  lastTopPosition = scrollTop;
};

window.addEventListener('scroll', debounce(toggleNaviOnScroll, 20));
navItems.forEach(el => el.addEventListener('click', showSubnav));
