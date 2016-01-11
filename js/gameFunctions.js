$( document ).ready(function() {

var toggleButton = document.getElementById('toggleButton');
var gameImages = document.getElementsByTagName('img');
var timerInterval = 0;;
var timerDisplay = 0;
var gameCounter = 0;
//Event Listeners


toggleButton.addEventListener("click", toggleStart);


//Button Functionality
function toggleStart() {
  if(this.getAttribute("data-state") === "start"){
    for(i = 0;i < gameImages.length;i++){
      gameImages[i].addEventListener('click', gameScore);
    }
    timerDisplay = 20;
    timerInterval = setInterval(gameRunning, 1000);
  }
  if(this.getAttribute("data-state") === "running"){
    clearInterval(timerInterval);
    this.setAttribute('data-state','start');
    this.innerHTML = "Start";
  }
}
//Timer Display / Game Over Check
function gameRunning() {
  toggleButton.setAttribute("data-state","running");
  if(timerDisplay === 0){
    clearInterval(timerInterval);
    $(".modalinfo").html("You clicked " + gameCounter + " images!");
    $('#endgameModal').modal('show');

    toggleButton.innerHTML = "Start";
    gameCounter = 0;
    for(i = 0;i < gameImages.length;i++){
      gameImages[i].setAttribute("data-state", "notClicked");
    }
  }
  else{
    toggleButton.innerHTML = timerDisplay;
    timerDisplay--;
  }
}
//Image Click Function
function gameScore() {
  if(this.getAttribute("data-state") === "notClicked") {
    gameCounter++;
    this.setAttribute("data-state", "clicked");
    this.setAttribute("id", "bordered");
    document.getElementById("clickcount").innerHTML = gameCounter;
  }
}

});



