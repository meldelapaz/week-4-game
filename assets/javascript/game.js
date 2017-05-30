//Estalblished the "targetNumber" (set to a random number between 20 and 50)
  		var targetNumber = 53;
  		//Here we set the "number-to-guess" header to match the "targetNumber". This will later allow us to change the HTML to match the value in the JavaScript.
  		$("#number-to-guess").text(targetNumber);

  		var imageCrystal = $(".crystal-image");

  		// Created a counter to track the user's total.
  		var counter = 0;

  		// Created a code that randomly selects one of these four numbers, but this isn't actually being used because I couldn't figure out how to assign the values for a random crystal.
  		var numberOptions = [10, 5, 3, 7];
  		var increment = numberOptions[Math.round(Math.random())];

      // Created a for loop to create crystals for every numberOption.
      for (var i = 0; i < numberOptions.length; i++) {

        var val2=numberOptions[i];

      }

  		var reset = function() {
  			counter = 0;
        guess = 0;
  		}

  		// On-click event that responds to button clicks of the crystal image
  		$("#val1").on("click", function() {
  			
  			// We'll then increment the counter each time by the randomly selected number.
  			counter += 1;

  			console.log(counter);

  			$("#guess").text(counter);

  			if (counter === targetNumber) {
  				alert("You win!");
  				reset();
  			}

  			else if (counter >= targetNumber) {
  				alert("You lose!");
  				reset();
  			}
});

      // On-click event that responds to button clicks of the second crystal image
      $("#val2").on("click", function() {
        
        // We'll then increment the counter each time by the randomly selected number.
        counter += 10;


        if (counter === targetNumber) {
          alert("You win!");
          reset();
        }

        else if (counter >= targetNumber) {
          alert("You lose!");
          reset();
        }


        console.log(counter);

        $("#guess").text(counter);

  });

      // On-click event that responds to button clicks of the third crystal image
      $("#val3").on("click", function() {
        
        // We'll then increment the counter each time by the randomly selected number.
        counter += 7;

        if (counter === targetNumber) {
          alert("You win!");
          reset();
        }

        else if (counter >= targetNumber) {
          alert("You lose!");
          reset();
        }


        console.log(counter);

        $("#guess").text(counter);
        });

      // On-click event that responds to button clicks of the fourth crystal image
      $("#val4").on("click", function() {
        
        // We'll then increment the counter each time by the randomly selected number.
       
         counter += 5;
         
        if (counter === targetNumber) {
          alert("You win!");
          reset();
        }

        else if (counter >= targetNumber) {
          alert("You lose!");
          reset();
        }


        console.log(counter);

        $("#guess").text(counter);
        });




