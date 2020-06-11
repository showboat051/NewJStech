// // --------------------  #4-------------------------
// let empty = [];
// empty.push("Java");
// empty.push("C#");
// empty.push("Node.js");
// empty.push("HTML");
// empty.unshift("CSS3");
// empty.shift();
// empty.push("CSS3");
// empty.sort();
// for (entry of empty) {
//     console.log(entry);
// }
// console.log(empty);
// ------------------------# 5 -----------------
// let empty = [];
// empty.push("Java");
// empty.push("C#");
// empty.push("Node.js");
// empty.push("HTML");
// empty.unshift("CSS3");
// empty.shift();
// empty.push("CSS3");
// empty.sort();
// empty.forEach(entry => {
//     if(entry.startsWith("C")) {
//         console.log(entry + "Starts with C")
//     }
// });

let empty = [];
empty.push("Java");
empty.push("C#");
empty.push("Node.js");
empty.push("HTML");
empty.unshift("CSS3");
empty.shift();
empty.push("CSS3");
empty.sort();
empty.forEach(lang => {
    if(lang.length == 4) {
        console.log(lang + " These are 4 long");
    } else if (lang.length >= 6) {
        console.log(lang + " These are bigger than six ")
    }
});

console.log(empty);



let tenNums = [5, 2, 32, 84, 9, 21, 99, 100, 1, 76];
let eightStrings = ["Quiz", "Six", "Vitamin", "Book", "Gold", "Stone", "Bottle", "Door"]