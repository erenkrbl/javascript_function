let myFriends = ["Oliver", "Jack", "Tom"];

// toString()- join()
console.log(myFriends.toString());
console.log(myFriends.join(" | "));

// psh() element add

let addElement = myFriends.push("Adam");
console.log(myFriends.toString() + " The number of elements of the array : " + addElement);

// pop() element delete

let deleteElemnet = myFriends.pop();
console.log(myFriends.toString() + " Delete elements of the array : " + deleteElemnet);


