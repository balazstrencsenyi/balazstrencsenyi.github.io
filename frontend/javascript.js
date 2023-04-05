$(document).ready(function(){
  $(".button").click(function(){
    $(".button").fadeOut(1000, function(){
      $(".button").hide();
      $("#content").fadeIn(1000).css("display","flex");
    });
  });

});