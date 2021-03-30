//local and session storage
 /*
localStorage.setItem('name', 'Eric');
localStorage.setItem('age', '35');

sessionStorage.setItem('city', 'Tiflis');

console.log(localStorage.getItem('name'));
console.log(localStorage.getItem('age'));

localStorage.removeItem('name');

localStorage.clear();
*/
const ulList = document.querySelector('.list');
const nameArray = JSON.parse(localStorage.getItem('nameList'));

if (nameArray != null) {
    nameArray.forEach(function (name) {
        const newList = document.createElement('li');
        newList.textContent = name;
        ulList.appendChild(newList);
    });
}



document.querySelector('#form').addEventListener('submit', function (e) {
    const newName = document.querySelector('.name').value;
    let nameArray;

    if (localStorage.getItem('nameList') === null) {
        nameArray = [];
    } else {
        nameArray = JSON.parse(localStorage.getItem('nameList'))
    }

    nameArray.push(newName);

    localStorage.setItem('nameList', JSON.stringify(nameArray));
    const newList = document.createElement('li');
    newList.textContent = newName;
    ulList.appendChild(newList);

    e.preventDefault();
})