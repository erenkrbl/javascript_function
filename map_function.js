// 

const numbers = [1, 2, 3, 4, 5, 6];

const newNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log(numbers);
console.log(newNumbers);
console.log(numbers);

const books = [
    {bookname : "White Tooth", pageNumber : 34},
    {bookname : "Blak life", pageNumber : 40},
    {bookname : "Blue Sky", pageNumber : 58},
    {bookname : "Fovers", pageNumber : 67},
];

const bookPageNumbers = books.map(function (book) {
    return book.pageNumber;
});

console.log(bookPageNumbers);

const persons = [
    {firstName : 'Oliver', lastName : 'Samba'},
    {firstName : 'Joseph', lastName : 'Smith'},
    {firstName : 'John', lastName : 'Zack'},
];

const ourPerson = persons.map(function(personName) {
    return personName.firstName + " " + personName.lastName;
});

console.log(ourPerson);

const yourPerson = persons.map((person) => person.firstName + " " + person.lastName);

console.log(yourPerson);