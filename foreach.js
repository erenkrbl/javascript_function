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
// const newNumbers = numbers.map(num => {
//     return num * 2;
// });

// console.log(newNumbers);

// const myNum_1 = numbers.forEach((num) => {
//     return num * 2;
// });
// const myNum_2 = numbers.map((num) => {
//     return num * 2;
// });

// console.log(myNum_1);
// console.log(myNum_2);

// for in
// Nesnelerde forEach yapısı kullanılmadığından for in kullanıyoruz

const persons = {
    id : 10, 
    isOld: false, 
    fName : 'Jason', 
    age:23
};
    
for (key in persons){
    console.log("key: ", key);
    console.log("value: ", persons[key]);
}


// for of
// arraylerde kullndığımız yapı arraylarin içinde dönüyor

const userArray = [
    {id : 10, firstName : 'Jason', age:23},
    {id : 11, firstName : 'Jack', age:27},
    {id : 12, firstName : 'John', age:35},
    {id : 14, firstName : 'James', age:45},
    {id : 15, firstName : 'Jordan', age:36},
    {id : 16, firstName : 'Jimmy', age:35},
];


for(element of userArray){
    console.log(element);
}
