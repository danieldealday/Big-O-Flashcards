$(document).ready(function () {
  var currentCard;
  var answerChoices = [
    "N/A",
    "Θ(1)",
    "Θ(n)",
    "Θ(log (n))",
    "Θ(n log(n))",
    "O(1)",
    "O(n)",
    "O(n+k)",
    "O(nk)",
    "O(log(n))",
    "O(n log(n))",
    "O(n log(n)^2)",
    "O(n^2)",
    "Ω(n)",
    "Ω(n+k)",
    "Ω(nk)",
    "Ω(n^2)",
    "Ω(n log(n))",
  ];
  function chooseRandomCard () {
    currentCard = Math.floor(Math.random() * 175);
  }
  function loadCard () {
    $("#name").text(arr[currentCard].name);
    $("#category").text(
      arr[currentCard].category + " - "
      + arr[currentCard].performance
    );
  }
  function checkSelectedAnswer () {

  }
  chooseRandomCard();
  loadCard();

  
});