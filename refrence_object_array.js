// primitive data type

let age = 32;
let newAge = age;

age = 40;
console.log(age, newAge);

let myName = "Eric";
let newMyName = myName;

myName = "Martin";
console.log(myName, newMyName);

// refernce data type

let colors = ["Black", "White"];
let newColors = colors;

colors = ["Black", "White"];

colors.push('Blue');
console.log(colors, newColors);

let students = {
    firstname : 'Khan',
    lastName : 'Taylor',
    age : 32
}

let newStudents = students;
students.age = 36;


console.log(students, newStudents);