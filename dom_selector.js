// single dom selector

console.log(document.getElementById('head'));

console.log(document.getElementById('head').className);

const head = document.getElementById('head');

// changing style

head.style.backgroundColor = 'red';
head.style.color = "white";
head.style.padding = "2rem";

// changing content

head.textContent = 'This is a new head';

const test = head.textContent;
console.log(test);

head.innerText = 'New Head';

head.innerText = '<img src="https://source.unsplash.com/100x100" alt="">';
head.innerHTML = '<img src="https://source.unsplash.com/100x100" alt="">';