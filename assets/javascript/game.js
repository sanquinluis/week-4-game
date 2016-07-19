
$(document).ready(function(){
	 var totalNum = 0;
	 var redgem = 0;
	 var bluegem = 0;
	 var yellowgem = 0;
	 var greengem = 0;
		// random number wen clicked
	function randomNum() {
         var theNumber = Math.floor(Math.random() * 120) + 19;
         $(".randomNum").html(theNumber);
		console.log(theNumber);
};
		randomNum();
    //*Adding a function for each gem so they can generate a random number from 1 to 12.
    $(".redgem, .bluegem, .yellowgem, .greengem").on("click", function(){
        var random = Math.floor(Math.random() * 12) + 1 ;  
        $(".totalNum").html(random);
         console.log(random);
  
  	$(".totalNum").html (function (){
   		totalNum = random + redgem + bluegem + yellowgem + greengem;
   		console.log(totalNum);
   		})
   })
   
})
