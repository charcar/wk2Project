$(document).ready(function() {
  $("form#vacationrec").submit(function(event) {
    // capturing data of age, temp, and distance from form
    var age = parseInt($("input#age").val());
    var temperature = parseInt($("input#temperature").val());
    var distance = parseInt($("input#distance").val());
    // capturing food/transport data from radio and checkbox in form
    var spice = $("spicy#spicy").val();
    var bland = $("bland#bland").val();
    var vacuum = $("vacuum#vacuum").val();

    var car = $("car#car").val();
    var walk = $("walk#walk").val();
    var hippie = $("hippie#hippie").val();

    // var x = document.getElementById("myRadio").value;

    
    // Attempt 1: Organize by distance
    
    // if Distance is -infinity and +25 alert msg (You may try a staycation!)

    // if Distance is 26-500
      // check food, if mild -> John Day
        // if spicy -> Vancouver
    // if distance 501-2600
      // check temp, if 0-55 -> Minnesota
        // if 56-100 -> Nola
    // if distance 2601-4000
      // if temp 65-100 -> Puerto Rico
        // if temp 0-64
          // if car === true -> Iceland
          // else (i.e. foot===true) -> alert("Wait let me get this straight, you want to travel thousands of miles to walk around in the cold?")
      

    // these will go in the algorithm
    $("#JohnDay").show();
    $("#Vancouver").show();
    $("#Nola").show();
    $("#Minnesota").show();
    $("#PuertoRico").show();
    $("#Iceland").show();

    event.preventDefault();

  });
});
