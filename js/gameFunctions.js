var toggleButton = document.getElementById('toggleButton');
var gameImages = document.getElementsByTagName('img');
var timerInterval = 0;;
var timerDisplay = 0;
var gameCounter = 0;
//Event Listeners
toggleButton.addEventListener("click", toggleStart);
//toggleButton.addEventListener("click", function() {alert("You clicked")});
for(i = 0;i < gameImages.length;i++){
  gameImages[i].addEventListener('click', gameScore)
}

function toggleStart() {
  if(this.getAttribute("data-state") === "start"){
    timerDisplay = 3;
    timerInterval = setInterval(gameRunning, 1000);
  }
  if(this.getAttribute("data-state") === "running"){
    clearInterval(timerInterval);
    this.setAttribute('data-state','start');
    this.innerHTML = "Start";
  }
}
function gameRunning() {
  toggleButton.setAttribute("data-state","running");
  if(timerDisplay === 0){
    clearInterval(timerInterval);
    alert("Score: " + gameCounter);
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
function gameScore() {
  if(this.getAttribute("data-state") === "notClicked") {
    gameCounter++;
    this.setAttribute("data-state", "clicked")
  }
  }

