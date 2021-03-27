/*
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

*/

// ögrencileri tutan bir dizi oluşturun
// her ögrencinin ad, soyad ve id
// id çift olan ögrencileri tutan diziyi z den a ya sıralayın
// filter, map ve sort metotlaarını kullanın
// sonra kodları arrow function ve zincirleme haline dönüştürün 

const students = [
    {id : 12, firstName : 'Elvis', lastName : 'Pretty'},
    {id : 22, firstName : 'Henry', lastName : 'Forester'},
    {id : 32, firstName : 'Frank', lastName : 'Laster'},
    {id : 13, firstName : 'Nikita', lastName : 'Sam'},
    {id : 92, firstName : 'Kevin', lastName : 'Reas'},
    {id : 15, firstName : 'Mike', lastName : 'Tyson'},
    {id : 44, firstName : 'Camala', lastName : 'Sue'},
];

/*
const evenStudentsFind = students.filter(function(student) {
    return student.id % 2 === 0;
});

const studentsName = evenStudentsFind.map(function(student) {
    return student.firstName + " " + student.lastName;
});

//studentsName.sort().reverse();

const orderStudents = studentsName.sort(function(a, b){
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
});


//console.log(evenStudentsFind);
//console.log(studentsName);
console.log(orderStudents);
*/

// with arrow function

// const evenStudentsFind = students.filter(student => student.id % 2 === 0);
// const studentsName = evenStudentsFind.map(student => student.firstName + " " + student.lastName);
// studentsName.sort().reverse();

// const orderStudents = studentsName.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     } else if (a < b) {
//         return 1;
//     } else {
//         return 0;
//     }
// });


//console.log(evenStudentsFind);
//console.log(studentsName);
//console.log(orderStudents);

const evenStudentsFind = students.filter(student => student.id % 2 === 0)
    .map(student =>  student.firstName + " " + student.lastName)
    .sort()
    .reverse();

console.log(evenStudentsFind);






