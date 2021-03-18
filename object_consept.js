let arthur = {
    FirstName : "Arthur",
    lastName : "Kant",
    birtday : 1980,
    gender : false,
    favoriteColor : ["green", "blue"],
    age : function () {
        return 2021 - this.birtday;
    }
};

console.log(arthur);
console.log(arthur.birtday);
console.log(arthur["birtday"]);

let yourAge = arthur.age();
console.log(yourAge);
// console.log(people.age())

let henry = {
    FirstName : "Henry",
    lastName : "Kyte",
    birtday : 1985,
    gender : true,
    favoriteColor : ["yellow", "red"],
    age : function () {
        return 2021 - this.birtday;
    }
};

henry.lastName = "Bill";
henry["gender"] = false;
console.log(henry);


let myStudent = [arthur, henry];
console.log(myStudent);
console.log(myStudent[1].birtday);

let kamala = new Object();
kamala.FirstNames = "Kamala";
kamala.lastName = "Susan";

console.log(kamala);