$(document).ready(function(){

  var generate = function() {
    //var n = $( "input:checked" ).length
    var random_number=Math.floor(Math.random()*10)
    console.log("number: "+random_number)
  }

  //EventHandler for clicking #generate button
  $("#generate").click( generate );


  $( "input[type=checkbox]" ).on( "click", generate );

});
