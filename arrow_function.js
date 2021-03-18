//
function sayHello () {
    console.log("Helloooo")
}
sayHello();

//
const sayVariable = function() {
    console.log("sayVariable");
}

sayVariable();

 //
const fatArrow = () => {
    console.log("fatArrow");
}

fatArrow();

//
function squareNumber(number) {
    return number * number;
}
console.log(squareNumber(5));

//
const squareVariable = function (number) {
    return number * number;
}
console.log(squareVariable(7));

//
const fatArrowParameter = (number) => {
    return number * number;
}

console.log(fatArrowParameter(8));

//
const fatArrowParameterShort = number => number * number;

console.log(fatArrowParameterShort(10));

//
const sumNumber = (number1, number2) => number1 + number2;

console.log(sumNumber(5, 8));

//
const sumNumber2 = (number1, number2) => {
    return number1 + number2;
}
console.log(sumNumber2(5, 8));

//
const sumNumber3 = function (num1, num2) {
    return num1 * num2;
}
console.log(sumNumber3(4, 7));
