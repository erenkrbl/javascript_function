/*
let myArray = [1, 2, 3];

const arrayCopyTwoMultiply = function(array) {
    temporaryArray = [];
    for (i = 0; i < array.length; i++){
        temporaryArray[i] = array[i] * 2;
    }
    console.log(temporaryArray);
}

const arrayCopyTwoDivision = function(array) {
    temporaryArray = [];
    for (i = 0; i < array.length; i++){
        temporaryArray[i] = array[i] / 2;
    }
    console.log(temporaryArray);
}

const arrayCopyThreeAdd = function(array) {
    temporaryArray = [];
    for (i = 0; i < array.length; i++){
        temporaryArray[i] = array[i] + 3;
    }
    console.log(temporaryArray);
}

console.log(myArray);
arrayCopyTwoMultiply(myArray);
arrayCopyTwoDivision(myArray);
arrayCopyThreeAdd(myArray);

*/

let myArray = [1, 2, 3];

// first class function
const twoWithMultiply = function(number) {
    return number * 2;
}

const twoWithDivision = function(number) {
    return number / 2;
}

const threeAdd = function(number) {
    return number + 3;
}


const transactionsAll = function(array, transactions) {
    let temporaryArray = [];
    for (i = 0; i < array.length; i++) {
        //temporaryArray[i] = array[i] * 2;
        //temporaryArray[i] = array[i] / 2;
        //temporaryArray[i] = array[i] + 3;
        temporaryArray[i] = transactions(array[i]);
    }
    console.log(temporaryArray);
    
}

// higher order order function :Parametre olarak fonksiyon alan ve/veya
// return olarak fonksiyon döndüren fonksiyolardır.
// izi ilemleri higher order fonksiyondur.

transactionsAll(myArray, twoWithMultiply);
transactionsAll(myArray, twoWithDivision);
transactionsAll(myArray, threeAdd)

console.log(myArray);
