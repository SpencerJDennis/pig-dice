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

function twoDiceRoll() {
  let roll1 = Math.floor(Math.random() * 6) + 1
  let roll2 = Math.floor(Math.random() * 6) + 1
  return [roll1, roll2]
}
  /*
  if (roll1 === 1 && roll2 === 1) {
    return [1, 1]
    //we do something
    //set currentScore to 0
    //hide the keep going
    //inform user of 2 zeros
  } else if (roll1 === 1 || roll2 === 1) {
    // hide keep going
    // inform user of 1 zero
    return [roll1, roll2]
  } else if (roll1 === roll2) {
    //we force a keepGoing
    //hide end turn
    // inform user of doubles
    return [roll1, roll2]
  } else {
    return [roll1, roll2]
    // return roll1 and roll2
    // show both keep going and end turn
  }*/



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

function start2Turn(player) {
  document.getElementById("start").setAttribute("class", "hidden");
  let arr = twoDiceRoll()
  return arr
}


function gameOver(winner) {
  document.getElementById("gameOver").removeAttribute("class");
  document.getElementById("winner").innerText = winner.playerNumber;
  document.getElementById("sT1").setAttribute("class", "hidden")
  document.getElementById("turnid").setAttribute("class", "hidden")
}

function begin2Game(event) {
  event.preventDefault()
  document.getElementById("theButton").setAttribute("class", "hidden")
  document.getElementById("twoDiceButton").setAttribute("class", "hidden")
  document.getElementById("sT1").removeAttribute("class")
  document.getElementById("turnid").removeAttribute("class")
  let player1 = new Player(0, 0, 1)
  let player2 = new Player(0, 0, 2)
  let turnNumber = 1
  let rollsSoFar = []
  document.querySelector("button.keepGoing").addEventListener("click", function (event) {
    event.preventDefault()
    console.log("Keep Going")
    let rolls = twoDiceRoll()
    document.getElementById("roll").innerText = rolls[0] + " and " + rolls[1]
      if (rolls[0] === 1 && rolls[1] === 1) {
        if (turnNumber === 2){
          //THIS IS PLAYER 1 bc we switch turn numbers in the start button
          player1.currentScore = 0
          player1.turnScore = 0
        } else {
          player2.currentScore = 0
          player2.turnScore = 0
        }
        //screw em
        document.getElementById("kG1").setAttribute("class", "hidden");
        document.getElementById("eT1").removeAttribute("class");
      } else if (rolls[0] === 1 || rolls[1] === 1) {
        if (turnNumber === 2){
          //THIS IS PLAYER 1 bc we switch turn numbers in the start button
          player1.turnScore = 0
        } else {
          player2.turnScore = 0
        }
        //make sum = 0
        document.getElementById("kG1").setAttribute("class", "hidden");
        document.getElementById("eT1").removeAttribute("class");
      } else if (rolls[0] === rolls[1]) {
        if (turnNumber === 2){
          //THIS IS PLAYER 1 bc we switch turn numbers in the start button
          rolls.forEach(function(i) {
            rollsSoFar.push(i)        
          })
          player1.turnScore = sumRoller(rollsSoFar)
        } else {
          rolls.forEach(function(i) {
            rollsSoFar.push(i)        
          })
          player2.turnScore = sumRoller(rollsSoFar)
        }
        //add to the list of rolls 
        //force them to keep going
        document.getElementById("eT1").setAttribute("class", "hidden");
        document.getElementById("kG1").removeAttribute("class");
      } else {
        if (turnNumber === 2){
          //THIS IS PLAYER 1 bc we switch turn numbers in the start button
          rolls.forEach(function(i) {
            rollsSoFar.push(i);       
          })
          player1.turnScore = sumRoller(rollsSoFar);
        } else {
          rolls.forEach(function(i) {
            rollsSoFar.push(i)        
          })
          player2.turnScore = sumRoller(rollsSoFar);
        }
        // add to the rolls 
        // give both options
        //reveal both
        document.getElementById("kG1").removeAttribute("class");
        document.getElementById("eT1").removeAttribute("class");
      }
      document.getElementById("allRolls").innerText = rollsSoFar;
      document.getElementById("rollsSoFar").removeAttribute("class");
      document.getElementById("sumOfRolls").innerText = sumRoller(rollsSoFar);











  })
  document.querySelector("button.endTurn").addEventListener("click", function (event) {
    event.preventDefault()
    document.getElementById("showRoll").setAttribute("class", "hidden");
    console.log("player 1 current then total: " + player1.currentScore + " " + player1.turnScore)
    console.log("player 2 current then total: " + player2.currentScore + " " + player2.turnScore)
    console.log("rolls from this turn: " + rollsSoFar)
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
    console.log("End Turn")
  })





  document.querySelector("button.startTurn").addEventListener("click", function (event) {
    console.log("Start Turn")
    event.preventDefault()
    console.log("here's the turn check" + turnNumber)
    if (turnNumber === 1) {
      //its player 1's turn
      console.log("player 1 began a turn")
      let rolls = start2Turn(player1)
      rolls.forEach(function(i) {
        rollsSoFar.push(i)        
      })
      document.getElementById("roll").innerText = rollsSoFar[0] + " and " + rollsSoFar[1]
      turnNumber = 2
      console.log("we changed the turnNumber to :" + turnNumber)
      if (rollsSoFar[0] === 1 && rollsSoFar[1] === 1) {
        //sorry dude
        player1.currentScore = 0
        player1.turnScore = 0
        document.getElementById("eT1").removeAttribute("class");
      } else if (rollsSoFar[0] === 1 || rollsSoFar[1] === 1) {
        //less bad
        player1.turnScore = 0
        document.getElementById("eT1").removeAttribute("class");
      } else if (rollsSoFar[0] === rollsSoFar[1]) {
        //spooky outcome
        player1.turnScore = sumRoller(rollsSoFar)
        document.getElementById("kG1").removeAttribute("class");
      } else {
        //normal jazz
        player1.turnScore = sumRoller(rollsSoFar)
        document.getElementById("kG1").removeAttribute("class");
        document.getElementById("eT1").removeAttribute("class");
      }
    
    
    
    } else {
      console.log("player 2 began a turn")
      let rolls = start2Turn(player2)
      rolls.forEach(function(i) {
        rollsSoFar.push(i)
      })
      document.getElementById("roll").innerText = rollsSoFar[0] + " and " + rollsSoFar[1]
      turnNumber = 1
      if (rollsSoFar[0] === 1 && rollsSoFar[1] === 1) {
        //sorry dude
        player2.currentScore = 0
        player2.turnScore = 0
        document.getElementById("eT1").removeAttribute("class");
      } else if (rollsSoFar[0] === 1 || rollsSoFar[1] === 1) {
        //less bad
        player2.turnScore = 0
        document.getElementById("eT1").removeAttribute("class");
      } else if (rollsSoFar[0] === rollsSoFar[1]) {
        //spooky outcome
        player2.turnScore = sumRoller(rollsSoFar)
        document.getElementById("kG1").removeAttribute("class");
      } else {
        //normal jazz
        player2.turnScore = sumRoller(rollsSoFar)
        document.getElementById("kG1").removeAttribute("class");
        document.getElementById("eT1").removeAttribute("class");
      }
    
    
    
    
    }
    document.getElementById("showRoll").removeAttribute("class")
    console.log("the turn number should still be changed" + turnNumber)
  })
}



function beginGame(event) {
  event.preventDefault()
  document.getElementById("theButton").setAttribute("class", "hidden")
  document.getElementById("twoDiceButton").setAttribute("class", "hidden")
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
  document.querySelector("form#twoDiceGame").addEventListener("submit", begin2Game);
});

function refreshPage(){
  window.location.reload();
} 