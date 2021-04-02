// What is an object

// object literal
/*
const eric = {
    firstName: 'Eric',
    lastName: 'Oliver',
    age: 36,
    gender: false,
    favoriteColor : ['red', 'green'],
    address: {
        city: 'Ankara',
        country: 'Turkey',
        plateCode: 6,
    },
    sayİnformation : function() {
        return `My name is ${this.firstName} and my age ${eric.age}`; // template literal
    },

    ['full-name']: 'Eric Oliver',
}

console.log(eric.sayİnformation());

eric.age = 40;
eric.scholl = 'Istanbul University';
console.log(eric);

const henry = {
    firstName: 'Henry',
    lastName: 'Forester',
    age: 38,
    gender: true,
    favoriteColor : ['blue', 'white'],
    address: {
        city: 'Muğla',
        country: 'Turkey',
        plateCode: 48,
    },
    sayİnformation : function() {
        return `My name is ${this.firstName} and my age ${this.age}`; // template literal
    },

    ['full-name']: 'Henry Forester',
}
*/

const eric = createStudent('Eric', 36, true, 'Marmara');
const henry = createStudent('Henry', 38, false, 'Ege');

// factory function

function createStudent(firstName, age, gender, scholl) {
    return {
        firstName : firstName,
        age : age,
        gender : gender,
        scholl : scholl,

        // method
        showInformation : function (){
            return `My name is ${this.firstName}, my age ${this.age}, my school is ${this.scholl}`
        }
    }
}

// console.log(eric.showInformation());
// console.log(henry.showInformation());
// console.log(eric);
// console.log(henry);


// constuctor functions

// function Student(firstName, age, gender, scholl) {
//     this.firstName = firstName;
//     this.age = age;
//     this.gender = gender;
//     this.scholl = scholl;
//     this.showInformation = function () {
//         return `My name is ${this.firstName}, my age ${this.age}, my school is ${this.scholl}`
//     }

// }

// New : Three thinging changing with use new
// First : A new object is created
// Second : We don't have to write return
// Third :Links this word to the current object

// const joseph = new Student('Joseph', 40, 'true', 'İTÜ');
// console.log(joseph.constructor);

// const newJoseph  = new joseph.constructor('NewJoseph', 41, false, 'Muğla');
// console.log(newJoseph);

// const john = new Student('John', 41, 'true', 'İstanbul');
// console.log(john);

// Js deki tüm objeler onu oluşturan constructor fonksiyonuna ulaşabilir.
// All objects in Js can access the constructor function that created it.
// Js ile beraber gelen built in constructor functionlar vardır.
// There are built in constructor functions that come with Js
// Diziler ve fonksiyonlar aslında objectir, ispat
// Arrays and functions are actually objecs, proof

// const tryObject = {};
// console.log(tryObject.constructor);
// console.log(tryObject.constructor());

// const tryArray = [];
// console.log(tryArray.constructor);
// console.log(tryArray.constructor());

// const tryFunc = function () { };
// console.log(tryFunc.constructor);
// console.log(tryFunc.constructor());


// prototype Property
// JS prototype miras modelini kullanır
// Her constructor function/class aynı kurucu fonksiyonla oluşturulan 
// instance'ların ortak olaarak kullanabilecekleri prototype isimli property sahiptir
// Prototype property de bir nesne döndürür


Student.prototype.scholl = 'İTÜ';
Student.prototype.showInformation = function () {
    return `My name is ${this.firstName}, my age ${this.age}, my school is ${this.scholl}`
};

function Student(firstName, age, gender, scholl) {
    this.firstName = firstName;
    this.age = age;
    this.gender = gender;
}

const joseph = new Student('Joseph', 40, 'true', 'İTÜ');
console.log(joseph.scholl);

const oliver  = new Student('oliver', 36, false, 'İTÜ');
console.log(oliver.showInformation());

console.log(joseph);
console.log(joseph.constructor.prototype);
console.log(Object.getPrototypeOf(oliver));