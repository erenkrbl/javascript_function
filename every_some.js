// every bütün elemalara bakar eğer hepsi şartı sağlıyorsa true
// elemanlardan birtanesi bile şartı sağlamıyorsa false döndürür. 

const numbers = [1, 2, 3, 4, 5, 66];

const everyResult = numbers.every(function (number) {
    return number < 10;
});

// some bütün elemanlara bakar birtanesi bile şartı sağlıyorsa true döndürür. 
// eğer hiçbiri şartı sağlamıyorsa false döndürür.


const someResult = numbers.some(function (number) {
    return number < 10;
});

console.log(everyResult);
console.log(someResult);

const persons = [
    {id : 10, isOld: false, fName : 'Jason', age:23},
    {id : 11, isOld: true, fName : 'Jack', age:27},
    {id : 12, isOld: false, fName : 'John', age:35},
    {id : 14, isOld: false, fName : 'James', age:45},
    {id : 15, isOld: true, fName : 'Jordan', age:36},
    {id : 16, isOld: false, fName : 'Jimmy', age:35},
];

const everyPersons = persons.every((person) => person.isOld ===false);
console.log(everyPersons);

const somePersons = persons.some((person) => person.isOld ===false);
console.log(somePersons);



