const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// map, filter, reduce, some, every, find

//tek  elemanlların bulunup başka diziye akatrılması

function resultFind(numbers) {
    const oddFilter = numbers.filter(function(oddNumber) {
        return oddNumber % 2 !== 0;
    });
    console.log("odd numbers :" + oddFilter);

    
}
resultFind(numbers);