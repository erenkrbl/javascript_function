let numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach(function (number, i){
    console.log(number, i);
});

console.log("*****************************************")

numbers.forEach(twoParameterTake);

function twoParameterTake (number, index) {
    console.log(number, index)
}
