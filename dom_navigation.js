let value;

const myList = document.querySelector('ul.list');

console.log(myList);


value = myList.childNodes;
value = myList.childNodes[8].nodeType;

value = myList.firstChild;
value = myList.firstElementChild;

value = myList.lastChild;
value = myList.lastElementChild;

value = myList.childElementCount;

// parent element

value = myList.parentNode;
value = myList.parentElement.parentElement;

const myInput = document.querySelector('input');
console.log(myInput.parentElement);

// neighbor element

value = document.querySelector('li').nextElementSibling.nextElementSibling.previousElementSibling;



console.log(value);