
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

