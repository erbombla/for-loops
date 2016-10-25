$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    var stopNum = parseInt($("input#stopNum").val());
    var myNum = parseInt($("input#myNum").val());
    var total = 0

    for (var startNum = 0; total < stopNum; startNum +- 0) {
      total += myNum;
      console.log(total)
    }
    event.preventDefault();
  });
});
