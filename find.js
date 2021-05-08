// find

// const persons = [
//     {id : 10, firstName : 'Jason'},
//     {id : 11, firstName : 'Jack'},
//     {id : 12, firstName : 'John'},
//     {id : 14, firstName : 'James'},
//     {id : 15, firstName : 'Jordan'},
//     {id : 16, firstName : 'Jimmy'},
// ];

// higher order function

// function selfFindFunc(persons, searchValue) {
//     let findElement = undefined;
//     for (let i = 0; i < persons.length; i++) {
//         if (searchValue(persons[i])) {
//             return persons[i];
//         }
//     }
//     return findElement;
// }

// const result = selfFindFunc(persons, function(person) {
//     return person.id === 10;
// });

// console.log(result);


/*
const result = persons.find(function (person) {
    return person.id === 15;
});

// classic method 
function findMethod (persons) {
    for (i = 0; i < persons.length; i++) {
        if (persons[i].id === 14) {
            return persons[i];
        }
    }
}

console.log(result);
console.log(findMethod(persons));
*/

const persons = [
    {id : 10, firstName : 'Jason', age:23},
    {id : 11, firstName : 'Jack', age:27},
    {id : 12, firstName : 'John', age:35},
    {id : 14, firstName : 'James', age:45},
    {id : 15, firstName : 'Jordan', age:36},
    {id : 16, firstName : 'Jimmy', age:35},
];

// const myPerson = persons.find((person) => person.age === 35);
const myPerson = persons.find((person) => person.age < 35);
console.log(myPerson);