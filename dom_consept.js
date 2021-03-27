let value;

value = window;
value = window.document;
value = document;

let array = Array.from(value);

// array.forEach(function(item) {
//     console.log(item);
// })

value = document.head;
value = document.body;

value = document.links[0].classList;

value = document.images[0].getAttribute("src");

//value = document.forms[0].id;


console.log(value);