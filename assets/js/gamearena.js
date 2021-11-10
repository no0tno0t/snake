import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake.js"
import { update as updateFood, draw as drawFood } from "./food.js"

let lastRenderTime = 0
const gameBoard = document.getElementById("snake-board")

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


    lastRenderTime = currentTime


    update() // update loop all the logic for the game, ex.: move the snake, 
    draw()   // draw the food, draw the snake at the screen etc

}
   
window.requestAnimationFrame(main)

function update() {
    updateSnake()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
