$(window).on("load", function() {
    // page is fully loaded, including all frames, objects and images
    alert("The CV Has been loaded");
});
$(document).ready(function(){
  $("#bt2").click(function(){
    $("#expe").toggle();
  });
});
$(document).ready(function(){
  $("#bt1").click(function(){
    $("#proff").toggle();
  });
});
$(document).ready(function(){
  $("#bt3").click(function(){
    $("#skil").toggle();
  });
});
$(document).ready(function(){
  $("#bt4").click(function(){
    $("#hb").toggle();
  });
});
