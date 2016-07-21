
$(document).ready(function(){
	var wins = 0;
	var losses = 0;
	var yourTotal = 0;
	var crystals = {redgem:{name:"red",value: 0}, bluegem:{name:"blue", value: 0},yellowgem:{name:"yellow",value: 0}, greengem:{name:"green",value:0}
	}
	var random = function(min,max){
	 return Math.floor(Math.random()* (max-min+1)) +min;
	}
		//restart and reset "the game"
	 var restart = function (){
		var wins = 0; var losses = 0; yourTotal = 0;
		$(".totalScore").html(yourTotal);
		$(".wins").html(wins);
		$(".losses").html(losses);
		var winningNum = Math.floor(Math.random() * (120 - 19 +1)) + 19;
		$(".randomNum").on ("click", winningNum);
		$(".randomNum").css("fontSize", "15px");
		$(".winningNum").html(totalNum);
	}
	    //generates a randomnum from 120 to 19
	var winningNum = Math.floor(Math.random() * (120 - 19 +1)) + 19;
		$(".randomNum").html (winningNum);
		$(".randomNum").css("fontSize", "15px");
		$(".redGem").on("click", function() {
			//
			if (crystals.redgem.value == 0) {
				crystals.redgem.value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
			}
			console.log("redgem value = " + crystals.redgem.value);
			totalNum(crystals.redgem.value);
		})
		//on click function for blueGem
		$(".blueGem").on("click", function() {
	 		if (crystals.bluegem.value == 0) {
				crystals.bluegem.value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
			}
			console.log("bluegem value = " + crystals.bluegem.value);
			totalNum(crystals.bluegem.value);
	 	})
	 	//on click function for yellowGem
	 	$(".yellowGem").on("click", function() {
	 		if (crystals.yellowgem.value == 0) {
				crystals.yellowgem.value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
			}
			console.log("yellowgem value = " + crystals.yellowgem.value);
			totalNum(crystals.yellowgem.value);
		})
		//on click function for greenGem
		$(".greenGem").on("click", function() {
	 		if (crystals.greengem.value == 0) {
				crystals.greengem.value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
			}
			console.log("greengem value = " + crystals.greengem.value);
			totalNum(crystals.greengem.value);
	 	});
	 	function totalNum (valor) {
	 		yourTotal += valor;
	 		console.log("Your total = " + yourTotal);

	 		$(".totalNum").html(yourTotal);
	 		if (yourTotal == winningNum){
	 			wins ++;
	 			console.log("wins" + wins);
	 			console.log("You Win!!");
	 			$(".winslosses").html("Wins " + wins);	
	 			//$(".winslosses").html("You Win!")
	 		}
	 		else if (yourTotal > winningNum){
	 			losses ++;
	 			console.log("looses" + losses);
	 			console.log("You Looses!!");
	 			$(".winslosses").html("Losses " + losses);
	 			$(".winslosses").html("You lose!!");
	 			$(".winningNum").html(winningNum);
	 		}

	 	}

 })	
