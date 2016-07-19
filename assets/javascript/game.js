
$(document).ready(function(){
		// random number at clicked
	function randomNum() {
         var theNumber = Math.floor(Math.random() * 120) + 19;
         $(".randomNum").html(theNumber);
		console.log(theNumber);
};
randomNum();
    //*Adding a function for each gem so they can generate a random number from 1 to 12.
    //*redgem
    $(".redgem").on("click", function(){
        var random = Math.floor(Math.random() * 12) + 1 ;  
        $(".totalNum").html(random);
         console.log(random);
    })
    //*bluegem
    $(".bluegem").on("click", function() {
    	var random = Math.floor(Math.random() * 12) + 1 ;
    	$(".totalNum").html(random);
    	console.log(random);
    })
    //*yellowgem
   $(".yellowgem").on("click", function() {
   		var random = Math.floor(Math.random () * 12) + 1 ;
   		$(".totalNum").html(random);
   		console.log(random);
   })
   //*greengem
   $(".greengem").on("click", function() {
   		var random =Math.floor(Math.random () *12) + 1;
   		$(".totalNum").html(random);
   		console.log(random);
   	})
   
})
