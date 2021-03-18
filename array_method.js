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
