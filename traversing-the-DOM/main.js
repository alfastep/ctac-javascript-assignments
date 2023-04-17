const header = document.querySelector('header');
const sections = document.getElementsByTagName('section');
const sectionCurrent = document.querySelector('.current');
const nextSection = sectionCurrent.nextElementSibling;
const h2PrevSection = sectionCurrent.previousElementSibling.children;
const h2HighlightDiv = document.querySelector('.highlight').parentElement.parentElement;
const sectionsWithH2 = document.querySelectorAll('section h2');

console.log(header);
console.log(sections);
console.log(sectionCurrent);
console.log(nextSection);
console.log(h2PrevSection);
console.log(h2HighlightDiv);
console.log(sectionsWithH2);