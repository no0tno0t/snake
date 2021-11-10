// html communication code

let tablebutton = document.getElementsByClassName('settingsbutton');
for (let i = 0; i < tablebutton.length; i++) {
    tablebutton[i].addEventListener('click', displaytable);
}
// END html communication code

document.addEventListener("DOMContentLoaded", function () {
    // set initial variables


    // event listeners for game inputs

    let settingsForm = document.getElementById("form");
    settingsForm.addEventListener('submit', handleSettingsSubmit);

    // set initial variables that are dynamic
    
    if (!localStorage.getItem('Bg')) {
        Bg = "#f5f5f5";
    } else {
        Bg = localStorage.getItem('Bg');
        document.getElementById('Bg').value = Bg;
        document.body.style.backgroundColor = Bg;
    }
    /**
     * Handles user input changes and restarts that game
     */
    function handleSettingsSubmit() {
        event.preventDefault();
        Bg = settingsForm.elements.Bg.value;
        localStorage.setItem('Bg', Bg); // saves the input data so if the page is reloaded it starts with same values
        document.body.style.backgroundColor = Bg;
        document.getElementById('settings-table').style.display = "none";
        resetGame = true;
    }



}); //end DOM loaded function

/**
 * Displays modal on screen when button clicked
 */
function displaytable() {
    if (this.getAttribute("id") === "settingsid") {
        document.getElementById('settings-table').style.display = 'block';
    }
}
// close eller exit knappen är kopplad till denna kod eller är denna kod
document.getElementById('settings-exit').onclick = function() {
    document.getElementById('settings-table').style.display = "none";
  };

  /**
   * Clears modal
   * 
   * Det här är för reset to default options-knappen 
   * 
   * 
   */
window.onclick = function(event) {
    if (event.target == document.getElementById('settings-table')) {
        document.getElementById('settings-table').style.display = "none";
    }
  };

 