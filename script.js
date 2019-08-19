const startGame = () => {
  const play = prompt("Do you want to play a game");
  if (play === "no") {
    console.log("bye");
  } else if (play === "yes") {
  user = prompt("What is your name?");
  startCombat(user);
  }
}

const getDamage = () => {
  return Math.floor(Math.random()*5+1);
}

const startCombat = (user) => {

class Player {
  constructor(name, health) {
    this.name = user;
    this.health = health;
  }
  getDamage () {
  return Math.floor(Math.random()*5+1);
  }
}

class Computer {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
   getDamage () {
  return Math.floor(Math.random()*5+1);
  }
}

 let playerOne = new Player(user, 40);
 let Grant = new Computer('Grant', 10); 
 let playerWins = 0;
 

while (playerOne.health >= 0 && playerWins <= 3) {
  const attack = prompt("Do you want to attack or quit?");
  if (attack === "quit") {
    console.log("bye");
    break;
  } if (!attack) {
    continue;
  } else if (attack === "attack") {
 
 playerOne.health -= getDamage();
 Grant.health -= getDamage();
  console.log(getDamage());
  console.log(`Grant has ${Grant.health} health`);
  console.log(`${playerOne.name} has ${playerOne.health} health`);
}

if (playerOne.health >= 0 && playerWins <= 3) {
  if (Grant.health <= 0) {
    Grant.health = 10;
    playerWins ++;
    console.log(`${playerOne.name} has beaten Grant. ${playerOne.name} must win ${3 - playerWins} more time(s).`);  
  } if (playerWins === 3) {
      console.log(playerOne.name + " has won the game!");
      break;
  } if (playerOne.health <= 0) {
      console.log("Grant has won the game!");
      break; 
  }      
  
}
}
}
startGame();


