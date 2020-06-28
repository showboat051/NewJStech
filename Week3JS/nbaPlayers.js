const players = require('./NBAPlayers.json');
console.log(players.length);

let totalSalary = 0;
cleanUp(players);
console.log(players[0])

for (const player of players) {
    if (player.Team == "DAL") {
        // console.log(player.Player + ' plays ' + player.Position);
        totalSalary = player.Salary + totalSalary;
    }
}
console.log("The team total is " + totalSalary);
let dallas = getTeamMembers('GSW', players);
let scoring = getPoints(dallas);
console.log(scoring);
let people = getPosition('Small Forward', players);
console.log(people);
let theTeam = getTeamRoster('DAL', players)
printRoster(theTeam);
let teamScored = getPoints(theTeam);
console.log(teamScored);

let smSalary = getSalary(theTeam);   
console.log(smSalary / theTeam.length);

function getTeamMembers(team, playerList) {
    let teamMembers = [];
    for (p of playerList) {
        if (p.Team == team) {
            teamMembers.push(p)
        }
    }
    return teamMembers;
}

function getPosition(Position, playerList) {
    let Positions = [];
    for (c of playerList) {
        if (c.Position == Position) {
            Positions.push(c)
        }
    }
    // console.log("Here are the centers" + centers);
    return Positions;
}

function getSalary(playerList) {
    let totalSalary = 0;
    for (const player of playerList) {
        totalSalary += player.Salary;
    }
    return totalSalary;
}


function getPoints(playerList) {
    let totalPoints = 0;
    for (const player of playerList) {
        totalPoints += player.Points
    }
    return totalPoints;
}

let perMinute = dollarsPerMinute(players[0])
// console.log(players[0].Player + ' earns ' + perMinute + ' dollars per minute');
function dollarsPerMinute (player) {
    let minutesInYear = player.MinutesPerGame * player.GamesPlayed;
    let average = player.Salary / minutesInYear;
    return average;
}

let theScore = pointsPerSeason(players[0])
// console.log( players[0].Player + " averages " + theScore + " per season. ");
function pointsPerSeason (player) {
    let totalScored = player.GamesPlayed * player.Points;
    let averageScored = totalScored / player.GamesPlayed
    return averageScored;
}

function getPlayersByPosition(position, playerList) {
    let roster = [];
    for (const nextPlayer of playerList) {
        if (nextPlayer.Position == position) {
            roster.push(nextPlayer);
        }
    }
    return roster;
} // getPlayersByPosition ()


function getPlayersAboveX(salary, playerList) {
    let roster = [];
    for (const player of playerList) {
        if (player.Salary >= salary) {
            roster.push(player);
        }
    }
    return roster;
} // getPlayersAboveX ()

function getTeamRoster(team, playerList) {
    let roster = [];
    for(const player of playerList) {
        if (player.Team == team) {
            roster.push(player)
        }
    }
    return roster;
}// getTeamRoster()


function printRoster(playerList){
    for (player of playerList) {
        console.log(player);
    }
}

let plName = getPlayerByName('Luka Doncic', players)
// console.log(plName);
 plName = getPlayerByName('Stephen Curry', players)
// console.log(plName);

function getPlayerByName (player, playerList) {
    for (x of playerList) {
        if ( x.Player == player) {
            return x;
        }
    }
    return null;
} // getPlayerByName ()


function salaryPerGame () {
    let gameCheck = Player.Salary / Player.GamesPlayed;
    return "This player earns" + gameCheck + " per game";
}

let productivity = dollarsPerPoint (player)
console.log(player.Player + productivity + " per point ");
function dollarsPerPoint (player) {
    let calcSalary = player.Salary / (player.Points * player.GamesPlayed);
    return calcSalary;
}

function cleanUp(players) {
    for (const player of players) {
        player.Salary |= 0;
        player.GamesPlayed |= 0;
        player.MinutesPerGame |= 0;
        player.FGMade |= 0;
        player.FGAttempts |= 0;
        player.ThreePMade |= 0;
        player.ThreePAttempts |= 0;
        player.FTMade |= 0;
        player.FTAttempts |= 0;
        player.Turnovers |= 0;
        player.Fouls |= 0;
        player.OffensiveRebounds |= 0;
        player.DefensiveRebounds |= 0;
        player.Rebounds |= 0;
        player.Assists |= 0;
        player.Steals |= 0;
        player.Blocks |= 0;
        player.Points |= 0;
    }
}