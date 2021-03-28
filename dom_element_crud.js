// create element

const newListElement = document.createElement('li');
newListElement.className = 'liste-item';
newListElement.textContent = 'Yalova';
newListElement.id = 'new-id';
newListElement.setAttribute('value', 'newValue');

// added element

document.querySelector('ul').appendChild(newListElement);
console.log(newListElement);