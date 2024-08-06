const voornaam = "Shamsia" // string declaration ka tariqa pehla
const repoCount = " 46"
// console.log(voornaam + repoCount + " Values"); sahi nahi he!

//Backticks ya String Interpolation, yahan ap name holders banate he aur us ki jo value hoti he use ap inject karsakte hen isk sath ap is per functions bhi laga sakte hen
// console.log(`Hello my name is ${voornaam} and my repo count is ${repoCount} `);// ye sahi tariqa he

const gameName = new String('Shamsia-naimi-khan-kakar') // string declaration ka dosra tariqa
//string ek object he yahan jismen key value pairs hen 0 pe s aur 1 pe h he

// key access karne k liye key number do
// console.log(gameName[3]);
//ye obj ese bhi access kia jasakta he
console.log(gameName.__proto__); // apko object milega
//yahan ap sare proto typr ke methods yani functions bhi access karsakte hen
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

//character at key 2 position, kis position pe konsa character he
// console.log(gameName.charAt(2));
// console.log(gameName.charAt(4));

//iska reverse he konsa character kis position pe he
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)// -ve nahin deskte, hemesha 0 se start hoga ye
// console.log(newString);//ek piece mile ga word ka without the end included matlb 0,1,2,3 tak jaiga aur show karega

const anotherString = gameName.slice(0, 5) //  -ve de sakte hen
// console.log(anotherString);
const newStringOne = "    shamsia    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://shamsia.com/shamsia%30naimi"
// console.log(url.replace('%30', '-'));
// console.log(url.includes('bb'));
console.log(gameName.split('-'));//string to array based on separator

















