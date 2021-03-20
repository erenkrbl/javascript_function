// every bütün elemalara bakar eğer hepsi şartı sağlıyorsa true
// elemanlardan birtanesi bile üartı sağlamıyorsa false döndürür. 

const numbers = [1, 2, 3, 4, 5, 66];

const result = numbers.every(function (number) {
    return number < 10;
});

console.log(result);

