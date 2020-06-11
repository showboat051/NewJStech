function getSeconds() {
    let date = new Date();
    let seconds = date.getSeconds();
    return seconds;
}

let curSeconds = getSeconds();
console.log("Current Seconds is " + curSeconds);

function getHours() {
    let date = new Date();
    let hours = date.getHours();
    return hours;
}

let curHour = getHours();
console.log("The current hour is " + curHour);

function posOfName(name) {

    name.split('').forEach(function (letter) {
        console.log(letter[0]);
    })

} // posOfName()

posOfName("easy");

// let nameIdx = posOfName();
// console.log(nameIdx);

function capitalize(word) {

    let curSeconds = getSeconds();
    if (curSeconds < 30) {
        word = word.toUpperCase();
        console.log("This word was capitalized with " + curSeconds + " on the clock");
    } else {
        word = word.toLowerCase();
        console.log("This word was NOT capitalized with " + curSeconds + " on the clock since it is OVER 30 seconds");
    }

    return word;
}

let upper = capitalize("Hello");
console.log(upper);
upper = capitalize("Hello there");
console.log(upper);
upper = capitalize("Hello how are you doing, feeling good feeling great how are you?");
console.log(upper);