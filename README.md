# _Pig Dice_
 
#### By _**Spencer Dennis & Joseph Jackson**_
 
#### _This is a website for two players to play the game Pig Dice._
 
## Technologies Used
 
* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
 
 
## Description
 
_Created a website where you can play the game of Pig Dice. The game consists of two players: Player1 and Player2.
Each player will be prompted to start their turn which initiates a roll from a standard 6 sided die. Your goal is to reach 100 points before the other player can. Each turn you may roll the die as many times as you like, but if you roll a 1 all of the die rolls on that turn are deleted and your points gained that turn will be 0._
 
## Setup/Installation Requirements
 
* _Go to my Repository page on [Git Hub](https://github.com/SpencerJDennis/pig-dice)_
* _Click on the Pig-Dice repository_
* _You can clone the project yourself to your desktop, if you would like to see how it interacts in the webrowser_
* _Once you have the project cloned open up the folder located on your desktop called Pig-Dice._
* _Once you have the folder open click on the index.html file. This should open up your web browser and you can interact with the site._ 
 
## Known Bugs
 
* _No known issues_

## TDD
 
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

## License

_MIT_
 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
 
Copyright (c) _08/25/2022_ _Spencer Dennis & Joseph Jackson_