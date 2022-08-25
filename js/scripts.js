function Player(currentScore, turnScore, playerNumber) {
  this.currentScore = currentScore;
  this.turnScore = turnScore; 
  this.playerNumber = playerNumber;
}

function diceRoll() {
  let roll = Math.floor(Math.random() * 6) + 1
  if (roll === 1) {
    return 1
  } else {
    return roll
  }
}

function scoreLimit(currentPlayer) {
  if (currentPlayer.currentScore >= 100) {
    gameOver(currentPlayer)
  }
}

function sumRoller (array) {
  let sum = 0
  let oneCheck = 0
  array.forEach(function(i) {
    sum += i
    if (i === 1) {
      oneCheck = 1
    }
  });
  
  if (oneCheck != 0) {
    return 0
  } else {
    return sum
  }
}



//User Logic

function startTurn(player) {
  document.getElementById("start").setAttribute("class", "hidden");
  let roll = diceRoll()
  document.getElementById("showRoll").removeAttribute("class")
    if (roll === 1) {
      document.getElementById("roll").innerText = "1, Sorry"
      document.getElementById("eT1").removeAttribute("class");
    } else {
      document.getElementById("roll").innerText = roll
      document.getElementById("kG1").removeAttribute("class");
      document.getElementById("eT1").removeAttribute("class");
    }
  return roll
}

function gameOver(winner) {
  document.getElementById("gameOver").removeAttribute("class");
  document.getElementById("winner").innerText = winner.playerNumber;
  document.getElementById("sT1").setAttribute("class", "hidden")
  document.getElementById("turnid").setAttribute("class", "hidden")
}

function beginGame(event) {
  event.preventDefault()
  document.getElementById("theButton").setAttribute("class", "hidden")
  document.getElementById("sT1").removeAttribute("class")
  document.getElementById("turnid").removeAttribute("class")
  let player1 = new Player(0, 0, 1)
  let player2 = new Player(0, 0, 2)
  let turnNumber = 1
  let rollsSoFar = []
  document.querySelector("button.keepGoing").addEventListener("click", function (event) {
    event.preventDefault();
    let roll = diceRoll()
    document.getElementById("rollsSoFar").removeAttribute("class")
    if (turnNumber %2 === 0) {
      if (roll === 1) {
        player1.turnScore = 0
        document.getElementById("roll").innerText = "1, Sorry"
        document.getElementById("kG1").setAttribute("class", "hidden");
        rollsSoFar.push(roll)
      } else {
        player1.turnScore += roll
        document.getElementById("roll").innerText = roll
        rollsSoFar.push(roll)
      }
    }
    if (turnNumber %2 === 1) {
      if (roll === 1) {
        player2.turnScore = 0
        document.getElementById("roll").innerText = "1, Sorry"
        document.getElementById("kG1").setAttribute("class", "hidden");
        rollsSoFar.push(roll)

      } else {
        player2.turnScore += roll
        document.getElementById("roll").innerText = roll
        rollsSoFar.push(roll)
      }
    }
    document.getElementById("allRolls").innerText = rollsSoFar;
    document.getElementById("sumOfRolls").innerText = sumRoller(rollsSoFar)
  });

  document.querySelector("button.endTurn").addEventListener("click", function (event) {
    event.preventDefault()
    document.getElementById("showRoll").setAttribute("class", "hidden");
    player1.currentScore += player1.turnScore;
    player2.currentScore += player2.turnScore;
    player1.turnScore = 0
    player2.turnScore = 0
    document.getElementById("score1").innerText = player1.currentScore;
    document.getElementById("score2").innerText = player2.currentScore;
    document.getElementById("start").removeAttribute("class");
    document.getElementById("kG1").setAttribute("class", "hidden");
    document.getElementById("eT1").setAttribute("class", "hidden");
    document.getElementById("playerTurn").innerText = turnNumber;
    scoreLimit(player1)
    scoreLimit(player2)
    rollsSoFar = []
    document.getElementById("rollsSoFar").setAttribute("class", "hidden");
  });

  document.querySelector("button.startTurn").addEventListener("click", function(event) {
    event.preventDefault()
    if (turnNumber %2 === 1) {
      let startOut = startTurn(player1)
      turnNumber = 2
      if (startOut != 1) {
        player1.turnScore = startOut
        rollsSoFar.push(startOut)
      }
    } else {
      let startOut = startTurn(player2)
      turnNumber = 1
      if (startOut != 1) {
        player2.turnScore = startOut
        rollsSoFar.push(startOut)
      }
    }
  })
}

window.addEventListener("load", function (){
  document.querySelector("form#newGame").addEventListener("submit", beginGame); 
});

function refreshPage(){
  window.location.reload();
} 