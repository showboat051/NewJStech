const passengers = require('./titanic.json');
console.log(passengers.length);
// --------------------------Survivors-----------------------------
let survivors = passengers.filter(p => p.Survivor == "T");
console.log(survivors.length);

// --------------------------Total Passengers-----------------------------
passengers.forEach(p => p.Age |= 0)
// console.log(passengers[0]);

//------------------------------ Total age of survivors--------------------
let totalAge = survivors.age
const averAge = (age, survivors) => age / survivors;
// console.log(survivors.reduce(averAge));

//------------------------------ How many in 3rd class over 60--------------------
let thirdClass60 = passengers.filter(p => p.Class === '3rd Class' && p.Age >= 60 ).length;
console.log("There were " + thirdClass60 + " in 3rd class");

//--------------------------  find the captain -----------------------------------
let captain = passengers.filter(c => c.FirstName.startsWith('Capt'));
// console.log(" There were "+ captain +" captains on the Titanic");
// console.table(captain);

//------------------- how many crew died----------------------------
let crewCount = passengers.filter(c => c.PassengerOrCrew === 'Crew').length;
console.log("The crew was " + crewCount + " deep");
let crew = passengers.filter(c => c.PassengerOrCrew === 'Crew' && c.Survivor === 'F').length;
console.log("There were "+ crew + " crew members on the Titanic who perished ");

//-------------------- find the Musicians----------------------------
let COUNTmusicPlayers = passengers.filter(m => m.Role === 'Musician').length;
let musicPlayers = passengers.filter(m => m.Role === 'Musician');
let NAMEmusicPlayers = musicPlayers.forEach(m => console.log(m.FirstName+ " was a musician "));

//---------------------  get list of women-----------------------------------------
let women = passengers.filter(f => f.FirstName.startsWith('Mrs') || f.FirstName.startsWith('Miss')).length;
console.log("There were " + women + " women onboard the Titanic ");

let titles = new Set( passengers.map(p => p.FirstName.split(" ")[0]));
console.log(titles);
titles.forEach(t => console.log(t))

// 3rd class passengers over 60
//      hint FirstName starts with Capt
//      how many captains are there