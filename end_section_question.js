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


