// person constructor function

function Person(fName, LName) {
    this.fName = fName;
    this.LName = LName;
}

Person.prototype.sayHello = function() {
    return `Hello I'm ${this.fName} ${this.LName}`;
}


function Student(fName, LName, age, room) {
    Person.call(this, fName, LName);
    this.age = age;
    this.room = room;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.sayHello  = function() { 
    return `Hello I'm ${this.room}. room student ${this.fName} ${this.LName}`;
}

Student.prototype.sayAge  = function() { 
    return `I'm ${this.age} years old`;
}


const henry = new Person('Henry', 'Forester');
const oliver = new Person('Oliver', 'Khan');

console.log(henry.sayHello());
console.log(oliver.sayHello());

const kamala = new Student('Kamala', 'Sue', 17, 9);
console.log(kamala.sayHello());
console.log(kamala.sayAge());