let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener("keydown", e => {
  switch (e.key) {
    case "ArrowUp":
    case "W":
    case "w":
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: -1 }
      break
    case "ArrowDown":
    case "S":
    case "s":
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 }
      break
    case "ArrowLeft":
    case "A":
    case "a":
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      break
    case "ArrowRight":
    case "D":
    case "d":
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      break
  }
})



const buttons = document.getElementsByClassName("input");

for (let button of buttons) {
    button.addEventListener("click", function() {
        console.log(buttons)
        switch(button.dataset.dir) {
            case "up":
                if(lastInputDirection.y !== 0) break
                inputDirection = { x: 0, y: -1} 
                break
            case "down":
                if(lastInputDirection.y !== 0) break
                inputDirection = { x: 0, y: 1} 
                break
            case "left":
                if(lastInputDirection.x !== 0) break
                inputDirection = { x: -1, y: 0}
                break
            case "right":
                if(lastInputDirection.x !== 0) break
                inputDirection = { x: 1, y: 0}
                break
        }
    })
}



export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}