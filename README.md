Describe beginGame()
test: The button will start the game
code: addEventListener("submit", beginGame)
expected output: beginGame()

Describe diceRoll()
test: the dice will ouput a random number 1-6
code: let roll = diceRoll()
expected output: 1 or 2 or 3 or 4 or 5 or 6

describe turnTotal()
test: the player's score for that turn will add the next die roll
code: let total += diceRoll()
expected output: total = total + diceRoll()

describe turnEnd()
test: the player's turn will end, their score for that turn will be added to their total
code: total = 8
turnEnd()
p1Score += total
turnOrder()

test: the player can keep going if they desire
code: onclick(diceRoll())
expected output: turnTotal()

describe turnOrder()
test: if a turn ends, the counter goes up and the next player's turn is decided
code: turnNumber += 1
if (turnNumber % 1) {
  runTurn(p1)  
} else {
  runTurn(p2)
}

describe runTurn()
test: runs the turn for the player
code: diceRoll()
turnTotal()
turnEnd()


describe zeroCheck()
test: if the player rolls a 1, their turn's score will be 0
code: if (diceRoll() === 1) {
  total = 0
  turnEnd()
}
expected output: 0

describe ScoreLimit()
test: if a player reaches 100 points, the game ends with them being the victor
code: if (p1Score >= 100) {
  gameOver(p1)
}
expected output: gameOver(p1)

describe gameOver()
test: the game will say who the winner is
code: gameover(p1)
expected output: "Player 1 is the winner!"