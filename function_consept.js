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