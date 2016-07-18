$(document).ready(function(){

    // random clicked
    $("#randomNum").on("click", function(){

        // Generate a random number
        var random = Math.floor(Math.random() * 100) + 1;  

        // Then dump the random number into our randomNumber div. 
        $('#randomNum').html(random);
    })

})
