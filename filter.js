

const plants = [
    {pName : 'grape', kind : 'fruits' },
    {pName : 'strawberry', kind : 'fruits' },
    {pName : 'banana', kind : 'fruits' },
    {pName : 'spinach', kind : 'vegetables' },
    {pName : 'celery', kind : 'vegetables' },
];


// custom function

function myFilterFunc(array, filterConditions) {
    newArray = [];
    for (i = 0; i < array.length; i++) {
        const result = filterConditions(array[i]);
        if (result) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

// function otherFunc (plant) {
//     return plant.kind === 'fruits';
// }

//const fruits = myFilterFunc(plants, otherFunc);
//const vegetables = myFilterFunc(plants, otherFunc);

// const fruits = myFilterFunc(plants, function (plant) {
//    return plant.kind === 'fruits'
// });

// arrow function

//const fruits = myFilterFunc(plants, (plant) => plant.kind === 'fruits');
 


//console.log(fruits);
//console.log(vegetables);


/*
function findFruits () {
    const newArray = [];
    for (i = 0; i < plants.length; i++) {
        if (plants[i].kind === 'fruits') {
            newArray.push(plants[i]);
        }
    }
    return newArray;
}


function findVegetables () {
    const newArray = [];
    for (i = 0; i < plants.length; i++) {
        if (plants[i].kind === 'vegetables') {
            newArray.push(plants[i]);
        }
    }
    return newArray;
}

console.log(plants);
console.log(findFruits());
console.log(findVegetables());
*/

// filter
/*
const fruits = plants.filter(function (plant) {
    return plant.kind === 'fruits';
});


const vegatables = plants.filter(function (plant) {
    return plant.kind === 'vegetables';
});

console.log(fruits);
console.log(vegatables);
*/


const persons = [
    {id : 10, firstName : 'Jason', age:23},
    {id : 11, firstName : 'Jack', age:27},
    {id : 12, firstName : 'John', age:35},
    {id : 14, firstName : 'James', age:45},
    {id : 15, firstName : 'Jordan', age:36},
    {id : 16, firstName : 'Jimmy', age:35},
];

const myPerson = persons.filter((person) => person.age < 36);
console.log(myPerson);
console.log(persons);