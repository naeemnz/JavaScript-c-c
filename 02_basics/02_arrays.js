let marvelHeroes = ['SpiderMan', 'IronMan', 'Wolverine', 'CaptainAmerica', 'BlackWidow', 'DoctorStrange', 'Deadpool']
let dcHeroes = ['Superman', 'Batman', 'WonderWoman', 'Aquaman', 'Flash']
//marvelHeroes.push(dcHeroes);//array men array ajaiga push karne se aur wo as single element count hoga first array ka aur us single element k multiple sub element honge:   'DoctorStrange',
//push existing array pe push karta he aur shayad original array ko change nahin karta 
// 'Deadpool',
// [ 'Superman', 'Batman', 'WonderWoman', 'Aquaman', 'Flash' ]
// ] Arrays koi bhi data lete hen, 
// console.log(marvelHeroes);
//access karne k liye pehle first array ka element aur usk bad dosre array ka element access karna he index se
// console.log(marvelHeroes[7][2]);//wonderwoman output he, aur ye achi practise nahin he access karne ki

//concat naya array returned karta he
// let allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);

//dosra tariqa arrays ko merge karne ka, spread operator, iss me limitation nahin he arrays ki, concat me sirf do asakte hen, aur ye ziada preferable tariqa he
// const allNewHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(allNewHeroes);

const multipleArrays = [1, 2, 3, [44, 55, 66], 7, [88, 99, [110, 120], 100]]
//returns a new array with sub-array elements concatinated, one flat array
// const flatArray = multipleArrays.flat(Infinity)
// console.log(flatArray);//or depth 1,2,3

// console.log(Array.isArray('Shamsia'));// ye array nahin he, yahan hum sawal poch rahen he k kiya ye array he
// console.log(Array.from('Shamsia'));//kisi string ko array me convert karne k liye from use karte hen
// console.log(Array.from({name: 'Shamsia'}));//ye ek object he aur ise array men convert karne k liye hume batana oarta he k kis ka array banana he keys ka ya values ka, aur agr ye array nahin bana payega to ye hamesha empty array as output dega ya return karega

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
//of returns a new array from set of elements, variables lelo yahan, arrays bhi hosakte hen
console.log((Array.of(score1,score2,score3,score4)));//output: [100, 200, 300, 400]





























