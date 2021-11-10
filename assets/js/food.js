import { onSnake, expandSnake } from './snake.js'



let food = RandomFood()
const EXPANSION_RATE = 1

export function update() {
    if (onSnake(food)) {
      expandSnake(EXPANSION_RATE)
      food = RandomFood()
    }
  }
  
  export function draw(gameBoard) {
    const foodElement = document.createElement("div")
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add("food")
    gameBoard.appendChild(foodElement)
}



function RandomFood() {
    let newFood
    while (newFood == null || onSnake(newFood)) {
      newFood = randomGridPosition()
    }
    return newFood
  }