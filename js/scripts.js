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
    if (distance < 25) {
      alert("Wny don't you consider just a 'staycation'?")
    }
      // if Distance is 26-500
      // check food, if mild -> John Day
      // if spicy -> Vancouver
      else if (distance > 26 && distance < 500) {
        if ($("input:radio[name='spicy']").is(":checked")) {
        $("#Vancouver").show();
    } 
      else {
        $("#JohnDay").show();
    }
    }
      // if distance 501-2600
      // check temp, if 0-55 -> Minnesota
      // if 56-100 -> Nola 
      else if (distance > 500 && distance < 2600 ) {
        if (temperature > -41 && temperature < 56) {
          $("#Minnesota").show();
    } 
        else {
          $("#Nola").show();
    }
    }
      // if distance 2601-4000
      // if temp 65-100 -> Puerto Rico
      // if temp 0-64
      else if (distance > 2600 && distance < 4000) {
        if (temperature > 60 && temperature < 100) {
          $("#PuertoRico").show();
        }
      // if vehicle is checked show Iceland
        else if ($("input:radio[name='car']").is(":checked")) {
          $("#Iceland").show();
        }
        else {
          alert("Wait, let me get this straight. You want to travel thousands of miles away from home, just to walk around freezing your buns off? You are one special flower.")
        }
      }
      // last else addresses when distance >4000
    else { 
      alert("Go to New Zealand. Trust me. Just go.")
    } 
  

    // these will go in the algorithm, and only get shown when the proper conditions are fulfilled, commented out when inserted into code
    // $("#JohnDay").show();
    // $("#Vancouver").show();
    // $("#Nola").show();
    // $("#Minnesota").show();
    // $("#PuertoRico").show();
    // $("#Iceland").show();

    event.preventDefault();

  });
});
