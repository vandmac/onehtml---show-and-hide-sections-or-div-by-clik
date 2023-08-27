const navSectionIds = ['s1', 's2', 's3']; // Adjust the IDs as needed
const navTableIds = ['home', 'feature', 'pricing', 'show-all']; // Adjust the IDs as needed

const allSections = document.querySelectorAll('.sec');
const navSections = navSectionIds.map(id => document.getElementById(id));
const navTable = navTableIds.map(id => document.querySelector(`#${id}`));

function hide(elements) {
  elements.forEach(element => {
    element.style.display = 'none';
  });
}

function show(element) {
  element.style.display = '';
}

navTable.forEach((navLink, index) => {
  navLink.addEventListener('click', () => {
    hide(allSections);
    show(navSections[index]);
  });
});

// const navSection = [
//   document.getElementById('s1'),
//   document.getElementById('s2'),
//   document.getElementById('s3'),
// ];

// const allSections = document.querySelectorAll('.sec');

// const navTable = [
//   document.querySelector('#home'),
//   document.querySelector('#feature'),
//   document.querySelector('#pricing'),
//   document.querySelector('#show-all'),
// ];

// function hide(elements) {
//   elements = elements.length ? elements : [elements];
//   for (let index = 0; index < elements.length; index++) {
//     elements[index].style.display = 'none';
//   }
// }

// function show(elements) {
//   elements = elements.length ? elements : [elements];
//   for (let index = 0; index < elements.length; index++) {
//     elements[index].style.display = '';
//   }
// }

// for (let elementIndex = 0; elementIndex < navTable.length; elementIndex++) {
//   navTable[elementIndex].addEventListener('click', function () {
//     hide(allSections);
//     show(navSection[elementIndex]);
//   });
// }