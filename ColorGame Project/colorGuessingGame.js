var numOfSquares = 6;

var colors = [];

var pickedColor;

var squares = document.querySelectorAll(".square");

var h1 = document.querySelector("h1");

var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

	//Mode buttons eventlisteners
	for(var i = 0 ; i < modeButtons.length; i++){
			modeButtons[i].addEventListener("click", function(){

			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");


			this.textContent ==="Easy" ? numOfSquares =3: numOfSquares= 6;
			/*
			if(this.textContent === "Easy"){
				numOfSquares = 3;
			}
			else{
				numOfSquares = 6;

			}*/
			reset();
		});
	}

	for(var i = 0 ;i < squares.length; i++){

		//add click listeners to squares
		squares[i].addEventListener("click", function(){
		
		//grab the color of clicked square
		var clickedColor = this.style.backgroundColor;

			//compare the color to the pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "You win!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else{
				this.style.backgroundColor ="#232323";
				messageDisplay.textContent = "Try Again";
			}

		});
	}

	//reset();
}


function reset(){
	//generate all new colors
	colors = generateRandomColors(numOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;

	messageDisplay.textContent = "";

	resetButton.textContent= "New Colors";

	//change colors of square
	for(var i = 0 ; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "steelblue";
}

var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function(){
	reset();
});

//display gamemessage if won/loss
var messageDisplay = document.querySelector("#message");

function changeColors(colors){
	//loop through all the squares
	for(var i = 0; i < squares.length;i++){
		//change each color to match the picked color
		squares[i].style.backgroundColor = colors;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random to array
	for (var i = 0 ; i < num; i ++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	//"rgb(r, g, b)";
	return "rgb(" + r + ", " +g+ ", " + b+ ")";
}