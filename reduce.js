//const numbers = [1, 2, 3, 4, 5, 6];

/*

function sumFind () {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    console.log(sum);
}

sumFind();
*/

// reduce

// const sumResult = numbers.reduce(function(sum, curr, index) {
//     return sum = sum + curr;
// }, 0);

// console.log(sumResult);

// map with solution

/*
const mapWithMultiply = numbers.map(function(number) {
    return number * 2;
});

console.log(mapWithMultiply);

// reduce with multiplication

const reduceWithMutiply = numbers.reduce(function(preArray, currentNumber) {
    preArray.push(currentNumber * 2);
    return preArray;

}, []);

console.log(reduceWithMutiply);


// reduce with filter

const newArray = numbers.filter(function(number, index) {
    return number < 3;
});

const newArrayWithReduce = numbers.reduce(function(previousNum, currNumber, index){
    if(currNumber < 3) {
        previousNum.push(currNumber);
    }
    return previousNum;
}, []);

console.log(newArray);
console.log(newArrayWithReduce);
*/

// reduce with find
/*
const findNumber = numbers.find(function(number, index) {
    return number === 2;
});
console.log(findNumber);


const findNumberWithReduce = numbers.reduce(function(pre, curr, index) {
    console.log(pre, curr, index);
    
    if (curr === 2) {
        return curr;
    } else {
        return pre;
    }
}, undefined);

console.log(findNumberWithReduce);
*/

const myArray = [1, 2, 3, 4, 5, 6];

const sumOfNumbers = myArray.reduce((acc, curr)=> {
    // console.log('acc: ', acc);
    // console.log('curr: ', curr)
    return acc + curr;
});

console.log(sumOfNumbers);

const numbers = [3, 7, 1, 16, 9, 39, 24, 37];

const maxNumber = numbers.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
});

console.log(maxNumber);

