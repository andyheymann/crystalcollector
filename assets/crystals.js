
var guessThisNumber;
var numbersGuessed;
var gemstoneOne;
var gemstoneTwo;
var gemstoneThree;
var gemstoneFour;
var wins;
var losses;


// initiate game

$(document).ready(function() {


	function initializeGame() {
		guessThisNumber = 0;
		numbersGuessed = 0;
		gemstoneOne = 0;
		gemstoneTwo = 0;
		gemstoneThree = 0;
		gemstoneFour = 0;
		wins = 0;
		losses = 0;
	}
		initializeGame();

		
		//generate random value between 19-120 ...  display guess this value in #guessThis

		guessThisNumber = Math.floor(Math.random() * 102 + 19);
		        $("#Number1").text(guessThisNumber);
		 console.log(guessThisNumber);

		// give crystals a random value between 1-12

		gemstoneOne = Math.floor(Math.random() * 12 + 1);
		gemstoneTwo = Math.floor(Math.random() * 12 + 1);
		gemstoneThree = Math.floor(Math.random() * 12 + 1);
		gemstoneFour = Math.floor(Math.random() * 12 + 1);

		// sets wins and lossed to HTML
		$("#wins").html("Number of wins: " + wins);
		$("#wins").css({"font-family": "helvetica", "font-size" : "16px" , "color" : "green"});


		$("#losses").html("Number of losses: " + losses);
		$("#losses").css({"font-family": "helvetica", "font-size" : "16px" , "color" : "red"});


		// get user clicks for crystals ...	 put value of user click in #totalScoreLabel 

		var guess = function() {
			$("#Number2").text(numbersGuessed);
		};

		$("#gemOne").on("click", function() {
			numbersGuessed = numbersGuessed + gemstoneOne;
			console.log(numbersGuessed, gemstoneOne);
			guess();
			winCheck();
			console.log (numbersGuessed);
		});

		$("#gemTwo").on("click", function() {
			numbersGuessed = numbersGuessed + gemstoneTwo;
			console.log(numbersGuessed, gemstoneTwo);
			guess();
			winCheck();
			console.log (numbersGuessed);
		});

		$("#gemThree").on("click", function() {
			numbersGuessed = numbersGuessed + gemstoneThree;
			console.log(numbersGuessed, gemstoneThree);
			guess();
			winCheck();
			console.log (numbersGuessed);
		});

		$("#gemFour").on("click", function() {
			numbersGuessed = numbersGuessed + gemstoneFour;
			console.log(numbersGuessed, gemstoneFour);
			guess();
			winCheck();
			console.log (numbersGuessed);
		});



		// add the next click to the earlier value


			// if that value goes over the guess this value - alert game lost

function winCheck() {
			if (numbersGuessed > guessThisNumber) {
				alert ("you lost");
				losses++;
				$("#losses").html("Number of losses: " + losses);
				restart();
			}

			// if that value equals the guess this value - alert game won
			if (numbersGuessed == guessThisNumber) {
				alert ("you win!");	
				wins++;
				$("#wins").html("Number of wins: " + wins);
				restart();
			}
}

function restart () {
		guessThisNumber = 0;
		guessThisNumber = Math.floor(Math.random() * 102 + 19);
		$("#Number1").text(guessThisNumber);

		numbersGuessed = 0;
		$("#Number2").text(numbersGuessed);

		// give crystals a random value between 1-12

		gemstoneOne = Math.floor(Math.random() * 12 + 1);
		gemstoneTwo = Math.floor(Math.random() * 12 + 1);
		gemstoneThree = Math.floor(Math.random() * 12 + 1);
		gemstoneFour = Math.floor(Math.random() * 12 + 1);

}



});