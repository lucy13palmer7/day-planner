$(document).ready(function() {
  console.log("jquery is loaded");
  $("#textArea9").text(localStorage.getItem("textArea9"));
  $("#save9").on("click", function() {
    var userInput = $("#textArea9").val();
    console.log(userInput);
    localStorage.setItem("textArea9", userInput);
  });

  $("#textArea10").text(localStorage.getItem("textArea10"));
  $("#save10").on("click", function() {
    var userInput = $("#textArea10").val();
    console.log(userInput);
    localStorage.setItem("textArea10", userInput);
  });

  $("#textArea11").text(localStorage.getItem("textArea11"));
  $("#save11").on("click", function() {
    var userInput = $("#textArea11").val();
    console.log(userInput);
    localStorage.setItem("textArea11", userInput);
  });

  $("#textArea12").text(localStorage.getItem("textArea12"));
  $("#save12").on("click", function() {
    var userInput = $("#textArea12").val();
    console.log(userInput);
    localStorage.setItem("textArea12", userInput);
  });

  $("#textArea1").text(localStorage.getItem("textArea1"));
  $("#save1").on("click", function() {
    var userInput = $("#textArea1").val();
    console.log(userInput);
    localStorage.setItem("textArea1", userInput);
  });

  $("#textArea2").text(localStorage.getItem("textArea2"));
  $("#save2").on("click", function() {
    var userInput = $("#textArea2").val();
    console.log(userInput);
    localStorage.setItem("textArea2", userInput);
  });

  $("#textArea3").text(localStorage.getItem("textArea3"));
  $("#save3").on("click", function() {
    var userInput = $("#textArea3").val();
    console.log(userInput);
    localStorage.setItem("textArea3", userInput);
  });

  $("#textArea4").text(localStorage.getItem("textArea4"));
  $("#save4").on("click", function() {
    var userInput = $("#textArea4").val();
    console.log(userInput);
    localStorage.setItem("textArea4", userInput);
  });

  $("#textArea5").text(localStorage.getItem("textArea5"));
  $("#save5").on("click", function() {
    var userInput = $("#textArea5").val();
    console.log(userInput);
    localStorage.setItem("textArea5", userInput);
  });
});
