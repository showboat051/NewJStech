// Find all volcanos that errupted in the 1970s
// Find all volcanos that errupted in United States
// Find volcano that produced the most number of deaths
// Find number of volcanos by each type of volcano, 
// e.g. Shield volcano, Stratovolcano, Caldera, etc.
// Find number of volcanoes by country e.g. United States, 
// Russia, etc.

const volcanoes = require('./volcano.json');

// volcanoes.forEach(volcano => console.log(volcano.Name));

// let vol1970s = volcanoes.filter(v => v.Year >= 1970 && v.Year <= 1979)
// vol1970s.forEach(x => console.log(x.Name + " erupted in " + x.Year));

// let usVols = volcanoes.filter( v => v.Country == "United States")
// usVols.forEach(x => console.log(x.Name + " erupted in the United States "));

let mostDeaths = Math.max.apply(Math, volcanoes.map(function (volcanoes) {
    return volcanoes.DEATHS
}))
// let countryWmostDeaths = volcanoes.map(country => console.log(mostDeaths.country))
// console.log(countryWmostDeaths);
console.log(mostDeaths);
let italy = volcanoes.filter(v => v.Country === 'Italy' && v.Year < 800);

let italyBefore800 = volcanoes.filter(v => v.Country === 'Italy' && v.Year < 800);

let vVolcanoes = volcanoes.filter(v => v.Name.startsWith('V'));
// vVolcanoes.forEach(volcano => console.log(volcano.Name));


let totalDeaths = volcanoes.reduce((total, v) => total + v.DEATHS | 0, 0);
// console.log(totalDeaths);

// ------------------- number of deaths in the united states-------------
let deathsInUS = volcanoes.filter(v => v.Country === 'United States')

//--------------  number of deaths in the united states---------------------
let usDeaths = deathsInUS.reduce((total, v) => total + v.DEATHS | 0, 0);
console.log(usDeaths);

//  ---------------average elevation of all volcanoes-----------------------------------
let totalElevation = volcanoes.reduce((total, v) => total + v.Elevation, 0);
let aveElevation = totalElevation / volcanoes.length;
console.log(totalElevation);
console.log("The average is " + aveElevation);


//  -------------------how many volcanoes erupted after 2000-----------------------
let howManyAfter2000 = volcanoes.filter(v => v.Year >= 2000).length;
console.log(howManyAfter2000 + " volcanoes erupted after the year 2000");


// ------- create an array of strings (use map) of the names of volcanoes in Chile after 1970s
let ChileVols = volcanoes.filter(v => v.Name && v.Country === 'Chile');
let Chile70s = ChileVols.filter(v => v.Year >= 1970);
let ChileVEI = ChileVols.filter(v => v.VEI > 4);

console.log(ChileVols.length + " volcanoes erupted " + " and " + Chile70s.length + " of them erupted after 1970 ");

//  create array of countries where there were more than 200 deaths after 1900
let after1900 = volcanoes.filter(v => v.DEATHS > 200 && v.Year > 1900);
let countAfter1900 = after1900.length;
// console.log("There were " + countAfter1900 + " volcanoes erupted after 1900");
// let nameAfter1900 = after1900.forEach(v => console.log(v.Name + " erupted in " + v.Year))


//  get array of volcanos in the US after 1900 above 2000 feet
let us1900Vols = volcanoes.filter(v => v.Country === 'United States' && v.Elevation > 2000 && v.Year > 1900)
let countUS1900Vols = us1900Vols.length;
console.log("There were " + countUS1900Vols + " with this criteria ");
let NAMEus1900Vols = us1900Vols.forEach(v => console.log(v.Name + " erupted in " + v.Year + " with an elevation of " + v.Elevation))

//---------------how many people died in that last set of volcanoes-------------
const reducer = (total, v) => v.DEATHS|0 + total;
let deathsOf1900Vols = us1900Vols.reduce(reducer)
us1900Vols.forEach(d => console.log(d.Name + " caused " + d.DEATHS + " death when it erupted "));
console.log("In total, " + deathsOf1900Vols + " perished");

//---------------------------how many volcanoes was that?---------------------------
let COUNTusVols = us1900Vols.length
console.log(COUNTusVols + " volcanoes were involved in this carnage ");

//----------------------------what are the names of the volca--------------------------
us1900Vols.forEach(d => console.log( d. Name + " was involved in this list"))
