// Verileri bir arada tutan yapılar dizi (array) denir

let brandCar1 = "BMW";
let brandCar2 = "Tesla";
let brandCar3 = "Mercedes";

let brandCar = ["BMW", "Tesla", "Mercedes"];
console.log(brandCar);
console.log(brandCar[1]);

brandCar[2] = "Subaru";
brandCar[3] = "Audi";
brandCar[4] = "Jaguar";
brandCar[8] = "Honda";

console.log(brandCar);
console.log(brandCar.length);

// En büyük index, dizi eleman sayısının 1 eksiğidir.
// Dizi elemen sayısı 20 ise en büyük index sayısı 19 olur.

console.log("Car brands : " + brandCar.toString());

// Array lerin gösterilmesi

for ( let i = 0; i < brandCar.length; i++) {
    console.log(brandCar[i]);
}


// callback function
let myArray = [2, 23, 16, 55, 9, 123];
//1
function sortElement(a, b){
    return a- b;
}

const numOrder_1 = myArray.sort(sortElement);
console.log(numOrder_1);

//2
const numOrder_2 = myArray.sort(function(a, b){
    return b - a;
});

console.log(numOrder_2);

const sortElementArrow = (a, b) => a - b;
const numOrder_3 = myArray.sort(sortElementArrow);
console.log(numOrder_3);

