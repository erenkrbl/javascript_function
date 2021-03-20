// every bütün elemalara bakar eğer hepsi şartı sağlıyorsa true
// elemanlardan birtanesi bile şartı sağlamıyorsa false döndürür. 

const numbers = [1, 2, 3, 4, 5, 66];

const everyResult = numbers.every(function (number) {
    return number < 10;
});

// some bütün elemanlara bakar birtanesi bile şartı sağlıyorsa true döndürür. 
// eğer hiçbiri şartı sağlamıyorsa false döndürür.


const someResult = numbers.some(function (number) {
    return number < 10;
});

console.log(everyResult);
console.log(someResult);

