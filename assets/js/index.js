$(document).ready(function () {
  var currentCard;
  var answerChoices = [
    "N/A",
    "Θ(1)",
    "Θ(n)",
    "Θ(log (n))",
    "Θ(n log(n))",
    
    "Θ(n^2)",
    "Θ(n(log(n))^2)",
    Ω,
    "Ω(n log(n))",
  ];
  function chooseRandomCard () {
    currentCard = Math.floor(Math.random() * 175);
  }
  function loadCard () {
    $("#name").html(JSON.stringify(arr[currentCard].name));
    $("#category").html(JSON.stringify(arr[currentCard].category));
    $("#performance").html(JSON.stringify(arr[currentCard].performance));
  }
  function checkSelectedAnswer () {

  }
  chooseRandomCard();
  loadCard();
});