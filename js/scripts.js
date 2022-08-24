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



function startTurn(player, turnNumber) {
  //console.log(call(player1))
  let thing = document.getElementById("player1Info").innerText
  document.getElementById("start").setAttribute("class", "hidden");
  let roll = diceRoll()
    if (roll === 0) {
      //sorry you rolled a 1
      console.log("rolled a 1")
      document.getElementById("eT1").removeAttribute("class");
    } else {
      //we need to output the number rolled
      console.log(roll)
      console.log("its turn number: " + turnNumber)
      console.log("turn started")
      console.log(player)
      document.getElementById("kG1").removeAttribute("class");
      document.getElementById("eT1").removeAttribute("class");
    }
  
  turnNumber += 1
  return [turnNumber, roll]
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
  let turnNumber = 1

  document.querySelector("button.keepGoing").addEventListener("click", function (event) {
    event.preventDefault();
    let roll = diceRoll()
    if (turnNumber %2 === 0) {
      if (roll === 0) {
        player1.turnScore = 0
        document.getElementById("kG1").setAttribute("class", "hidden");
      } else (player1.turnScore += roll)
    }
    if (turnNumber %2 === 1) {
      if (roll === 0) {
        player2.turnScore = 0
        document.getElementById("kG1").setAttribute("class", "hidden");
      } else (player2.turnScore += roll)
    }
    
  });



  document.querySelector("button.endTurn").addEventListener("click", function (event) {
    event.preventDefault()
    player1.currentScore += player1.turnScore;
    player2.currentScore += player2.turnScore;
    player1.turnScore = 0
    player2.turnScore = 0
    console.log("hold it right there!")
    document.getElementById("start").removeAttribute("class");
    document.getElementById("kG1").setAttribute("class", "hidden");
    document.getElementById("eT1").setAttribute("class", "hidden");
    scoreLimit(player1)
    scoreLimit(player2)
  });

  document.querySelector("button.startTurn").addEventListener("click", function(event) {
    event.preventDefault()
    if (turnNumber %2 === 1) {
      let startOut = startTurn(player1, turnNumber)
      console.log(startOut)
      turnNumber = startOut[0]
      player1.turnScore = startOut[1]
      console.log(player1)

    } else {
      let startOut = startTurn(player2, turnNumber)
      console.log(startOut)
      turnNumber = startOut[0]
      player2.turnScore = startOut[1]
      console.log(player2)
    }
  })
}

window.addEventListener("load", function (){
  document.querySelector("form#newGame").addEventListener("submit", beginGame); 
  
});