//node 02_basics/03_objects.js Objects ko declare karne ke do tariqe hen 1. literals: Singleton nahin banta he ya hota kuk isk multiple instances bante hen 2. Constructor , Singleton: agr ap constructor k zariye object banate hen to wo singleton hoga kuk wo apni tarah ka ek hi object he

//ye constructor method k through declare karne ka tariqa he: Object.create aur ye singleton hi banata he

//aur agr humen symbol use karna he to 
const mySym = Symbol("key111")

//Object literals object ko declare karne ka ek tariqa
const jsUser = {
    name: 'Shamsia', //keys: values, yahan name string ki tarah he aur system ise "name": ki tarah leta he aga "" na bhi do to
    "full name": 'shamsia Naimi', // is ko . se hum kabhi bhi access nahin karsakte kuk ye key hum ne "" men likhi he
    //hum ek symbolko object k ander ese declare ya istamal nahin karsakte , is k liye humen [] notation ka istamal karna parta he kisi symbol ko object k ander use karne k liye
    mySym: "mykey1",// ye masla nahin karega lekin agr iski data type dekhi jaye to JS ise as a string aur ek aam key ki tarah lega 
    // agr hume symbol ko refer karna he [] notation key men istamal karni hoga kuk ye syntax he Symbol ko likhna ka
    [mySym]: "mykey1", // access karne k liye bhi is Symbol ko [] square brackets chahiye, yahan ye as Symbol declare hua he nak ek aam key ki tarah
    age: 24,
    location: 'Zwolle',
    email: 'shamsia@google.com', //for .email
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday'] //yahan hum ne array dia he, hum yahan kuch bhi de sakte hen object bhi
}
//Objects ko access kese kia jata he
// console.log(jsUser.email);//agr key email baghair "" k likhi gaye he kisi object me to wo jsUser.email se access hosakti he
//console.log(jsUser["email"]);//error, kuk is men key email ki data type hamen batani parti he k ise ek string ki tarah lo agr [""] notation se access karna he to . k bajai
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);//suggestions men ye JS khud se tmhe [""] ye dega kuk dosra . wala tariqa access karne ka allow nahin he, humne key me specifically "" notation k sath key ka naam define kiya he
// console.log(typeof jsUser.mySym);
// console.log(jsUser[mySym]);

//object ki values ko change karne ka tariqa
jsUser.email = "SHAM@googl.com"
// Object.freeze(jsUser)//object ki values (ko lock karsakte hen)freeze hone k bad koi change nahi hua aur na aya values men agr hum koshish karen to bhi nahin karsakte
jsUser.email = "SH@google.com"
// console.log(jsUser);

//js men functions ko hum variables ki trah treat karsakte hen
jsUser.greeting = function(){
    console.log('Hello JS user!');
}
console.log(jsUser.greeting);//scope ka problem he yahan is wajah se output: function anonymous araha he, hamare pas ek function return back hok aya he, yahan function execute nahin hua he sirf function ka refrence aya he  
console.log(jsUser.greeting());// ye sahi he, object ko unfreeze krna parta he kuk hum object men ek method ko add karrahe hen

//hume object men jo name he use refrence karna he apne function men mtlb use istemal karna he
jsUser.greetingUser = function(){// hum yahan sub se pehle ise string '' se backticks `` men convert karenge 
    console.log(`Hello JS user! ${this.name}`);// agr apko same object ko refrence karna he to ap this istemal karsakte hen, yahan same object jsUser he 
}
console.log(jsUser.greetingUser());

