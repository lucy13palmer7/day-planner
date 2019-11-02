$(document).ready(function() {
  function hourUpdate() {
    var currentHour = moment().hours();

    $(".time-block").each(function() {
      var blockHour = parseInt(
        $(this)
          .attr("id")
          .split("-")[1]
      );

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdate();

  var interval = setInterval(hourUpdate, 15000);

  $("#hour-9 .occurrence").val(localStorage.getItem("hour-9"));
  $("#hour-10 .occurrence").val(localStorage.getItem("hour-10"));
  $("#hour-11 .occurrence").val(localStorage.getItem("hour-11"));
  $("#hour-12 .occurrence").val(localStorage.getItem("hour-12"));
  $("#hour-1 .occurrence").val(localStorage.getItem("hour-1"));
  $("#hour-2 .occurrence").val(localStorage.getItem("hour-2"));
  $("#hour-3 .occurrence").val(localStorage.getItem("hour-3"));
  $("#hour-4 .occurrence").val(localStorage.getItem("hour-4"));
  $("#hour-5 .occurrence").val(localStorage.getItem("hour-5"));

  function curtime() {
    var now = moment().format("MMMM Do YYYY, h:mm:ss a");
    var hour = moment().format("HH");
    for (var i = 9; i <= 20; i++) {
      var g = "#hour-" + i;
      if (i < hour) {
        $(g).attr("style", "background: gray");
      } else if (i == hour) {
        $(g).attr("style", "background: red");
      } else {
        $(g).attr("style", "background: green");
      }
    }
    $("#currentDay").text(now);
    console.log(now);
  }
  setInterval(curtime, 1000);
});
