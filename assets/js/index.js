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

  function loadFlashCard () {
    randomIndex = Math.floor(Math.random() * 175);
    $("#name").text(arr[randomIndex].name);
    $("#category").text(
      arr[randomIndex].category + " - "
      + arr[randomIndex].performance
    );
    var bounds = $("<h1>").text(arr[randomIndex].bounds);
    $("#answers").append(bounds);
  }

  loadFlashCard();

  $("#next").click(function(e) {
    e.preventDefault();
    console.log("CLICKED");
    $("#answers").empty();
    loadFlashCard();
  })
  
});