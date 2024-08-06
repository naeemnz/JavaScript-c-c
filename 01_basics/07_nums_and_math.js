// +++++Numbers++++++++
const score = 500
// console.log(score);

const balance = new Number(200)
// console.log(balance);

// console.log(balance.toString().length);
//komma k bad number of values dega decimal digits after komma
// console.log(balance.toFixed(4));

const otherNumber = 25.8999997
//decimal se pehle priority milti he number ko
// console.log(otherNumber.toPrecision(4)); //string return karta he

const hundreds = 100000
// console.log(hundreds.toLocaleString());//for us standard
// console.log(hundreds.toLocaleString('en-NL'));
// console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++Maths+++++++++
console.log(Math); //yahan ziada values show nahin hongi isse related functions ki
console.log(Math.abs(-5));
console.log(Math.round(3.6));
console.log(Math.ceil(3.6));//agr 3 se ziada ho to round off hoga 4 ki taraf ya 4 aiga
console.log(Math.floor(3.6));//agr 3 se ziada ho to bhi ye lowest value  lega jo 3 he
console.log(Math.min(2,34,45,67,89));//in een array
console.log(Math.max(2,34,45,67,89));
console.log(Math.random());//value hamesha 0 aur 1 k beech se dega ya hogi, 0 inclusive he aur one exclusive he
console.log(Math.random()*10+1);//ye ensure karne k liye k value kabhi zero nahin ayegi, 1 aygi ya usse ziada for example dice game ka score lo, kuk math.random 0.04 value bhi desakta he jo k 10 se multiply hone k bawajod 0 rahe gi
console.log((Math.random()*10) + 1)
console.log((Math.floor(Math.random()*10)) + 1)// agr ek hi number chahiye to hum yahan floor usey

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);















