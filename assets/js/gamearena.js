import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake.js"
import { update as updateFood, draw as drawFood } from "./food.js"

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById("snake-board")

function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
          window.location.reload()
        }
        return
      }

      
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


    lastRenderTime = currentTime


    update() // update loop all the logic for the game, ex.: move the snake, 
    draw()   // draw the food, draw the snake at the screen etc

}
   
window.requestAnimationFrame(main)

function update() {
    updateFood()
    updateSnake()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
  }
