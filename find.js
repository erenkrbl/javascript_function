// find

const persons = [
    {id : 10, firstName : 'Jason'},
    {id : 11, firstName : 'Jack'},
    {id : 12, firstName : 'John'},
    {id : 14, firstName : 'James'},
    {id : 15, firstName : 'Jordan'},
    {id : 16, firstName : 'Jimmy'},
];

// higher order function

function selfFindFunc(persons, searchValue) {
    let findElement = undefined;
    for (let i = 0; i < persons.length; i++) {
        if (searchValue(persons[i])) {
            return persons[i];
        }
    }
    return findElement;
}

const result = selfFindFunc(persons, function(person) {
    return person.id === 10;
});

console.log(result);


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