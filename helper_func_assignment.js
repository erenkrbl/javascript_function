const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// map, filter, reduce, some, every, find

//tek  elemanlların bulunup başka diziye aktarılması (filter)
// oluşan yeni dizinin her bir elemanının karesini bul (map)
// bu dizideki 10 dan büyük olan sayıların toplamını ekrana yazdırın (reduce)

function resultFind(numbers) {
    const oddNumber = numbers.filter(function(number) {
        return number % 2 !== 0;
    });
    console.log("odd numbers :" + oddNumber);

    const numberSquare = oddNumber.map(function(number) {
        return number * number;
    });
    console.log(numberSquare);

}
resultFind(numbers);