/*
Primitive Datatype: non-refrence and they are called by value
There are 7 types:
1. String: 
2. Booelan:
3. Symbol:
4. Number:
5. Undefined:
6. Null:
7. BigInt: 

Non-Primitive or Refrence Datatype: Memory men refrence allocate kia jatahe

1. Array
2. Object
3. Functions

JavaScript dynamically typed language he
const score = 100
const score = 100.3
const isLoggedIn = false
const outsideTemperature = null
let userEmail; ekjese he let userEmail = undefined;


*/ 
// const id = Symbol("123")
// const anotherId = Symbol("123")
// console.log(id === anotherId)//false

// const bigNumber = 2345678923454328679n

// const array = ["player1", "player2", "player3"]
// let myObject = {
// name: "Shamsia",
// age: 22
// }

// const myFunction = function(a){
//     console.log("Hello World");
// }
// myFunction();

/*
Type of Value : Result
Undefined : Undefined
Null : Object
Function : Function hi he lekin Object Function khte hen
All non-primitive are objects (Type of).
*/

//working of memory allocation in JavaScript

//Stack(primitive) variable declare karne k bad us ka refrence milta he bajai original value k, Heap(non-primitive type) yahan milta he refrence original value kaa aur jo bhi change karoge wo originally change hota he 
let playerthree = "p3"
let playerFour = playerthree
//output: same values hongi "p3"

playerFour = "p4"
console.log(playerthree);
console.log(playerFour);

let userOne = {
    email: "sh@gmail.com",
    alp: "user@yjd"
}

let userTwo = userOne
userTwo.email = "shnnn@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

