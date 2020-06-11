let declaration = "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.";

console.log(" This quote is " + declaration.split(" ").length + " words long ");
wordArray = declaration.split(" ");

let sevenCharWords = [];
for (let w = 0; w < wordArray.length; w++) {
    if (wordArray[w].length <= 7 ){
        sevenCharWords.push(wordArray[w]);
    }
}
console.log(sevenCharWords);