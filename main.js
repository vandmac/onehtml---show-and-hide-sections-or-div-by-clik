const section1 = document.getElementById('s1');
const section2 = document.getElementById('s2');
const section3 = document.getElementById('s3');

const allSections = document.querySelectorAll('.sec');

const nav1 = document.querySelector('#home');
const nav2 = document.querySelector('#feature');
const nav3 = document.querySelector('#pricing');
const nav4 = document.querySelector('#show-all');

function hide(elements) {
  elements = elements.length ? elements : [elements];
  for (let index = 0; index < elements.length; index++) {
    elements[index].style.display = 'none';
  }
}

function show(elements) {
  elements = elements.length ? elements : [elements];
  for (let index = 0; index < elements.length; index++) {
    elements[index].style.display = '';
  }
}

nav1.addEventListener('click', function () {
  hide(allSections);
  section1.style.display = '';
});

nav2.addEventListener('click', function () {
  hide(allSections);
  section2.style.display = '';
});

nav3.addEventListener('click', function () {
  hide(allSections);
  section3.style.display = '';
});

nav4.addEventListener('click', function () {
  show(allSections);
});
