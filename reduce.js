const numbers = [1, 2, 3, 4, 5, 6];

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

const sumResult = numbers.reduce(function(sum, curr, index) {
    return sum = sum + curr;
}, 0);

console.log(sumResult);

