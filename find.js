// find

const persons = [
    {id : 10, firstName : 'Jason'},
    {id : 11, firstName : 'Jack'},
    {id : 12, firstName : 'John'},
    {id : 14, firstName : 'James'},
    {id : 15, firstName : 'Jordan'},
    {id : 16, firstName : 'Jimmy'},
];

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