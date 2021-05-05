// Why need function

// let total1 = 0;
// let total2 = 0;

// for (i = 0; i <= 10; i++) {
//     total1 = total1 + i;
// }
// console.log(total1);

// for (i = 30; i <= 35; i++) {
//     total2 = total2 + i;
// }
// console.log(total2);

// Displaying the code written with for in the function


let overallTotal1 = sumTotal(0, 10);  
let overallTotal2 = sumTotal(30, 35);

function sumTotal (startNumber, finishNumber) {
    let total = 0;
    
    for (i = startNumber; i <= finishNumber; i++ ) {
        total = total + i;
    }
    console.log("Total : " + total);
    return total;
}
console.log("overallTotal1 : " + overallTotal1 + " overallTotal2 : " + overallTotal2);



function hiSay () {
    console.log("Hello Everybody");
} 

hiSay();

// 10 and 20 this function's arguments

// numberAddition(10, 20);

// // firstNumber and secondNumber are parameter
// //  parameter field function

// function numberAddition (firstNumber, secondNumber) {
//     console.log("Number's addition : " + (firstNumber + secondNumber));
// }


let sumNumbers = numberAddition(10, 40);
console.log(sumNumbers);


function numberAddition (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
    
}

const myfirstNumber = 14;
const mysecondNumber = 19;

function myFunction(){
    const result = myfirstNumber + mysecondNumber;
    return result;

}

const mySum = myFunction();
console.log(mySum);

let myString_1 = 'Hello';
let myString_2= 'World';

function upperWords(w1, w2) {
    const w_1 = w1.toUpperCase();
    const w_2 = w2.toUpperCase();
    return w_1 + " " + w_2;
}

const res = upperWords(myString_1, myString_2);

console.log(res);

function checkNumbers(){
    for(let i = 0; 1 < 10; i++){
        if(i ===5)
        return;
        //break;
        console.log("i: ", i);
    }
    console.log("End")

}
checkNumbers();

// Regular Function


function myRegularFunction(p1){
    //console.log(arguments);
    console.log("My regular function " + p1);
}

myRegularFunction("Clarus");

// Function Expression

const myExpressionFunction = function(p2){
    console.log("My expression function " + p2);
}

myExpressionFunction("way");