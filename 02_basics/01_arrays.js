//array

const myArray = [1, 2, 3, 4, 5, true, 'shamsia', 'object']
//array declare karne ka dosra tariqa
let myPeople = ['shamsia', 'Jana Agha', 'Bibi']

let myArray2 = new Array(1, 2, 3, 4)
console.log(myArray[0]);//access through index

myArray.push(9)//last men add karne k liye
// console.log(myArray);
myArray.push(23)
// console.log(myArray);
//to remove last element only from the araay, argument nahin dete
myArray.pop()
// console.log(myArray);
let myArray3 = [1, 2, 3, 4, 5, 6]

//starting men kuch add karne k liye jiski waja se pure array ki values shift hojati hen 
myArray3.unshift(23)
// console.log(myArray3);

//shift men argument nahin dete aur wo starting ka ek element hata deta he
myArray3.shift()
// console.log(myArray3);

// console.log(myArray3.includes(20));// kia array men 20 exist karta he, output: false
// console.log(myArray3.indexOf(21));// 21 exist nahin karta to output -1 dega matlb nahin pata 
// console.log(myArray3.indexOf(2));//2 index par uski value ayegi ya dega

const newArray = myArray3.join()//array ko as a string return karke deta he agr argument naho to, mtlb usk type of ko change kardeta he object se string me
// console.log(myArray3);
// console.log(newArray);

//slice, splice
let myArray4 = [1,2,3,4,5,6,7,8]
console.log('Original array ', myArray4);//slice change nahi karta original array ko
let slicedArray = myArray4.slice(1,3)// third include nahin hota, exclusive he ye output: [2,3]
console.log('my original array after sliced', myArray4);

console.log('sliced array', slicedArray);
let splicedArray = myArray4.splice(1,3)//output: [2,3,4]
console.log('my original array after splice', myArray4 );
console.log('spliced array', splicedArray);//original array ko manipulate karta he, chnage karta he






//JavaScript men agr hum ek array ko copy karte hen to sirf shallow copies banti hen, a shallow copy of an object is a copy whose properties share the same refrences(point to the same underlying values)

// if you make a copy of an array, deep copy me do not share the same refrence point, shallow copy men share the same refrence point
