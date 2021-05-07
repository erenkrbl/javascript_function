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

const element = document.querySelector('#my_element');
element.innerText = 'Hello Saying';
element.innerHTML = '<p>How are you</p>'

console.log(element);




