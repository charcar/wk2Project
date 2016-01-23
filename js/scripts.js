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

    // These proved to be unnecessary. I still haven't figured out how to capture data from radio fields,
    // and then how to incorporate that into the script. I know its a matter of syntax and data types,
    // but I've had an unsuccessful time with it, and I've decided to move on.
    // var car = $("car#car").val();
    // var walk = $("walk#walk").val();
    // var hippie = $("hippie#hippie").val();

    // var x = document.getElementById("myRadio").value;

    
    // Main logic: Organized by distance, from there destinations vary based on other factors entered
    
    if (distance < 25) {
      alert("Wny don't you consider just a 'staycation'?");
    }
      // if Distance is 26-500
      // check food, if mild -> John Day
      // if spicy -> Vancouver
      else if (distance > 26 && distance < 500) {
        $("#Vancouver").show();
        if ($("#spicy").attr("checked") === "checked") {
        }
        // if ($("input:radio[name='spicy']").is(":checked")) {
        // $("#Vancouver").show();
     
        else if (age > 40) {
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
          alert("Wait, let me get this straight. You want to travel thousands of miles away from home, just to walk around freezing your buns off? You are one special flower.");
        }
      }
      // last else addresses when distance >4000
    else { 
      alert("Go to New Zealand. Trust me. Just go.")
    } 

    event.preventDefault();

  });
});
