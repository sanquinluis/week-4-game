
$(document).ready(function(){
	var wins = 0;
	var losses = 0;
	var yourTotal = 0;
	var crystals = {redgem:{name:"red",value: 0}, bluegem:{name:"blue", value: 0},yellowgem:{name:"yellow",value: 0}, greengem:{name:"green",value:0}
	}
	// var random = function(min,max){
	//  return Math.floor(Math.random()* (max-min+1)) +min;
	// }
	    //generates a randomnum from 19 to 120
	var winningNum = Math.floor(Math.random() * (120 - 19 +1)) + 19;
		$(".randomNum").html (winningNum);
		$(".randomNum").css("fontSize", "15px");

		//on click function for redGem
		$(".redGem").on("click", function() {
			if (crystals.redgem.value == 0) {
				crystals.redgem.value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
			}
			console.log("redgem value = " + crystals.redgem.value);
			totalNum(crystals.redgem.value);
		})
		//on click function for blueGem generates a num from 1 to 12
		$(".blueGem").on("click", function() {
	 		if (crystals.bluegem.value == 0) {
				crystals.bluegem.value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
			}
			console.log("bluegem value = " + crystals.bluegem.value);
			totalNum(crystals.bluegem.value);
	 	})
	 	//on click function for yellowGem generates a num from 1 to 12
	 	$(".yellowGem").on("click", function() {
	 		if (crystals.yellowgem.value == 0) {
				crystals.yellowgem.value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
			}
			console.log("yellowgem value = " + crystals.yellowgem.value);
			totalNum(crystals.yellowgem.value);
		})
		//on click function for greenGem generates a num from 1 to 12
		$(".greenGem").on("click", function() {
	 		if (crystals.greengem.value == 0) {
				crystals.greengem.value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
			}
			console.log("greengem value = " + crystals.greengem.value);
			totalNum(crystals.greengem.value);
	 	});
	 			// Reset the game... 	
			function clear() {
        		$( ".randomNum").empty();
        		$( ".redgem bluegem yellowgem greengem" ).empty();
        		
      }
      		function reset() {
      			var wins = 0; 
      				losses = 0; 
      				yourTotal = 0; 
      				winningNum = 0; 
      				
      }
	 	function totalNum (valor) {
	 		yourTotal += valor;
	 		console.log("Your total = " + yourTotal);

	 		$(".totalNum").html(yourTotal);
	 		if (yourTotal == winningNum){
	 			wins ++;
	 			reset();
	 			console.log("wins" + wins);
	 			console.log("You Win!!");
	 			$(".wins").html("Wins " + wins);	
	 			$(".yousomething").html("You Win!");
	 			clear();
	 		
	 		}
	 		else if (yourTotal > winningNum){
	 			losses ++;
	 			reset();
	 			console.log("looses" + losses);
	 			console.log("You Looses!!");
	 			$(".losses").html("Losses " + losses);
	 			$(".yousomething").html("You lose!!");
	 			clear();
	 			
	 			
	 			
	}

	 	};

 })	
