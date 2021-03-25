const nameStudents = ["Eric", "Tom", "Oliver", "Ryan"];

const numbers = [1, 50, 2, 42, 42, 84, 8, 35, 3];

const students = [
    {id : 12, name : 'Elvis', age : 25},
    {id : 22, name : 'Henry', age : 15},
    {id : 32, name : 'Frank', age : 55},
    {id : 13, name : 'Nikita', age : 19},
    {id : 92, name : 'Kevin', age : 45},
    {id : 15, name : 'Mike', age : 75},
    {id : 44, name : 'Camala', age : 30},
];

// let copy = [];

// for (isim of nameStudents) {
//     copy.push(isim);
// }

//copy = Array.from(nameStudents);

// spread operatör

// copy = [...nameStudents];

// copy.sort();
// console.log(copy);
// console.log(nameStudents);


// split

const myName = 'Harold Oliver';

letterArray = myName.split(' ');

console.log(letterArray);

const yourName = 'Eric Ryan';

yourLetterArray = yourName.split('');

console.log(yourLetterArray);

// spread

const ourName = 'John Smith';

// let ourletterArray = ourName.split('');

ourletterArray = [...ourName];

console.log(ourletterArray);

function sumNumbers(...parameters) {
    let sum = 0;
    for (number of parameters) {
        sum = sum + number;
    }
    console.log(sum);
}

sumNumbers(4, 5);
sumNumbers(4, 5, 9, 7);
sumNumbers(4, 5, 20, 47);
