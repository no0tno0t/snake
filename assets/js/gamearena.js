let lastRenderTime = 0
const SNAKE_SPEED = 1

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


    console.log('Render')
    lastRenderTime = currentTime


    update() // update loop all the logic for the game, ex.: move the snake, 
    draw()   // draw the food, draw the snake at the screen etc

}
   
window.requestAnimationFrame(main)

function update() {

}

function draw() {
    
}
