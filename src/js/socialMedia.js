import { setIntersection } from './utils';

const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const hookPoint = document.querySelector('.top');
const githubList = document.querySelector('.github');
const socialMediaBox = document.querySelector('ul.cool');

setIntersection(socialMediaBox);


class Repo {
  constructor(name, length, data) {
    this.name = name;
    this.length = length;
    this.data = data;
  }
}

const fetchData = async ({ target }) => {
  const repoName = target.dataset.name;
  const res = await fetch(
    `https://api.github.com/repos/Postimal/${repoName}/commits`
  );
  const data = await res.json();

  const repoInfo = new Repo(target.dataset.name, data.length);
  repoInfo.data = data[0].commit.author.date.toLocaleString().slice(0, 10);

  const output = `<span class="text-secondary fetch-data">
                  ${repoInfo.length ? repoInfo.length : 'limit zapytań'}
                  </span>
                  commits
                  <span class="text-secondary">${repoInfo.data}</span> latest`;

  target.lastElementChild.innerHTML = output;
};

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(
    () =>
      this.classList.contains('trigger-enter') &&
      this.classList.add('trigger-enter-active'),
    150
  );
  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = hookPoint.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty(
    'transform',
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

triggers.forEach(trigger =>
  trigger.addEventListener('mouseenter', handleEnter)
);
triggers.forEach(trigger =>
  trigger.addEventListener('mouseleave', handleLeave)
);

githubList.addEventListener(
  'mouseover',
  e => e.target.classList.contains('github-list-item') && fetchData(e)
);
