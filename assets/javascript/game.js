
$(document).ready(function(){
		// random clicked
    $(".randomNum").on("click", function(){
        var random = Math.floor(Math.random() * 120) + 19;  
        $('#randomNum').html(random);
         console.log(random);
    })
   
})
