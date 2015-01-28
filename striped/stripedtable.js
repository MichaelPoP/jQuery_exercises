

// 1. If the user has submitted a valid color, use a css selector along with the val() and css() methods to 

//capture the input value and change the background color for the even rows.


// 2. Make sure that the first row of the table (the row with `th` tags) does not change color! 
//Your selector should only target `td` tags.

// Remember the proper way to build a table (using symantically correct tags like thead, tbody and tfoot)
// 2. Use odd/even or n-th child selectors


// ### jQuery methods you may be using 

// 1. css()
// 2. on()
// 3. val()

$(document).ready(function(){
  
// if ($("input[type = text").val().length !== 0) {
// }
    $("form").on("submit", function(e) {

        $("tr:nth-child(2n)").css("background-color", $("input[type=text]").val());
         e.preventDefault();
        });
        
    
  
});


