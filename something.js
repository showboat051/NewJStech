let ar1 = [3,3,65,3,2,3,5,3];
let ar2 = [1,2,1,12,32,3,1,1,2,1,3,1];
let smallNumbers = ar2.filter(x => x <= 3)
let allPositive = ar1.every(x => x < 50);

let lookingFor12 = ar2.find(x => x == -12)
if (lookingFor12 === undefined)
    console.log('-12 was not in the array');


    // #1 
let ar3 = ar1.concat(ar2);
console.log(ar3);
    
    // #2
const isUnder50 = (num) => num < 50;
console.log(ar1.every(isUnder50));
const moreThan50 = (num2) => num2 > 0;
console.log(ar2.every(moreThan50)); 

    // 3
const evenNum = ar3.filter(n => n % 2 === 0 )
console.log(evenNum);

    // #4
const numFound = ar1.find(n => n > 10);
console.log(numFound);

    // #5
const indexOver10 = ar1.findIndex(n => n > 10);
console.log(indexOver10);

    // #6
const each = ar2.forEach(e => console.log(e));

    // #7
const has64 = ar1.includes(65);
console.log(has64);

    // #8
const n = ar1.lastIndexOf(65);
const num = ar2.indexOf(3);
const lst = ar2.lastIndexOf(3);
console.log(num);
console.log(n);
console.log(lst);

    // #9
const str = ar2.join('-');
console.log(str);

    // #10
 ar1.push(-1);
 ar1.unshift(-1);
console.log(ar1);

    // #11
const org = ar1.sort()
org.forEach(n => console.log(n));
const rev = ar1.reverse()
rev.forEach(n => console.log(n));

    // #12
var gtrThan = (n) => n > 64;
console.log(ar1.some(gtrThan));

