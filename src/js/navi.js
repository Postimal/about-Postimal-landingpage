const navItems = [...document.querySelectorAll('.nav-link')];
const subnavItems = [...document.querySelectorAll('.subnav-content')];
let timer;

function addClass(item,className) {
  item.classList.add(className)
}

function removeClass(item,className) {
  item.classList.remove(className)
}

function triggerSubnav(item) {
  if ( item.classList.contains('active')) {
    removeClass(item,'active');
    document.body.classList.remove('menu-active');
  } else { 
    subnavItems.forEach(el => removeClass(el,'active'));
    addClass(item,'active');
    document.body.classList.add('menu-active');
  }
}

// function triggerShowSubnav(item) {
//     subnavItems.forEach(el => removeClass(el,'active'));
//     timer = setTimeout(
//       () => {
//       addClass(item,'active');
//       document.body.classList.add('menu-active');
//       },350
//     ) 
// }

// function triggerHideSubnav(item) {
//     clearTimeout(timer);
//     subnavItems.forEach(el => removeClass(el,'active'))
//     document.body.classList.remove('menu-active');
// }

function targetElement(e){
  const menuTarget = e.target.dataset.menuTarget;
  const hoveredSubnav = subnavItems.find(el => el.dataset.menu === menuTarget);
  return hoveredSubnav;
}

function showSubnav(e) {            // fn do clicka
  const targetEl = targetElement(e)
  triggerSubnav(targetEl);
 }

// function showSubnav(e) {            // fn do mouseenter
//  const targetEl = targetElement(e)
//  triggerShowSubnav(targetEl);
// }

// function hideSubnav(e) {          // fn fd mouseleave
//   const targetEl = targetElement(e)
//   triggerHideSubnav(targetEl);
//  }

 navItems.forEach(el => el.addEventListener('click', showSubnav))

// navItems.forEach(el => el.addEventListener('mouseenter', showSubnav))
// navItems.forEach(el => el.addEventListener('mouseleave', hideSubnav))