// person constructor function
/*
function Person(fName, LName) {
    this.fName = fName;
    this.LName = LName;
}

Person.prototype.sayHello = function() {
    return `Hello I'm ${this.fName} ${this.LName}`;
}


function Student(fName, LName, age, room) {
    Person.call(this, fName, LName);
    this.age = age;
    this.room = room;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayHello  = function() { 
    return `Hello I'm ${this.room}. room student ${this.fName} ${this.LName}`;
}

Student.prototype.sayAge  = function() { 
    return `I'm ${this.age} years old`;
}


const henry = new Person('Henry', 'Forester');
const oliver = new Person('Oliver', 'Khan');

console.log(henry.sayHello());
console.log(oliver.sayHello());

const kamala = new Student('Kamala', 'Sue', 17, 9);
console.log(kamala.sayHello());
console.log(kamala.sayAge());
*/
/*
function MyArray () {

}

MyArray.prototype = Object.create(Array.prototype);

const myArray = new MyArray();

myArray.push(1, 2, 34, 'aron');


console.log(myArray);

*/
/*
Array.prototype.mySelfMap = function (operation) {
    const newArray = [];
    for (i = 0; i < this.length; i++) {
        newArray.push(operation(this[i], i));
    }
    return newArray;
}

const myArray = [1, 3, 6];
const newArray = myArray.map(function(number) {
    return number + 2;
});

const myNewArray = myArray.mySelfMap(function(number) {
    return number + 2;
})

console.log(newArray);
console.log(myNewArray);
*/
/*
const user = {
    userName: '',
    userPass: '',
    age:0,
    changeNickName(nick) {
        console.log("Setting nickname: " + nick)
    }
}

console.log(user.userName);
console.log(user["userSurname"]);
user.changeNickName("Eric");


const userArray = [];

const myUser_1 = user;
myUser_1.userName = "Ayşe";
myUser_1.userPass = "123",
myUser_1.age = 19;

console.log(myUser_1);

const myUser_2 = user;
myUser_2.userName = "Fatma";
myUser_2.userPass = "345",
myUser_2.age = 29;

console.log(myUser_2);

userArray.push(myUser_1);
userArray.push(myUser_2);

console.log(userArray); //Array of object
*/


// Classes

// const user = {
//     userName: '',
//     userPass: '',
//     age:0,
//     login(){
//         console.log(this.userName + " logged in")
//     },
//     changeNickName(nick) {
//         console.log("Setting nickname: " + nick)
//     }
// }
/*
class User {
    constructor(name, password, age){
        this.userName = name,
        this.userPassword = password,
        this.userAge = age
    }
}

const myUser_1 = new User("Albert", "EMC2", 25);
const myUser_2 = new User("Thomas", "XCY4", 35);

console.log(myUser_1);
console.log(myUser_2);
*/

// turn into object

class User {
    constructor(param){
        console.log(param)
        this.userName = param.name,
        this.userPassword = param.password,
        this.userAge = param.age,
        this.userCity = param.city
    }
    login(){
        console.log(this.userName + " logged in!")
    }
}

const myUser_1 = new User(
    {   
        name: "Albert",
        password: "EMC2", 
        age: 25,
        city:"izmir"
    }
);

const myUser_2 = new User(
    {
        name: "Thomas", 
        password: "XCY4", 
        age: 35,
        city: "Bilecik"
    }
);

console.log(myUser_1);
console.log(myUser_2);

myUser_1.login();
myUser_2.login();