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

let setting = {
    head : 'JS Wonderfull',
    height : '300px',
    width : '200px',
};

// first
// const head = setting.head;
// console.log(head, setting.height);

//second
// const {head, height, width} = setting;
// console.log(head, height, width);

// Third
const {head:h, height:y, width:w} = setting;
console.log(h, y, w);