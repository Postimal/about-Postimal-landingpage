export const debounce = (func, wait, immediate) => {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export const add = (a, b) => a + b;

export const setIntersection = (element) =>{
  const observerFn = entries => {
    let elementEntry = entries[0];
    elementEntry.isIntersecting
      ? element.classList.add('is-in-view')
      : element.classList.remove('is-in-view');
  };

  let observer = new IntersectionObserver(observerFn);
  observer.observe(element);
}
