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

console.log(eric.showInformation());
console.log(henry.showInformation());