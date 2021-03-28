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



console.log(value);