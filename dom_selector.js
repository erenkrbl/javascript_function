/*
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

// query selector

console.log(document.querySelector('h2'));
console.log(document.querySelector('#list'));
console.log(document.querySelector('.liste-item'));
console.log(document.querySelector('ul li'));
console.log(document.querySelector('.link.link-google'));

const myList = document.querySelector('li');

myList.style.color = 'blue';

document.querySelector('li:last-child').style.color = 'green';
document.querySelector('li:nth-child(2)').style.color = 'orange';
document.querySelector('li:nth-child(3)').style.color = 'purple';
document.querySelector('li:nth-child(even)').style.color = 'yellow';
document.querySelector('li:nth-child(odd)').style.color = 'gray';
*/

// multiple selector

const links = document.getElementsByClassName('link');
console.log(links[0]);
console.log(links[2]);

links[0].style.color = 'red';
links[1].style.background = 'pink';
links[1].textContent = 'FACEBOOK';

console.log(document.querySelector('ul').getElementsByClassName('liste-item'));

const array = Array.from(links);

array.reverse();

array.forEach(item => {
    console.log(item);
});