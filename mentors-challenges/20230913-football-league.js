/**
 * In a football league, matches are not only won by teams but players who excel on the field can also be recognized as the Most Valuable Player (MVP) of the match.
 * You can assume that only 20 teams in this league and home/away team will face each other only 2 times for each season.
 * Given an example list of matches and their scores
 * Rule
 * 3 points for winner
 * Draw - 1 point for each other
 * 0 point for lose
 * Questions
 * Determines the winner of the league
 * Find the player who has been awarded the most MVP titles throughout the season.
 * MVP will consider from winner team
 * If draw, Assume there is no MVP on the match
 */


const jsonData = require('./names-male.json');

function randomPlayer(length) {
  let playerName = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;
  let character = 0;
  while (character < length) {
    playerName += characters.charAt(Math.floor(Math.random() * charactersLength));
    character += 1;
  }
  return playerName;
}

function getPlayer(nameData) {
  let names = nameData.data.length;
  const random = Math.floor(Math.random() * names);
  return nameData.data[random];
}

function getTeamPlayers() {
  let playersList = {};
  for (let team = 1; team <= 20; team ++) {
    const roasters = [];
    for(let player = 1; player <= 25; player ++) {
      const newPlayer = getPlayer(jsonData);
      roasters.push(newPlayer)
    }
    if(!playersList[`Team${team}`]) playersList[`Team${team}`] = roasters;
  }
  return playersList;
}

const myTeamPlayers = getTeamPlayers();

const getMatchDatas = (teams) => {
  const matchData = [];
  for (let home = 1 ; home <= 20 ; home ++) {
    for (let away = 1 ; away <= 20 ; away ++) {
        if (home != away){
            const homeScore = Math.floor(Math.random() * 5);
            const awayScore = Math.floor(Math.random() * 5);
            let mvp;
            if( homeScore === awayScore ) 
              mvp = null;
            if( homeScore > awayScore ) 
              mvp = teams[`Team${home}`][[Math.floor(Math.random() * 25)]];
            if( homeScore < awayScore )
              mvp = teams[`Team${away}`][Math.floor(Math.random() * 25)];
            const newMatch = {
                "home": `Team${home}`,
                "away": `Team${away}`,
                "homeScore": homeScore,
                "awayScore": awayScore,
                "MVP": mvp,
            };
            matchData.push(newMatch);
        }
    }
  }
  return matchData;
}

const myMatches = getMatchDatas(myTeamPlayers);
// console.log(myMatches);

const getTeamScores = (teamMatches) => {
  const scores = {};
  for (let match of teamMatches) {

    if(!scores[match.home]) scores[match.home] = 0;
    if(!scores[match.away]) scores[match.away] = 0;

    if (match.homeScore === match.awayScore) {
      scores[match.home] +=1;
      scores[match.away] +=1;
    }

    if (match.homeScore > match.awayScore) {
      scores[match.home] +=1;
    }

    if (match.homeScore < match.awayScore) {
      scores[match.away] +=1;
    }
  }
  return scores;
}

const myScores = getTeamScores(myMatches);
console.log(myScores);

const findLeaugeWinner = (teamScores) => {
  let winner;
  let winnerScore = 0;
  for (let team in teamScores){
    if(teamScores[team] > winnerScore) {
      winnerScore = teamScores[team];
      winner = team;
    }
  }
  return winner;
}

const champion = findLeaugeWinner(myScores);
console.log(`Winner is ${champion}`);

const getPlayerMVPCount = (teamMatches) => {
  const playersMVP = {};

  for (let match of teamMatches) {
    const mvpPlayer = match['MVP'];
    
    if(!playersMVP[mvpPlayer]) playersMVP[mvpPlayer] = 0;
    playersMVP[mvpPlayer] += 1;
  }
  return playersMVP;
}

const myPlayerMVPCount = getPlayerMVPCount(myMatches);
console.log(myPlayerMVPCount);

const findLeaugeMVP = (playerScores) => {
  let mvp;
  let mvpScore = 0;
  for (let player in playerScores){
    if(playerScores[player] > mvpScore) {
      if(player!= 'null')
      {
        mvpScore = playerScores[player];
        mvp = player;
      }
    }
  }
  return mvp;
}

const myMVP = findLeaugeMVP(myPlayerMVPCount);
console.log(`MVP Player is ${myMVP}`);