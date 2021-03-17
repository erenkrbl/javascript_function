// Why need function

let total1 = 0;
let total2 = 0;

for (i = 0; i <= 10; i++) {
    total1 = total1 + i;
}
console.log(total1);

for (i = 30; i <= 35; i++) {
    total2 = total2 + i;
}
console.log(total2);

function hiSay () {
    console.log("Hello Everybody");
} 

hiSay();

// 10 and 20 this function's arguments

numberAddition(10, 20);

// firstNumber and secondNumber are parametre

function numberAddition (firstNumber, secondNumber) {
    console.log("Number's addition : " + (firstNumber + secondNumber));
}