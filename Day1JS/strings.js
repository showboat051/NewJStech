let quote = "We hold these truths to be self-evident, taht all men are created equal, taht they are endowed by their Creator with certain unalienable Rights, taht among these are Life, Liberty and the pursuit of Happiness. Taht to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.";
let findGov = quote.indexOf("Governments");
console.log(findGov);

let subFromAll = quote.substring(quote.indexOf('all'), quote.indexOf(' , '));
console.log(quote);

let change = quote.replace(/taht/g, "that");
console.log(change);

console.log(change.length)