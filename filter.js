

const plants = [
    {pName : 'grape', kind : 'fruits' },
    {pName : 'strawberry', kind : 'fruits' },
    {pName : 'banana', kind : 'fruits' },
    {pName : 'spinach', kind : 'vegetables' },
    {pName : 'celery', kind : 'vegetables' },
];

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

const fruits = plants.filter(function (plant) {
    return plant.kind === 'fruits';
});


const vegatables = plants.filter(function (plant) {
    return plant.kind === 'vegetables';
});

console.log(fruits);
console.log(vegatables);