// let numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach(function (number, i){
//     console.log(number, i);
// });

// console.log("*****************************************")

// numbers.forEach(twoParameterTake);

// function twoParameterTake (number, index) {
//     console.log(number, index)
// }

// // Custom function

// writeArray(numbers, function(value, index) {
//     console.log("Value : " + value + " index : " + index);
// });

// function writeArray (array, callback) {
//     for (i = 0; i < array.length; i++) {
//         callback(array[i], i)
//     }
// }


// map

const numbers = [1, 2, 3, 4, 5, 6];
const newNumbers = numbers.map(num => {
    return num * 2;
});

console.log(newNumbers);