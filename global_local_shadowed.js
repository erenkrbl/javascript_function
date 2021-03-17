// global scope

let myName = "Arthur";

function sayHello () {
    console.log("Hello " + myName);
}
sayHello();

// local scope

function sayAge () {
    let myAge = 35;
    console.log("My age : " + myAge);
}
sayAge();

// shadowwd variable

let favoriteColour = "Green";
sayFavoriteColour(favoriteColour);

function sayFavoriteColour () {
    //let favoriteColour = "Yellow"; // if we didn't take comment My favorite colour is : Yellow
    console.log("My favorite colour is : " + favoriteColour); // My favorite colour is : Green

}