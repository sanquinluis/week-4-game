
$(document).ready(function(){
	var totalGems = 0;
	var wins = 0;
	var losses = 0;
	var yourTotal = 0;
	var redgem = 0;
	var crystals = {redgem:{name:"red",value: 0}, bluegem:{name:"blue", value: 0},yellowgem:{name:"yellow",value: 0}, greengem:{name:"green",value:0}
	}
	var random = function(min,max){
	 return Math.floor(Math.random()* (max-min+1)) +min;
	}

	var winningNum = Math.floor(Math.random() * (120 - 19 +1)) + 19;
		$(".randomNum").html (winningNum);
		$(".randomNum").css("fontSize", "25px");
		$(".redGem").on("click", function() {
			//if we are at the begginig of the game the red
			if (crystals.redgem.value == 0) {
				crystals.redgem.value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
			}
			console.log("redgem value = " + crystals.redgem.value);
			totalNum(crystals.redgem.value);
		})
		$(".blueGem").on("click", function() {
	 		if (crystals.bluegem.value == 0) {
				crystals.bluegem.value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
			}
			console.log("bluegem value = " + crystals.bluegem.value);
			totalNum(crystals.bluegem.value);
	 	})
	 	$(".yellowGem").on("click", function() {
	 		if (crystals.yellowgem.value == 0) {
				crystals.yellowgem.value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
			}
			console.log("yellowgem value = " + crystals.yellowgem.value);
			totalNum(crystals.yellowgem.value);
		})
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
	 			console.log("you Win");
	 		}
	 		else if (yourTotal > winningNum)
	 		{
	 			console.log("you looses");
	 		}

	 	}

 })	

    










// 

    //*Adding a function for each gem so they can generate a random number from 1 to 12.
   //  $(".redgem, .bluegem, .yellowgem, .greengem").on("click", function(){
   //      var random = Math.floor(Math.random() * 12) + 1 ;  
   //      $(".totalNum").html(random);
   //       console.log(random);
  
  	// $(".totalNum").html (function (){
   // 		totalNum = random += redgem += bluegem += yellowgem += greengem;
   // 		console.log(totalNum);
   // 		})
   // })
   
