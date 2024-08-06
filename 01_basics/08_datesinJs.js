//Dates, months 0 se start hote hen javascript men

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

let myCreatedDate = new Date(2023, 6, 6)//year-month-day
// console.log(myCreatedDate.toDateString());
let myCreatedDate1 = new Date(2023, 6, 6, 5, 3)// last two are hour, minute (05:03 AM)
// console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date('2023-01-18')//agr ap dd-mm--yy karte hen tab jan 1 yani first month hoga 1 se nak 0 se
// console.log(myCreatedDate2.toLocaleString());//month-date-year

let myCreatedDate3 = new Date('07-08-2024')//ye sahi he date-month-year
// console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now() //comparison hamesha ms me karna mtlb time stamp me
// console.log(myTimeStamp);//time in ms from 1970 till now
// console.log(myCreatedDate.getTime());//time in ms from 1970 1st jan

//to convert the above ms time in seconds
// console.log(Math.floor(Date.now()/1000));//decimal k bad wale 3 numbers remove karne k liye kuk 345.456

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);//kuk month 0 = January he isliye +1 kiya
console.log(newDate.getFullYear());
//'${newDate.getDay()} and the time is... '

//is method men ap ek object define karte hen isliye ye bhot interesting he, kuk apk pas azadi select karne ki multiple chizen ek date k liye,localestring men ap ek object define karte hen
console.log(newDate.toLocaleString('default', {
        weekday: 'long',
    }
));

