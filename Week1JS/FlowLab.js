let numSpell = numberConvert(7);

console.log(numSpell);

function numberConvert(input) {
    let num;
    switch (input) {
        case 0:
            num = "ZERO";
            break;
        case 1:
            num = "ONE";
            break;
        case 2:
            num = "TWO";
            break;
        case 3:
            num = "THREE";
            break;
        case 4:
            num = "FOUR";
            break;
        case 5:
            num = "FIVE";
            break;
        case 6:
            num = "SIX";
            break;
        case 7:
            num = "SEVEN";
            break;
        case 8:
            num = "EIGHT";
            break;
        case 9:
            num = "NINE";
            break;
        default:
            num = "This is not recongnized at all "
            break;
    } // end of switch
    return num;

} // numberConvert()

function alphabet(letter) {
    let word;
    switch (letter) {
        case "a":
            word = "Apple";
            break;
        case "b":
            word = "bat";
            break;
        case "c":
            word = "cat";
            break;
        case "d":
            word = "dog";
            break;
        case "e":
            word = "Egg";
            break;
        case "f":
            word = "Fox";
            break;
        case "g":
            word = "Gate";
            break;
        case "h":
            word = "Hat";
            break;
        case "i":
            word = "Igloo";
            break;
        case "J":
            word = "Joy";
            break;
        case "K":
            word = "Kite";
            break;
        case "L":
            word = "Lake";
            break;
        case "M":
            word = "Money";
            break;
        case "N":
            word = "Noun";
            break;
        case "O":
            word = "Ox";
            break;
        case "P":
            word = "Pipe";
            break;
        case "Q":
            word = "Quilt";
            break;
        case "R":
            word = "Rake";
            break;
        case "S":
            word = "Seal";
            break;
        case "T":
            word = "Tea";
            break;
        case "U":
            word = "Umbrella";
            break;
        case "V":
            word = "Violin";
            break;
        case "W":
            word = "Watermelon";
            break;
        case "X":
            word = "Xylophone";
            break;
        case "Y":
            word = "YO-YO";
            break;
        case "Z":
            word = "Zipper";
            break;
        default:
            word = "Don't know what that is at all"
            break;
    } // end of switch
    return word;
} // alphabet()

function militaryCode (codeInput) {
let code;
switch (codeInput) {
    case "A": code = "Alpha"; break;
    case "B": code = "Bravo"; break;
    case "C": code = "Charlie"; break;
    case "D": code = "Delta"; break;
    case "E": code = "Echo"; break;
    case "F": code = "Foxtrot"; break;
    case "G": code = "Golf"; break;
    case "H": code = "Hotel"; break;
    case "I": code = "India"; break;
    case "J": code = "Juliett"; break;
    case "K": code = "Kilo"; break;
    case "L": code = "Lima"; break;
    case "M": code = "Mike"; break;
    case "N": code = "November"; break;
    case "O": code = "Oscar"; break;
    case "P": code = "Papa"; break;
    case "Q": code = "Quebec"; break;
    case "R": code = "Romeo"; break;
    case "S": code = "Sierra"; break;
    case "T": code = "Tango"; break;
    case "U": code = "Uniform"; break;
    case "V": code = "Victor"; break;
    case "W": code = "Whiskey"; break;
    case "X": code = "X-ray"; break;
    case "Y": code = "Yankee"; break;
    case "Z": code = "Zulu"; break;
}// end of switch
return code;
}// militaryCode ()

let army = militaryCode("Z");
let letterSpell = alphabet("i");
letterSpell = alphabet("g");
console.log(letterSpell);
console.log(army);