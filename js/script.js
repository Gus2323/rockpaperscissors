// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice = $("#input").val();
var computerChoice = Math.random(0, 1);
var winner = "";
var randomNumber = Math.random();

// DOCUMENT READY FUNCTION BELOW

$("button").click(function() {
  $("#userChoice").text($("#input").val());
  $("#computerChoice").text(computerChoice);
});

if(randomNumber > 0){
    computerChoice = "rock";
}
if(randomNumber > .66){
    computerChoice = "scissors";
}
if(randomNumber > 1){
    computerChoice = "rock";
}



