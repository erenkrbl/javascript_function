// create element

const newListElement = document.createElement('li');
newListElement.className = 'liste-item';
newListElement.textContent = 'Yalova';
newListElement.id = 'new-id';
newListElement.setAttribute('value', 'newValue');

// added element

document.querySelector('ul').appendChild(newListElement);
console.log(newListElement);

// replace

const newSmallHead = document.createElement('h6');
newSmallHead.id = 'h6Id';
newSmallHead.textContent = 'New Head';

const oldHead = document.querySelector('h2');
const headParent = document.querySelector('body');

headParent.replaceChild(newSmallHead, oldHead);

// remove

const listItem = document.querySelector('li');
listItem.remove();
// document.querySelector('ul').remove();

document.querySelector('ul').removeChild(document.querySelectorAll('li')[3]);

//document.querySelector('form').removeChild(document.querySelector('input'));

const textSection =  document.querySelector('input');
document.querySelector('form').removeChild(textSection);

console.log(listItem);