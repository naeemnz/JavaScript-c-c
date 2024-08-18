//Block and Global scope {}
//{} object men ye object declaration hen
//{} function men, if else men ye scope hote he us condition ya function k, us program ka scope, jo chiz scope k ander ho wo wohi rehni chahihiye use bahir nahin ana chahiye, agr wo scope {} se bahir ayi to masla hoga, errors ayenge
let a = 100
// const b = 20
var c = 300
if (true) {
    let a = 10
    // console.log('Inner: ', a);
    
    const b = 20
    // var c = 30
    c = 30; // agr ese bhi likhenge to bhi yehi same masla ayega value phir bhi print hogi
}
// console.log('Outer: ',a);
// console.log(b);
// console.log(c);// har chiz k bawajood 30 print horaha he

//global scope node men aur browser k console men/ window men dono alag hote hen

//global scope kisi block scope men call kiye jasakte hen lekin block se koi bhi chiz bahir nahin jati
//nested scope
// ek function men apk child function parent k values ko istemal karsakte hen lekin parents child ko nahi, matlb bahir se ander hosakta he lekin ander se bahir values nahi jasakti error ayega
function one(){
    const username = 'Shamsia'
    
    function two(){
        const website = 'Google'
        // console.log(username);        
    }
    // console.log(website);
    two()
}
one()

// if else men scope, if else men bhi function ki tarah chizen sirf ander istemal hosakte hen bahir nahi, bahir se ander aur ander se bahir nahin
if(true) {
    const usernaam = 'Shamsia'
    if(usernaam === 'Shamsia') {
        const website = ' windows'
        // console.log(usernaam + website);
    }  
    // console.log(website);//bahir nahin le jasakte scope k
}
// console.log(usernaam);// bahir nahi lejasakte scope k

//++++++sha jalib++++ humne ise mini hoisting bola he kuk hm function ko scope se pehle call ya declare karrahe hen
//ye function declaration se pehle call horaha he aur ye hosakta he kuk ye kisi varible men store nahi he
console.log(addOne(8))
//yahan function sirf return horaha he print nahi hua he jub tak console.log na karo
function addOne(num) {
    return num + 1
}

//ye function declaration se pehle agr call hua to error de ga kuk ye ek variable men store he,
//ise hum expression kehte hen nich jo he
const addTwo = function addTwo(num) {
    return num + 2
}
console.log(addTwo())// agr ise hum const se pehle likhe to error ayega k Cannot access 'addTwo' before initialization