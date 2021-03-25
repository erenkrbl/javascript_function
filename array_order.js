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
/*
// string array a-z order
const sortFromatoz = nameStudents.sort();
console.log(nameStudents);
console.log(sortFromatoz);

// string array z- a order
// reverse çalışması için sıralanmış bir dizi olmalidır.

const sortFromztoa = sortFromatoz.reverse();
console.log(sortFromztoa);

const shortWay = nameStudents.sort().reverse();
console.log(shortWay);

*/

// numbers sorting from small to large/ large to small order

// const numberSort = numbers.sort(function(a, b)  {
//     //return a - b;
//     return b - a;
// });
// //const numberSort = numbers.sort((a, b) => a - b);
// console.log(numberSort);

// object order

// order by id
// students.sort(function (a, b) {
//     return a.id -b.id;
// });

// console.log(students);

// order by age
// students.sort((a, b) => a.age - b.age);
// console.log(students);

// order by name

students.sort(function(a, b) {
    if (a.name > b.age) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    } else {
        return 0;
    }
});

console.log(students);