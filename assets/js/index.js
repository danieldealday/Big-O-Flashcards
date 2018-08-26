$(document).ready(function () {
  var randomIndex;
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

  function loadCard () {
    randomIndex = Math.floor(Math.random() * 175);
    $("#name").text(arr[randomIndex].name);
    $("#category").text(
      arr[randomIndex].category + " - "
      + arr[randomIndex].performance
    );
  }

  function modalToggle () {
    
  };

  async function checkSelectedAnswer () {
    var selectedAnswer = this.value;
    console.log(selectedAnswer);
    console.log(arr[randomIndex].bounds);
    if (selectedAnswer === arr[randomIndex].bounds) {
      alert("Yay!");
      loadCard();
    }
    alert("Aw!");
    await modalToggle();
    loadCard();
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

  loadCard();
  loadAnswers();
  
});