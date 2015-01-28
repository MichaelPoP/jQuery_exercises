
// 1. Create a form with an input for a password
//  (make sure the input type is not "text")
// 2. As the user types, check to see the length of 
// the password and show/hide an error message depending 
// on the length.
// 3. When the user submits the form, make sure that a
//  password exists and that it is longer than 6 characters.
// 4. If the user has successfully submitted the form, 
// fade out the form and fadeIn a message saying
//  "Thank you for signing up!"



$(document).ready(function(){
	$("form").on("submit", function(f) {
	 	
	 });
	$("#stuff").text().on("onkeypress", function(e) {
       $('body').append("<div>password too short</div>");
	});



  // if ($("input").first().val().length >= 6) {
	 // 		$("div").show(300);
	 // 	} else {
	 // 		$("div").hide(300);
	 // 	}

});