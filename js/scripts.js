function Player(currentScore, turnScore, playerNumber, loopBreak) {
  this.currentScore = currentScore;
  this.turnScore = turnScore; 
  this.playerNumber = playerNumber;
  this.loopBreak = loopBreak;
}

function diceRoll() {
  let roll = Math.floor(Math.random() * 6) + 1
  console.log("roll is : " + roll)
  if (roll === 1) {
    return 0
  } else {
    return roll
  }
}




function runTurn(player) {
  player.turnScore = diceRoll()
  if (player.turnScore === 0) {
    console.log("you rolled a zero")
    return
  } else { 
    player.currentScore += player.turnScore
    //add the 2 event listeners
    //add functions to handle them?
    // the hold function will add turnscore to currentscore
    // the keepgoing function will roll again and add to turnscore and reask the player if they wanna keep going
  }
}


function turnOrder(player1, player2) {
  let breaknum = 0
  let turnNumber = 0
  while (true) {
    turnNumber += 1
    if (turnNumber %2 === 1) {
      console.log("player 1's turn")
      runTurn(player1)
      scoreLimit(player1)
    } else {
      console.log("player 2's turn")
      runTurn(player2)
      scoreLimit(player2)
    }
    console.log(player1.currentScore)
    console.log(player2.currentScore)
    //player2.currentScore += 10
    breaknum += 1
    if (player1.loopBreak === 1 || player2.loopBreak === 1) {
      break;
    }
    //if (breaknum === 30) {
      //console.log("we hit the breaknum")
      //break;
    //}
  }
}



function startTurn() {
  console.log("turn started")
  document.getElementById("start").setAttribute("class", "hidden");
  document.getElementById("kG1").removeAttribute("class");
  document.getElementById("eT1").removeAttribute("class");
}

function keepGoing() {
  console.log("Keep GOING!")
}
function endTurn() {
  console.log("hold it right there!")
  document.getElementById("start").removeAttribute("class");
  document.getElementById("kG1").setAttribute("class", "hidden");
  document.getElementById("eT1").setAttribute("class", "hidden");
  
}












function scoreLimit(currentPlayer) {
  if (currentPlayer.currentScore >= 100) {
    gameOver(currentPlayer)
  }
}

function gameOver(winner) {
  console.log("the game is over")
  //build something here that hides the other options they would use to play the game
  document.getElementById("gameOver").removeAttribute("class");
  document.getElementById("winner").innerText = winner.playerNumber;
  winner.loopBreak = 1
  //maybe add something so they can play again

}

function beginGame(event) {
  event.preventDefault()
  document.getElementById("theButton").setAttribute("class", "hidden")
  document.getElementById("sT1").removeAttribute("class")
  console.log("we pushed the button")
  let player1 = new Player(0, 0, 1, 0)
  let player2 = new Player(0, 0, 2, 0)
  document.querySelector("button.keepGoing").addEventListener("click", keepGoing);
  document.querySelector("button.endTurn").addEventListener("click", endTurn);
  document.querySelector("button.startTurn").addEventListener("click", startTurn);

}

window.addEventListener("load", function (){
  document.querySelector("form#newGame").addEventListener("submit", beginGame); 
  
});

//document.querySelector("button.dele").addEventListener("click", handleDelete);


/* html needs: a way to display dice rolls, and buttons for user actions

js needs: to run each turn and have listeners for those buttons
*/
