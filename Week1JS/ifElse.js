let hoursOfSleep = 8;
let activity = whatAmIDoing(hoursOfSleep);
console.log(activity);

function whatAmIDoing(hoursOfSleep) {
    if (hoursOfSleep <= 5) {
        return "It will be a long day of restlessness";
    } else if (hoursOfSleep == 6 || hoursOfSleep == 7) {
        return "I won't be as tired and should be productive throughout the day";
    } else if (hoursOfSleep => 8) {
        return " I won't get tired.  It might be too much sleep but it would be for the best.  I should do this more often";
    } 
}


let hour = Date.getHours();
console.log(hour);
let dayPlan = whatAreYouDoing(); 
function whatAreYouDoing() {
    if (hour == 1) {
    return "";
    } else if (hoursOfSleep <8) {
        return " Today MIGHT be a struggle";
    }
}

console.log(dayPlan);
