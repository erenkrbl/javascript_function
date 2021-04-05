// JS object oriented bir dildir ama bu onun Java, C# gibi olduğu anlamına gelmez
// OOP bir aile ise, class based onun bir parçasıdır diyebiliriz. prototype-base gibi. 

// JS is a multi-paradigm language that supports procedural, object-oriented 
//(prototype-based) and functional programing styles. 

class Person {

    static count = 0;

    constructor(fName, LName) {
        this.fName = fName;
        this._LName = LName;
        Person.count++;
    }

    get LNameGet() {
        return this._LName;
    }

    set LNameSet(newValue) {
        this._LName = newValue;

    }
    sayHello(){
        return `Hello I'm ${this.fName + " " + this.LName}`
    }
    static test () {
        console.log('I am static method');
    }

}

// inherit

class Student extends Person{
    constructor(fName, LName, age) {
        super(fName, LName, age);
        this.age = age;
    }
    sayAge() {
        return `I'm ${this.age} year old.`;
    }
    sayHello(){
        return `Hello I'm ${this.fName + " " + this.LName + ' and I am ' + this.age + ' years old.' }`
    }
}

const eric = new Person('Eric', 'Apple');
eric.LNameSet = 'Orange';
console.log(eric.sayHello());

const henry = new Person('Henry', 'Forester');
console.log(henry.sayHello());

const sue = new Student('Sue', 'Scott', 23);
console.log(sue.sayAge());
console.log(sue.sayHello());
console.log('Created person count : ' + Person.count);

Person.test();
console.log(eric.LNameGet);