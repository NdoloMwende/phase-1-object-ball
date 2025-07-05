console.log('Simple debugging example running.')
debugger

let x = 99
debugger
console.log(x)


function numPointsScored(name){
    const pointsScored =gameObject();
    const allPlayers={
        ...pointsScored.home.players,
        ...pointsScored.away.players
    };
    const player=allPlayers[name];
    if (!player) {
    console.log(`${name} is not a valid player.`);
    return;
  }
    const{points}=player
    console.log(`${name}: ${points}`);
    return points;
}
numPointsScored("Jeff Adrien");


function shoeSize(name){
    const game=gameObject();
     const allPlayers={
        ...game.home.players,
        ...game.away.players
    };
    console.log(allPlayers);
    for(let key in allPlayers){          
        if (key===name.trim()){
            const{shoe}=allPlayers[key]
            console.log(`${name}'s shoe size is ${shoe}`);
            return shoe;
        };          
    }  
        console.log(`${name} is not a player`);
    return null;
}
shoeSize("Jeff Adrien");
//Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(nameOfTeam){
    const game=gameObject();
    const teams =Object.values(game);
    for(let team of teams){
        if(team.teamName.trim()===nameOfTeam.trim()){
            console.log(team.colors)
        return;
        }
    }
            console.log("Team not found");
        }      
teamColors("Charlotte Hornets")
//Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}
teamNames();
console.log(teamNames());
//Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team.
function playerNumbers(teamName) {
  const game = gameObject();
  const teams = Object.values(game); 

  for (let team of teams) {
    if (team.teamName.trim() === teamName.trim()) {
      const players = Object.values(team.players); 
      const numbers = players.map(player => player.number); 
      return numbers;
    }
  }
  return "Team not found";
}
playerNumbers("BrooklynNets");
//Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats.
function playerStats(name) {
  const game = gameObject();
  const allPlayers = {
    ...game.home.players,
    ...game.away.players
  };

  const player = allPlayers[name.trim()];
  
  if (!player) {
    console.log(`error ${name} not found`)
    return; 
  }
  console.log(player);
  return player; 
}
playerStats("")
