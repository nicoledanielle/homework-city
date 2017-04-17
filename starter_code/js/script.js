$(document).ready(function(){

	$("#submit-btn").click(changeBackground);

// initiate Change Background Function 

	function changeBackground (){
		event.preventDefault()
	
// Create the variable for city ( user input)

		var city = $("#city-type").val();
	
// create an if statement for when the user types in a variation of New York City to display NYC background

		if (city=="NYC" || city=="New York" || city=="New York City") {
			$("body").removeClass("current").addClass("nyc")
		}

// Create else if statement for when user types in a variation of San Francisco to display SF background

		else if (city=="SF" || city== "San Francisco" || city=="Bay Area") {
			$("body").removeClass("current").addClass("sf")
		}


// Create else if statement for when user types in a variation of Los Angeles to display LA background

		else if (city=="LA" || city=="Los Angeles" || city=="LAX") {
			$("body").removeClass("current").addClass("la")
		}


// Create else if statement for when user types in a variation of Austin to display Austin background

		else if (city=="ATX" || city=="Austin") {
			$("body").removeClass("current").addClass("austin")
		}


// Create else if statement for when user types in a variation of Sydney to display Sydney background

		else if (city=="SYD" || city=="Sydney") {
			$("body").removeClass("current").addClass("sydney")
		}

// Create alert for when no matches are found, it will add a popup notification

		else {
			alert("No Image Found!");
		}
	}

});