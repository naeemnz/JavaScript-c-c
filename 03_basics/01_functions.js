//keyword, function name, parenthesis, scope ya definition
function myName(){
    console.log('S');
    console.log('H');
    console.log('A');
    console.log('M');
    console.log('S');
}
//refrence mtlb function wahan rehta he,() lagane se hoti he execution
// myName()

//number1 ya number2  yahan parameters kehlate hen jub hum definition banate hen ek function ki, jo bhi hum input lete hen us ko
// function addTwoNumbers(number1,number2){//ye function ese likhne se is ki value kisi aur variable men save nahin karsakte wo undefined ayegi
//     console.log(number1+number2);
// } 
// let result = addTwoNumbers(3,6)
// console.log('Result: ', result);//undefined
/*
//jub hum function ko call karate hen tb hum isk () ander ki chizon ko arguments kahenge
addTwoNumbers()// NaN
addTwoNumbers(3,6)//9
addTwoNumbers(3,'6')// 36, number + string
addTwoNumbers(3,'a')//3a
addTwoNumbers(3,null)//3
*/
//function ko likhne ka dosra sahi tariqa
// function addTwoNumbers(number1,number2){
//     let result = number1 + number2;
//     return result;// return k bad function koi kam nahin karta 
// } 
// const result = addTwoNumbers(3,6)
// console.log('Result: ', result);

//function ko likhne ka dosra sahi aur short tariqa
function addTwoNumbers(number1,number2){
    return number1 + number2 //return se hum ek return value ko ek variable men store karsakte hen, sirf console.log se value save nahin hoti wo sirf dikhti he
} 
const result = addTwoNumbers(3,21)
// console.log('Result: ', result);

// hum aur kitne tariqon se values ko ek function ko pass karsakte hen, mtlb parameters dene k tareqe
function loginUserMessage(username){//hum yahan par if else intro karenge kuk humen check karna he k agr value he to age jao warna mat jao tak humen undefined na mile result men
    // if(username===undefined){ 
    //ya if (""){ 
    if (!username){
        console.log('Please enter a username');
        return // ye humne isliye kia kuk humen yehin rukna tha aur lazmi nahin he k hum hamesha kuch na kuch return karen, sirf return se bhi ye function yehin ruk jayega, age just logged in print nahin karega
    }
    return `${username} just logged in!` //agr naam nahi dia he to if run hoga aur agr naam dia he to dosra return just.... run hoga
}
// ye kuch print nahin karega
// loginUserMessage(username)
// console.log(loginUserMessage('Shamsia'));//ye sahi he, kuk value jo return horahi he use print karne ka kaha gaya he humne 
// console.log(loginUserMessage(''));// kuch bhi nahi, just logged in! ayega
console.log(loginUserMessage());//undefined

//hum yahan par by defalut value bhi desakte he 
function userMessage(usernaam = 'Joost'){ // yahan usernaam = 'Joost' isliye diya he kuk jub hum koi value nahin denge to js Joost ko print karega, lekin agr hum value userMessage() men naam denge to wo use print karega over write karke joost ko, istariqe se ye kabhi bhi if k ander enter nahin hoga kuk hum ne by default value dehui he aur if ka yahan koi kam nahin he by default value dene ki waja se  
if(!usernaam){
    console.log('Please enter a username!');
    return
}
    return`${usernaam} just logged in`
}
// console.log(userMessage());

//agr humen pata nahin k hamare pas kitne arguments ane wale hen to hum istarah se use karsakte he
function rekenWinkelmandje(num1){
    return num1;
}
console.log(rekenWinkelmandje(2));//2
console.log(rekenWinkelmandje(2, 200, 500));//2, yahan par bhi sirf ek hi value print horahi he, humen sari values chahiye, is masle ko hal karne k liye ek rest operator hota he jo k ... dots ye spread bhi he, bulk ye dono he mtlb isk use case pe depend karta he, 

function rekenKostWinkelmandje(...num1){
    return num1;
}
console.log(rekenKostWinkelmandje(2, 200, 500 ));//[2, 200, 500] hum array k methods yahan laga sakte hen sub ko add karsakte hen aur loop laga sakte hen,'With operator...:'

//agr hum ek se ziada paramenters den tab kia hoga
function rekenKostWinkelmandjes(val1, val2, ...num1){
    return num1;
}
console.log(rekenKostWinkelmandjes(2, 200, 500, 1000, 3300))//[ 500, 1000, 3300 ], val1:2 val2:200 aur baqi sab num1 men gaye

//hamre pas ek objects he hum us object ko ek function men istemal ya pass karna chate hen hum ye kese karenge
const user = {
    username: 'Shamsia',
    kost: 500
}
// function handleObject(user){ ye bhi hosakta he aur koi aur bhi hosakta he object, hume generic object chahiye the kuk humen pata nahin he k hum konsa object apne function men istemal karenge 
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.kost}`);//yahan humen sahi keys deni he exact object ki tarah ki same honi chahiye
}
// handleObject(user);// yahan compulsory object hi pas karna he jiski values hum lenge ya use karenge, yahan console.log(function) mat karna kuk wo output men undefined dega
//hum yhan handelObject function men direct ek object bhi pas karsakte he zarori nahi k hum use alag se declare karen aur phir pass karen, isliye hum ne uper wali line ko comment out kia he
handleObject({
    username: 'Joost',
    kost: 4500
})

//hum functions men arrays bhi pass karsakte hen as parameters 
const myNewArray = [100, 230, 350, 460, 555]
//hum koi bhi naam parenthesis men desakte hen lazmi nahi he k wo same ho myNewArray ki tarah ho exact
function returnSecondNumber(getArr){
    return getArr[2]
}
// console.log(returnSecondNumber(myNewArray))//350
//same kaam hm yahan bhi karsakte hen, hum direct array deskate hen aur hum use variable men dal k bhi array deskate hen ek function ko, tabhi hum ne is comment out kia he
console.log(returnSecondNumber([22, 34, 55, 76, 89, 1000]))//55