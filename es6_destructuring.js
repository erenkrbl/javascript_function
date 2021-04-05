// Array destructuring
let myName = ['Eric', 'oliver']

const firstName = myName[0];
const lastName = myName[1];

console.log(firstName, lastName);

const [first, last] = myName;
console.log(first, last);

const colors = ['red', 'yellow', 'blue', 'black', 'purple', 'pink'];

const [c1, c2, , c4,] = colors;

console.log(c1, c2, c4);

const [r1, r2, ...otherColor] = colors;

console.log(r1, r2, otherColor);

// default value assignment

const [t1, t2, t3='unkonwn', t4 ='undefined'] = ['Juvestus', 'Milan', 'Real Madrid'];

console.log(t1, t2, t3, t4);


// Object destructuring