// 1 şehirler diye bir diz oluşturun 
// her dizide şehirlerle ilgili bilgiler olsun
// şehir adı, plakası ve komşu bilgileri
// z den a ya sıralama yapın

const cities = [
    {cityName : 'Roma', cityPlate : 12, neigborCity : ['Milan', 'Barcelona']},
    {cityName : 'Atina', cityPlate : 22, neigborCity : ['Selanik', 'Sparta']},
    {cityName : 'İstanbul', cityPlate : 26, neigborCity : ['Ankara', 'Kırıkkale']},
    {cityName : 'Bağdat', cityPlate : 45, neigborCity : ['Sam', 'Halep']},
    {cityName : 'Moskava', cityPlate : 54, neigborCity : ['Petersburg', 'Levingrand']},
    {cityName : 'Paris', cityPlate : 76, neigborCity : ['Born', 'Berlin']},
];

cities.sort(function(a, b) {
    if ( a.cityName > b.cityName) {
        return -1;
    } else if (a.cityName < b.cityName) {
        return 1;
    } else {
        return 0;
    }
});
console.log(cities);


// cities.sort().reverse();
// console.log(cities);

// alınan değere kadar sayılar dizisinın fibonacci şeklinde yazdırın
// 0 1 1 2 3 5 8 13 21 34 55 .......
//  iki sayının toplamı bir sonraki sayıyı oluşturuyor

function fibonacci(number) {
    let resultArray = [0, 1];
    for (i = 2; i < number; i++) {
        const currentNumber = resultArray[i - 1] + resultArray[i - 2];
        if (currentNumber < number) {
            resultArray[i] = currentNumber; 
        } else {
            break;
        }
    }
    return resultArray;
}
console.log(fibonacci(50));




