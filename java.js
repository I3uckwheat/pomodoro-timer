$(document).ready(function () {
  var session_length = 25;
  var break_length = 5;
  displayTimeSettings();

  function displayTimeSettings() {
    $("#session").text(session_length);
    $("#break").text(break_length);
  }

  function upDown(value, button) {
    if (button == "session_button") {
      session_length += value;
    } else {
      break_length += value;
    }
    displayTimeSettings();
  }

  function notZero(button) {
    if (button == "session_button") {
      return session_length
    } else {
      return break_length
    }
  }

  $(".counters").click(function () {
    var button = $(this).prop("class").split(" ")[1];
    if ($(this).hasClass("up")) {
      upDown(1, button);
    } else if ($(this).hasClass("down") && notZero(button) > 1) {
      upDown(-1, button);
    }
  });
});

