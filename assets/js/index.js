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
    "O(k)",
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
  function loadAnswers () {
    answerChoices.forEach(function (item) {
      var button = $("<button>").attr({
        type: "button",
        class: "btn btn-outline-secondary btn-block btn-lg",
        value: item
      }).text(item).click(checkSelectedAnswer);
      $("#answers").append(button);
    })
  }
  function checkSelectedAnswer () {
    var selectedAnswer = this.value;
    console.log(selectedAnswer);
    console.log(arr[currentCard].bounds);
    if (selectedAnswer === arr[currentCard].bounds) {
      alert("Yay!");
      loadCard();
    }
    alert("Aw!");
    loadCard();
  }
  chooseRandomCard();
  loadCard();
  loadAnswers();

  
});