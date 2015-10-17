$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    var lowEnd = 1;
    var highEnd=25
    var arr = [];
    while (lowEnd <= highEnd) {
      arr.push(lowEnd++);
    }
    var endNumber = parseInt($("input#pingpongEndNumber").val()); 
    for (endNumber = 1; endNumber <= num; endNumber++) {
      listItems+="<li>";
      if ((endNumber % 3 === 0) && (endNumber % 5 ===0)) {
        listItems += "<b>ping-pong </b>";
      } else if (endNumber % 3 === 0) {
        listItems += "<b>ping</b>";
      } else if (endNumber % 5 === 0) {
        listItems += "<b>pong</b>";
      } else {
        listItems += endNumber;
      
      listItems += "</li>";


     event.preventDefault();
    