$(document).ready(function () {
  var session_length = 25;
  var break_length = 5;

  $("#session").text(session_length);
  $("#break").text(break_length);

  $(".session_up").click(function () {
    session_length += 1;
    $("#session").text(session_length);
  });

  $(".session_down").click(function () {
    session_length -= 1;
    $("#session").text(session_length);
  });

  $(".break_up").click(function () {
    break_length += 1;
    $("#break").text(break_length);
  });

  $(".break_down").click(function () {
    break_length -= 1;
    $("#break").text(break_length);
  });



});