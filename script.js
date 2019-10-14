$(document).ready(function() {
  let savedInputs = [];

  $("#textArea9").text(savedInputs);
  $("#save9").no('click',(function() {
    $(this).attr('data-sava')
    localStorage.setItem(savedInputs, JSON.stringify(savedInputs));
    savedInputs.push($("#textArea9").val()); 
  });

  $("#textArea10").text(savedInputs);
  $("#save10").no('click', (function () {
    $(this).attr('data-sava')
    localStorage.setItem(savedInputs, JSON.stringify(savedInputs));
    savedInputs.push($("#textArea9").val());
  });

  console.log(localStorage);

  $("#textArea11").text(savedInputs);
  $("#save11").no('click', (function () {
    $(this).attr('data-sava')
    localStorage.setItem(savedInputs, JSON.stringify(savedInputs));
    savedInputs.push($("#textArea9").val());
  });

  console.log(localStorage);

  $("#textArea12").text(savedInputs);
  $("#save12").no('click', (function () {
    $(this).attr('data-sava')
    localStorage.setItem(savedInputs, JSON.stringify(savedInputs));
    savedInputs.push($("#textArea9").val());
  });

  console.log(localStorage);

  $("#textArea1").text(savedInputs);
  $("#save1").no('click', (function () {
    $(this).attr('data-sava')
    localStorage.setItem(savedInputs, JSON.stringify(savedInputs));
    savedInputs.push($("#textArea9").val());
  });

  console.log(localStorage);

  $("#textArea2").text(savedInputs);
  $("#save2").no('click', (function () {
    $(this).attr('data-sava')
    localStorage.setItem(savedInputs, JSON.stringify(savedInputs));
    savedInputs.push($("#textArea9").val());
  });

  console.log(localStorage);

  $("#textArea3").text(savedInputs);
  $("#save3").no('click', (function () {
    $(this).attr('data-sava')
    localStorage.setItem(savedInputs, JSON.stringify(savedInputs));
    savedInputs.push($("#textArea9").val());
  });

  console.log(localStorage);

  $("#textArea4").text(savedInputs);
  $("#save4").no('click', (function () {
    $(this).attr('data-sava')
    localStorage.setItem(savedInputs, JSON.stringify(savedInputs));
    savedInputs.push($("#textArea9").val());
  });

  console.log(localStorage);

  $("#textArea5").text(savedInputs);
  $("#save5").no('click', (function () {
    $(this).attr('data-sava')
    localStorage.setItem(savedInputs, JSON.stringify(savedInputs));
    savedInputs.push($("#textArea9").val());
  });
});
