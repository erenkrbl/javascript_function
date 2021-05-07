/*
document.getElementById("submit_btn").addEventListener('click', submitUser);
document.getElementById("list_btn").addEventListener('click', listUser);



class User {
    constructor(userName, userSurname, userAge){
        this.name = userName;
        this.surname = userSurname;
        this.age = userAge;
    }
    login() {
        console.log(this.name, this.surname)
    }
}
const userList = [];

function submitUser(){
    const name = document.getElementById('name_inp').value;
    const surname = document.getElementById('surname_inp').value;
    const age = document.getElementById('age_inp').value;

    const user = new User(name, surname, age)
    //console.log(user)
    userList.push(user)
}

function listUser(){
    console.log(userList)
    userList[1].login();
}
*/
// DOM
//documnet.getElement ...

//ID
// const element = document.getElementById('user_name');
// console.log(element);

//CLASS

//const elements = document.getElementsByClassName('user_tag');
//console.log(elements);

// TAG
// const elements = document.getElementsByTagName('p');
// console.log(elements);

// document.querySelector

//ID

// const element = document.querySelector('#user_name');
// console.log(element);

// CLASS

// const elements = document.querySelectorAll('.user_tag');
// console.log(elements);

// TAG

// const elements = document.querySelectorAll('p');
// console.log(elements);

// const list = document.querySelector('#city_list');


// const elements_1 = document.getElementsByClassName('city');
// const elements_2 = document.querySelectorAll('.city');

// console.log(elements_1);
// console.log(elements_2);

// list.innerHTML += '<li class="city">Bursa</li>';

// console.log(elements_1);
// console.log(elements_2);

//===================================

// const element = document.querySelector('#my_element');
// element.innerText = 'Hello Saying';
// element.innerHTML = '<p>How are you</p>'

// console.log(element);

//examples


// car_list = [
//     {id: 0, brandName : 'Mercedes'},
//     {id: 0, brandName : 'Tesla'},
//     {id: 0, brandName : 'BMW'},
//     {id: 0, brandName : 'Porche'}
// ]

// const listElement = document.querySelector('#cars');

// car_list.forEach((car) => {
//     //console.log(car)
//     listElement.innerHTML += `<li class="car_class">${car.brandName}</li>`;
// });
// //==============

// for(let i = 0; i < car_list.length; i++) {
//     listElement.innerHTML += `<li class="car_class">${car_list[i].brandName}</li>`;
// }

// GET AND SET ATTRİBUTE

// const element = document.querySelector('#link');
// console.log(element);
// const attr = element.getAttribute('href');
// console.log(attr);

// element.setAttribute('href', 'http://www.clarusway.com')
// element.innerText = "Go to Clarusway";
// console.log(element);

// const elements = document.querySelectorAll("li");
// //console.log(elements);

// elements.forEach((word )=>{
//     if(word.innerText.includes("error")){
//         word.setAttribute("class", "error");
//     } else if(word.innerText.includes("success")) {
//         word.setAttribute("class", "success");
//     }
// });

// const element = document.querySelector(".hello");
// element.style.color = 'red';
// element.style.fontSize = "100px";

// const element = document.querySelector('#my_banner');
// console.log(element.classList);
// element.classList.add("active")
// console.log(element.classList);

// const element = document.querySelector('#today');
// console.log(element);

// const myElement = document.createElement('p');
// myElement.innerText = "Thursday";

// element.appendChild(myElement);

// console.log(element);

//event

const element = document.querySelector("#btn").addEventListener('click', clickFunction);

const element_1 = document.querySelector("#para").addEventListener("mouseenter", function(){
    alert('What happened')
})

function clickFunction(){
    alert("I am alert!!1")
}




