//object ko constructor k madad se declare karne ka tariqa, singleton kese karsak te hen
// const tinderUser = new Object()
// console.log(tinderUser);// output: {} ek empty object he

// dosra tariqa ek object ko declare karne ka, ye ek non-singleton object he
const tinderUser = {}
tinderUser.id = '123abc'
tinderUser.name = 'Shami'
tinderUser.isLoggedIn = false

// console.log(tinderUser);//output:{} same he

//yahan par hum objects ko objects denge as value, object me object me object 
const regularUser ={
    email: "SH@gmail.com",
    fullname: {
        userfullname: {
            firstname: 'Shamsia',
            lastname: 'Naimi'
        }
    }
}
//valuse ko access karne ka tariqa regularUser ki
// console.log(regularUser.fullname);
//mazid nesting ko open karne k liye . notation ko istemal karen aur mazid sub-level k objects ko ya values ko access karen
// console.log(regularUser.fullname.userfullname.firstname);

//objects ko merge karne ka tariqa
const object1 = {1:'a', 2: 'b',3: 'c'}//!objects ki keys ko same mat dena kisi bhi do object men
const object2 = {4:'d', 5: 'e',6: 'f'}
const object5 = {77:'gh', 88:'ij'}

// const object3 = {object1, object2}// problem ye hogi yahan jese array me thi, array me array tha, yahan object men object hoga with multiple{} notations 
// console.log(object3);

//assign( target, source) aur return karta he ye ek modified object, ye {} ek optional parameter hota he aur ise dene se humen ye samajh ata he k ye garantee hoti he k {} ye target hoga aur baqi k sare as a source act karenge
const object4 = Object.assign({}, object1, object2, object5)//agr ap {} ye na den to phir sari ki sari values object1 men jaingi aur wo hamara target hojai ga us k ilawa sare source honge
// console.log(object4);

//zida tar hum ye spread operator use karenge na k assign
const object6 = {...object1, ...object2,... object5}
// console.log(object6);

//jb bhi database se values ati hen to wo ek array hota he jis men dher sare objects hote hen, array of objects hota he wo data jo db se ata he
const users = [
    {
        id:123,
        email: 'shamsia@google.com',
    },
    {
        id:124,
        email: 'shami@google.com',
    }, {
        id:125,
        email: 'sh@google.com',
    }
]
//ye ek array he is liye hm . use karenge, users array ki first value jo k ek object he aur us object me jo key he email us ki value ko access karna he
users[1].email
// console.log(tinderUser);

//ye Object.keys jume keys dega as array output men jis par hum array k sare methods laga sakte he
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));//values k liye
// console.log(Object.entries(tinderUser));//is me har key value k pair ko as single array output me dikhata he, key aur value ka ek alag array hoga
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//kai bar objects men loop through karrahe he aur hm koi value nikalna chah rahe hen, kai bar esa hota he k value exist nahin karti to uskmliye hum pehle check karte he kia ye property exist karti he ya nahin
//ye ek extra check hota he property ko istamal karne se pehle

//destructuring of object
const list = {
    column1: 'website name',
    column2: '999',
    column3: 'Shamsia'
}

// list.column1 //ye tariqa bhi sahi he lekin niche ek aur tariqa bhi he jo bar bar ye likhne se bachata he humen
const {column1} = list //sub se pehle hum likhte hen const uske bad hum likhte hen k humen kahan se values extract karni hen
console.log(column1);

//agr humen ye column lafz ko rename karna he kisi chote lafz se to ye bhi hum karsakte hen
const {column1: c1} = list
console.log(c1);

//ye ek example he react ki k hum wahan pe kese karte hen, wahan per by default log har chiz props.company, props.ye... nahin karte  
// const navbar = (props.comapny) => { //ye ghalat nahin he lekin aicha bhi nahe kuk naam baar baar liya jaraha he ye
//     //sahi tariqa ye he const navbar = ({company}) = > {} //yahan par company naam he jese :c1 yahan destructure kia ja raha he
// }
// navbar(comapny = 'shami')

//api ki values ati json ki shakal men, neche ek misal he api ki, yahan paer keys bhi ek proper string hoti he aur values bhi ek string hoti he, Java Script Object Notation 
// {
//     "name":"shamsia",
//     "crname": "fridh",
//     "website": "columns"
// }
//[{}, {}, {}] lazmi nahin he k ek api ek object ho wo arrays ki shakal me bhi hosakta he
//https://randomuser.me/
//json formatter
