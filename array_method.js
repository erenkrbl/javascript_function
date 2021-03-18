let myFriends = ["Oliver", "Jack", "Tom"];

// toString()- join()
console.log(myFriends.toString());
console.log(myFriends.join(" | "));

// psh() Add elements to the end of the array

let addElement = myFriends.push("Adam");
console.log(myFriends.toString() + " The number of elements of the array : " + addElement);

// pop() delete the last element of the array

let delElemnet = myFriends.pop();
console.log(myFriends.toString() + " Deleted element : " + delElemnet);

// shift() delete the first element of the array

let delFirstElement = myFriends.shift();
console.log(myFriends.toString() + " Deleted element : " + delFirstElement);

// unshift () Add elements to the beginning of the array

let addFirstElement = myFriends.unshift("Harold");
console.log(myFriends.toString() + " Added element : " + addFirstElement);

// delete

delete myFriends[1];
console.log(myFriends.toString());

// splice() Element delete and add start, deleted count, added element

let numbers = [1, 2, 3, 4, 5, 6, 7] 

numbers.splice(8, 0, 9, 10, "11");
console.log(numbers.toString());

let delNumbers = numbers.splice(0, 4);
console.log(numbers.toString());
console.log(delNumbers.toString());
console.log(delNumbers);

